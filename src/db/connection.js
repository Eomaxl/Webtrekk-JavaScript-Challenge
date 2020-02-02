 const mongoose = require('mongoose');
 const connectionUri = 'mongodb+srv://dbUser:Welcome1Github@cluster0-c8z1j.mongodb.net/test?retryWrites=true&w=majority';
 const dbUrl = process.env.MONGODB_URI || connectionUri;


 
  mongoose.connect(dbUrl,{useCreateIndex: true, useNewUrlParser: true}).then(() => console.log('DB Connected!'))
  .catch((err) => {
  console.log(`DB Connection Error: ${err.message}`);
  }); 
      
//    var db = mongoose.connection;
//    db.on('error',console.error.bind(console,'MongoDB connection Error'));

 

 
