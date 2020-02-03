(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/add-cust/add-cust.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/add-cust/add-cust.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-nav></app-sub-nav>\n<div class=\"container-fluid\" id=\"addCustomer\">\n<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Add Customer</h1>\n  <p class=\"lead\">You can add a new customer into our database to avail the service that we are providing.</p>\n</div>\n\n<form #userForm=\"ngForm\" (ngSubmit)=\"createUser()\" novalidate>\n  {{userForm.form.valid}}\n  <div ngModelGroup=\"name\">\n  <div class=\"form-row\">\n    \n    <div class=\"form-group col-md-6\">\n\n      <label for=\"first\">First Name</label>\n      <input type=\"text\" required  #first=\"ngModel\" [class.is-invalid]=\"first.invalid && first.touched\" class=\"form-control\" \n      [(ngModel)]=\"userModel.first\" name=\"first\">\n      <small class=\"text-danger\" [class.d-none]=\"first.valid || first.untouched\">First Name is required</small>\n    </div>\n\n\n    <div class=\"form-group col-md-6\">\n      <label for=\"last\">Last Name</label>\n      <input type=\"text\" required #last=\"ngModel\" [class.is-invalid]=\"last.invalid && last.touched\" class=\"form-control\"  \n      [(ngModel)]=\"userModel.last\" name=\"last\" >\n      <small class=\"text-danger\" [class.d-none]=\"last.valid || last.untouched\">Last Name is required</small>\n    </div>\n  </div>\n  </div>\n\n\n  <div class=\"form-row\">\n\n    <div class=\"form-group col-md-6\">\n      <label for=\"birthday\">Date of Birth</label>\n      <input type=\"text\" #birthday=\"ngModel\" pattern=\"^(?:0[1-9]|[12]\\d|3[01])([\\/.-])(?:0[1-9]|1[12])\\1(?:19|20)\\d\\d$\" [class.is-invalid]=\"birthday.invalid && birthday.touched\"\n      class=\"form-control\" [(ngModel)]=\"userModel.birthday\" name=\"birthday\" placeholder=\"Enter your date of birth\" >\n      <div *ngIf=\"birthday.errors && (birthday.invalid || birthday.touched)\">\n        <small class=\"text-danger\" *ngIf=\"birthday.errors.required\">Birthday is required </small>\n        <small class=\"text-danger\" *ngIf=\"birthday.errors.pattern\">Birthday must contain only numeric and dash(-)</small>\n      </div>\n    </div>\n\n\n    <div class=\"form-group col-md-6\">\n      <label for=\"gender\">Gender</label>\n      <input type=\"text\" #gender=\"ngModel\" maximum=1 pattern=\"[MF]\" [class.is-invalid]=\"gender.invalid || gender.touched\"\n      class=\"form-control\" [(ngModel)]=\"userModel.gender\" name=\"gender\" placeholder=\"Enter your gender\" >\n      <div *ngIf=\"gender.errors && (gender.invalid || gender.touched)\">\n          <small class=\"text-danger\" *ngIf=\"gender.errors.maximum\">Cannot have more than one character</small>\n          <small class=\"text-danger\" *ngIf=\"gender.errors.pattern\">Only uppercase character are allowed</small>\n      </div>\n    </div>\n  </div>\n\n  <button [disabled]=\"userForm.form.invalid || topicHasError \" type=\"submit\" class=\"btn btn-primary\" >Add Customer</button>\n</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/cust-sub-nav/cust-sub-nav.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/cust-sub-nav/cust-sub-nav.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n<p> customer's detail sub nav component</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/delete-cust/delete-cust.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/delete-cust/delete-cust.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-nav></app-sub-nav>\n<div class=\"container-fluid\" id=\"deleteCustomer\">\n  <div class=\"jumbotron\">\n  <h1 class=\"display-4\">Delete a Customer</h1>\n  <p class=\"lead\">You can delete any pre exiting customer from our database.</p>\n</div>\n  <form>\n  <div class= \"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter the first name\"> \n    </div>\n  \n  \n    <div class=\"form-group col-md-6\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter the last name\"> \n    </div>\n  </div>\n  \n  <div class= \"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"userName\">User Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"userName\" placeholder=\"Enter the user name\"> \n    </div>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Delete User</button>\n  </form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <nav class=\"navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark\">\n          <a class=\"navbar-brand\" href=\"#\"></a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n            <ul class=\"navbar-nav mr-auto\">\n              <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">@Webtrekk Company (2019-2020) <span class=\"sr-only\">(current)</span></a>\n              </li>\n              \n            </ul>\n          </div>\n        </nav>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"/overview\">Overview</a>\n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/list/list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/list/list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-sub-nav></app-sub-nav>-->\n<div class=\"container\" id=\"list\">\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <ul class=\"list-group\">\n       <li class=\"list-group-item\" *ngFor=\"let user of users\">\n       <app-user [user]='user'></app-user>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-md-8\"><router-outlet></router-outlet>\n    <!-- <div class=\"jumbotron jumbotron-fluid\">\n      <h1 class=\"display-4\">List of all Customers</h1>\n    </div>\n      -->\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/overview/overview.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/overview/overview.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sub-nav></app-sub-nav>\n<div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light\">\n      <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\n        <h1 class=\"display-4 font-weight-normal\">Customer Data Center</h1>\n        <p class=\"lead font-weight-normal\">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>\n        <a class=\"btn btn-outline-secondary\" routerLink=\"/list\">All Users</a>\n      </div>\n      <div class=\"product-device box-shadow d-none d-md-block\"></div>\n      <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/placeholder/placeholder.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/placeholder/placeholder.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"display-4\">Hello, world!</h1>\n    <p class=\"lead\">This is the list of customers present in our system, click on them to find details.</p>\n    <hr class=\"my-4\">\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n    </p>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/sub-nav/sub-nav.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/sub-nav/sub-nav.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light rounded fixed-top-2\">\n     \n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item col-md-4 \">\n            <a class=\"nav-link\" routerLink=\"/list\">List <!-- <span class=\"sr-only\">(current)</span> --></a>\n          </li>\n          <li class=\"nav-item col-md-4\">\n            <a class=\"nav-link\" routerLink=\"/create\">Create</a>\n          </li>\n\n          <li class=\"nav-item col-md-4 \">\n            <a class=\"nav-link\" routerLink=\"/delete\">Delete</a>\n          </li>\n          \n        </ul>\n      \n    </nav>\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/update-cust/update-cust.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/update-cust/update-cust.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" id=\"addCustomer\">\n<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Update Customer</h1>\n  <p class=\"lead\">You can add a new customer into our database to avail the service that we are providing.</p>\n</div>\n{{user.name}}\n<form #userForm=\"ngForm\" (ngSubmit)=\"updateUser()\" novalidate>\n  \n  <div ngModelGroup=\"name\">\n  <div class=\"form-row\">\n    \n    <div class=\"form-group col-md-6\">\n\n      <label for=\"first\">First Name</label>\n      <input type=\"text\" required  #first=\"ngModel\" [class.is-invalid]=\"first.invalid && first.touched\" class=\"form-control\" \n      [(ngModel)]=\"userModel.first\" name=\"first\" placeholder=\"Enter name \">\n      <small class=\"text-danger\" [class.d-none]=\"first.valid || first.untouched\">First Name is required</small>\n    </div>\n\n\n    <div class=\"form-group col-md-6\">\n      <label for=\"last\">Last Name</label>\n      <input type=\"text\" required #last=\"ngModel\" [class.is-invalid]=\"last.invalid && last.touched\" class=\"form-control\"  \n      [(ngModel)]=\"userModel.last\" name=\"last\" >\n      <small class=\"text-danger\" [class.d-none]=\"last.valid || last.untouched\">Last Name is required</small>\n    </div>\n  </div>\n  </div>\n\n\n  <div class=\"form-row\">\n\n    <div class=\"form-group col-md-6\">\n      <label for=\"birthday\">Date of Birth</label>\n      <input type=\"text\" #birthday=\"ngModel\" pattern=\"^(?:0[1-9]|[12]\\d|3[01])([\\/.-])(?:0[1-9]|1[12])\\1(?:19|20)\\d\\d$\" [class.is-invalid]=\"birthday.invalid && birthday.touched\"\n      class=\"form-control\" [(ngModel)]=\"userModel.birthday\" name=\"birthday\" placeholder=\"Enter your date of birth\" >\n      <div *ngIf=\"birthday.errors && (birthday.invalid || birthday.touched)\">\n        <small class=\"text-danger\" *ngIf=\"birthday.errors.required\">Birthday is required </small>\n        <small class=\"text-danger\" *ngIf=\"birthday.errors.pattern\">Birthday must contain only numeric and dash(-)</small>\n      </div>\n    </div>\n\n\n    <div class=\"form-group col-md-6\">\n      <label for=\"gender\">Gender</label>\n      <input type=\"text\" #gender=\"ngModel\" maximum=1 pattern=\"[MF]\" [class.is-invalid]=\"gender.invalid || gender.touched\"\n      class=\"form-control\" [(ngModel)]=\"userModel.gender\" name=\"gender\" placeholder=\"Enter your gender\" >\n      <div *ngIf=\"gender.errors && (gender.invalid || gender.touched)\">\n          <small class=\"text-danger\" *ngIf=\"gender.errors.maximum\">Cannot have more than one character</small>\n          <small class=\"text-danger\" *ngIf=\"gender.errors.pattern\">Only uppercase character are allowed</small>\n      </div>\n    </div>\n  </div>\n\n  <button [disabled]=\"userForm.form.invalid || topicHasError \" type=\"submit\" class=\"btn btn-primary\" >Update Customer</button>\n</form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/user-details/user-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/user-details/user-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n    <h1 class=\"display-3\">{{user.name.firstName+' '+user.name.lastName}}</h1>  \n      <p>Email ID: {{user.email}}</p>\n      <p>Gender : {{user.gender}}</p> \n        \n          <button  class=\"btn btn-secondary btn-lg\" ><a class=\"nav-link\"  style=\"text-decoration : none;\">Update User</a></button>\n        \n          &nbsp;&nbsp;&nbsp;\n          <button  class=\"btn btn-secondary btn-lg\" (click)=\"deleteUser()\">Delete User</button>\n      \n    </div>\n</div>\n<!-- <app-update-cust [customer]=\"user\"></app-update-cust> -->\n<!-- <router-outlet></router-outlet>     -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a id=\"user\" routerLink='./{{user.customerID}}'><p> {{user.name.firstName+' '+ user.name.lastName}}</p>\n<p>{{user.birthday}}</p></a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/Class/User.ts":
/*!*******************************!*\
  !*** ./src/app/Class/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(customerID, firstName, lastName, birthday, gender) {
        this.customerID = customerID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
    }
    User.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return User;
}());



/***/ }),

/***/ "./src/app/Components/add-cust/add-cust.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/add-cust/add-cust.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addCustomer{\n    margin-top:40px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hZGQtY3VzdC9hZGQtY3VzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYWRkLWN1c3QvYWRkLWN1c3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGRDdXN0b21lcntcbiAgICBtYXJnaW4tdG9wOjQwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/add-cust/add-cust.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/add-cust/add-cust.component.ts ***!
  \***********************************************************/
/*! exports provided: AddCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustComponent", function() { return AddCustComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Service/user.service */ "./src/app/Service/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Class_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Class/User */ "./src/app/Class/User.ts");




var AddCustComponent = /** @class */ (function () {
    function AddCustComponent(userService) {
        this.userService = userService;
        this.userModel = new _Class_User__WEBPACK_IMPORTED_MODULE_3__["User"](1, '', '', '', '');
    }
    AddCustComponent.prototype.ngOnInit = function () {
    };
    AddCustComponent.prototype.createUser = function () {
        this.user = { 'name': { 'firstName': this.userModel.firstName, 'lastName': this.userModel.lastName }, 'birthday': this.userModel.birthday, 'gender': this.userModel.gender };
        console.log(this.user);
        this.user.customerID = null;
        this.userService.createUser(this.user).subscribe(function (user) { return alert("A new user was created with an id: " + user.customerID); }, function (err) { return alert("Got an error as : " + err); }, function () { return alert("Creation of user completed"); });
    };
    AddCustComponent.ctorParameters = function () { return [
        { type: _Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    AddCustComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-cust',
            template: __webpack_require__(/*! raw-loader!./add-cust.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/add-cust/add-cust.component.html"),
            styles: [__webpack_require__(/*! ./add-cust.component.css */ "./src/app/Components/add-cust/add-cust.component.css")]
        })
    ], AddCustComponent);
    return AddCustComponent;
}());



/***/ }),

/***/ "./src/app/Components/cust-sub-nav/cust-sub-nav.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/cust-sub-nav/cust-sub-nav.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY3VzdC1zdWItbmF2L2N1c3Qtc3ViLW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/cust-sub-nav/cust-sub-nav.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/cust-sub-nav/cust-sub-nav.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustSubNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustSubNavComponent", function() { return CustSubNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustSubNavComponent = /** @class */ (function () {
    function CustSubNavComponent() {
    }
    CustSubNavComponent.prototype.ngOnInit = function () {
    };
    CustSubNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cust-sub-nav',
            template: __webpack_require__(/*! raw-loader!./cust-sub-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/cust-sub-nav/cust-sub-nav.component.html"),
            styles: [__webpack_require__(/*! ./cust-sub-nav.component.css */ "./src/app/Components/cust-sub-nav/cust-sub-nav.component.css")]
        })
    ], CustSubNavComponent);
    return CustSubNavComponent;
}());



/***/ }),

/***/ "./src/app/Components/delete-cust/delete-cust.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/delete-cust/delete-cust.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#deleteCustomer\n{\n  margin-top:40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kZWxldGUtY3VzdC9kZWxldGUtY3VzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2RlbGV0ZS1jdXN0L2RlbGV0ZS1jdXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVsZXRlQ3VzdG9tZXJcbntcbiAgbWFyZ2luLXRvcDo0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/delete-cust/delete-cust.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/delete-cust/delete-cust.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeleteCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustComponent", function() { return DeleteCustComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteCustComponent = /** @class */ (function () {
    function DeleteCustComponent() {
    }
    DeleteCustComponent.prototype.ngOnInit = function () {
    };
    DeleteCustComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-cust',
            template: __webpack_require__(/*! raw-loader!./delete-cust.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/delete-cust/delete-cust.component.html"),
            styles: [__webpack_require__(/*! ./delete-cust.component.css */ "./src/app/Components/delete-cust/delete-cust.component.css")]
        })
    ], DeleteCustComponent);
    return DeleteCustComponent;
}());



/***/ }),

/***/ "./src/app/Components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer\n{\n  margin-top:80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlclxue1xuICBtYXJnaW4tdG9wOjgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/Components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#list{\n    margin-top:80px;\n  }\n  \n  .list-group-item{\n    color: #FFF;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpc3R7XG4gICAgbWFyZ2luLXRvcDo4MHB4O1xuICB9XG4gIFxuICAubGlzdC1ncm91cC1pdGVte1xuICAgIGNvbG9yOiAjRkZGO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/Components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Service/user.service */ "./src/app/Service/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ListComponent = /** @class */ (function () {
    function ListComponent(userService) {
        this.userService = userService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.users = this.userService.getUsers();
        this.userService.getUsersViaRest().subscribe(function (users) { return _this.users = users; });
        console.log(JSON.stringify(this.users));
    };
    ListComponent.ctorParameters = function () { return [
        { type: _Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/Components/list/list.component.css")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/Components/overview/overview.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/overview/overview.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/overview/overview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/overview/overview.component.ts ***!
  \***********************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! raw-loader!./overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.css */ "./src/app/Components/overview/overview.component.css")]
        })
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/placeholder/placeholder.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/placeholder/placeholder.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/placeholder/placeholder.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/placeholder/placeholder.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlaceholderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderComponent", function() { return PlaceholderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PlaceholderComponent = /** @class */ (function () {
    function PlaceholderComponent() {
    }
    PlaceholderComponent.prototype.ngOnInit = function () {
    };
    PlaceholderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-placeholder',
            template: __webpack_require__(/*! raw-loader!./placeholder.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/placeholder/placeholder.component.html"),
            styles: [__webpack_require__(/*! ./placeholder.component.css */ "./src/app/Components/placeholder/placeholder.component.css")]
        })
    ], PlaceholderComponent);
    return PlaceholderComponent;
}());



/***/ }),

/***/ "./src/app/Components/sub-nav/sub-nav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Components/sub-nav/sub-nav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-top-2 {\n    margin-top: 56px;\n}\n\n.nav-item{\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zdWItbmF2L3N1Yi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3N1Yi1uYXYvc3ViLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLXRvcC0yIHtcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xufVxuXG4ubmF2LWl0ZW17XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/sub-nav/sub-nav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/sub-nav/sub-nav.component.ts ***!
  \*********************************************************/
/*! exports provided: SubNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavComponent", function() { return SubNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubNavComponent = /** @class */ (function () {
    function SubNavComponent() {
    }
    SubNavComponent.prototype.ngOnInit = function () {
    };
    SubNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-nav',
            template: __webpack_require__(/*! raw-loader!./sub-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/sub-nav/sub-nav.component.html"),
            styles: [__webpack_require__(/*! ./sub-nav.component.css */ "./src/app/Components/sub-nav/sub-nav.component.css")]
        })
    ], SubNavComponent);
    return SubNavComponent;
}());



/***/ }),

/***/ "./src/app/Components/update-cust/update-cust.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/update-cust/update-cust.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#update-cust{\n    margin-top:86px;\n  }\n  \n  .navMenu{\n    text-decoration:none;\n    color: black;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy91cGRhdGUtY3VzdC91cGRhdGUtY3VzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3VwZGF0ZS1jdXN0L3VwZGF0ZS1jdXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdXBkYXRlLWN1c3R7XG4gICAgbWFyZ2luLXRvcDo4NnB4O1xuICB9XG4gIFxuICAubmF2TWVudXtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/update-cust/update-cust.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/update-cust/update-cust.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateCustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustComponent", function() { return UpdateCustComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Service/user.service */ "./src/app/Service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpdateCustComponent = /** @class */ (function () {
    function UpdateCustComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    UpdateCustComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userService.getUserByIdViaRest(+params["id"]).subscribe(function (user) { return _this.user = user; }, function (err) { return console.log('Got an error while fetching the user details: ', err); });
        });
    };
    UpdateCustComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UpdateCustComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-cust',
            template: __webpack_require__(/*! raw-loader!./update-cust.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/update-cust/update-cust.component.html"),
            styles: [__webpack_require__(/*! ./update-cust.component.css */ "./src/app/Components/update-cust/update-cust.component.css")]
        })
    ], UpdateCustComponent);
    return UpdateCustComponent;
}());



/***/ }),

/***/ "./src/app/Components/user-details/user-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/user-details/user-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    color: #FFF;\n  }\n  a:hover {\n     color: rgb(209, 209, 230)\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7RUFDQTtLQUNHO0VBQ0giLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG4gIGE6aG92ZXIge1xuICAgICBjb2xvcjogcmdiKDIwOSwgMjA5LCAyMzApXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Service/user.service */ "./src/app/Service/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userService.getUserByIdViaRest(+params["id"]).subscribe(function (user) { return _this.user = user; }, function (err) { return console.log('Got an error while fetching the user details: ', err); });
        });
        console.log(JSON.stringify(this.user));
    };
    UserDetailsComponent.prototype.createUser = function () {
        this.user.customerID = null;
        this.userService.createUser(this.user).subscribe(function (user) { return alert("A new user was created with an id: " + user.customerID); }, function (err) { return alert("Got an error as : " + err); }, function () { return alert("Creation of user completed"); });
    };
    UserDetailsComponent.prototype.updateUser = function () {
        this.userService.updateUser(this.user).subscribe(function (user) { return alert("A new user was updated"); }, function (err) { return alert("Got an error as : " + err); }, function () { return alert("Updation of user completed"); });
    };
    UserDetailsComponent.prototype.deleteUser = function () {
        this.userService.deleteUser(this.user.customerID).subscribe(function (user) { return alert("A new user was created with an id: " + user.customerID); }, function (err) { return alert("Got an error as : " + err); }, function () { return alert("Deletion of user completed"); });
    };
    UserDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
    ]; };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/Components/user-details/user-details.component.css")]
        })
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#user{\n    color:black;\n    text-decoration:none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzZXJ7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/Components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UserComponent.prototype, "user", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/Components/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/Modules/app-router/app-router.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Modules/app-router/app-router.module.ts ***!
  \*********************************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Components/list/list.component */ "./src/app/Components/list/list.component.ts");
/* harmony import */ var _Components_add_cust_add_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Components/add-cust/add-cust.component */ "./src/app/Components/add-cust/add-cust.component.ts");
/* harmony import */ var _Components_update_cust_update_cust_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Components/update-cust/update-cust.component */ "./src/app/Components/update-cust/update-cust.component.ts");
/* harmony import */ var _Components_delete_cust_delete_cust_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../Components/delete-cust/delete-cust.component */ "./src/app/Components/delete-cust/delete-cust.component.ts");
/* harmony import */ var _Components_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../Components/overview/overview.component */ "./src/app/Components/overview/overview.component.ts");
/* harmony import */ var _Components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../Components/user-details/user-details.component */ "./src/app/Components/user-details/user-details.component.ts");
/* harmony import */ var _Components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../Components/placeholder/placeholder.component */ "./src/app/Components/placeholder/placeholder.component.ts");










var appRoutes = [
    { path: 'overview', component: _Components_overview_overview_component__WEBPACK_IMPORTED_MODULE_7__["OverviewComponent"] },
    { path: 'list', component: _Components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], children: [
            { path: '', component: _Components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_9__["PlaceholderComponent"] }
        ] },
    { path: 'list/:id', component: _Components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"] },
    { path: 'update/:id', component: _Components_update_cust_update_cust_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCustComponent"] },
    { path: 'create', component: _Components_add_cust_add_cust_component__WEBPACK_IMPORTED_MODULE_4__["AddCustComponent"] },
    { path: 'delete', component: _Components_delete_cust_delete_cust_component__WEBPACK_IMPORTED_MODULE_6__["DeleteCustComponent"] },
    { path: '**', redirectTo: '/overview', pathMatch: 'full' }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/Service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        //private _rootUrl:string  = 'https://jsonplaceholder.typicode.com/users';
        //private _rootUrl:string ="http://localhost:3000/users";
        this._rootUrl = "https://webtrekk-frontend.herokuapp.com/users";
    }
    //Fetching all the users
    UserService.prototype.getUsersViaRest = function () {
        return this.http.get(this._rootUrl, {});
    };
    UserService.prototype.getUserById = function (customerID) {
        return this._users.filter(function (user) { return user.customerID === customerID; })[0];
    };
    UserService.prototype.getUserByIdViaRest = function (customerID) {
        return this.http.get(this._rootUrl + "/" + customerID);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this._rootUrl, user);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.patch(this._rootUrl + "/" + user.customerID, user);
    };
    UserService.prototype.deleteUser = function (customerID) {
        return this.http.delete(this._rootUrl + "/" + customerID);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-family: Lato;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'assignment-webtrekk';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service/user.service */ "./src/app/Service/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Modules_app_router_app_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/app-router/app-router.module */ "./src/app/Modules/app-router/app-router.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_add_cust_add_cust_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/add-cust/add-cust.component */ "./src/app/Components/add-cust/add-cust.component.ts");
/* harmony import */ var _Components_cust_sub_nav_cust_sub_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/cust-sub-nav/cust-sub-nav.component */ "./src/app/Components/cust-sub-nav/cust-sub-nav.component.ts");
/* harmony import */ var _Components_delete_cust_delete_cust_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/delete-cust/delete-cust.component */ "./src/app/Components/delete-cust/delete-cust.component.ts");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _Components_list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/list/list.component */ "./src/app/Components/list/list.component.ts");
/* harmony import */ var _Components_overview_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/overview/overview.component */ "./src/app/Components/overview/overview.component.ts");
/* harmony import */ var _Components_sub_nav_sub_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/sub-nav/sub-nav.component */ "./src/app/Components/sub-nav/sub-nav.component.ts");
/* harmony import */ var _Components_update_cust_update_cust_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/update-cust/update-cust.component */ "./src/app/Components/update-cust/update-cust.component.ts");
/* harmony import */ var _Components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/user-details/user-details.component */ "./src/app/Components/user-details/user-details.component.ts");
/* harmony import */ var _Components_user_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/user/user.component */ "./src/app/Components/user/user.component.ts");
/* harmony import */ var _Components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/placeholder/placeholder.component */ "./src/app/Components/placeholder/placeholder.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _Components_add_cust_add_cust_component__WEBPACK_IMPORTED_MODULE_8__["AddCustComponent"],
                _Components_cust_sub_nav_cust_sub_nav_component__WEBPACK_IMPORTED_MODULE_9__["CustSubNavComponent"],
                _Components_delete_cust_delete_cust_component__WEBPACK_IMPORTED_MODULE_10__["DeleteCustComponent"],
                _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _Components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _Components_list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"],
                _Components_overview_overview_component__WEBPACK_IMPORTED_MODULE_14__["OverviewComponent"],
                _Components_sub_nav_sub_nav_component__WEBPACK_IMPORTED_MODULE_15__["SubNavComponent"],
                _Components_update_cust_update_cust_component__WEBPACK_IMPORTED_MODULE_16__["UpdateCustComponent"],
                _Components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_17__["UserDetailsComponent"],
                _Components_user_user_component__WEBPACK_IMPORTED_MODULE_18__["UserComponent"],
                _Components_placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_19__["PlaceholderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _Modules_app_router_app_router_module__WEBPACK_IMPORTED_MODULE_6__["AppRouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Code/Webtrekk Projects/assignment-webtrekk/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map