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

module.exports = "<app-layout></app-layout>\n<router-outlet></router-outlet>\n\n\n"

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
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/navbar/navbar.component */ "./src/app/ui/navbar/navbar.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./donorAuth/donorAuth.service */ "./src/app/donorAuth/donorAuth.service.ts");
/* harmony import */ var _auth_donor_signup_donor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/donor-signup/donor.service */ "./src/app/auth/donor-signup/donor.service.ts");
/* harmony import */ var _ui_about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/about/about.component */ "./src/app/ui/about/about.component.ts");
/* harmony import */ var _ui_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/contact/contact.component */ "./src/app/ui/contact/contact.component.ts");
/* harmony import */ var _auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/authGuard/auth.guard */ "./src/app/auth/authGuard/auth.guard.ts");
/* harmony import */ var _donor_dashboard_donor_profile_donor_profile_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./donor-dashboard/donor-profile/donor-profile.service */ "./src/app/donor-dashboard/donor-profile/donor-profile.service.ts");
/* harmony import */ var _donor_dashboard_donor_dashboard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./donor-dashboard/donor-dashboard.service */ "./src/app/donor-dashboard/donor-dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { UserLoginComponent } from './auth/user-login/user-login.component';
// import { UserSignupComponent } from './auth/user-signup/user-signup.component';




// import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';















// import { UserService } from './auth/user-signup/user.service';


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
                // UserProfileComponent,
                _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
                _ui_about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _ui_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
                _donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataExampleDialog"],
                _ui_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_19__["DonorAuthService"], _auth_donor_signup_donor_service__WEBPACK_IMPORTED_MODULE_20__["DonorService"],
                _auth_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"], _donor_dashboard_donor_profile_donor_profile_service__WEBPACK_IMPORTED_MODULE_24__["DonorProfileService"], _donor_dashboard_donor_dashboard_service__WEBPACK_IMPORTED_MODULE_25__["DonorDashboardService"], _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_19__["DonorAuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_donor_dashboard_donor_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataExampleDialog"]]
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

module.exports = "<app-donor-login></app-donor-login>\n"

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
    function AuthService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    AuthService.prototype.login = function (donor_username, donor_password) {
        return this.http.post(this.url + "/donor/login", { donor_username: donor_username, donor_password: donor_password })
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = "  .donorCard{\n    height: 50%;\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5%;\n    background-color: #lightblue;\n    border-radius: 50px;\n    text-align: center;\n}  \n.donorButtons{\n    margin-bottom: 5%;\n    display: inline-block;\n    width: 100%;\n    text-align-last: right;\n}  \n.loginBtn {\n    color: black;\n    background-color: #rgb(224, 184, 213);\n}  \n.userBtn {\n    color: black;\n    background-color: #rgb(224, 184, 213);\n}  \nbutton:hover {\n    color: black;\n    background-color: white;\n    border: 1px solid #rgb(224, 184, 213);\n}  \n.donorButtons .submit {\n    float: left;\n}  \n.noaccount a {\n    text-decoration: none;\n    color: #191919;\n}  \n.noaccount a:hover {\n    text-decoration: underline;\n}  \n/* @font-face {\n    font-family: 'Pacifico';\n    font-style: normal;\n    font-weight: normal;\n    src: local('Pacifico'), url('http://themes.googleusercontent.com/font?kit=fKnfV28XkldRW297cFLeqfesZW2xOQ-xsNqO47m55DA') format('truetype');\n }\n .donorCard{\n    height: 50%;\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5%;\n    background-color: #lightblue;\n    border-radius: 50px;\n    text-align: center;\n} \n body {\n    text-align: center;\n }\n \n .donorButtons {\n    display: inline-block;\n    margin-top: 20%;\n    -webkit-border-radius: 8px;\n    -moz-border-radius: 8px;\n    border-radius: 8px;\n    -webkit-box-shadow:    0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, .35);\n    -moz-box-shadow: 0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, .35);\n    box-shadow: 0 8px 0 #c5376d, 0 15px 20px rgba(0, 0, 0, .35);\n    -webkit-transition: -webkit-box-shadow .1s ease-in-out;\n    -moz-transition: -moz-box-shadow .1s ease-in-out;\n    -o-transition: -o-box-shadow .1s ease-in-out;\n    transition: box-shadow .1s ease-in-out;\n    font-size: 50px;\n    color: #fff;\n }\n \n .donorButtons  span {\n    display: inline-block;\n    padding: 20px 30px;\n    background-color: #ec528d;\n    background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(hsla(338, 90%, 80%, .8)), to(hsla(338, 90%, 70%, .2)));\n    background-image: -webkit-linear-gradient(hsla(338, 90%, 80%, .8), hsla(338, 90%, 70%, .2));\n    background-image: -moz-linear-gradient(hsla(338, 90%, 80%, .8), hsla(338, 90%, 70%, .2));\n    background-image: -o-linear-gradient(hsla(338, 90%, 80%, .8), hsla(338, 90%, 70%, .2));\n    -webkit-border-radius: 8px;\n    -moz-border-radius: 8px;\n    border-radius: 8px;\n    -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);\n    -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);\n    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);\n    font-family: 'Pacifico', Arial, sans-serif;\n    line-height: 1;\n    text-shadow: 0 -1px 1px rgba(175, 49, 95, .7);\n    -webkit-transition: background-color .2s ease-in-out, -webkit-transform .1s ease-in-out;\n    -moz-transition: background-color .2s ease-in-out, -moz-transform .1s ease-in-out;\n    -o-transition: background-color .2s ease-in-out, -o-transform .1s ease-in-out;\n    transition: background-color .2s ease-in-out, transform .1s ease-in-out;\n }\n \n .donorButtons :hover span {\n    background-color: #ec6a9c;\n    text-shadow: 0 -1px 1px rgba(175, 49, 95, .9), 0 0 5px rgba(255, 255, 255, .8);\n }\n \n .donorButtons :active, #button:focus {\n    -webkit-box-shadow:    0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, .3);\n    -moz-box-shadow: 0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, .3);\n    box-shadow:    0 8px 0 #c5376d, 0 12px 10px rgba(0, 0, 0, .3);\n }\n \n .donorButtons :active span {\n    -webkit-transform: translate(0, 4px);\n    -moz-transform: translate(0, 4px);\n    -o-transform: translate(0, 4px);\n    transform: translate(0, 4px);\n } */"

/***/ }),

/***/ "./src/app/auth/donor-login/donor-login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/auth/donor-login/donor-login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"donorCard\">\n    <h2>Donor Login</h2>\n    <hr color=\"#rgb(224, 184, 213)\" />\n    <form [formGroup]=\"donorForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput type=\"text\"\n            placeholder=\"Username\" \n            formControlName=\"donor_username\" class=\"form-control\"/>\n          \n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field>\n            <input matInput type=\"password\" \n            placeholder=\"Password\"\n            formControlName=\"donor_password\" class=\"form-control\"/>\n          \n            </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n            <button mat-raised-button [disabled]=\"loading\" class=\"loginBtn\">Login</button>\n            <!-- <button mat-raised-button class=\"userBtn\" routerLink='/userlogin'>I'm a User</button> -->\n        </div>\n        <div class=\"noaccount\">\n            <a routerLink=\"/donorsignup\">Don't have an account?</a>\n        </div>\n    </form>\n  </mat-card>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../donorAuth/donorAuth.service */ "./src/app/donorAuth/donorAuth.service.ts");
/* harmony import */ var _services_donor_state_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/donor-state-service.service */ "./src/app/services/donor-state-service.service.ts");
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
    function DonorLoginComponent(formBuilder, route, router, donorAuthService, donorStateService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.donorAuthService = donorAuthService;
        this.donorStateService = donorStateService;
        this.loading = false;
        this.submitted = false;
    }
    DonorLoginComponent.prototype.ngOnInit = function () {
        this.donorForm = this.formBuilder.group({
            donor_username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            donor_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // reset login status
        this.donorAuthService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/donordashboard';
    };
    Object.defineProperty(DonorLoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.donorForm.controls; },
        enumerable: true,
        configurable: true
    });
    DonorLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.donorForm.invalid) {
            return;
        }
        this.loading = true;
        this.donorAuthService.login(this.f.donor_username.value, this.f.donor_password.value)
            .subscribe(function (data) {
            _this.donorStateService.donor = data.donor;
            localStorage.setItem("token", data.sessionToken);
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            // this.alertService.error(error);
            _this.loading = false;
        });
    };
    DonorLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donor-login',
            template: __webpack_require__(/*! ./donor-login.component.html */ "./src/app/auth/donor-login/donor-login.component.html"),
            styles: [__webpack_require__(/*! ./donor-login.component.css */ "./src/app/auth/donor-login/donor-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _donorAuth_donorAuth_service__WEBPACK_IMPORTED_MODULE_3__["DonorAuthService"],
            _services_donor_state_service_service__WEBPACK_IMPORTED_MODULE_4__["DonorStateServiceService"]])
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

module.exports = ".cardForSignup{\n    height: 50%;\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5%;\n    background-color: #lightblue;\n    border-radius: 50px;\n    text-align: center;\n}\n.cardForSignup a {\n    text-decoration: none;\n    color: black;\n}\n.cardForSignup a:hover {\n    text-decoration: underline;\n}\nbutton{\n    background-color: #rgb(224, 184, 213);\n    color: black;\n}\nbutton:hover{\n    color: black;\n    background-color: white;\n    border: 1px solid #rgb(224, 184, 213);\n}"

/***/ }),

/***/ "./src/app/auth/donor-signup/donor-signup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/donor-signup/donor-signup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"cardForSignup\">\n      <h2>Donor Signup</h2>\n      <form [formGroup]=\"registerForm\">\n      <hr color=\"#rgb(224, 184, 213)\" />\n      <div class=\"registerForm\">\n          <mat-form-field>\n          <input matInput placeholder=\"First Name\"  type=\"text\" formControlName=\"donor_fname\" class=\"registerForm\" />\n        </mat-form-field>\n      </div>\n      <!-- last name -->\n      <div class=\"registerForm\">\n          <mat-form-field>\n          <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"donor_lname\" class=\"registerForm\" />\n        </mat-form-field>\n      </div>\n      <!-- address -->\n      <div class=\"registerForm\">\n      <mat-form-field class=\"donor-signup-component\">\n        <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"donor_username\" class=\"registerForm\"  >\n      </mat-form-field>\n      </div>\n\n      <div class=\"registerForm\">\n        <mat-form-field class=\"donor-signup-component\">\n          <input matInput placeholder=\"Email\" formControlName=\"donor_email\" class=\"registerForm\"  />\n        </mat-form-field>\n      </div>\n    \n      <div class=\"registerForm\">\n        <mat-form-field class=\"donor-signup-component\">\n          <input matInput placeholder=\"Password\" formControlName=\"donor_password\" class=\"registerForm\" />\n        </mat-form-field>\n      </div>  \n      <div class=\"registerForm\"> \n      <mat-form-field class=\"donor-signup-component\">\n        <input matInput placeholder=\"Address\" type=\"text\" formControlName=\"donor_address\" class=\"registerForm\">\n        <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\n        </mat-error> -->\n      </mat-form-field>\n</div>\n<!-- city -->\n<div class=\"registerForm\">\n<mat-form-field class=\"donor-signup-component\">\n  <input matInput placeholder=\"City\" type=\"text\" formControlName=\"donor_city\" class=\"registerForm\">\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\n        </mat-error> -->\n</mat-form-field>\n</div>\n<!-- state -->\n<div class=\"registerForm\">\n<mat-form-field class=\"donor-signup-component\">\n  <input matInput placeholder=\"State\" type=\"text\" formControlName=\"donor_state\" class=\"registerForm\">\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\n        </mat-error> -->\n</mat-form-field>\n</div>\n<!-- zip code -->\n<div class=\"registerForm\">\n<mat-form-field class=\"donor-signup-component\">\n  <input matInput placeholder=\"Zip Code\" type=\"text\" formControlName=\"donor_zipCode\" class=\"registerForm\">\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\n        </mat-error> -->\n</mat-form-field>\n</div>\n<!-- phone numbeer -->\n<div class=\"registerForm\">\n<mat-form-field class=\"donor-signup-component\">\n  <input matInput placeholder=\"Phone Number\" type=\"tel\" formControlName=\"donor_phoneNumber\" class=\"registerForm\">\n  <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\n        </mat-error> -->\n</mat-form-field>\n</div>\n<!-- username -->\n<div class=\"registerForm\">\n  <mat-form-field class=\"donor-signup-component\">\n    <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"donor_username\" class=\"registerForm\">\n    <!-- <mat-error *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <mat-error *ngIf=\"f.username.errors.required\">Username is required</mat-error>\n        </mat-error> -->\n  </mat-form-field>\n</div>\n<!-- email -->\n<div class=\"registerForm\">\n  <mat-form-field class=\"donor-signup-component\">\n    <input matInput placeholder=\"Email\" formControlName=\"donor_email\" class=\"registerForm\" />\n    <!-- <mat-error *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <mat-error *ngIf=\"f.email.errors.required\">Email is required</mat-error>\n          </mat-error> -->\n  </mat-form-field>\n</div>\n<!-- password -->\n<div class=\"registerForm\">\n  <mat-form-field class=\"donor-signup-component\">\n    <input matInput placeholder=\"Password\" formControlName=\"donor_password\" class=\"registerForm\" />\n    <!-- <mat-error *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n              <mat-error *ngIf=\"f.password.errors.required\">Password is required</mat-error>\n              <mat-error *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</mat-error>\n          </mat-error> -->\n  </mat-form-field>\n</div>\n\n<!-- <div>\n        <mat-form-field class=\"donor-signup-component\">\n          <input matInput placeholder=\"Confirm Password\" formControlName=\"Password\" required>\n        </mat-form-field>\n      </div>  -->\n    </form>\n    \n    <div class=\"matButton-signup-card-signup\">\n      <button mat-raised-button [disabled]=\"loading\" class=\"submit\" (click)=onSubmit()>Signup</button>\n      <!-- <button mat-raised-button class=\"student\" routerLink=\"/usersignup\">I'm a User</button> -->\n   </div>\n    <a routerLink=\"/donorlogin\">Already have an account?</a>\n  </mat-card>\n"

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
        this.url = 'http://localhost:3000';
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

/***/ "./src/app/donor-dashboard/donor-dashboard-edit.html":
/*!***********************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard-edit.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/donor-dashboard/donor-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n    height: 81%;\n    margin-top: 4em;\n  }\n  \n  .sidenav {\n    /* width: 200px; */\n    width: 37%;\n  }\n  \n  .mat-toolbar.mat-primary {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 5em;\n  }\n  \n  table {\n    width: 30%;\n    height: 50%;\n    margin-top: 5em; \n    margin-left: 22em;\n  }\n  \n  #sideNavForm{\n    margin-top: 5em;\n    margin-left: 8em;\n  }\n  \n  #sideNavAmount{\n    margin-top: 5em;\n    margin-left: 8em;\n  }\n  \n  #listButton{\n    margin-top: 4em;\n    margin-left: 12em;\n    background-color: #ec528d;\n    color: white;\n  }\n  \n  #navTitle{\n    margin-top: 2em;\n    margin-left: 5.5em;\n  }\n  \n  #tableTitle{\n    margin-top: 2em;\n    margin-left: 16em;\n  }\n  \n  #tableUpdateButton{\n    margin-top: 2em;\n    margin-left: 25em;\n    background-color: #ec528d;\n    color: white;\n  }\n  \n  #tableDeleteButton{\n    margin-top: 2em;\n    margin-left: 1em;\n    background-color: #ec528d;\n    color: white;\n  }  "

/***/ }),

/***/ "./src/app/donor-dashboard/donor-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\"\n    [fixedInViewport]=\"options.value.fixed\" \n    [fixedTopGap]=\"options.value.top\"\n    [fixedBottomGap]=\"options.value.bottom\">\n    <h2 id=\"navTitle\">Add Donations</h2>\n    <form id=\"sideNavForm\" [formGroup]=\"addForm\" >\n        <mat-form-field>\n          <mat-select placeholder=\"Donation Options\" [(ngModel)]=\"selectedValue\" name=\"donations\" formControlName=\"item\">\n            <mat-option *ngFor=\"let donation of donations\" [value]=\"donation.value\" >\n              {{donation.viewValue}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      \n      </form>\n      <form id=\"sideNavAmount\" [formGroup]=\"addForm\">\n          <mat-form-field class=\"donation-amount\">\n            <input matInput placeholder=\"Donation Amount\" name=\"amount\" (value)= \"amount\" formControlName=\"amount\">\n          </mat-form-field>\n        </form>\n      <button mat-raised-button class=\"submit\" (click)=onSubmit() id=\"listButton\">Add to List</button>\n  </mat-sidenav>\n  <mat-sidenav-content>\n      <h2 id=\"tableTitle\">My Donations</h2>\n      <button mat-raised-button class=\"submit\" [routerLink]=\"['/profile']\" id=\"profileButton\">Donor Profile</button>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" id=\"donationTable\" > \n  \n        <ng-container matColumnDef=\"amount\">\n          <th mat-header-cell *matHeaderCellDef>Amount</th>\n          <td mat-cell *matCellDef=\"let donation\"> {{ donation.amount }}</td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"items\">\n          <th mat-header-cell *matHeaderCellDef>Items</th>\n          <td mat-cell *matCellDef=\"let donation\"> {{ donation.item }}</td>\n        </ng-container>\n          \n      <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <mat-checkbox></mat-checkbox>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\">\n            </mat-checkbox>\n          </td>\n        </ng-container>  \n      \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <button mat-raised-button (click)=\"openDialog()\" id=\"tableUpdateButton\">Edit Item</button>\n        <button mat-raised-button class=\"submit\" id=\"tableDeleteButton\">Delete Item</button>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n      "

/***/ }),

/***/ "./src/app/donor-dashboard/donor-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DonorDashboardComponent, DialogDataExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorDashboardComponent", function() { return DonorDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataExampleDialog", function() { return DialogDataExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _donor_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor-dashboard.service */ "./src/app/donor-dashboard/donor-dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_donor_state_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/donor-state-service.service */ "./src/app/services/donor-state-service.service.ts");
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









var DONATION_DATA = [];
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
        // editDonor: Donor; // the hero currently being edited
        this.displayedColumns = ["select", "amount", "items"];
        this.dataSource = DONATION_DATA;
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
        //setting donations to empty arry
        this.userDonations = [];
        this.options = formBuilder.group({
            bottom: 0,
            fixed: false,
            top: 65
        });
    }
    DonorDashboardComponent.prototype.ngOnInit = function () {
        console.log(this.donorStateService);
        this.donordashboardService.getDonations()
            .subscribe(function (data) {
            console.log(data);
            // this.userDonations = []
        });
        // this.donordashboardService.getDonationById(this.donorStateService.donor.id)
        // .subscribe( data => {
        //   console.log(data);
        //   // this.donor = data
        // })
        //      this.addForm = this.formBuilder.group({
        //       id: [],
        //        item: [''],
        //       amount: []
        //     .subscribe( data => {
        //       // this.donor = this.donor.filter(d => d !== donors);
        //     })
        // });
        this.addForm = this.formBuilder.group({
            id: [],
            item: [""],
            amount: []
        });
        //     .subscribe( data => {
        //       // this.donor = this.donor.filter(d => d !== donors);
        // editDonation(donors: Donor): void {
        //   localStorage.removeItem("editDonorId");
        //   localStorage.setItem("editDonorId", donors.id.toString());
        //   // this.router.navigate(['edit-donor']);
        // };
        // addDonation(): void {
        //   this.donordashboardService.createDonation(this.addForm.value)
        //   .subscribe( data => {
        //   })
        // }
        console.log(this.addForm);
    };
    // convenience getter for easy access to form fields
    // get f() { return this.addForm.controls; }
    DonorDashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.addForm.value);
        var donation = {
            used_shoes: parseInt(this.addForm.value.amount)
        };
        // stop here if form is invalid
        if (this.addForm.invalid) {
            return;
        }
        this.loading = true;
        console.log("test");
        this.donordashboardService
            .createDonation(donation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(function (data) {
            // this.alertService.success('Registration successful', true);
            console.log(data);
            _this.router.navigate(["/donordashboard"]);
        }, function (error) {
            // this.alertService.error(error);
            _this.loading = false;
        });
        this.donordashboardService.getDonationById(this.donor.id)
            .subscribe(function (data) {
            _this.donor = data;
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

var DialogDataExampleDialog = /** @class */ (function () {
    function DialogDataExampleDialog(data) {
        this.data = data;
    }
    DialogDataExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dialog-data-example-dialog",
            template: __webpack_require__(/*! ./donor-dashboard-edit.html */ "./src/app/donor-dashboard/donor-dashboard-edit.html")
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DialogDataExampleDialog);
    return DialogDataExampleDialog;
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
    DonorDashboardService.prototype.getDonations = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donation/");
    };
    DonorDashboardService.prototype.getDonationById = function (id) {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donation/" + id, this.httpOptions);
    };
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
        return this.http.post("{APIURL}/donation/createdonation", donation, this.httpOptions);
        // .pipe(
        //   catchError(this.handleError('createDonation', donation))
        // );
    };
    DonorDashboardService.prototype.updateDonation = function (donation) {
        return this.http.put("{APIURL}/donation/updatedonation", donation.id, this.httpOptions);
    };
    DonorDashboardService.prototype.deleteDonation = function (donation) {
        return this.http.delete("{APIURL}/donation/deletedonation", this.httpOptions);
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

module.exports = ".cardForProfile{\n    height: 50%;\n    width: 30%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 8em;\n    margin-top: 5%;\n    background-color: #lightblue;\n    border-radius: 50px;\n    text-align: center;\n}\n\n.cardForProfile a {\n    text-decoration: none;\n    color: #D9514E;\n}\n\n.cardForProfile a:hover {\n    text-decoration: underline;\n}\n\nbutton{\n    float: right;\n    margin: 1%;\n    background-color: #rgb(224, 184, 213);\n}\n\nbutton:hover{\n    color: black;\n    background-color: white;\n    border: 1px solid #rgb(224, 184, 213);\n\n}"

/***/ }),

/***/ "./src/app/donor-dashboard/donor-profile/donor-profile.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/donor-dashboard/donor-profile/donor-profile.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div> *ngIf='profileForm'>\n    <mat-card class=\"cardForProfile\">\n        <form [formGroup]=\"profileForm\">\n            <h1>Donor Profile</h1>\n        <div class=\"profileGroup\">\n            <mat-form-field>\n            <input matInput placeholder=\"First Name\"  type=\"text\" formControlName=\"donor_fname\" class=\"profileForm\" />\n          </mat-form-field>\n        </div>\n        <div class=\"profileForm\">\n            <mat-form-field>\n            <input matInput placeholder=\"Last Name\" type=\"text\" formControlName=\"donor_lname\" class=\"profileForm\" />\n          </mat-form-field>\n        </div>\n        <div class=\"profileForm\"> \n        <mat-form-field class=\"donor-signup-component\">\n          <input matInput placeholder=\"Username\" type=\"text\" formControlName=\"donor_username\" class=\"profileForm\"  >\n        </mat-form-field>\n        </div>\n  \n        <div class=\"profileForm\">\n          <mat-form-field class=\"donor-signup-component\">\n            <input matInput placeholder=\"Email\" formControlName=\"donor_email\" class=\"profileForm\"  />\n          </mat-form-field>\n        </div>\n      \n        <div class=\"profileForm\">\n          <mat-form-field class=\"donor-signup-component\">\n            <input matInput placeholder=\"Password\" formControlName=\"donor_password\" class=\"profileForm\" />\n          </mat-form-field>\n        </div>  \n        <div class=\"profileForm\">\n            <mat-form-field>\n            <input matInput placeholder=\"Address\"  type=\"text\" formControlName=\"donor_address\" class=\"profileForm\" />\n          </mat-form-field>\n          </div>\n          <div class=\"profileForm\">\n              <mat-form-field>\n              <input matInput placeholder=\"City\"  type=\"text\" formControlName=\"donor_city\" class=\"profileForm\" />\n            </mat-form-field>\n            </div>\n            <div class=\"profileForm\">\n                <mat-form-field>\n                <input matInput placeholder=\"State\"  type=\"text\" formControlName=\"donor_state\" class=\"profileForm\" />\n              </mat-form-field>\n              </div>\n      \n              <div class=\"profileForm\">\n                  <mat-form-field>\n                  <input matInput placeholder=\"ZipCode\"  type=\"text\" formControlName=\"donor_zipcode\" class=\"profileForm\" />\n                </mat-form-field>\n                </div>\n                <div class=\"profileForm\">\n                    <mat-form-field>\n                    <input matInput placeholder=\"Phone Number\"  type=\"text\" formControlName=\"donor_phonenumber\" class=\"profileForm\" />\n                  </mat-form-field> \n                  </div>\n      </form>\n      \n      <div class=\"matButton-signup-card-signup\">\n        <button mat-raised-button [disabled]=\"loading\" class=\"submit\" (click)=onSubmit()>Update</button>\n      </div>\n    </mat-card>\n  </div>\n  </div>\n\n "

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _donor_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donor-profile.service */ "./src/app/donor-dashboard/donor-profile/donor-profile.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function DonorProfileComponent(formBuilder, router, donorProfileservice, FormControlName) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.donorProfileservice = donorProfileservice;
        this.FormControlName = FormControlName;
        this.loading = false;
        this.submitted = false;
    }
    DonorProfileComponent.prototype.ngOnInit = function () {
        // this.profileGroup = this.formBuilder.group({
        //   donor_fname: [''],
        //   donor_email: [''],
        //   donor_lname: [''],
        //   donor_username: [''],
        //   donor_password: [''],
        //   donor_address: [''],
        //   donor_city: [''],
        //   donor_state: [''],
        //   donor_zipCode: [''],
        //   donor_phoneNumber: [''],
        // });
        this.profileGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            donor_fname: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]['donor_fname']
        });
    };
    Object.defineProperty(DonorProfileComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.profileGroup.controls; },
        enumerable: true,
        configurable: true
    });
    DonorProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.profileGroup.invalid) {
            return;
        }
        this.loading = true;
        this.donorProfileservice.updateDonor(this.profileGroup.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            // this.alertService.success('Registration successful', true);
            console.log(data);
            _this.router.navigate(['/donorlogin']);
        }, function (error) {
            // this.alertService.error(error);
            _this.loading = false;
        });
    };
    DonorProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donor-profile',
            template: __webpack_require__(/*! ./donor-profile.component.html */ "./src/app/donor-dashboard/donor-profile/donor-profile.component.html"),
            styles: [__webpack_require__(/*! ./donor-profile.component.css */ "./src/app/donor-dashboard/donor-profile/donor-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _donor_profile_service__WEBPACK_IMPORTED_MODULE_3__["DonorProfileService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]])
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
        this.baseUrl = 'http://localhost:3000/donor';
    }
    DonorProfileService.prototype.getDonors = function () {
        return this.http.get(this.baseUrl);
    };
    DonorProfileService.prototype.getDonorById = function (id) {
        return this.http.get("{APIURL}/donation/editdonor", this.httpOptions);
    };
    DonorProfileService.prototype.updateDonor = function (donor) {
        return this.http.put("{APIURL}/donation/editdonor", this.httpOptions);
    };
    DonorProfileService.prototype.deleteDonor = function (id) {
        return this.http.delete("{APIURL}/donation/editdonor", this.httpOptions);
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
    function DonorAuthService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    DonorAuthService.prototype.login = function (donor_username, donor_password) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["APIURL"] + "/donor/login", { donor_username: donor_username, donor_password: donor_password });
    };
    DonorAuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    DonorAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = ".about {\n    margin-top: 5em;\n    margin-bottom: 5em;\n}\n\nh1, h2 {\n    text-align: center;\n}\n\nimg {\n    margin-left: 36em;\n    width: 15%;\n    height: 15%;\n}"

/***/ }),

/***/ "./src/app/ui/about/about.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/about/about.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"about\">\n    <h1>About Sunshine's Bundles of Joy</h1>\n    <h3>Before Sunshine’s Bundles of Joy was established Annika Hudson started a group on Facebook called the Ladies place. She\n      was motivated to start a Baby Bag Drive because of her personal experience with having a baby. The first Baby Bag Drive\n      was a success and we decided to make this an annual event. I wanted to continue this awesome ideal. Sunshine’s Bundles\n      of Joy was established in 2016. On March 29th, 2017 the organization became a non-profit. Helping others\n      and making a difference in someone’s life brings me joy.</h3>\n\n    <h2>About Me</h2>\n    <img src=\"../../../assets/IMG-0615.jpeg\">\n    <h3>I am a mother of one and being a parent was the best gift I was ever given. Seeing happiness on the parents faces when\n      I am able to provide them with baby items is a blessing.</h3>\n  </div>\n\n</div>"

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

module.exports = ".contactForm {\n    margin-top: 5em;\n    text-align: center;\n    margin-bottom: 5em;\n}\n\ntextarea {\n    background-color: whitesmoke;\n    height: 18em;\n}\n\n.messageEntry {\n    width: 50%;\n}\n\nbutton {\n    color: black;\n    background-color: #rgb(224, 184, 213);\n}\n\nbutton:hover {\n    background-color: white;\n    border: solid 1px #rgb(224, 184, 213);\n}"

/***/ }),

/***/ "./src/app/ui/contact/contact.component.html":
/*!***************************************************!*\
  !*** ./src/app/ui/contact/contact.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactForm\">\n  <h2>Contact</h2>  \n\n  <form (submit)=\"onSubmit();\" method=\"POST\" action=\"https://formspree.io/ieshaduff@yahoo.com\">\n    <div class=\"infoFields\">\n      <mat-form-field>\n        <input matInput type=\"name\" name=\"name\" placeholder=\"Your name\">\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput type=\"phone\" name=\"phone\" placeholder=\"Your phone number\">\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"emailField\">\n        <input matInput type=\"email\" name=\"email\" placeholder=\"Your email\">\n      </mat-form-field>\n    </div>\n    <br>\n    <mat-form-field class=\"messageEntry\" appearance=\"outline\">\n      <textarea matInput name=\"message\" placeholder=\"Your message\"></textarea>\n    </mat-form-field>\n    <br>\n    <button mat-raised-button type=\"submit\">Send</button>\n  </form>\n</div>"

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

module.exports = ".navbar {\n    background-color: #lightblue;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n}\n\n.flexSpaceFill {\n    flex: 1 1 auto;\n}\n\n.cRight {\n    margin: auto 33%;\n}\n\na, img {\n    width: 42px;\n    height: 42px\n}"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\n  <span class=\"cRight\">© Copyright Sunshine's Bundles of Joy 2018</span>\n  <span class=\"flexSpaceFill\"></span>\n  <a href=\"https://www.facebook.com/Sunshines-Bundles-of-Joy-1929731860627820/\" target=\"blank\">\n    <img src=\"../../../assets/f-ogo_RGB_HEX-58.png\" alt=\"facebook\">\n  </a>\n</mat-toolbar>\n"

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

module.exports = "<app-navbar></app-navbar>\n<ng-content></ng-content>\n<app-footer></app-footer>"

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

module.exports = ".navbar {\n    background-color: #lightblue;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n.spaceFill {\n    flex: 1 1 auto;\n}\n\n.navButton {\n    background: #lightblue;\n    border-top: none;\n    border-bottom: none;\n    height: 100%;\n}\n\n#m1btn {\n    border-left: none;\n    border-right: none;\n}\n\n#m2btn {\n    border-right: none;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/ui/navbar/navbar.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navbar\">\n  <a routerLink=\"\">\n    <h3>Sunshine's Bundles of Joy</h3>\n  </a>\n  <span class=\"spaceFill\"></span>\n  <button mat-stroked-button class=\"navButton\" routerLink=\"/about\">About</button>\n  <button mat-stroked-button class=\"navButton\" id=\"m1btn\" routerLink=\"/contact\">Contact</button>\n  <button mat-stroked-button class=\"navButton\" id=\"m2btn\" routerLink=\"/donordashboard\">Dashboard </button>\n  <button mat-stroked-button class=\"navButton\"  [routerLink]=\"['/donorlogin']\">Logout</button>\n</mat-toolbar>"

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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/ui/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/ui/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    margin-top: 4em;\n    margin-bottom: 0;\n    text-align: center;\n}\n\np {\n    margin-top: 0;\n    text-align: center;\n}\n\n.choices {\n    margin: auto;\n    width: 25%;\n    background-color: whitesmoke;\n    height: 3em;\n}\n\n.itemField {\n    text-align: center;\n}\n\n.amountField {\n    margin-top: 3em;\n    background-color: whitesmoke;\n    height: 3em;\n    text-align: center\n}\n\n.addButton {\n    background-color: #rgb(224, 184, 213);\n    margin-left: 68%;\n    color: #191919;\n}\n\n.cdk-column-quantity {\n    width: 25%;\n}\n\nmat-sidenav-container {\n    height: 90.5%;\n}\n\nmat-sidenav {\n    width: 20em;\n}\n\n.reqButton {\n    background-color: #rgb(224, 184, 213);\n    color: #191919;\n    height: 15%;\n}\n\n.eButton {\n    background-color: rgb(122, 202, 122);\n}\n\n.dButton {\n    background-color: rgb(255, 148, 148);\n}"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #drawer\n  class=\"sidenav\"\n  [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n  [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n  [opened]=\"!(isHandset$ | async)\">\n    <h2>Requested donations</h2>\n    \n    <div>\n      <table class=\"sideTable\" #sideTable mat-table [dataSource]=\"basketDataSource\">\n        \n        <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <mat-checkbox></mat-checkbox>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\">\n            </mat-checkbox>\n          </td>\n        </ng-container>\n        \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>Item</th>\n          <td mat-cell *matCellDef=\"let basket\">{{basket.name}}</td>\n        </ng-container>\n        \n        <ng-container matColumnDef=\"quantity\">\n          <th mat-header-cell *matHeaderCellDef>Quantity</th>\n          <td mat-cell *matCellDef=\"let basket\">{{basket.quantity}}</td>\n        </ng-container>\n        \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n    <div class=\"sideButtons\">\n      <button class=\"eButton\" mat-raised-button>Edit</button>\n      <button class=\"dButton\" mat-raised-button>Del</button>\n      <button class=\"reqButton\" mat-raised-button>Send request</button>\n    </div>\n\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <h2>Donated Items</h2>\n    <p>Please note all items are subject to availability</p>\n      \n      <div class=\"choices\">\n        <mat-select class=\"itemField\" placeholder=\"Item(s)\">\n          <mat-option *ngFor=\"let request of requests\" [(value)]=\"requestedItem\">{{request.viewValue}}</mat-option>\n        </mat-select>\n        <mat-select class=\"amountField\" placeholder=\"Quantity\">\n          <mat-option *ngFor=\"let amount of amounts\" [(value)]=\"requestedAmount\">{{amount.value}}</mat-option>\n        </mat-select> \n      </div>\n      \n      <div class=\"button\">\n        <button class=\"addButton\" mat-raised-button (click)=\"testFunction()\">Add items</button>\n      </div>\n      \n  </mat-sidenav-content>\n</mat-sidenav-container>"

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
    case 'icd-bundleclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://icd-bundleapi.herokuapp.com/';
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

module.exports = __webpack_require__(/*! /Users/ieshaduff/Documents/JavaScriptMay2018/projects/sunshineBundles/BundleClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map