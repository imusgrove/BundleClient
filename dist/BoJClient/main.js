(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app-routing.module.ts":
/*!***********************************!*\
  !*** ./src/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_auth_donor_login_donor_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/auth/donor-login/donor-login.component */ "./src/app/auth/donor-login/donor-login.component.ts");
/* harmony import */ var _app_auth_donor_signup_donor_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/auth/donor-signup/donor-signup.component */ "./src/app/auth/donor-signup/donor-signup.component.ts");
/* harmony import */ var _app_auth_auth_routing_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/auth/auth-routing/auth-routing.module */ "./src/app/auth/auth-routing/auth-routing.module.ts");
/* harmony import */ var _app_donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/donor-dashboard/donor-dashboard.component */ "./src/app/donor-dashboard/donor-dashboard.component.ts");
/* harmony import */ var _app_ui_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/ui/about/about.component */ "./src/app/ui/about/about.component.ts");
/* harmony import */ var _app_ui_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/ui/contact/contact.component */ "./src/app/ui/contact/contact.component.ts");
/* harmony import */ var _app_donor_dashboard_donor_profile_donor_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/donor-dashboard/donor-profile/donor-profile.component */ "./src/app/donor-dashboard/donor-profile/donor-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { UserLoginComponent } from './app/auth/user-login/user-login.component';
// import { UserSignupComponent } from './app/auth/user-signup/user-signup.component';






var routes = [
    { path: '', redirectTo: 'donorlogin', pathMatch: 'full' },
    // {path: 'userlogin', component: UserLoginComponent},
    { path: 'donorlogin', component: _app_auth_donor_login_donor_login_component__WEBPACK_IMPORTED_MODULE_2__["DonorLoginComponent"] },
    // {path: 'usersignup', component: UserSignupComponent},
    { path: 'donorsignup', component: _app_auth_donor_signup_donor_signup_component__WEBPACK_IMPORTED_MODULE_3__["DonorSignupComponent"] },
    { path: 'donordashboard', component: _app_donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DonorDashboardComponent"] },
    { path: 'about', component: _app_ui_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'contact', component: _app_ui_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    // {path: 'userdashboard', component: UserDashboardComponent}, 
    { path: 'profile', component: _app_donor_dashboard_donor_profile_donor_profile_component__WEBPACK_IMPORTED_MODULE_8__["DonorProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _app_auth_auth_routing_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Sunshine's Bundles of Joy";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_donor_login_donor_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/donor-login/donor-login.component */ "./src/app/auth/donor-login/donor-login.component.ts");
/* harmony import */ var _auth_donor_signup_donor_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/donor-signup/donor-signup.component */ "./src/app/auth/donor-signup/donor-signup.component.ts");
/* harmony import */ var _donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donor-dashboard/donor-dashboard.component */ "./src/app/donor-dashboard/donor-dashboard.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-routing.module */ "./src/app-routing.module.ts");
/* harmony import */ var _donor_dashboard_donor_profile_donor_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./donor-dashboard/donor-profile/donor-profile.component */ "./src/app/donor-dashboard/donor-profile/donor-profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./donorAuth/donorAuth.service */ "./src/app/donorAuth/donorAuth.service.ts");
/* harmony import */ var _auth_donor_signup_donor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/donor-signup/donor.service */ "./src/app/auth/donor-signup/donor.service.ts");
/* harmony import */ var _auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/authGuard/auth.guard */ "./src/app/auth/authGuard/auth.guard.ts");
/* harmony import */ var _donor_dashboard_donor_profile_donor_profile_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./donor-dashboard/donor-profile/donor-profile.service */ "./src/app/donor-dashboard/donor-profile/donor-profile.service.ts");
/* harmony import */ var _donor_dashboard_donor_dashboard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./donor-dashboard/donor-dashboard.service */ "./src/app/donor-dashboard/donor-dashboard.service.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _user_dashboard_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-dashboard/user-profile/user-profile.component */ "./src/app/user-dashboard/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { UserLoginComponent } from './auth/user-login/user-login.component';
// import { UserSignupComponent } from './auth/user-signup/user-signup.component';




// import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
                _auth_donor_login_donor_login_component__WEBPACK_IMPORTED_MODULE_4__["DonorLoginComponent"],
                _auth_donor_signup_donor_signup_component__WEBPACK_IMPORTED_MODULE_5__["DonorSignupComponent"],
                // UserLoginComponent,
                // UserSignupComponent,
                _donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DonorDashboardComponent"],
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["UserDashboardComponent"],
                _donor_dashboard_donor_profile_donor_profile_component__WEBPACK_IMPORTED_MODULE_9__["DonorProfileComponent"],
                _user_dashboard_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_21__["UserProfileComponent"],
                _donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DonationEditDialogue"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                // LayoutModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_20__["UiModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_15__["DonorAuthService"], _auth_donor_signup_donor_service__WEBPACK_IMPORTED_MODULE_16__["DonorService"],
                _auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _donor_dashboard_donor_profile_donor_profile_service__WEBPACK_IMPORTED_MODULE_18__["DonorProfileService"], _donor_dashboard_donor_dashboard_service__WEBPACK_IMPORTED_MODULE_19__["DonorDashboardService"], _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_15__["DonorAuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DonationEditDialogue"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing/auth-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/auth-routing/auth-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _donor_login_donor_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../donor-login/donor-login.component */ "./src/app/auth/donor-login/donor-login.component.ts");
/* harmony import */ var _donor_signup_donor_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../donor-signup/donor-signup.component */ "./src/app/auth/donor-signup/donor-signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { UserLoginComponent } from '../user-login/user-login.component';
// import { UserSignupComponent } from '../user-signup/user-signup.component';


var routes = [
    // { path: 'userlogin', component: UserLoginComponent},
    // { path: 'usersignup', component: UserSignupComponent},
    { path: 'donorsignup', component: _donor_signup_donor_signup_component__WEBPACK_IMPORTED_MODULE_3__["DonorSignupComponent"] },
    { path: 'donorlogin', component: _donor_login_donor_login_component__WEBPACK_IMPORTED_MODULE_2__["DonorLoginComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-donor-login></app-donor-login>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = /** @class */ (function () {
    function AuthComponent(authService) {
        this.authService = authService;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.onSubmit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app-routing.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {UserLoginComponent} from './user-login/user-login.component';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"];
    }
    AuthService.prototype.login = function (donor_username, donor_password) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["APIURL"] + "/donor/login", { donor_username: donor_username, donor_password: donor_password })
            .subscribe(function (res) {
            localStorage.setItem("token", res.sessionToken);
        }, function (err) { return console.log(err); });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]])
    ], AuthService);
    return AuthService;
}());

// const httpOptions = {
//   headers: new HttpHeaders({ 
//     'Content-Type': 'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
// private authUrl = 'https://localhost3000/user/api/createuser';
// authUrl = 'https://localhost3000/user/api/createuser'
// private  handleError: HandleError;
// constructor(
//   private http: HttpClient,
//  httpErrorHandler: HttpErrorHandler 
// ) {
//   thishandleError = httpErrorHandler.createHandleError('AuthService');
// }
// userSignUp(userSignUp: any[]) {
//   return this.http.post('http://localhost3000/user/api/createuser', userSignUp)
// }
// addHero (hero: Hero): Observable<Hero> {
//   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
//     .pipe(
//       catchError(this.handleError('addHero', hero))
//     );
// }
/** GET heroes from the server */
// getHeroes (): Observable<UserSignup[]> {
//   return this.http.get<UserSignup[]>(this.authUrl)
//     .pipe(
//       catchError(this.handleError('getAuth', []))
//     );
// }
/** POST: add a new hero to the database */
// addUser (userSignUp: UserSignup): Observable<UserSignup> {
//   return this.http.post<UserSignup>(this.authUrl, userSignUp, httpOptions)
//     .pipe(
//       catchError(this.handleError('addUser', userSignUp))
//     );
// }
/** DELETE: delete the hero from the server */
// deleteHero (id: number): Observable<{}> {
//   const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
//   return this.http.delete(url, httpOptions)
//     .pipe(
//       catchError(this.handleError('deleteHero'))
//     );
// }
/** PUT: update the hero on the server. Returns the updated hero upon success. */
//   updateHero (hero: Hero): Observable<Hero> {
//     httpOptions.headers =
//       httpOptions.headers.set('Authorization', 'my-new-auth-token');
//     return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
//       .pipe(
//         catchError(this.handleError('updateHero', hero))
//       );
//   }
// }
//  } 


/***/ }),

/***/ "./src/app/auth/authGuard/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/authGuard/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/donorlogin'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/donor-login/donor-login.component.css":
/*!************************************************************!*\
  !*** ./src/app/auth/donor-login/donor-login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .donorCard{\r\n    height: 50%;\r\n    width: 30%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 5%;\r\n    background-color: #lightblue;\r\n    border-radius: 50px;\r\n    text-align: center;\r\n}  \r\n.donorButtons{\r\n    margin-bottom: 5%;\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-align-last: right;\r\n}  \r\n.loginBtn {\r\n    color: black;\r\n    background-color: #rgb(224, 184, 213);\r\n}  \r\n.userBtn {\r\n    color: black;\r\n    background-color: #rgb(224, 184, 213);\r\n}  \r\nbutton:hover {\r\n    color: black;\r\n    background-color: white;\r\n    border: 1px solid #rgb(224, 184, 213);\r\n}  \r\n.donorButtons .submit {\r\n    float: left;\r\n}  \r\n.noaccount a {\r\n    text-decoration: none;\r\n    color: #191919;\r\n}  \r\n.noaccount a:hover {\r\n    text-decoration: underline;\r\n}  \r\n/* @font-face {\r\n    font-family: 'Pacifico';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: local('Pacifico'), url('http://themes.googleusercontent.com/font?kit=fKnfV28XkldRW297cFLeqfesZW2xOQ-xsNqO47m55DA') format('truetype');\r\n }\r\n .donorCard{\r\n    height: 50%;\r\n    width: 30%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 5%;\r\n    background-color: #lightblue;\r\n    border-radius: 50px;\r\n    text-align: center;\r\n} \r\n body {\r\n    text-align: center;\r\n }\r\n \r\n .donorButtons {\r\n    display: inline-block;\r\n    margin-top: 20%;\r\n    -webkit-border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    border-radius: 8px;\r\n    -webkit-box-shadow:    0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, .35);\r\n    -moz-box-shadow: 0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, .35);\r\n    box-shadow: 0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, .35);\r\n    -webkit-transition: -webkit-box-shadow .1s ease-in-out;\r\n    -moz-transition: -moz-box-shadow .1s ease-in-out;\r\n    -o-transition: -o-box-shadow .1s ease-in-out;\r\n    transition: box-shadow .1s ease-in-out;\r\n    font-size: 50px;\r\n    color: #fff;\r\n }\r\n \r\n .donorButtons  span {\r\n    display: inline-block;\r\n    padding: 20px 30px;\r\n    background-color: #ec528d;\r\n    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(hsla(338, 90%, 80%, .8)), to(hsla(338, 90%, 70%, .2)));\r\n    background-image: -webkit-linear-gradient(hsla(338, 90%, 80%, .8), hsla(338, 90%, 70%, .2));\r\n    background-image: -moz-linear-gradient(hsla(338, 90%, 80%, .8), hsla(338, 90%, 70%, .2));\r\n    background-image: -o-linear-gradient(hsla(338, 90%, 80%, .8), hsla(338, 90%, 70%, .2));\r\n    -webkit-border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    border-radius: 8px;\r\n    -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);\r\n    -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);\r\n    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);\r\n    font-family: 'Pacifico', Arial, sans-serif;\r\n    line-height: 1;\r\n    text-shadow: 0 -1px 1px rgba(175, 49, 95, .7);\r\n    -webkit-transition: background-color .2s ease-in-out, -webkit-transform .1s ease-in-out;\r\n    -moz-transition: background-color .2s ease-in-out, -moz-transform .1s ease-in-out;\r\n    -o-transition: background-color .2s ease-in-out, -o-transform .1s ease-in-out;\r\n    transition: background-color .2s ease-in-out, transform .1s ease-in-out;\r\n }\r\n \r\n .donorButtons :hover span {\r\n    background-color: #ec6a9c;\r\n    text-shadow: 0 -1px 1px rgba(175, 49, 95, .9), 0 0 5px rgba(255, 255, 255, .8);\r\n }\r\n \r\n .donorButtons :active, #button:focus {\r\n    -webkit-box-shadow:    0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, .3);\r\n    -moz-box-shadow: 0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, .3);\r\n    box-shadow:    0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, .3);\r\n }\r\n \r\n .donorButtons :active span {\r\n    -webkit-transform: translate(0, 4px);\r\n    -moz-transform: translate(0, 4px);\r\n    -o-transform: translate(0, 4px);\r\n    transform: translate(0, 4px);\r\n } */"

/***/ }),

/***/ "./src/app/auth/donor-login/donor-login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/auth/donor-login/donor-login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"donorCard\">\r\n    <h2>Donor Login</h2>\r\n    <hr color=\"#rgb(224, 184, 213)\" />\r\n    <form class=\"Form\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" [(ngModel)]=\"donor_username\" name=\"username\" placeholder=\"Username\"/>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <mat-form-field>\r\n                <input matInput type=\"password\" [(ngModel)]=\"donor_password\" name=\"password\" placeholder=\"Password\"/>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button mat-raised-button class=\"loginBtn\" type=\"submit\">Login</button>\r\n            <!-- <button mat-raised-button class=\"userBtn\" routerLink='/userlogin'>I'm a User</button> -->\r\n        </div>\r\n        <div class=\"noaccount\">\r\n            <a routerLink=\"/donorsignup\">Don't have an account?</a>\r\n        </div>\r\n    </form>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/auth/donor-login/donor-login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/donor-login/donor-login.component.ts ***!
  \***********************************************************/
/*! exports provided: DonorLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorLoginComponent", function() { return DonorLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../donorAuth/donorAuth.service */ "./src/app/donorAuth/donorAuth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonorLoginComponent = /** @class */ (function () {
    function DonorLoginComponent(donorAuthService, router) {
        this.donorAuthService = donorAuthService;
        this.router = router;
    }
    DonorLoginComponent.prototype.ngOnInit = function () { };
    DonorLoginComponent.prototype.onSubmit = function () {
        var loginInfo = { donor: {
                donor_username: this.donor_username,
                donor_password: this.donor_password
            } };
        this.donorAuthService.login(loginInfo);
        this.router.navigate(["/donordashboard"]);
    };
    DonorLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donor-login',
            template: __webpack_require__(/*! ./donor-login.component.html */ "./src/app/auth/donor-login/donor-login.component.html"),
            styles: [__webpack_require__(/*! ./donor-login.component.css */ "./src/app/auth/donor-login/donor-login.component.css")]
        }),
        __metadata("design:paramtypes", [_donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_2__["DonorAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DonorLoginComponent);
    return DonorLoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/donor-signup/donor-signup.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/donor-signup/donor-signup.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardForSignup{\r\n    height: 50%;\r\n    width: 30%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 5%;\r\n    background-color: #lightblue;\r\n    border-radius: 50px;\r\n    text-align: center;\r\n}\r\n.cardForSignup a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n.cardForSignup a:hover {\r\n    text-decoration: underline;\r\n}\r\nbutton{\r\n    background-color: #rgb(224, 184, 213);\r\n    color: black;\r\n}\r\nbutton:hover{\r\n    color: black;\r\n    background-color: white;\r\n    border: 1px solid #rgb(224, 184, 213);\r\n}"

/***/ }),

/***/ "./src/app/auth/donor-signup/donor-signup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/donor-signup/donor-signup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card class=\"cardForSignup\">\r\n      <h2>Donor Signup</h2>\r\n      <form [formGroup]=\"registerForm\">\r\n      <hr color=\"#rgb(224, 184, 213)\" />\r\n      <div class=\"registerForm\">\r\n          <mat-form-field>\r\n          <input matInput placeholder=\"First Name\"  type=\"text\" formControlName=\"donor_fname\" class=\"registerForm\" />\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- last name -->\r\n      <div class=\"registerForm\">\r\n          <mat-form-field>\r\n          <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"donor_lname\" class=\"registerForm\" />\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- address -->\r\n      <div class=\"registerForm\">\r\n      <mat-form-field class=\"donor-signup-component\">\r\n        <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"donor_username\" class=\"registerForm\"  >\r\n      </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"registerForm\">\r\n        <mat-form-field class=\"donor-signup-component\">\r\n          <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"donor_email\" class=\"registerForm\"  />\r\n        </mat-form-field>\r\n      </div>\r\n    \r\n      <div class=\"registerForm\">\r\n        <mat-form-field class=\"donor-signup-component\">\r\n          <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"donor_password\" class=\"registerForm\" />\r\n        </mat-form-field>\r\n      </div>  \r\n      <div class=\"registerForm\"> \r\n      <mat-form-field class=\"donor-signup-component\">\r\n        <input matInput placeholder=\"Address\" type=\"text\" formControlName=\"donor_address\" class=\"registerForm\">\r\n        <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\r\n        </mat-error> -->\r\n      </mat-form-field>\r\n</div>\r\n<!-- city -->\r\n<div class=\"registerForm\">\r\n<mat-form-field class=\"donor-signup-component\">\r\n  <input matInput placeholder=\"City\" type=\"text\" formControlName=\"donor_city\" class=\"registerForm\">\r\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\r\n        </mat-error> -->\r\n</mat-form-field>\r\n</div>\r\n<!-- state -->\r\n<div class=\"registerForm\">\r\n<mat-form-field class=\"donor-signup-component\">\r\n  <input matInput placeholder=\"State\" type=\"text\" formControlName=\"donor_state\" class=\"registerForm\">\r\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\r\n        </mat-error> -->\r\n</mat-form-field>\r\n</div>\r\n<!-- zip code -->\r\n<div class=\"registerForm\">\r\n<mat-form-field class=\"donor-signup-component\">\r\n  <input matInput placeholder=\"Zip Code\" type=\"text\" formControlName=\"donor_zipCode\" class=\"registerForm\">\r\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\r\n        </mat-error> -->\r\n</mat-form-field>\r\n</div>\r\n<!-- phone numbeer -->\r\n<div class=\"registerForm\">\r\n<mat-form-field class=\"donor-signup-component\">\r\n  <input matInput placeholder=\"Phone Number\" type=\"tel\" formControlName=\"donor_phoneNumber\" class=\"registerForm\">\r\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\r\n        </mat-error> -->\r\n</mat-form-field>\r\n</div>\r\n    </form>\r\n    \r\n    <div class=\"matButton-signup-card-signup\">\r\n      <button mat-raised-button [disabled]=\"loading\" class=\"submit\" (click)=onSubmit()>Signup</button>\r\n      <!-- <button mat-raised-button class=\"student\" routerLink=\"/usersignup\">I'm a User</button> -->\r\n   </div>\r\n    <a routerLink=\"/donorlogin\">Already have an account?</a>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/auth/donor-signup/donor-signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/donor-signup/donor-signup.component.ts ***!
  \*************************************************************/
/*! exports provided: DonorSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorSignupComponent", function() { return DonorSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _donor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor.service */ "./src/app/auth/donor-signup/donor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonorSignupComponent = /** @class */ (function () {
    function DonorSignupComponent(formBuilder, router, donorService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.donorService = donorService;
        this.loading = false;
        this.submitted = false;
    }
    DonorSignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            donor_fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            donor_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    Object.defineProperty(DonorSignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    DonorSignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.donorService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            // this.alertService.success('Registration successful', true);
            console.log(data);
            _this.router.navigate(['/donorlogin']);
        }, function (error) {
            // this.alertService.error(error);
            _this.loading = false;
        });
    };
    DonorSignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donor-signup',
            template: __webpack_require__(/*! ./donor-signup.component.html */ "./src/app/auth/donor-signup/donor-signup.component.html"),
            styles: [__webpack_require__(/*! ./donor-signup.component.css */ "./src/app/auth/donor-signup/donor-signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _donor_service__WEBPACK_IMPORTED_MODULE_4__["DonorService"]])
    ], DonorSignupComponent);
    return DonorSignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/donor-signup/donor.service.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/donor-signup/donor.service.ts ***!
  \****************************************************/
/*! exports provided: DonorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorService", function() { return DonorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonorService = /** @class */ (function () {
    function DonorService(http) {
        this.http = http;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"];
    }
    DonorService.prototype.getAll = function () {
        return this.http.get("/donors");
    };
    DonorService.prototype.getById = function (id) {
        return this.http.get("/donor/" + id);
    };
    DonorService.prototype.register = function (donor) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/createdonor", donor);
    };
    DonorService.prototype.update = function (donor) {
        return this.http.put("/donor/" + donor.id, donor);
    };
    DonorService.prototype.delete = function (id) {
        return this.http.delete("/donor/" + id);
    };
    DonorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DonorService);
    return DonorService;
}());



/***/ }),

/***/ "./src/app/donor-dashboard/donation-edit-dialogue.css":
/*!************************************************************!*\
  !*** ./src/app/donor-dashboard/donation-edit-dialogue.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    background-color: #rgb(224, 184, 213);\r\n}\r\n\r\n.mat-dialog-actions {\r\n    float: right;\r\n}\r\n\r\n.mat-dialog-title {\r\n    background-color: #lightblue;\r\n}\r\n\r\ninput {\r\n    background-color: whitesmoke;\r\n    width: 2em;\r\n}"

/***/ }),

/***/ "./src/app/donor-dashboard/donation-edit-dialogue.html":
/*!*************************************************************!*\
  !*** ./src/app/donor-dashboard/donation-edit-dialogue.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit Donation</h1>\r\n<form id=\"editForm\" [formGroup]=\"addForm\" mat-dialog-content>\r\n    <mat-form-field class=\"donation-amount\">\r\n      <input matInput name=\"donationAmount\" formControlName=\"donationAmount\">\r\n    </mat-form-field>\r\n    <p>{{data.donationItem}}</p>\r\n    <button mat-raised-button (click)=\"editDonation(addForm)\">Submit</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/donor-dashboard/donor-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n    height: 81%;\r\n    margin-top: 4em;\r\n  }\r\n  \r\n  .sidenav {\r\n    /* width: 200px; */\r\n    width: 37%;\r\n  }\r\n  \r\n  .mat-toolbar.mat-primary {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    top: 5em;\r\n  }\r\n  \r\n  table {\r\n    width: 80%;\r\n    height: 50%;\r\n    margin-top: 5em; \r\n    margin-left: 10em;\r\n  }\r\n  \r\n  #sideNavForm{\r\n    margin-top: 5em;\r\n    margin-left: 8em;\r\n  }\r\n  \r\n  #sideNavAmount{\r\n    margin-top: 5em;\r\n    margin-left: 8em;\r\n  }\r\n  \r\n  #listButton{\r\n    margin-top: 4em;\r\n    margin-left: 12em;\r\n    background-color: #rgb(224, 184, 213);\r\n  }\r\n  \r\n  #navTitle{\r\n    margin-top: 2em;\r\n    margin-left: 5.5em;\r\n  }\r\n  \r\n  #tableTitle{\r\n    margin-top: 2em;\r\n    margin-left: 16em;\r\n  }\r\n  \r\n  #tableUpdateButton{\r\n    /* margin-top: 2em;\r\n    margin-left: 25em; */\r\n    background-color: #rgb(224, 184, 213);\r\n  }\r\n  \r\n  #tableDeleteButton{\r\n    /* margin-top: 2em;\r\n    margin-left: 1em; */\r\n    background-color: #rgb(224, 184, 213);\r\n  }\r\n  \r\n  #profileButton {\r\n    background-color: #rgb(224, 184, 213);\r\n  }"

/***/ }),

/***/ "./src/app/donor-dashboard/donor-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav\r\n    #drawer\r\n    class=\"sidenav\"\r\n    fixedInViewport=\"true\"\r\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n    [opened]=\"!(isHandset$ | async)\"\r\n    [fixedInViewport]=\"options.value.fixed\" \r\n    [fixedTopGap]=\"options.value.top\"\r\n    [fixedBottomGap]=\"options.value.bottom\">\r\n\r\n  \r\n<!-- side nav bar -->\r\n    <h2 id=\"navTitle\">Add Donations</h2>\r\n    <form id=\"sideNavForm\" [formGroup]=\"addForm\" >\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Donation Options\" [(ngModel)]=\"selectedValue\" name=\"options\" formControlName=\"options\">\r\n            <mat-option *ngFor=\"let donation of donations\" [value]=\"donation.value\" >\r\n              {{donation.viewValue}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      \r\n      </form>\r\n      <form id=\"sideNavAmount\" [formGroup]=\"addForm\">\r\n          <mat-form-field class=\"donation-amount\">\r\n            <input matInput placeholder=\"Donation Amount\" name=\"amount\" formControlName=\"amount\">\r\n          </mat-form-field>\r\n        </form>\r\n      <button mat-raised-button class=\"submit\" (click)=onSubmit() id=\"listButton\">Add to List</button>\r\n  </mat-sidenav>\r\n\r\n\r\n<!-- main table -->\r\n  <mat-sidenav-content>\r\n      <h2 id=\"tableTitle\">My Donations</h2>\r\n      <button mat-raised-button class=\"submit\" routerLink=\"/profile\" id=\"profileButton\">Edit Profile</button>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" id=\"donationTable\" > \r\n\r\n        <ng-container matColumnDef=\"amount\">\r\n          <th mat-header-cell *matHeaderCellDef>Amount</th>\r\n          <td mat-cell *matCellDef=\"let Donors\"> {{ Donors.donationAmount }}</td>\r\n        </ng-container>\r\n      \r\n        <ng-container matColumnDef=\"items\">\r\n          <th mat-header-cell *matHeaderCellDef>Items</th>\r\n          <td mat-cell *matCellDef=\"let Donors\" > {{ Donors.donationItem }}</td>\r\n        </ng-container>\r\n\r\n        <!-- edit button -->\r\n        <ng-container matColumnDef=\"editbutton\">\r\n          <th mat-header-cell *matHeaderCellDef>Edit</th>\r\n          <td mat-cell *matCellDef=\"let Donor\" > <button mat-raised-button (click)=\"editDonation(Donor)\" id=\"tableUpdateButton\">Edit Item</button></td>\r\n        </ng-container>\r\n\r\n        <!-- delete button -->\r\n        <ng-container matColumnDef=\"deletebutton\">\r\n          <th mat-header-cell *matHeaderCellDef>Delete</th>\r\n          <td mat-cell *matCellDef=\"let Donor\" >    <button mat-raised-button class=\"submit\"  id=\"tableDeleteButton\" (click)=onDelete(Donor.id)>Delete Item</button></td>\r\n        </ng-container>\r\n          \r\n          \r\n      <!-- <ng-container matColumnDef=\"select\">\r\n          <th mat-header-cell *matHeaderCellDef></th>\r\n          <mat-checkbox></mat-checkbox>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\">\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>   -->\r\n      \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        \r\n        </table>\r\n      \r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n      "

/***/ }),

/***/ "./src/app/donor-dashboard/donor-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DonorDashboardComponent, TableDataSource, DonationEditDialogue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorDashboardComponent", function() { return DonorDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataSource", function() { return TableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationEditDialogue", function() { return DonationEditDialogue; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _donor_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor-dashboard.service */ "./src/app/donor-dashboard/donor-dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_donor_state_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/donor-state-service.service */ "./src/app/services/donor-state-service.service.ts");
/* harmony import */ var _node_modules_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/@angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var DONATION_DATA = [
    // {amount: 20, items: 'Bottles',},
    // { amount: 5, items: 'Diaperbags'},
    // { amount: 10, items: 'Blankets'}
    { amount: 0, items: "" }
];
var DonorDashboardComponent = /** @class */ (function () {
    function DonorDashboardComponent(breakpointObserver, formBuilder, donordashboardService, donorStateService, dialog, router) {
        this.breakpointObserver = breakpointObserver;
        this.formBuilder = formBuilder;
        this.donordashboardService = donordashboardService;
        this.donorStateService = donorStateService;
        this.dialog = dialog;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.array = [];
        this.displayedColumns = [
            "amount",
            "items",
            "editbutton",
            "deletebutton"
        ];
        this.dataSource = new TableDataSource(this.donordashboardService);
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.donations = [
            { value: "used_clothes", viewValue: "Clothes" },
            { value: "used_shoes", viewValue: "Shoes" },
            { value: "baby_food", viewValue: "Baby Food" },
            { value: "diaper_bags", viewValue: "Diaper Bags" },
            { value: "bottles", viewValue: "Bottles" },
            { value: "pacifiers", viewValue: "Pacifiers" },
            { value: "diaper_boxes", viewValue: "Boxes of Diapers" },
            { value: "beds", viewValue: "Beds" },
            { value: "misc_item", viewValue: "MISC" }
        ];
        this.donors = [];
        this.options = formBuilder.group({
            bottom: 0,
            fixed: false,
            top: 65
        });
    }
    DonorDashboardComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            options: [""],
            amount: []
        });
    };
    DonorDashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var donation = {
            donationOption: this.addForm.value.options,
            donationAmount: parseInt(this.addForm.value.amount)
        };
        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        }
        //create donation
        this.loading = true;
        console.log("test");
        this.donordashboardService
            .createDonation(donation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            //push into donations
            console.log(data);
            _this.router.navigate(["/donordashboard"]);
        }, function (error) {
            // this.alertService.error(error);
            _this.loading = false;
        });
    };
    //delete donation
    DonorDashboardComponent.prototype.onDelete = function (id) {
        console.log('deleting');
        this.donordashboardService.deleteDonation(id).subscribe(function (data) { }, function (error) { }, function () { });
    };
    //edit donation
    DonorDashboardComponent.prototype.editDonation = function (data) {
        var donationEdit = this.dialog.open(DonationEditDialogue, {
            data: data,
            height: "300x",
            width: "250px"
        });
    };
    DonorDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-donor-dashboard",
            template: __webpack_require__(/*! ./donor-dashboard.component.html */ "./src/app/donor-dashboard/donor-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./donor-dashboard.component.css */ "./src/app/donor-dashboard/donor-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _donor_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DonorDashboardService"],
            _services_donor_state_service_service__WEBPACK_IMPORTED_MODULE_7__["DonorStateServiceService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], DonorDashboardComponent);
    return DonorDashboardComponent;
}());

var TableDataSource = /** @class */ (function (_super) {
    __extends(TableDataSource, _super);
    function TableDataSource(donorDashboardService) {
        var _this = _super.call(this) || this;
        _this.donorDashboardService = donorDashboardService;
        return _this;
    }
    TableDataSource.prototype.connect = function () {
        return this.donorDashboardService.getDonations();
    };
    TableDataSource.prototype.disconnect = function () { };
    return TableDataSource;
}(_node_modules_angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["DataSource"]));

var DonationEditDialogue = /** @class */ (function () {
    function DonationEditDialogue(donorDashboardService, donationEdit, data, formBuilder) {
        this.donorDashboardService = donorDashboardService;
        this.donationEdit = donationEdit;
        this.data = data;
        this.formBuilder = formBuilder;
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    DonationEditDialogue.prototype.editDonation = function (data) {
        var _this = this;
        console.log(data.value);
        this.donorDashboardService.updateDonation(data.value).subscribe(function (next) {
            _this.edited.emit(true);
        }, function (error) {
            _this.edited.emit(true);
        }, function () {
            _this.donationEdit.close();
        });
    };
    DonationEditDialogue.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: this.data.id,
            donationItem: this.data.donationItem,
            donationAmount: this.data.donationAmount
        });
    };
    DonationEditDialogue = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "donation-edit-dialogue",
            template: __webpack_require__(/*! ./donation-edit-dialogue.html */ "./src/app/donor-dashboard/donation-edit-dialogue.html"),
            styles: [__webpack_require__(/*! ./donation-edit-dialogue.css */ "./src/app/donor-dashboard/donation-edit-dialogue.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_donor_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DonorDashboardService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DonationEditDialogue);
    return DonationEditDialogue;
}());



/***/ }),

/***/ "./src/app/donor-dashboard/donor-dashboard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard.service.ts ***!
  \************************************************************/
/*! exports provided: DonorDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorDashboardService", function() { return DonorDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpModule } from '@angular/http'
var DonorDashboardService = /** @class */ (function () {
    function DonorDashboardService(http) {
        this.http = http;
        // donorUrl = 'http://localhost:3000/donation/createdonation';  // URL to web api
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'currentUser'
            })
        };
    }
    //get all donations by donor id
    DonorDashboardService.prototype.getDonations = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donation/", this.httpOptions);
    };
    // getDonationById(id: number) {
    //   return this.http.get<Donor>(`${APIURL}/donation/${id}`, this.httpOptions)  ;
    // }
    // createDonation(donor: Donor[]) {
    //   return this.http.post(this.donorUrl + '/createdonation' ,donor);
    // }
    // createDonation (donor: Donor): Observable<any> {
    //       return this.http.post<Donor>(this.donorUrl, donor, this.httpOptions)
    //         // .pipe( 
    //         //   // tap((donor:Donor) => this.log(`added donor w/ id=${donor.id}`)),
    //         //   catchError(this.handleError<Donor>('createDonation'))
    //         // );
    //     }
    DonorDashboardService.prototype.createDonation = function (donation) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donation/createdonation", donation, this.httpOptions);
        // .pipe(
        //   catchError(this.handleError('createDonation', donation))
        // );
    };
    //update donation
    DonorDashboardService.prototype.updateDonation = function (donation) {
        return this.http.put(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donation/editdonation", donation, this.httpOptions);
    };
    DonorDashboardService.prototype.deleteDonation = function (id) {
        return this.http.delete(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donation/deletedonation/" + id, this.httpOptions);
    };
    DonorDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DonorDashboardService);
    return DonorDashboardService;
}());



/***/ }),

/***/ "./src/app/donor-dashboard/donor-profile/donor-profile.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-profile/donor-profile.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardForProfile{\r\n    height: 50%;\r\n    width: 30%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 8em;\r\n    margin-top: 5%;\r\n    background-color: #lightblue;\r\n    border-radius: 50px;\r\n    text-align: center;\r\n}\r\n\r\nbutton{\r\n    float: right;\r\n    margin: 1%;\r\n    background-color: #rgb(224, 184, 213);\r\n}\r\n\r\nbutton:hover{\r\n    color: black;\r\n    background-color: white;\r\n    border: 1px solid #rgb(224, 184, 213);\r\n\r\n}\r\n\r\n.matButton-profile-delete {\r\n    float: left;\r\n}"

/***/ }),

/***/ "./src/app/donor-dashboard/donor-profile/donor-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-profile/donor-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div>\r\n    <mat-card class=\"cardForProfile\">\r\n        <form>\r\n            <h1>Donor Profile</h1>\r\n        <div class=\"profileGroup\">\r\n            <mat-form-field>\r\n            <input matInput placeholder=\"First Name\"  type=\"text\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"profileForm\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"profileForm\">\r\n            <mat-form-field>\r\n            <input matInput placeholder=\"Last Name\" type=\"text\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"profileForm\" />\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"profileForm\"> \r\n        <mat-form-field class=\"donor-signup-component\">\r\n          <input matInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"profileForm\"  >\r\n        </mat-form-field>\r\n        </div>\r\n  \r\n        <div class=\"profileForm\">\r\n          <mat-form-field class=\"donor-signup-component\">\r\n            <input matInput placeholder=\"Email\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"profileForm\"  />\r\n          </mat-form-field>\r\n        </div>  \r\n        <div class=\"profileForm\">\r\n            <mat-form-field>\r\n            <input matInput placeholder=\"Address\"  type=\"text\"\r\n            [(ngModel)]=\"address\" name=\"address\" class=\"profileForm\" />\r\n          </mat-form-field>\r\n          </div>\r\n          <div class=\"profileForm\">\r\n              <mat-form-field>\r\n              <input matInput placeholder=\"City\"  type=\"text\" [(ngModel)]=\"city\" name=\"city\" class=\"profileForm\" />\r\n            </mat-form-field>\r\n            </div>\r\n            <div class=\"profileForm\">\r\n                <mat-form-field>\r\n                <input matInput placeholder=\"State\"  type=\"text\" [(ngModel)]=\"state\" name=\"state\" class=\"profileForm\" />\r\n              </mat-form-field>\r\n              </div>\r\n      \r\n              <div class=\"profileForm\">\r\n                  <mat-form-field>\r\n                  <input matInput placeholder=\"ZipCode\"  type=\"text\" [(ngModel)]=\"zipcode\" name=\"zipcode\" class=\"profileForm\" />\r\n                </mat-form-field>\r\n                </div>\r\n                <div class=\"profileForm\">\r\n                    <mat-form-field>\r\n                    <input matInput placeholder=\"Phone Number\"  type=\"text\" [(ngModel)]=\"phonenumber\" name=\"phonenumber\" class=\"profileForm\" />\r\n                  </mat-form-field> \r\n                  </div>\r\n      </form>\r\n      \r\n      <div class=\"matButton-signup-card-signup\">\r\n        <button mat-raised-button (click)=onUpdate()>Update</button>\r\n      </div>\r\n      <div class=\"matButton-profile-delete\">\r\n        <button mat-raised-button (click)=onDelete()>Delete Account</button>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/donor-dashboard/donor-profile/donor-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-profile/donor-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: DonorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorProfileComponent", function() { return DonorProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _donor_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donor-profile.service */ "./src/app/donor-dashboard/donor-profile/donor-profile.service.ts");
/* harmony import */ var _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../donorAuth/donorAuth.service */ "./src/app/donorAuth/donorAuth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DonorProfileComponent = /** @class */ (function () {
    function DonorProfileComponent(donorAuthService, donorProfileService, router) {
        this.donorAuthService = donorAuthService;
        this.donorProfileService = donorProfileService;
        this.router = router;
        this.array = [];
    }
    DonorProfileComponent.prototype.ngOnInit = function () {
        this.getDonorInfo();
    };
    DonorProfileComponent.prototype.getDonorInfo = function () {
        var _this = this;
        this.donorAuthService.getDonor(localStorage.id).subscribe(function (data) {
            var userInfo = Object.values(data);
            // console.log(userInfo)
            _this.firstname = userInfo[1],
                _this.lastname = userInfo[2],
                _this.username = userInfo[3],
                _this.email = userInfo[5],
                _this.address = userInfo[6],
                _this.city = userInfo[7],
                _this.state = userInfo[8],
                _this.zipcode = userInfo[9],
                _this.phonenumber = userInfo[10];
        });
    };
    DonorProfileComponent.prototype.onDelete = function () {
        var _this = this;
        this.donorAuthService.deleteDonor(localStorage.id).subscribe(function (data) {
            _this.array.push(data);
        });
        console.log("User deleted");
        this.router.navigate(["/donorlogin"]);
        localStorage.clear();
    };
    DonorProfileComponent.prototype.onUpdate = function () {
        var _this = this;
        var editDonor = { donor: {
                donor_fname: this.firstname,
                donor_lname: this.lastname,
                donor_username: this.username,
                donor_email: this.email,
                donor_address: this.address,
                donor_city: this.city,
                donor_state: this.state,
                donor_zipCode: this.zipcode,
                donor_phoneNumber: this.phonenumber
            } };
        this.donorAuthService.updateDonor(localStorage.id, editDonor).subscribe(function (data) {
            _this.array.push(data);
            location.reload();
        });
        this.router.navigate(["/donordashboard"]);
    };
    DonorProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donor-profile',
            template: __webpack_require__(/*! ./donor-profile.component.html */ "./src/app/donor-dashboard/donor-profile/donor-profile.component.html"),
            styles: [__webpack_require__(/*! ./donor-profile.component.css */ "./src/app/donor-dashboard/donor-profile/donor-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_3__["DonorAuthService"], _donor_profile_service__WEBPACK_IMPORTED_MODULE_2__["DonorProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DonorProfileComponent);
    return DonorProfileComponent;
}());



/***/ }),

/***/ "./src/app/donor-dashboard/donor-profile/donor-profile.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-profile/donor-profile.service.ts ***!
  \************************************************************************/
/*! exports provided: DonorProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorProfileService", function() { return DonorProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DonorProfileService = /** @class */ (function () {
    function DonorProfileService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'currentUser'
            })
        };
    }
    DonorProfileService.prototype.getDonors = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/");
    };
    DonorProfileService.prototype.getDonorById = function (id) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/getdonor/" + id, this.httpOptions);
    };
    DonorProfileService.prototype.updateDonor = function (id, newInfo) {
        return this.http.put(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/editdonor/" + id, newInfo);
    };
    DonorProfileService.prototype.deleteDonor = function (id) {
        return this.http.delete(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/deletedonor/" + id, this.httpOptions);
    };
    DonorProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DonorProfileService);
    return DonorProfileService;
}());



/***/ }),

/***/ "./src/app/donorAuth/donorAuth.service.ts":
/*!************************************************!*\
  !*** ./src/app/donorAuth/donorAuth.service.ts ***!
  \************************************************/
/*! exports provided: DonorAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorAuthService", function() { return DonorAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonorAuthService = /** @class */ (function () {
    function DonorAuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"];
    }
    DonorAuthService.prototype.login = function (loginInfo) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/login", loginInfo).subscribe(function (info) {
            var data = Object.values(info);
            localStorage.setItem("token", data[2]);
            localStorage.setItem("username", data[0].donor_username);
            localStorage.setItem("id", data[0].id);
            console.log(data);
        });
    };
    DonorAuthService.prototype.getDonor = function (id) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/getdonor/" + id);
    };
    DonorAuthService.prototype.updateDonor = function (id, donorInfo) {
        return this.http.put(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/editdonor/" + id, donorInfo);
    };
    DonorAuthService.prototype.deleteDonor = function (id) {
        return this.http.delete(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/deletedonor/" + id);
    };
    DonorAuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.clear();
    };
    DonorAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DonorAuthService);
    return DonorAuthService;
}());



/***/ }),

/***/ "./src/app/services/donor-state-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/donor-state-service.service.ts ***!
  \*********************************************************/
/*! exports provided: DonorStateServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorStateServiceService", function() { return DonorStateServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DonorStateServiceService = /** @class */ (function () {
    function DonorStateServiceService() {
    }
    DonorStateServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DonorStateServiceService);
    return DonorStateServiceService;
}());



/***/ }),

/***/ "./src/app/ui/about/about.component.css":
/*!**********************************************!*\
  !*** ./src/app/ui/about/about.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\r\n    margin-top: 5em;\r\n    margin-bottom: 5em;\r\n}\r\n\r\nh1, h2 {\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    margin-left: 36em;\r\n    width: 15%;\r\n    height: 15%;\r\n}"

/***/ }),

/***/ "./src/app/ui/about/about.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/about/about.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"about\">\r\n    <h1>About Sunshine's Bundles of Joy</h1>\r\n    <h3>Before Sunshine’s Bundles of Joy was established Annika Hudson started a group on Facebook called the Ladies place. She\r\n      was motivated to start a Baby Bag Drive because of her personal experience with having a baby. The first Baby Bag Drive\r\n      was a success and we decided to make this an annual event. I wanted to continue this awesome ideal. Sunshine’s Bundles\r\n      of Joy was established in 2016. On March 29th, 2017 the organization became a non-profit. Helping others\r\n      and making a difference in someone’s life brings me joy.</h3>\r\n\r\n    <h2>About Me</h2>\r\n    <img src=\"../../../assets/IMG-0615.jpeg\">\r\n    <h3>I am a mother of one and being a parent was the best gift I was ever given. Seeing happiness on the parents faces when\r\n      I am able to provide them with baby items is a blessing.</h3>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ui/about/about.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/about/about.component.ts ***!
  \*********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/ui/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/ui/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/ui/contact/contact.component.css":
/*!**************************************************!*\
  !*** ./src/app/ui/contact/contact.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactForm {\r\n    margin-top: 5em;\r\n    text-align: center;\r\n    margin-bottom: 5em;\r\n}\r\n\r\ntextarea {\r\n    background-color: whitesmoke;\r\n    height: 18em;\r\n}\r\n\r\n.messageEntry {\r\n    width: 50%;\r\n}\r\n\r\nbutton {\r\n    color: black;\r\n    background-color: #rgb(224, 184, 213);\r\n}\r\n\r\nbutton:hover {\r\n    background-color: white;\r\n    border: solid 1px #rgb(224, 184, 213);\r\n}"

/***/ }),

/***/ "./src/app/ui/contact/contact.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/contact/contact.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactForm\">\r\n  <h2>Contact</h2>  \r\n\r\n  <form onClick=onSubmit(); method=\"POST\" action=\"https://formspree.io/ieshaduff@yahoo.com\">\r\n    <div class=\"infoFields\">\r\n      <mat-form-field>\r\n        <input matInput type=\"name\" name=\"name\" placeholder=\"Your name\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput type=\"phone\" name=\"phone\" placeholder=\"Your phone number\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field class=\"emailField\">\r\n        <input matInput type=\"email\" name=\"email\" placeholder=\"Your email\">\r\n      </mat-form-field>\r\n    </div>\r\n    <br>\r\n    <mat-form-field class=\"messageEntry\" appearance=\"outline\">\r\n      <textarea matInput name=\"message\" placeholder=\"Your message\"></textarea>\r\n    </mat-form-field>\r\n    <br>\r\n    <button mat-raised-button type=\"submit\">Send</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/ui/contact/contact.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/contact/contact.component.ts ***!
  \*************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/ui/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/ui/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background-color: #lightblue;\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n\r\n.flexSpaceFill {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.cRight {\r\n    margin: auto 33%;\r\n}\r\n\r\na, img {\r\n    width: 42px;\r\n    height: 42px\r\n}"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\r\n  <span class=\"cRight\">© Copyright Sunshine's Bundles of Joy 2018</span>\r\n  <span class=\"flexSpaceFill\"></span>\r\n  <a href=\"https://www.facebook.com/Sunshines-Bundles-of-Joy-1929731860627820/\" target=\"blank\">\r\n    <img src=\"../../../assets/f-ogo_RGB_HEX-58.png\" alt=\"facebook\">\r\n  </a>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<ng-content></ng-content>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/navbar/navbar.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    background-color: #lightblue;\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n}\r\n\r\n.spaceFill {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.navButton {\r\n    background: #lightblue;\r\n    border-top: none;\r\n    border-bottom: none;\r\n    height: 100%;\r\n}\r\n\r\n#m1btn {\r\n    border-left: none;\r\n    border-right: none;\r\n}\r\n\r\n#m2btn {\r\n    border-right: none;\r\n}\r\n\r\na {\r\n    color: black;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/ui/navbar/navbar.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\r\n  <a routerLink=\"\">\r\n    <h3>Sunshine's Bundles of Joy</h3>\r\n  </a>\r\n  <span class=\"spaceFill\"></span>\r\n  <button mat-stroked-button class=\"navButton\" routerLink=\"/about\">About</button>\r\n  <button mat-stroked-button class=\"navButton\" id=\"m1btn\" routerLink=\"/contact\">Contact</button>\r\n  <button mat-stroked-button class=\"navButton\" id=\"m2btn\" routerLink=\"/donordashboard\">Dashboard </button>\r\n  <button mat-stroked-button class=\"navButton\"  (click)=\"logout()\" routerLink=\"/donorlogin\">Logout</button>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/ui/navbar/navbar.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.ts ***!
  \***********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../donorAuth/donorAuth.service */ "./src/app/donorAuth/donorAuth.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(donorAuthService, router) {
        this.donorAuthService = donorAuthService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.donorAuthService.logout();
        console.log("logging out");
        this.router.navigate(["/donorlogin"]);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/ui/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/ui/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_1__["DonorAuthService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/ui/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/ui/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/ui/contact/contact.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                // LayoutModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
            ],
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    margin-top: 4em;\r\n    margin-bottom: 0;\r\n    text-align: center;\r\n}\r\n\r\np {\r\n    margin-top: 0;\r\n    text-align: center;\r\n}\r\n\r\n.choices {\r\n    margin: auto;\r\n    width: 25%;\r\n    background-color: whitesmoke;\r\n    height: 3em;\r\n}\r\n\r\n.itemField {\r\n    text-align: center;\r\n}\r\n\r\n.amountField {\r\n    margin-top: 3em;\r\n    background-color: whitesmoke;\r\n    height: 3em;\r\n    text-align: center\r\n}\r\n\r\n.addButton {\r\n    background-color: #rgb(224, 184, 213);\r\n    margin-left: 68%;\r\n    color: #191919;\r\n}\r\n\r\n.cdk-column-quantity {\r\n    width: 25%;\r\n}\r\n\r\nmat-sidenav-container {\r\n    height: 90.5%;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 20em;\r\n}\r\n\r\n.reqButton {\r\n    background-color: #rgb(224, 184, 213);\r\n    color: #191919;\r\n    height: 15%;\r\n}\r\n\r\n.eButton {\r\n    background-color: rgb(122, 202, 122);\r\n}\r\n\r\n.dButton {\r\n    background-color: rgb(255, 148, 148);\r\n}"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container>\r\n  <mat-sidenav #drawer\r\n  class=\"sidenav\"\r\n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n  [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n  [opened]=\"!(isHandset$ | async)\">\r\n    <h2>Requested donations</h2>\r\n    \r\n    <div>\r\n      <table class=\"sideTable\" #sideTable mat-table [dataSource]=\"basketDataSource\">\r\n        \r\n        <ng-container matColumnDef=\"select\">\r\n          <th mat-header-cell *matHeaderCellDef></th>\r\n          <mat-checkbox></mat-checkbox>\r\n          <td mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\">\r\n            </mat-checkbox>\r\n          </td>\r\n        </ng-container>\r\n        \r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef>Item</th>\r\n          <td mat-cell *matCellDef=\"let basket\">{{basket.name}}</td>\r\n        </ng-container>\r\n        \r\n        <ng-container matColumnDef=\"quantity\">\r\n          <th mat-header-cell *matHeaderCellDef>Quantity</th>\r\n          <td mat-cell *matCellDef=\"let basket\">{{basket.quantity}}</td>\r\n        </ng-container>\r\n        \r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"sideButtons\">\r\n      <button class=\"eButton\" mat-raised-button>Edit</button>\r\n      <button class=\"dButton\" mat-raised-button>Del</button>\r\n      <button class=\"reqButton\" mat-raised-button>Send request</button>\r\n    </div>\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <h2>Donated Items</h2>\r\n    <p>Please note all items are subject to availability</p>\r\n      \r\n      <div class=\"choices\">\r\n        <mat-select class=\"itemField\" placeholder=\"Item(s)\">\r\n          <mat-option *ngFor=\"let request of requests\" [(value)]=\"requestedItem\">{{request.viewValue}}</mat-option>\r\n        </mat-select>\r\n        <mat-select class=\"amountField\" placeholder=\"Quantity\">\r\n          <mat-option *ngFor=\"let amount of amounts\" [(value)]=\"requestedAmount\">{{amount.value}}</mat-option>\r\n        </mat-select> \r\n      </div>\r\n      \r\n      <div class=\"button\">\r\n        <button class=\"addButton\" mat-raised-button (click)=\"testFunction()\">Add items</button>\r\n      </div>\r\n      \r\n  </mat-sidenav-content>\r\n</mat-sidenav-container> -->"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const DONATIONDATA: DonationsList[] = [
//   {name: "Clothes (outfits)", quantity: 4},
//   {name: "Shoes", quantity: 1},
//   {name: "Baby food (jars)", quantity: 9},
//   {name: "Diaper Bags", quantity: 1},
//   {name: "Bottles", quantity: 5},
//   {name: "Pacifiers", quantity: 3},
//   {name: "Diapers (box)", quantity: 0},
//   {name: "Bed", quantity: 0},
// ]
var BASKETDATA = [];
var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
        this.displayedColumns = ["select", "name", "quantity"];
        // dataSource = new MatTableDataSource<DonationsList>(DONATIONDATA)
        this.basketDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](BASKETDATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        //   .pipe(
        //     map(result => result.matches)
        //   );
        //   selectedValue: string;
        this.requests = [
            { value: 'used_clothing', viewValue: 'Clothes (outfit)' },
            { value: 'used_shoes', viewValue: 'Shoes' },
            { value: 'baby_food', viewValue: 'Baby Food (jar)' },
            { value: 'diaper_bags', viewValue: 'Diaper Bags' },
            { value: 'bottles', viewValue: 'Bottles' },
            { value: 'pacifiers', viewValue: 'Pacifiers' },
            { value: 'diapers_boxes', viewValue: 'Diapers (box)' },
            { value: 'beds', viewValue: 'Bed' },
        ];
        this.amounts = [
            { value: 1, viewValue: 1 },
            { value: 2, viewValue: 2 },
            { value: 3, viewValue: 3 },
            { value: 4, viewValue: 4 },
            { value: 5, viewValue: 5 },
            { value: 6, viewValue: 6 },
            { value: 7, viewValue: 7 },
            { value: 8, viewValue: 8 },
            { value: 9, viewValue: 9 },
            { value: 10, viewValue: 10 }
        ];
    }
    UserDashboardComponent.prototype.testFunction = function () {
        // console.log(this.selection.selected)
        this.basketDataSource.data.push();
        this.table.renderRows();
    };
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
    ], UserDashboardComponent.prototype, "table", void 0);
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-profile/user-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile/user-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-dashboard/user-profile/user-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile/user-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-profile/user-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile/user-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-dashboard/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-dashboard/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment, APIURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIURL", function() { return APIURL; });
var environment = {
    production: true
};
var APIURL = "";
// export let APIURL = '//localhost:3000';
switch (window.location.hostname) {
    // this is the deployed angular application
    case 'tdm-bundleclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://tdm-bundleclient.herokuapp.com';
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:3000';
}


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\junk_\documents\coding\javascript\projects\redbadgefinaltake2\bojclient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map