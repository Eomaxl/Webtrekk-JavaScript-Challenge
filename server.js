const express = require('express');
const path = require('path');
require('./src/db/connection');
const userRouter = require('./src/Router/user');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

// cors origin URL - Allow inbound traffic from origin
corsOptions = {
    origin: "Your FrontEnd Website URL",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));

//router
app.use(userRouter)


// set public resoures folder
app.use(express.static(__dirname + '/public'));

// set your first route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT,()=>{
    var Port = server.address().port;
    console.log('Server is up on the port '+ Port);
})
