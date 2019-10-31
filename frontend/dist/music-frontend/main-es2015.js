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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- About-Area -->\n        <!-- here will be trending recpie cards-->\n        <section class=\"section-padding\" id=\"about_page\" style=\"margin-top: -13%\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-10 col-md-offset-1\">\n                            <div class=\"page-title text-center\">\n                                <img src=\"../../assets/homecomponentassets/images/about-logo.png\" alt=\"About Logo\">\n                                <div class=\"space-20\"></div>\n                                <h5 class=\"title\">About Cookify</h5>\n                                <div class=\"space-30\"></div>\n                                <h3 class=\"red-color\">Cookify helps you to know and build a delicious unique recipe and also connects you with world popular chef. </h3>\n                                <div class=\"space-20\"></div>\n                                <p>Remarkable frozen ready meals, prepared by our own chefs and delivered to your door via our nationwide delivery service. Or discover your local COOK shop!.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n           \n            \n            <!-- About-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar *ngIf=\"shownav\"></app-navbar>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-recommended/dashboard-recommended.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-recommended/dashboard-recommended.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: 60px;\">\n    <br>\n    <div class=\"container\" style=\"margin-top: 0px;\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"page-title text-center\">\n                    <h5 class=\"title\">Recommended Recipe</h5>\n                    <h3 class=\"dark-color\">Selected for you with Love</h3>\n                    <div class=\"space-60\"></div>\n                </div>\n            </div>\n        </div>\n        <div\nng2-carouselamos\n[width]=\"1000\"\n[items]=recipe\n(onSelectedItem)=\"tr($event.item.id)\"\n[$item]=\"itemTemplate\"\n[$prev]=\"prevTemplate\"\n[$next]=\"nextTemplate\" >\n</div>\n        <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"team-slide\">\n\n                            <ng-template #prevTemplate>\n                                            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                                            <div class=\"box-icon\">\n                                                                <i class=\"lnr lnr-chevron-left\"></i>\n                                                            </div>\n                                                    </div>\n                                  </ng-template>\n                        \n\n<ng-template let-item let-i=\"index\" #itemTemplate >\n\n<app-recipecard [recipe_name]=\"item.recipe_name\" [image_path]=\"item.image_path\" [cusine_name]=\"item.cusine_name\" [serve]=\"item.serve\" [duration]=\"item.duration\" [published_on]=\"item.published_on\" [master_name]=\"item.master_name\" [rating_value]=\"item.rating_value\" ></app-recipecard>\n\n</ng-template>\n\n\n<ng-template #nextTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-right\"></i>\n                            </div>\n                    </div>\n</ng-template>\n</div>\n</div>\n</div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loggednavbar></app-loggednavbar>\n\n<!-- <app-trending></app-trending> -->\n\n<app-dashboard-recommended></app-dashboard-recommended>\n<div class=\"service-box wow fadeInUp \" data-wow-delay=\"0.2s\" style=\"position: fixed; \">\n    <div class=\"plus\">\n        <button [routerLink]=\"['/publish-recipe']\"><span class=\"lnr lnr-plus-circle\"></span></button>\n    </div>\n</div>\n\n\n\n<app-recommendedbyhistory></app-recommendedbyhistory>\n<app-master></app-master>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Feature-Area -->\n<section class=\"feature-area section-padding-top\" id=\"features_page\">\n        <div class=\"container\">\n            <div class=\"row\" style=\"margin-top: -6%\" >\n                <div class=\"col-xs-12 col-sm-8 col-sm-offset-2\">\n                    <div class=\"page-title text-center\">\n                        <h5 class=\"title\">Features</h5>\n                        <div class=\"space-10\"></div>\n                        <h3>With cookify you can</h3>\n                        <div class=\"space-60\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                        <div class=\"box-icon\">\n                            <i class=\"lnr lnr-rocket\"></i>\n                        </div>\n                        <h4>Fast &amp; Powerful</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                    <div class=\"space-60\"></div>\n                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.4s\">\n                        <div class=\"box-icon\">\n                            <i class=\"lnr lnr-paperclip\"></i>\n                        </div>\n                        <h4>Easily Editable</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                    <div class=\"space-60\"></div>\n                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.6s\">\n                        <div class=\"box-icon\">\n                            <i class=\"lnr lnr-cloud-download\"></i>\n                        </div>\n                        <h4>Publish Recipe</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                    <div class=\"space-60\"></div>\n                </div>\n                <div class=\"hidden-xs hidden-sm col-md-4\">\n                    <figure class=\"mobile-image\">\n                        <img  src=\"../../assets/homecomponentassets/images/header-mobile.png\" alt=\"Feature Photo\">\n                    </figure>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-4\">\n                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                        <div class=\"box-icon\">\n                            <i class=\"lnr lnr-clock\"></i>\n                        </div>\n                        <h4>Chef Subscription</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                    <div class=\"space-60\"></div>\n                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.4s\">\n                        <div class=\"box-icon\">\n                            <i class=\"lnr lnr-laptop-phone\"></i>\n                        </div>\n                        <h4>Events</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                    <div class=\"space-60\"></div>\n                    <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.6s\">\n                        <div class=\"box-icon\">\n                            <i class=\"lnr lnr-cog\"></i>\n                        </div>\n                        <h4>Incridents Delivery</h4>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n                    </div>\n                    <div class=\"space-60\"></div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- Feature-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!-- Footer-Area -->\n   \n        <!-- Footer-Bootom -->\n        <footer>\n                <div class=\"footer-bottom\" id=\"contact_page\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-md-5\" style=\"color: #CB202D;\">\n                            <strong>Cookify</strong>\n                    \n                                <div class=\"space-30 hidden visible-xs\"></div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-7\">\n                                <div class=\"footer-menu\">\n                                    <ul>\n                                        <li><a href=\"#\">About</a></li>\n                                        <li><a href=\"#\">Features</a></li>\n                                        <li><a href=\"#\">Testimonial</a></li>\n                                        <li><a href=\"#\">Contacts</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- Footer-Bootom-End -->\n            </footer>\n            <!-- Footer-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homecomponent/homecomponent.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homecomponent/homecomponent.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Home-Area -->\n<header class=\"home-area overlay\" id=\"home_page\">\n    <div class=\"container\" style=\"margin-top: -14%\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 hidden-sm col-md-4\">\n                <figure class=\"mobile-image wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <img style=\"width:78%;margin-top: 25%\" src=\"../../assets/homecomponentassets/images/header-mobile.png\" alt=\"\">\n                </figure>\n            </div>\n            <div class=\"col-xs-12 col-md-8\" style=\"align-self: center\">\n                <div class=\"space-80 hidden-xs\"></div>\n                <h1 class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">Start your amazing recipe through cookify.</h1>\n                <div class=\"space-20\"></div>\n                <!-- <div class=\"desc wow fadeInUp\" data-wow-delay=\"0.6s\">\n                    <p>Cookify is a platform where you can connect with chef and publish your recipe.you can connect with chef and publish your recipe</p>\n                </div>\n                <div class=\"space-20\"></div> -->\n                   \n                    <div class=\"search wow fadeInUp\" data-wow-delay=\"0.8s\">\n                    <form>\n                        <input type=\"text\" class=\"control\" placeholder=\"Search recipe or chef...\" required=\"required\" id=\"serachvlaue\">\n                        <button class=\"bttn-white active\" type=\"submit\"><span class=\"lnr lnr-location\"></span>Search</button>\n                        <label class=\"mt10\" for=\"searchvalue\"></label>\n                    </form>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n</header>\n\n<div class=\"service-box wow fadeInUp \" data-wow-delay=\"0.2s\" style=\"position: fixed; \">\n    <div class=\"plus\">\n        <button [routerLink]=\"['/publish-recipe']\"><span class=\"lnr lnr-plus-circle\"></span></button>\n    </div>\n</div>\n\n\n<!-- Home-Area-End -->\n\n<app-trending ></app-trending>\n<app-master></app-master>\n<app-about></app-about>\n<app-features></app-features>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggednavbar/loggednavbar.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggednavbar/loggednavbar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- MainMenu-Area -->\n<nav class=\"mainmenu-area\" data-spy=\"affix\" data-offset-top=\"200\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#primary_menu\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!--  replace with your logo here cookify<a class=\"navbar-brand\" href=\"#home_page\"><img src=\"../assets/homecomponentassets/images/logo.png\" alt=\"Logo\"></a> -->\n        </div>\n       \n\n      \n\n        <div class=\"collapse navbar-collapse\" id=\"primary_menu\"  >\n            <ul class=\"nav navbar-nav mainmenu\" >\n                <li class=\"active\"><a href=\"#home_page\" [routerLink]=\"['/dashboard']\">Home</a></li>     \n                <li><a style=\"cursor: pointer\">Trending</a></li>\n                <li><a>Masters</a></li>\n                <li><a>About</a></li>\n                <li><a>Contacts</a></li>\n                <li><input type=\"text\" style=\"padding: 8%;overflow:hidden;border-radius: 50px;\" placeholder=\"Search recipe or chef...\" required=\"required\" id=\"serachvlaue\"></li>\n                <li><button class=\"bttn-default active\" type=\"submit\" style=\"margin-right: 20px; margin-left: 20px;\"><span class=\"lnr lnr-location\"></span>Search</button></li>\n             \n\n              \n                <li style=\"margin-left: 5px\"> <a>Logged In: {{user.username}}</a> </li>\n                <li style=\"margin-left:15px \">\n                 <!-- <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\"> -->\n                           <!-- <mat-icon>more_vert</mat-icon> -->\n                           <a (click)=\"login()\" [matMenuTriggerFor]=\"menu\"><mat-icon >toc</mat-icon></a>\n                         <!-- </button> -->\n                         <mat-menu #menu=\"matMenu\">\n                           <button mat-menu-item>\n                             <mat-icon>account_circle</mat-icon>\n                             <span>Profile Setting</span>\n                           </button>\n                           <button mat-menu-item>\n                             <mat-icon>build</mat-icon>\n                             <span>Account Setting</span>\n                           </button>\n                           <button mat-menu-item (click)=\"logout()\">\n                             <mat-icon>power_settings_new</mat-icon>\n                             <span>Log Out</span>\n                           </button>\n                         </mat-menu>\n          \n          </li>\n    \n\n            </ul>    \n            \n             \n        </div>\n\n            \n          \n        </div>\n    <!-- </div> -->\n</nav>\n<!-- MainMenu-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-wrapper bg-red p-t-100 p-b-100 font-robo\">\n        <div class=\"wrapper wrapper--w960\">\n            <div class=\"card card-2\">\n                <div class=\"card-heading\"></div>\n                <div class=\"card-body\">\n                    <h2 class=\"title\">Login into cookify</h2>\n                    \n                        <div>\n                         <input #username class=\"input--style-2\" type=\"text\" placeholder=\"UserName\">\n                          <input #password class=\"input--style-2\" type=\"password\" placeholder=\"Password\">\n                          <button class=\"btn btn--radius btn--green\" (click)=\"submitlogindetails(username.value,password.value)\" type=\"submit\">Log In</button>\n                        </div>\n                        <p>{{loginstatus}}</p>\n                    \n                    \n                    \n                    <div>\n                        <p>New User?</p>\n                        <a style=\"cursor: pointer\" (click)=\"register()\">Register_here</a>\n                        or Signup using \n                        <a href=\"#fb\">fb</a>&nbsp;\n                        <a href=\"#google\">google</a>\n                        \n                        \n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"testimonial-area\" id=\"master_page\"  style=\"margin-top: -13%\">\n        <br>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                        <div class=\"page-title text-center\">\n                                <h5 class=\"title\">Master Blasts</h5>\n                                <!-- <h3 class=\"dark-color\">Master's of the Week</h3>\n                                <div class=\"space-60\"></div> -->\n                        </div>\n                </div>\n            </div>\n            <div\n  ng2-carouselamos\n  [width]=\"1000\"\n  [items]=masterdata\n  [$item]=\"itemTemplate\"\n  (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n  [$prev]=\"prevTemplate\"\n  [$next]=\"nextTemplate\" >\n</div>\n            <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"team-slide\">\n\n                                <ng-template #prevTemplate>\n                                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                                                <div class=\"box-icon\">\n                                                                    <i class=\"lnr lnr-chevron-left\"></i>\n                                                                </div>\n                                                        </div>\n                                </ng-template>\n<ng-template let-item let-i=\"index\" #itemTemplate>\n      <app-mastercard [id]=\"item.id\" [master_name]=\"item.master_name\" [image_path]=\"item.image_path\" [cu]=\"item.cusine_name\" ></app-mastercard>\n</ng-template>\n\n\n<ng-template #nextTemplate>\n     \n\n        <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                        <div class=\"box-icon\">\n                            <i class=\"lnr lnr-chevron-right\"></i>\n                        </div>\n                </div>\n\n</ng-template>\n</div>\n<div align=\"center\">\n                <div class=\"space-50\"></div>\n                <a href=\"#\" class=\"bttn-default wow fadeInUp\" data-wow-delay=\"0.5s\">Be a Master</a>\n            </div>\n</div>\n</div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mastercard/mastercard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mastercard/mastercard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <div style=\"min-width: 300px;max-width: 350px;\" >\n        <div class=\"team-box\" (click)=\"master(id)\">\n               <div class=\"team-image\">\n                              <img src=\"{{image_path}}\"  alt=\"master image\">\n                </div>\n                            <h4>{{master_name}}</h4>\n                            <div style=\"display: flex;\">\n                                 <div *ngFor=\"let x of cu\" style=\"margin-right: 10px \">\n                                <span class=\" badge\" style=\"background-color: #78C257\">{{x}}</span>\n                            </div>\n                </div>\n                           \n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- MainMenu-Area -->\n<nav class=\"mainmenu-area\" data-spy=\"affix\" data-offset-top=\"200\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#primary_menu\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <!--  replace with your logo here cookify<a class=\"navbar-brand\" href=\"#home_page\"><img src=\"../assets/homecomponentassets/images/logo.png\" alt=\"Logo\"></a> -->\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"primary_menu\">\n            <ul class=\"nav navbar-nav mainmenu linkcursor\">\n                <li class=\"active\"><a [ngx-scroll-to]=\"'#home_page'\">Home</a></li>\n                \n               <li><a [ngx-scroll-to]=\"'#trending_page'\" >Trending</a></li>\n                <li><a [ngx-scroll-to]=\"'#master_page'\"  >Masters</a></li>\n                <li><a [ngx-scroll-to]=\"'#about_page'\" >About</a></li>\n                <li><a [ngx-scroll-to]=\"'#contact_page'\">Contacts</a></li>\n            </ul>\n            <div class=\"right-button hidden-xs\">\n                <a (click)=\"login()\" style=\"cursor: pointer\" >Login</a>\n            </div>\n        </div>\n    </div>\n</nav>\n<!-- MainMenu-Area-End -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/publish-recipe/publish-recipe.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publish-recipe/publish-recipe.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loggednavbar></app-loggednavbar>\n\n<div style=\"margin-top: 200px; margin-left: 10%; margin-right: 10%;\">\n\n\n<!-- <img src=\"\"/> -->\n\n<!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n  </button> -->\n  <mat-horizontal-stepper [linear]=\"false\" #stepper>\n\n    <!-- First stage of recipe publishing -->\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Fill recipe details</ng-template>\n\n                    <mat-form-field class=\"example-full-width\" style=\"padding: 20px;\" >\n                        <input #recipeName matInput placeholder=\"Name\" formControlName=\"firstCtrl\" required >\n                      </mat-form-field>\n                       <br/>\n                      <mat-form-field class=\"example-full-width\" style=\"padding: 20px;\">\n                        <textarea #description matInput placeholder=\"Description\" formControlName=\"firstCtrl\" required></textarea>\n\n                      </mat-form-field>\n                      <!-- <button>upload</button> -->\n                      <br/>\n                      <mat-form-field class=\"example-full-width\" style=\"padding: 20px;\">\n                        <input #cusine matInput placeholder=\"Cusine\" >\n                      </mat-form-field>\n\n                      <mat-form-field style=\"padding: 20px;\">\n                        <mat-label #course>Course</mat-label>\n                        <select #type matNativeControl required>\n                          <option value=\"starter\">Starters</option>\n                          <option value=\"Main Course\">Main Course</option>\n                          <option value=\"dessert\">Dessert</option>\n                          <option value=\"beverage\">Beverage</option>\n                        </select>\n                      </mat-form-field>\n                      <br/>\n                      <!-- <mat-form-field class=\"example-full-width\" style=\"padding: 20px;\">\n                        <input matInput placeholder=\"serves\" >\n                      </mat-form-field> -->\n                      <div>\n                      <button class=\"btn btn--radius btn--green\"  mat-button matStepperNext>Next</button>\n                      </div>\n                    </form>\n                </mat-step>\n\n\n        <!-- <mat-form-field>\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n        </mat-form-field> -->\n        <!-- <div>\n          <button mat-button matStepperNext class=\"btn btn--radius btn--green\">Next</button>\n        </div> -->\n\n\n      <!--Second Stage of recipe publishing  -->\n\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Add Ingredients</ng-template>\n        <mat-form-field>\n          <input #serves matInput placeholder=\"serves\" formControlName=\"secondCtrl\" required>\n\n        </mat-form-field>\n        <!-- <div class=\"align-right\">\n                <mat-chip-list aria-label=\"Fish selection\">\n                        <mat-chip>One fish</mat-chip>\n                        <mat-chip>Two fish</mat-chip>\n                        <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n                        <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n                      </mat-chip-list>\n        </div> -->\n        <!-- Division for adding ingredients -->\n        <div>\n        <mat-form-field class=\"example-chip-list\">\n                <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                  <mat-chip *ngFor=\"let ingredient of ingredients\" [selectable]=\"selectable\"\n                           [removable]=\"removable\" (removed)=\"remove(ingredient)\">\n                    {{ingredient.name}}\n                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                  </mat-chip>\n                  <input placeholder=\"New Ingredients...\"\n                         [matChipInputFor]=\"chipList\"\n                         [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                         [matChipInputAddOnBlur]=\"addOnBlur\"\n                         (matChipInputTokenEnd)=\"add($event)\">\n                </mat-chip-list>\n              </mat-form-field>\n\n            </div>\n\n            <!-- Ingredients addition finished -->\n\n            <!-- Add ingredients quantity  // table creation-->\n            <div style=\"overflow-x:auto;\">\n            <table  *ngFor=\"let ingredient of ingredients\" style=\"font-size:24px \">\n                <tr>\n                     <td>{{ingredient.name}}</td>\n                     <!-- <td style=\"padding-left: 20px;\"><input #name style=\"width: 40px; border: 2px solid red;\" placeholder={{ingredient.name}}></td> -->\n                     <td style=\"padding-left: 30px; width: 30% ;\"><input #measurement type=\"number\" class=\"form-control\"  placeholder={{ingredient.measurement}} style=\" min-width: 40px;\"></td>\n                     <td style=\"padding-left: 40px; width: 30% ;\"><!-- <input  style=\"width: 40px; border: 2px solid red;\" placeholder={{ingredient.unit}}> -->\n                      <mat-form-field style=\"padding: 20px;\">\n                          <mat-label >Course</mat-label>\n                          <select #unit matNativeControl required>\n                            <option value=\"tbs\">tbs</option>\n                            <option value=\"bowl\">bowl</option>\n                            <option value=\"gms\">gms</option>\n                            <option value=\"kgs\">kgs</option>\n                          </select>\n                        </mat-form-field>\n                    </td>\n                    <td style=\"width: 30% ;\">\n                     <button type=\"submit\" (click)=\"addIngredient(measurement.value,unit.value);enableDisableRule()\" class=\"btn btn--radius btn--green\" style=\"margin: 20px;\" [ngClass]=\"{'red' : toggle, 'green': !toggle}\">  {{status}}</button>\n                     </td>\n                 </tr>\n\n\n\n            </table>\n            </div>\n\n        <div>\n          <button mat-button matStepperPrevious class=\"btn btn--radius btn--green\" style=\"padding: 10px; margin: 10px;\">Back</button>\n          <button mat-button matStepperNext class=\"btn btn--radius btn--green\" style=\"padding: 10px; margin: 10px;\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <!-- Section to write recipe procedure -->\n    <mat-step>\n      <ng-template matStepLabel>Recipe Procedure</ng-template>\n         <h3>Give Procedure for recipe</h3>\n              <a *ngIf=\"n==1 || n==2 || n==3 || n==4 || n==5 \">\n\n                <input #stageDesc matInput placeholder=\"stage Description\">\n\n                <a  *ngFor=\"let link of links\">\n                     {{link}}\n                     <!-- <div style=\"margin-left:20%\"> -->\n                     <!-- <a *ngFor=\"let step of steps\">\n                        <br/> {{step}}\n                        <input matInput placeholder=\"serves\" >\n\n                      </a> -->\n                      <!-- <a *ngFor=\"let proce of processs\">\n                          {{proce.processName}}\n\n                             <a *ngFor=\"let proc of proce.process\">\n                          {{proc.processName}}\n                            </a> -->\n                            <!-- <input #step type=\"text\" style=\"border: 2px solid red;\">\n                            <button type=\"submit\" (click)=\"addProcess(step.value)\"> Add step</button>\n                        </a>  -->\n                      <!-- <button mat-raised-button class=\"example-action-button\" (click)=\"addStep()\">\n                          Add Stape\n                        </button> -->\n\n                    <!-- </div> -->\n\n                    <!-- <textarea #step type=\"text\" style=\"border: 2px solid red;\"></textarea> -->\n                    <mat-form-field class=\"example-full-width\">\n                        <textarea #step matInput ></textarea>\n                      </mat-form-field>\n                    <button type=\"submit\" (click)=\"addProcess(step.value);enableDisableRule1()\" class=\"btn btn--radius btn--green\" style=\"margin-left: 20px;\" [ngClass]=\"{'red' : toggle1, 'green': !toggle1}\">{{status1}}</button>\n                        <!-- <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                          <mat-icon>close</mat-icon>\n                        </button> -->\n\n\n\n                     <br/>\n\n\n\n\n\n                    </a>\n\n\n                <!-- <a mat-tab-link disabled>Disabled Link</a> -->\n\n\n         <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"addLink();\" style=\"margin:20px;\" >\n                  <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n              </button>\n\n\n            <button (click)=\"addStages(stageDesc.value);adda();\" class=\"btn btn--radius btn--green\"> <a *ngIf=\"a>0\"> Stage Confirmed</a> <a *ngIf=\"a==0\">  Confirm the Stage</a></button>\n\n            </a>\n\n\n            <br/>\n\n            <a *ngIf=\" n==2 || n==3 || n==4 || n==5  \">\n\n                <input #stageDesc1 matInput placeholder=\"stage Description\">\n\n\n              <a  *ngFor=\"let link of links1\">\n                   {{link}}\n                   <!-- <div style=\"margin-left:20%\"> -->\n                   <!-- <a *ngFor=\"let step of steps\">\n                      <br/> {{step}}\n                      <input matInput placeholder=\"serves\" >\n\n                    </a> -->\n                    <!-- <a *ngFor=\"let proce of processs\">\n                        {{proce.processName}}\n\n                           <a *ngFor=\"let proc of proce.process\">\n                        {{proc.processName}}\n                          </a> -->\n                          <!-- <input #step type=\"text\" style=\"border: 2px solid red;\">\n                          <button type=\"submit\" (click)=\"addProcess(step.value)\"> Add step</button>\n                      </a>  -->\n                    <!-- <button mat-raised-button class=\"example-action-button\" (click)=\"addStep()\">\n                        Add Stape\n                      </button> -->\n\n                  <!-- </div> -->\n\n                  <!-- <textarea #step type=\"text\" style=\"border: 2px solid red;\"></textarea> -->\n                  <mat-form-field class=\"example-full-width\">\n                      <textarea #step1 matInput ></textarea>\n                    </mat-form-field>\n                  <button type=\"submit\" (click)=\"addProcess1(step1.value);enableDisableRule1()\" class=\"btn btn--radius btn--green\" style=\"margin-left: 20px;\" [ngClass]=\"{'red' : toggle1, 'green': !toggle1}\">{{status1}}</button>\n                      <!-- <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                        <mat-icon>close</mat-icon>\n                      </button> -->\n\n\n\n                   <br/>\n\n\n\n\n\n                  </a>\n\n\n              <!-- <a mat-tab-link disabled>Disabled Link</a> -->\n<!--\n          <button (click)=\"addStage()\"></button> -->\n       <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"addLink1();\" style=\"margin:20px;\" >\n                <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n            </button>\n\n\n            <button (click)=\"addStages1(stageDesc1.value);adda1();\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a1>0\"> Stage Confirmed</a> <a *ngIf=\"a1==0\">  Confirm the Stage</a></button>\n\n          </a>\n\n          <br/>\n\n\n\n\n          <a *ngIf=\"n==3 || n==4 || n==5  \">\n\n              <input #stageDesc2 matInput placeholder=\"stage Description\">\n\n\n            <a  *ngFor=\"let link of links2\">\n                 {{link}}\n                 <!-- <div style=\"margin-left:20%\"> -->\n                 <!-- <a *ngFor=\"let step of steps\">\n                    <br/> {{step}}\n                    <input matInput placeholder=\"serves\" >\n\n                  </a> -->\n                  <!-- <a *ngFor=\"let proce of processs\">\n                      {{proce.processName}}\n\n                         <a *ngFor=\"let proc of proce.process\">\n                      {{proc.processName}}\n                        </a> -->\n                        <!-- <input #step type=\"text\" style=\"border: 2px solid red;\">\n                        <button type=\"submit\" (click)=\"addProcess(step.value)\"> Add step</button>\n                    </a>  -->\n                  <!-- <button mat-raised-button class=\"example-action-button\" (click)=\"addStep()\">\n                      Add Stape\n                    </button> -->\n\n                <!-- </div> -->\n\n                <!-- <textarea #step type=\"text\" style=\"border: 2px solid red;\"></textarea> -->\n                <mat-form-field class=\"example-full-width\">\n                    <textarea #step2 matInput ></textarea>\n                  </mat-form-field>\n                <button type=\"submit\" (click)=\"addProcess2(step2.value);enableDisableRule1()\" class=\"btn btn--radius btn--green\" style=\"margin-left: 20px;\" [ngClass]=\"{'red' : toggle1, 'green': !toggle1}\">{{status1}}</button>\n                    <!-- <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                      <mat-icon>close</mat-icon>\n                    </button> -->\n\n\n\n                 <br/>\n\n\n\n\n\n                </a>\n\n\n            <!-- <a mat-tab-link disabled>Disabled Link</a> -->\n\n\n     <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"addLink2();\" style=\"margin:20px;\" >\n             <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n          </button>\n\n          <button (click)=\"addStages2(stageDesc2.value);adda2();\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a2>0\"> Stage Confirmed</a> <a *ngIf=\"a2==0\">  Confirm the Stage</a></button>\n\n        </a>\n\n        <br/>\n\n\n\n\n        <a *ngIf=\" n==4 || n==5  \">\n\n            <input #stageDesc3 matInput placeholder=\"stage Description\">\n\n\n          <a  *ngFor=\"let link of links3\">\n               {{link}}\n               <!-- <div style=\"margin-left:20%\"> -->\n               <!-- <a *ngFor=\"let step of steps\">\n                  <br/> {{step}}\n                  <input matInput placeholder=\"serves\" >\n\n                </a> -->\n                <!-- <a *ngFor=\"let proce of processs\">\n                    {{proce.processName}}\n\n                       <a *ngFor=\"let proc of proce.process\">\n                    {{proc.processName}}\n                      </a> -->\n                      <!-- <input #step type=\"text\" style=\"border: 2px solid red;\">\n                      <button type=\"submit\" (click)=\"addProcess(step.value)\"> Add step</button>\n                  </a>  -->\n                <!-- <button mat-raised-button class=\"example-action-button\" (click)=\"addStep()\">\n                    Add Stape\n                  </button> -->\n\n              <!-- </div> -->\n\n              <!-- <textarea #step type=\"text\" style=\"border: 2px solid red;\"></textarea> -->\n              <mat-form-field class=\"example-full-width\">\n                  <textarea #step3 matInput ></textarea>\n                </mat-form-field>\n              <button type=\"submit\" (click)=\"addProcess3(step3.value);enableDisableRule1()\" class=\"btn btn--radius btn--green\" style=\"margin-left: 20px;\" [ngClass]=\"{'red' : toggle1, 'green': !toggle1}\">{{status1}}</button>\n                  <!-- <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                    <mat-icon>close</mat-icon>\n                  </button> -->\n\n\n\n               <br/>\n\n\n\n\n\n              </a>\n\n\n          <!-- <a mat-tab-link disabled>Disabled Link</a> -->\n\n\n   <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"addLink3();\" style=\"margin:20px;\" >\n            <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n        </button>\n\n        <button (click)=\"addStages3(stageDesc3.value);adda3();\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a3>0\"> Stage Confirmed</a> <a *ngIf=\"a3==0\">  Confirm the Stage</a></button>\n\n      </a>\n\n      <br/>\n\n\n\n\n      <a *ngIf=\" n==5  \">\n\n          <input #stageDesc4 matInput placeholder=\"stage Description\">\n\n\n        <a  *ngFor=\"let link of links4\">\n             {{link}}\n             <!-- <div style=\"margin-left:20%\"> -->\n             <!-- <a *ngFor=\"let step of steps\">\n                <br/> {{step}}\n                <input matInput placeholder=\"serves\" >\n\n              </a> -->\n              <!-- <a *ngFor=\"let proce of processs\">\n                  {{proce.processName}}\n\n                     <a *ngFor=\"let proc of proce.process\">\n                  {{proc.processName}}\n                    </a> -->\n                    <!-- <input #step type=\"text\" style=\"border: 2px solid red;\">\n                    <button type=\"submit\" (click)=\"addProcess(step.value)\"> Add step</button>\n                </a>  -->\n              <!-- <button mat-raised-button class=\"example-action-button\" (click)=\"addStep()\">\n                  Add Stape\n                </button> -->\n\n            <!-- </div> -->\n\n            <!-- <textarea #step type=\"text\" style=\"border: 2px solid red;\"></textarea> -->\n            <mat-form-field class=\"example-full-width\">\n                <textarea #step4 matInput ></textarea>\n              </mat-form-field>\n            <button type=\"submit\" (click)=\"addProcess4(step4.value);enableDisableRule1()\" class=\"btn btn--radius btn--green\" style=\"margin-left: 20px;\" [ngClass]=\"{'red' : toggle1, 'green': !toggle1}\">{{status1}}</button>\n                <!-- <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                  <mat-icon>close</mat-icon>\n                </button> -->\n\n\n\n             <br/>\n\n\n\n\n            </a>\n\n\n\n\n        <!-- <a mat-tab-link disabled>Disabled Link</a> -->\n\n\n <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"addLink4()\" style=\"margin:20px;\" >\n          <mat-icon style=\"padding-top: 5px;\">add</mat-icon>\n      </button>\n\n      <button (click)=\"addStages4(stageDesc4.value);adda4();\" class=\"btn btn--radius btn--green\"><a *ngIf=\"a4>0\"> Stage Confirmed</a> <a *ngIf=\"a4==0\">  Confirm the Stage</a></button>\n\n\n    </a>\n\n    <br/>\n\n\n\n            <button type=\"submit\" (click)=\"addn();\">Add Stage</button>\n\n\n\n              <!-- <button mat-raised-button class=\"example-action-button\" (click)=\"addStep()\">\n                          Submit Step\n                        </button> -->\n      <div>\n        <button mat-button matStepperPrevious class=\"btn btn--radius btn--green\" style=\"padding: 10px;margin: 10px;\">Back</button>\n        <button mat-button (click)=\"stepper.reset()\" class=\"btn btn--radius btn--green\" style=\"padding: 10px; margin: 10px;\">Reset</button>\n        <button mat-button (click)=\"publishRecipe(recipeName.value, description.value,cusine.value,type.value,serves.value)\" class=\"btn btn--radius btn--green\"   style=\"padding: 10px; margin: 10px;\" >Submit</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipecard/recipecard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipecard/recipecard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"max-width: 350px;min-width: 300px;\">\n    <div (click)=\"tr(id)\" class=\"team-boxrec\" >\n            <div>\n                    <img src=\"{{image_path}}\" style=\"width: 100%\" alt=\"\">\n            </div>\n\n            <div>\n                <strong><h4>{{recipe_name}}</h4></strong>\n            </div>\n\n\n\n            <div class=\"row\" >\n                <div class=\"col-sm-4\" style=\" color: #78C257\">\n                    <strong>{{cusine_name}}</strong>\n                </div>\n                  <div class=\"col-sm-4\" style=\"text-align: center\">\n                      <span class=\"lnr lnr-star\" ></span><b> {{rating_value}}</b>\n    \n                  \n                </div>\n                     <div class=\"col-sm-4\" style=\"text-align: end\">\n                      <strong>{{duration}}</strong>\n    \n                  \n                </div>\n                  \n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\" style=\"text-align: left\">\n                    <strong>Serve: {{serve}}</strong>\n                \n                </div>\n                <div class=\"col-sm-6\" style=\"text-align: end\">\n                  <b class=\"position\" style=\"font-size: 14px;\">{{master_name}}</b>\n                </div>\n\n            </div> \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipedetails/recipedetails.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipedetails/recipedetails.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid \" style=\"background: #eb4653;\" >\n<div class=\"container-fluid\" style=\"margin-top: 100px;\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\"> \n            <img  src={{recipedetail.recipe_image}} width=\"100%\" height=\"100%\">\n        </div>     \n        <div class=\"col-sm-6\">\n                <div class=\"card\" style=\"height:100%\">\n                       <div class=\"card-header\" style=\"background: #434345;color:antiquewhite\"></div>\n                        <div class=\"card-body\" style=\"color:#eb4653\">                              \n                            <p class=\"card-text\" >Published By: {{recipedetail.published_by}}</p>\n                            <p class=\"card-text\" >Duration: {{recipedetail.duration}}</p>\n                            <p class=\"card-text\" >Cuisine:{{recipedetail.cuisine}}</p>\n                            <p class=\"card-text\" >Serve For:{{recipedetail.serve_for}}</p>\n                            <p class=\"card-text\" >Price :{{recipedetail.price}}</p>\n                            \n                        </div>\n                 </div>\n        </div>\n    </div>\n</div>\n<div class=\"container-fluid\" style=\"margin-top: 5px;\">\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n            <div class=\"card text-white\" >\n                    \n                    <div class=\"card-body\" style=\"background: #eb4653\" >\n                      <h5 class=\"card-title\" style=\"color:#434345\">{{recipedetail.recipe_name}}</h5>\n                      <p class=\"card-text\" >{{recipedetail.descrition}}</p>\n                      <a href=\"#\" class=\"card-link\" style=\"color:#434345\">Add To Favourites</a>\n                      <a (click)=\"navtopage(recipedetail.re)\" class=\"card-link\" style=\"color:#434345;cursor: pointer;\">Try The Recipe</a>\n                      <a href=\"#\" class=\"card-link\" style=\"color:#434345\">Go to Cooking</a>\n                    </div>\n            </div>           \n    </div>   \n</div>\n</div>\n<div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"card\">\n                     <div class=\"card-header\" style=\"background: #434345 ; color:antiquewhite\" >Ingredients</div>\n                            <div class=\"card-body\" >                                 \n                                       <div class=\"container\"><div class=\"row\"><div class=\"col-sm-4\" *ngFor=\"let view of recipedetail.Ingredients\"><div class=\"card\" ><div class=\"card-body\" style=\"text-align:center\">  \n                                          <p class=\"card-text\" style=\"color:#eb4653\"> {{view.ingredient_used}} - {{view.Quantity}} </p>                                     \n                                       </div>  </div></div></div></div>\n\n                                    </div>                                  \n                            </div>\n                         </div>           \n          </div> \n</div>\n        \n        <div class=\"container-fluid\" style=\"margin-top: 5px;\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                            <div class=\"card \">\n                                    <div class=\"card-header\" style=\"background: #434345;color:antiquewhite\">Procedure</div>\n                                    <div class=\"card-body\">                                      \n                                      <p class=\"card-text\" *ngFor=\"let view of recipedetail.Procedure\" style=\"color:#eb4653\">{{view.steps}}</p> \n                                    </div>\n                              </div>           \n                        </div>   \n                    </div>\n                </div>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyhistory/recommendedbyhistory.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyhistory/recommendedbyhistory.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: 60px;\">\n    <br>\n    <div class=\"container\" style=\"margin-top: 0px;\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"page-title text-center\">\n                    <h5 class=\"title\">Recommended Recipe</h5>\n                    <h3 class=\"dark-color\">Based on your history</h3>\n                    <div class=\"space-60\"></div>\n                </div>\n            </div>\n        </div>\n        <div\nng2-carouselamos\n[width]=\"1000\"\n[items]=recipe\n(onSelectedItem)=\"tr($event.item.id)\"\n[$item]=\"itemTemplate\"\n[$prev]=\"prevTemplate\"\n[$next]=\"nextTemplate\" >\n</div>\n        <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"team-slide\">\n\n                            <ng-template #prevTemplate>\n                                            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                                            <div class=\"box-icon\">\n                                                                <i class=\"lnr lnr-chevron-left\"></i>\n                                                            </div>\n                                                    </div>\n                                  </ng-template>\n                        \n\n<ng-template let-item let-i=\"index\" #itemTemplate >\n\n<app-recipecard [recipe_name]=\"item.recipe_name\" [image_path]=\"item.image_path\" [cusine_name]=\"item.cusine_name\" [serve]=\"item.serve\" [duration]=\"item.duration\" [published_on]=\"item.published_on\" [master_name]=\"item.master_name\" [rating_value]=\"item.rating_value\" ></app-recipecard>\n\n</ng-template>\n\n\n<ng-template #nextTemplate>\n            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                            <div class=\"box-icon\">\n                                <i class=\"lnr lnr-chevron-right\"></i>\n                            </div>\n                    </div>\n</ng-template>\n</div>\n</div>\n</div>\n</div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"page-wrapper bg-red p-t-70 p-b-100 font-robo\">\n        <div class=\"wrapper wrapper--w960\">\n            <div class=\"card card-2\">\n                <div class=\"card-heading\"></div>\n                <div class=\"card-body\">\n                    <h3 class=\"title\">Register with cookify</h3>\n                    <form>\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <div>\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Name\" name=\"name\" [formControl]=\"nameFormControl\"\n                                           [errorStateMatcher]=\"matcher\">\n                                    <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                                    <!-- <mat-error *ngIf=\"!nameFormControl.hasError('required')\">\n                                      Please enter your name\n                                    </mat-error> -->\n                                    <mat-error *ngIf=\"nameFormControl.hasError('required')\">\n                                      Name is <strong>required</strong>\n                                    </mat-error>\n                                  </mat-form-field>\n                                <!-- <input #name class=\"input--style-2\" type=\"text\" placeholder=\"Name\" formControlName=\"name\" name=\"name\" required> -->\n                            </div>\n                        </div>\n                        <div class=\"col-5\">\n                            \n                            <!-- <input #email class=\"input--style-2\" type=\"text\" placeholder=\"Email\" formControlName=\"email\" name=\"email\" required> -->\n                            <mat-form-field class=\"example-full-width\">\n                                <input #email matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n                                        [errorStateMatcher]=\"matcher\">\n                                <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                                    Please enter a valid email address\n                                </mat-error>\n                                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                    Email is <strong>required</strong>\n                                </mat-error>\n                            </mat-form-field>\n                            \n                        </div>\n                    </div>\n                 \n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <div>\n                                <!-- <input #username class=\"input--style-2\" type=\"text\" placeholder=\"UserName\" formControlName=\"userName\" name=\"UserName\" required [pattern]=\"unamePattern\"> -->\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"UserName\" name=\"userName\" [formControl]=\"userNameFormControl\"\n                                           [errorStateMatcher]=\"matcher\">\n                                    <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                                    <!-- <mat-error *ngIf=\"!nameFormControl.hasError('required')\">\n                                      Please enter your name\n                                    </mat-error> -->\n                                    <mat-error *ngIf=\"userNameFormControl.hasError('required')\">\n                                      Username is <strong>required</strong>\n                                    </mat-error>\n                                    <mat-error *ngIf=\"userNameFormControl.hasError('pattern')\">\n                                            Username can only contain <strong>alphanumerics, underscores and hyphen</strong>\n                                          </mat-error>\n                                  </mat-form-field>\n                            </div>\n                            \n                        </div>\n                        <div class=\"col-5\">\n                            <div>\n                                    <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"Password\" name=\"password\" [formControl]=\"passwordFormControl\"\n                                                   [errorStateMatcher]=\"matcher\">\n                                            <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                                            <!-- <mat-error *ngIf=\"!nameFormControl.hasError('required')\">\n                                              Please enter your name\n                                            </mat-error> -->\n                                            <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n                                              Password is <strong>required</strong>\n                                            </mat-error>\n                                          </mat-form-field>\n                                <!-- <input #password class=\"input--style-2\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" name=\"Password\" required> -->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <div>\n                                    <mat-form-field class=\"example-full-width\">\n                                            <input #city matInput placeholder=\"City\" name=\"city\" [formControl]=\"cityFormControl\"\n                                                   [errorStateMatcher]=\"matcher\">\n                                            <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                                            <!-- <mat-error *ngIf=\"!nameFormControl.hasError('required')\">\n                                              Please enter your name\n                                            </mat-error> -->\n                                            <mat-error *ngIf=\"cityFormControl.hasError('required')\">\n                                              City is <strong>required</strong>\n                                            </mat-error>\n                                    </mat-form-field>\n                                <!-- <input #city class=\"input--style-2\" type=\"text\" placeholder=\"City\" formControlName=\"city\" name=\"city\" required> -->\n                            </div>\n                        </div>\n                        <div class=\"col-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Age\" name=\"age\" [formControl]=\"ageFormControl\"\n                                               [errorStateMatcher]=\"matcher\" >\n                                        <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n                                        <!-- <mat-error *ngIf=\"!nameFormControl.hasError('required')\">\n                                          Please enter your name\n                                        </mat-error> -->\n                                        <mat-error *ngIf=\"ageFormControl.hasError('required')\">\n                                          Age is <strong>required</strong>\n                                        </mat-error>\n                                        <mat-error *ngIf=\"ageFormControl.hasError('pattern')\">\n                                               Age can only be<strong> a number</strong>\n                                              </mat-error>\n                                </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-5\">\n                            <div>\n                                    <input class=\"input--style-2\" type=\"text\" placeholder=\"State\" name=\"state\"  (mouseup)=\"getStateAndCountry($event,city.value)\" value={{state}}>\n                            </div>\n                        </div>\n                        <div class=\"col-5\">\n                                <input class=\"input--style-2\" type=\"text\" placeholder=\"Country\" name=\"country\" disabled value={{country}}>\n                            <!-- <input #age class=\"input--style-2\" type=\"text\" placeholder=\"Age\" name=\"age\" formControlName=\"age\"> -->\n                        </div>\n                    </div>\n                    <div class=\"row-space\">\n                        <div>\n                            <label for=\"gender\">Gender</label>\n                        </div>\n                        \n                        \n                    <div class=\"form-check form-check-inline\">\n                        <label class=\"form-check-label\">\n                            <input #gender class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio1\" value=\"male\" checked=\"checked\">Male\n                        </label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                        <input #gender class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio2\" value=\"female\">Female\n                    </label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                        <input #gender class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio3\" value=\"other\">Other\n                    </label>\n                    </div>\n                        \n                        \n                    </div>\n                   <div>\n                        or signup using\n                        <a href=\"#fb\">fb</a>&nbsp;\n                        <a href=\"#google\">google</a>\n                    </div>\n                        <button class=\"btn btn--radius btn--green\" type=\"submit\" (click)=\"registerUser(name.value,email.value,username.value,password.value,city.value,age.value,gender.value)\">Next</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectinterests/selectinterests.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/selectinterests/selectinterests.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center\" style=\"background: #CB202D;padding-top: 70px;\" >\n   \n    <div class=\"card-header\" style=\"background: #CB202D;text-align: center;color:white\" >Thanks For Registering</div>\n    \n    <div class=\"card-body\" style=\"background:white\" >\n     <p style=\"text-align: center;color:#eb4653\">Choose Your Favourite Cuisines</p>\n     <a href=*><p  style=\"text-align: right;color:#434345;\">skip </p>\n      </a>\n      <form [formGroup]=\"recipeform\" >\n        <div class=\"container\">\n        <div class=\"row\">\n       <div class=\"col-sm-3\" *ngFor=\"let view of reposearch;let i=index\">\n            <div class=\"card-header\" style=\"background:#CB202D;; color:white\" >{{view.recipe_type}}</div> \n            <div class=\"card-body\"  >                                  \n            <img src={{view.recipe_image}} class=\"rounded-circle\" width=\"70%\" height=\"120px\">                        \n            \n       </div>    \n       <input type=\"checkbox\" style=\"align-content: right\" id={{i}} value=\"view\" (change)=\"onChange(view,$event.target.checked)\" >            \n    </div>\n    </div>\n    </div>\n    \n    <a  class=\"btn btn-primary\"  style=\"margin:auto\"  (click)=\"addfinal()\">REGISTER</a>\n</form>\n    </div>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/testcomponent/testcomponent.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testcomponent/testcomponent.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trending/trending.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trending/trending.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"testimonial-area\" id=\"trending_page\" style=\"margin-top: -10%\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"page-title text-center\">\n                        <h5 class=\"title\">Trending Recipe</h5>\n                        <!-- <h3 class=\"dark-color\">Loved by Many</h3> -->\n                        <!-- <div class=\"space-60\"></div> -->\n                    </div>\n                </div>\n            </div>\n            <div style=\"margin-top: -25px\"\n  ng2-carouselamos\n  [width]=\"1000\"\n  [items]=recipe\n  (onSelectedItem)=\"selectedItem = $event.item; selectedIndex = $event.index\"\n  [$item]=\"itemTemplate\"\n  [$prev]=\"prevTemplate\"\n  [$next]=\"nextTemplate\" >\n</div>\n            <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"team-slide\">\n\n                                <ng-template #prevTemplate>\n                                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                                                <div class=\"box-icon\">\n                                                                    <i class=\"lnr lnr-chevron-left\"></i>\n                                                                </div>\n                                                        </div>\n                                      </ng-template>\n                            \n\n<ng-template let-item let-i=\"index\" #itemTemplate >\n \n        <app-recipecard  [id]=\"item.id\" [recipe_name]=\"item.recipe_name\" [image_path]=\"item.recipe_image\" [cusine_name]=\"item.cuisine\" [serve]=\"item.serve_for\" [duration]=\"item.duration\" [published_on]=\"item.published_date\" [master_name]=\"item.published_by\" [rating_value]=\"item.rating\" ></app-recipecard>\n</ng-template>\n\n\n<ng-template #nextTemplate>\n                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                <div class=\"box-icon\">\n                                    <i class=\"lnr lnr-chevron-right\"></i>\n                                </div>\n                        </div>\n</ng-template>\n</div>\n</div>\n</div>\n</div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/tryrecipe.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/tryrecipe.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Nav Bar -->\n<app-loggednavbar></app-loggednavbar>\n\n<!-- Head Section -->\n<section id=\"head-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col-lg-8\">\n            <h1 style=\"color: #CB202D; text-align: center;\">{{recipe.recipe_name}}</h1>\n            <h3 style=\"color: #eb4653; text-align: center;\">{{recipe.cuisine}}</h3>\n            <br>\n            <form>\n                <label style=\"font-size: 2rem;\">Number of people to serve : {{num}}</label>\n                <button id=\"plus-button\" type=\"button\" class=\"btn btn-dark\"\n                    (click)=\"changeserve('minus')\" data-type=\"minus\" >\n                    <span class=\"glyphicon glyphicon-minus\"></span>\n                </button>\n                <button id=\"minus-button\" type=\"button\" class=\"btn btn-dark\"\n                    (click)=\"changeserve('plus')\" data-type=\"minus\">\n                    <span class=\"glyphicon glyphicon-plus\"></span>\n                </button><br><br>\n                <label style=\"font-size: 2rem;\">Estimated cooking time : {{recipe.duration}}</label>\n            </form>\n        </div>\n        <div class=col-lg-4>\n            <mat-card>\n                <img mat-card-image src={{recipe.recipe_image}} alt=\"Chicken Curry\">\t\n            </mat-card>\n        </div>\n        </div>\n    </div><br>\n\n</section>\n\n<!-- Ingredients and Procedure -->\n<section class=\"container\">\n<mat-tab-group>\n    <mat-tab label=\"Ingredients\">\n        <!-- Ingrediants Table -->\n            <h3 style=\"text-align: center; color: #CB202D; \">List of Ingredients</h3>\n            <table class=\"table table-striped table-bordered\" id=\"itable\" >\n                <thead class=\"thead-dark\">\n                    <tr style=\"text-align: center;\">\n                    <th scope=\"col\">No.</th>\n                    <th scope=\"col\">Ingredient</th>\n                    <th scope=\"col\">Quantity Required</th>\n                    <th scope=\"col\">Quantity In Hand</th>\n                    </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let ingredient of recipe.Ingredients; let i = index\">\n                    <td>{{i+1}}</td>\n                    <td>{{ingredient.ingredient_used}}</td>\n                    <td>{{ingredient.Quantity}}</td>\n                    <td>\n                        <input type=\"text\" [(ngModel)]=igQuantity[i] placeholder=\"Enter the quantity of {{ingredient.ingredient_used}} in hand\">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n    \n            <!-- Order -->\n            <button (click)=\"orderval()\" class=\"btn btn-success\">Order</button>\n    </mat-tab>\n\n<!-- Procedure Stages -->\n    <mat-tab label=\"Procedure\"><br>\n\n      <button [disabled]=\"isMainDisabled\" type=\"button\" class=\"btn btn-success\" (click)='startTimer(0)'>Start Cooking</button><br><br>\n\n<!-- Stages Expansion Panel -->\n      <mat-accordion *ngFor=\"let stage of recipe.procedure; let j = index\">\n        <mat-expansion-panel>\n          <mat-expansion-panel-header style=\"background: #CB202D ;\">\n            <mat-panel-title>\n              <h3 style=\"text-align: center; color: #ffff;\">\n                {{stage.stageDescription}}\n              </h3>\n            </mat-panel-title>\n            <mat-panel-description style=\"color: #ffff; padding-top: 2rem; justify-content: flex-end;\">\n              <strong>{{timeRem[j] | minuteSeconds}} minutes Left.... / {{stage.stageTime}}min</strong>\n            </mat-panel-description>\n          </mat-expansion-panel-header><br>\n          <ul *ngFor=\"let step of stage.steps; let i = index \">\n            <li> {{step.stepDescription}} </li>\n          </ul>\n          <button [disabled]=\"isStartDisabled\" type=\"button\" class=\"btn btn-outline-success\" (click)='startTimer(j)' style=\"color: green;\">Start Timer</button>\n          <button [disabled]=\"isPauseDisabled\" type=\"button\" class=\"btn btn-outline-danger\" (click)='pauseTimer()' style=\"color: red;\">Pause</button>\n        </mat-expansion-panel><br>\n      </mat-accordion>\n\n<!-- Navigate to rating  -->\n      <button type=\"button\" class=\"btn btn-warning\" >Cooking Done</button>\n    </mat-tab>\n</mat-tab-group>\n\n</section> <br><br> \n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loggednavbar></app-loggednavbar>\n<div class=\"p-t-70\">\n    <div class=\"container\">\n        <div class=\"row p-t-70\">\n\n            <div class=\"col-xs-6\">\n                <mat-card><img class=\"center\" src=\"{{user.image}}\" alt=\"user image\"></mat-card>\n            </div>\n            <div class=\"col-xs-6\">\n                <mat-card>\n                    <mat-card-title>UserName: {{user.username}}</mat-card-title>\n                    <mat-card-subtitle>Name: {{user.name}}</mat-card-subtitle>\n                    <mat-card-subtitle>Age: {{user.age}}</mat-card-subtitle>\n                    <mat-card-subtitle>Gender: {{user.gender}}</mat-card-subtitle>\n                    <mat-card-subtitle>Email: {{user.emailId}}</mat-card-subtitle>\n                </mat-card>\n            </div>\n        </div>\n        <div class=\"row\">\n                <div class=\"col-sm-12 col-xs-12 p-t-70\">\n                    <div class=\"page-title text-center\">\n                        <h5 class=\"title\">Recipes you have published</h5>\n                    </div>\n                </div>\n        </div>\n            <div\n                ng2-carouselamos\n                [width]=\"1000\"\n                [items]=recipespublished\n                (onSelectedItem)=\"tr($event.item.id)\"\n                [$item]=\"itemTemplate\"\n                [$prev]=\"prevTemplate\"\n                [$next]=\"nextTemplate\" >\n            </div>\n            <div class=\"row m-t-30\">\n                <div class=\"col-xs-12\">\n                    <div class=\"team-slide\">\n                        <ng-template #prevTemplate>\n                            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                <div class=\"box-icon\">\n                                    <i class=\"lnr lnr-chevron-left\"></i>\n                                </div>\n                            </div>\n                        </ng-template>\n                    \n                        <ng-template let-item let-i=\"index\" #itemTemplate >\n                          \n                            <app-recipecard style=\"background-color: white;\" [id]=\"item.recipeId\" [recipe_name]=\"item.recipeName\" [image_path]=\"item.images\" [cusine_name]=\"item.cuisine\" [serve]=\"item.serves\" [duration]=\"item.cookingTime\" [published_on]=\"item.publishedOn\" [master_name]=\"item.publishedBy\" [rating_value]=\"item.rating\" ></app-recipecard>\n                \n                        </ng-template>\n                        <ng-template #nextTemplate>\n                            <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                <div class=\"box-icon\">\n                                    <i class=\"lnr lnr-chevron-right\"></i>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n\n             \n            <div class=\"row\">\n                    <div class=\"col-sm-12 col-xs-12 p-t-70\">\n                        <div class=\"page-title text-center\">\n                            <h5 class=\"title\">Recipes you have tried</h5>\n                        </div>\n                    </div>\n            </div>\n                <div\n                    ng2-carouselamos\n                    [width]=\"1000\"\n                    [items]=recipesliked\n                    (onSelectedItem)=\"tr($event.item.id)\"\n                    [$item]=\"itemTemplate\"\n                    [$prev]=\"prevTemplate\"\n                    [$next]=\"nextTemplate\" >\n                </div>\n                <div class=\"row m-t-30\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"team-slide\">\n                            <ng-template #prevTemplate>\n                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                    <div class=\"box-icon\">\n                                        <i class=\"lnr lnr-chevron-left\"></i>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        \n                            <ng-template let-item let-i=\"index\" #itemTemplate >\n                                    <app-recipecard style=\"background-color: white;\" [id]=\"item.recipeId\" [recipe_name]=\"item.recipeName\" [image_path]=\"item.images\" [cusine_name]=\"item.cuisine\" [serve]=\"item.serves\" [duration]=\"item.cookingTime\" [published_on]=\"item.publishedOn\" [master_name]=\"item.publishedBy\" [rating_value]=\"item.rating\" ></app-recipecard>\n                            </ng-template>\n                            <ng-template #nextTemplate>\n                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                    <div class=\"box-icon\">\n                                        <i class=\"lnr lnr-chevron-right\"></i>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n              \n             <div class=\"row\">\n                    <div class=\"col-sm-12 col-xs-12 p-t-70\">\n                        <div class=\"page-title text-center\">\n                            <h5 class=\"title\">Recipes you have tried</h5>\n                        </div>\n                    </div>\n            </div>\n                <div\n                    ng2-carouselamos\n                    [width]=\"1000\"\n                    [items]=recipestried\n                    (onSelectedItem)=\"tr($event.item.id)\"\n                    [$item]=\"itemTemplate\"\n                    [$prev]=\"prevTemplate\"\n                    [$next]=\"nextTemplate\" >\n                </div>\n                <div class=\"row m-t-30\">\n                    <div class=\"col-xs-12\">\n                        <div class=\"team-slide\">\n                            <ng-template #prevTemplate>\n                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                    <div class=\"box-icon\">\n                                        <i class=\"lnr lnr-chevron-left\"></i>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        \n                            <ng-template let-item let-i=\"index\" #itemTemplate >\n                               \n                                <app-recipecard style=\"background-color: white;\" [id]=\"item.id\" [recipe_name]=\"item.recipeName\" [image_path]=\"item.images\" [cusine_name]=\"item.cuisine\" [serve]=\"item.serves\" [duration]=\"item.cookingTime\" [published_on]=\"item.publishedOn\" [master_name]=\"item.publishedBy\" [rating_value]=\"item.rating\" ></app-recipecard>\n                            </ng-template>\n                            <ng-template #nextTemplate>\n                                <div class=\"service-box wow fadeInUp\" data-wow-delay=\"0.2s\">\n                                    <div class=\"box-icon\">\n                                        <i class=\"lnr lnr-chevron-right\"></i>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n    </div> \n</div>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent", function() { return routingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homecomponent/homecomponent.component */ "./src/app/homecomponent/homecomponent.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipedetails/recipedetails.component */ "./src/app/recipedetails/recipedetails.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tryrecipe/tryrecipe.component */ "./src/app/tryrecipe/tryrecipe.component.ts");
/* harmony import */ var _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publish-recipe/publish-recipe.component */ "./src/app/publish-recipe/publish-recipe.component.ts");
/* harmony import */ var _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selectinterests/selectinterests.component */ "./src/app/selectinterests/selectinterests.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testcomponent/testcomponent.component */ "./src/app/testcomponent/testcomponent.component.ts");













const routes = [
    { path: '', redirectTo: '/homecomponent', pathMatch: 'full' },
    { path: 'test', component: _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_12__["TestcomponentComponent"] },
    { path: 'userprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__["UserprofileComponent"] },
    { path: 'homecomponent', component: _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_3__["HomecomponentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'recipedetails/:recipeid', component: _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_5__["RecipedetailsComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'tryrecipe/:recipeid', component: _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_8__["TryrecipeComponent"] },
    { path: 'publish-recipe', component: _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_9__["PublishRecipeComponent"] },
    { path: 'selectyourinterests', component: _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_10__["SelectinterestsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponent = [_homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_3__["HomecomponentComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_5__["RecipedetailsComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_8__["TryrecipeComponent"], _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_10__["SelectinterestsComponent"], _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_11__["UserprofileComponent"], _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_12__["TestcomponentComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  flex: 1;\n  background-color: aquamarine;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTztFQUNQLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.title = "music-frontend";
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.shownav = event.url == "/homecomponent";
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homecomponent/homecomponent.component */ "./src/app/homecomponent/homecomponent.component.ts");
/* harmony import */ var _trending_trending_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trending/trending.component */ "./src/app/trending/trending.component.ts");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/fesm2015/ng2-carouselamos.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _recipecard_recipecard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recipecard/recipecard.component */ "./src/app/recipecard/recipecard.component.ts");
/* harmony import */ var _mastercard_mastercard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mastercard/mastercard.component */ "./src/app/mastercard/mastercard.component.ts");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recipedetails/recipedetails.component */ "./src/app/recipedetails/recipedetails.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_recommended_dashboard_recommended_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard-recommended/dashboard-recommended.component */ "./src/app/dashboard-recommended/dashboard-recommended.component.ts");
/* harmony import */ var _loggednavbar_loggednavbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loggednavbar/loggednavbar.component */ "./src/app/loggednavbar/loggednavbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _recommendedbyhistory_recommendedbyhistory_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./recommendedbyhistory/recommendedbyhistory.component */ "./src/app/recommendedbyhistory/recommendedbyhistory.component.ts");
/* harmony import */ var _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./tryrecipe/tryrecipe.component */ "./src/app/tryrecipe/tryrecipe.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./publish-recipe/publish-recipe.component */ "./src/app/publish-recipe/publish-recipe.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./selectinterests/selectinterests.component */ "./src/app/selectinterests/selectinterests.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./testcomponent/testcomponent.component */ "./src/app/testcomponent/testcomponent.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _minute_seconds_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./minute-seconds.pipe */ "./src/app/minute-seconds.pipe.ts");














































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _homecomponent_homecomponent_component__WEBPACK_IMPORTED_MODULE_6__["HomecomponentComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_7__["TrendingComponent"], _master_master_component__WEBPACK_IMPORTED_MODULE_10__["MasterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_12__["FeaturesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _recipecard_recipecard_component__WEBPACK_IMPORTED_MODULE_15__["RecipecardComponent"], _mastercard_mastercard_component__WEBPACK_IMPORTED_MODULE_16__["MastercardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _recipedetails_recipedetails_component__WEBPACK_IMPORTED_MODULE_19__["RecipedetailsComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"], _dashboard_recommended_dashboard_recommended_component__WEBPACK_IMPORTED_MODULE_22__["DashboardRecommendedComponent"], _loggednavbar_loggednavbar_component__WEBPACK_IMPORTED_MODULE_23__["LoggednavbarComponent"], _recommendedbyhistory_recommendedbyhistory_component__WEBPACK_IMPORTED_MODULE_28__["RecommendedbyhistoryComponent"], _tryrecipe_tryrecipe_component__WEBPACK_IMPORTED_MODULE_29__["TryrecipeComponent"], _selectinterests_selectinterests_component__WEBPACK_IMPORTED_MODULE_40__["SelectinterestsComponent"], _publish_recipe_publish_recipe_component__WEBPACK_IMPORTED_MODULE_31__["PublishRecipeComponent"], _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_41__["UserprofileComponent"], _testcomponent_testcomponent_component__WEBPACK_IMPORTED_MODULE_42__["TestcomponentComponent"], _minute_seconds_pipe__WEBPACK_IMPORTED_MODULE_45__["MinuteSecondsPipe"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng2_carouselamos__WEBPACK_IMPORTED_MODULE_8__["Ng2CarouselamosModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__["MatChipsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_44__["MatExpansionModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_27__["ScrollToModule"].forRoot()
        ],
        providers: [_frontendservice_service__WEBPACK_IMPORTED_MODULE_17__["FrontendserviceService"], {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_35__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { displayDefaultIndicatorType: false }
            },
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_35__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { showError: true }
            },
            {
                provide: _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__["MAT_CHIPS_DEFAULT_OPTIONS"],
                useValue: {
                    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_37__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_37__["COMMA"]]
                }
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard-recommended/dashboard-recommended.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-recommended/dashboard-recommended.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtcmVjb21tZW5kZWQvZGFzaGJvYXJkLXJlY29tbWVuZGVkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard-recommended/dashboard-recommended.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard-recommended/dashboard-recommended.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardRecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRecommendedComponent", function() { return DashboardRecommendedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let DashboardRecommendedComponent = class DashboardRecommendedComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getallrecommendedrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
    tr(id) {
        console.log("clicked on trending recipe id:" + id);
    }
};
DashboardRecommendedComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
DashboardRecommendedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-recommended',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard-recommended.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-recommended/dashboard-recommended.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard-recommended.component.css */ "./src/app/dashboard-recommended/dashboard-recommended.component.css")).default]
    })
], DashboardRecommendedComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() {
        this.showFiller = false;
    }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/features/features.component.css":
/*!*************************************************!*\
  !*** ./src/app/features/features.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mobile-image{\n    animation: barun 3s infinite ease-in-out alternate-reverse;\n}\n@-webkit-keyframes barun{\n    0%{\n        transform: translateY(0px);\n     \n        \n    }\n    100%{\n        transform: translateY(15px);\n       \n    }\n}\n@keyframes barun{\n    0%{\n        transform: translateY(0px);\n     \n        \n    }\n    100%{\n        transform: translateY(15px);\n       \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwREFBMEQ7QUFDOUQ7QUFDQTtJQUNJO1FBQ0ksMEJBQTBCOzs7SUFHOUI7SUFDQTtRQUNJLDJCQUEyQjs7SUFFL0I7QUFDSjtBQVZBO0lBQ0k7UUFDSSwwQkFBMEI7OztJQUc5QjtJQUNBO1FBQ0ksMkJBQTJCOztJQUUvQjtBQUNKIiwiZmlsZSI6ImZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlLWltYWdle1xuICAgIGFuaW1hdGlvbjogYmFydW4gM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5Aa2V5ZnJhbWVzIGJhcnVue1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG4gICAgICAgXG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeaturesComponent = class FeaturesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-features',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./features.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/features.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./features.component.css */ "./src/app/features/features.component.css")).default]
    })
], FeaturesComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/frontendservice.service.ts":
/*!********************************************!*\
  !*** ./src/app/frontendservice.service.ts ***!
  \********************************************/
/*! exports provided: FrontendserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendserviceService", function() { return FrontendserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FrontendserviceService = class FrontendserviceService {
    constructor(http) {
        this.http = http;
        this.currentusernamesubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('username')));
        this.currentusername = this.currentusernamesubject.asObservable();
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('token')));
        this.currenttoken = this.token.asObservable();
    }
    getalltopmasters() {
        return this.http.get("http://localhost:3000/master");
    }
    getalltrendingrecipe() {
        return this.http.get("http://localhost:3000/Trending_Recipe");
    }
    getallrecommendedbyhistoryrecipe() {
        return this.http.get("http://localhost:3000/Trending_Recipe");
    }
    getallrecommendedrecipe() {
        return this.http.get("http://localhost:3000/Trending_Recipe");
    }
    login(user) {
        let _url = "http://localhost:8080/userLogin/authenticate";
        return this.http.post(_url, user, { observe: 'response' });
    }
    logout() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    }
    getStateAndCountry() {
        return this.http.get("http://localhost:3000/country");
    }
    getdataforinterests() {
        let _url = "http://localhost:3000/interestrecipes";
        return this.http.get(_url);
    }
    submitfinalfavourites(obj) {
        let _url1 = "http://localhost:3000/Favourites_selected";
        return this.http.post(_url1, obj);
    }
    postPublishRecipe(obj) {
        let urlz = "http://localhost:8082/api/v1/recipe";
        return this.http.post(urlz, obj);
    }
    getRecipeDetails(id) {
        return this.http.get("http://localhost:3000/Recipe_Details/" + id);
    }
    getUserDetails(username) {
        console.log(username + "from Service");
        return this.http.get("http://localhost:8111/api/v1/user/" + username);
    }
};
FrontendserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FrontendserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FrontendserviceService);



/***/ }),

/***/ "./src/app/homecomponent/homecomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/homecomponent/homecomponent.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lY29tcG9uZW50L2hvbWVjb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/homecomponent/homecomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/homecomponent/homecomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: HomecomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomecomponentComponent", function() { return HomecomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomecomponentComponent = class HomecomponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomecomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homecomponent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homecomponent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homecomponent/homecomponent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homecomponent.component.css */ "./src/app/homecomponent/homecomponent.component.css")).default]
    })
], HomecomponentComponent);



/***/ }),

/***/ "./src/app/loggednavbar/loggednavbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/loggednavbar/loggednavbar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainmenu-area{\n    background: rgb(203, 32, 45);\n    background: linear-gradient(45deg, rgba(203, 32, 45, 1) 0%, rgba(212, 70, 81, 1) 100%);\n  \n}\n\n.right-button    {\n    font-size: 96px;\n}\n\n.form-inline {\n    \n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlZG5hdmJhci9sb2dnZWRuYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUc1QixzRkFBc0Y7O0FBRTFGOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7RUFFRSIsImZpbGUiOiJsb2dnZWRuYXZiYXIvbG9nZ2VkbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbm1lbnUtYXJlYXtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAzLCAzMiwgNDUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDIwMywgMzIsIDQ1LCAxKSAwJSwgcmdiYSgyMTIsIDcwLCA4MSwgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDIwMywgMzIsIDQ1LCAxKSAwJSwgcmdiYSgyMTIsIDcwLCA4MSwgMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDIwMywgMzIsIDQ1LCAxKSAwJSwgcmdiYSgyMTIsIDcwLCA4MSwgMSkgMTAwJSk7XG4gIFxufVxuXG4ucmlnaHQtYnV0dG9uICAgIHtcbiAgICBmb250LXNpemU6IDk2cHg7XG59XG5cbi5mb3JtLWlubGluZSB7XG4gICAgXG4gIH1cblxuIl19 */");

/***/ }),

/***/ "./src/app/loggednavbar/loggednavbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/loggednavbar/loggednavbar.component.ts ***!
  \********************************************************/
/*! exports provided: LoggednavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggednavbarComponent", function() { return LoggednavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");





let LoggednavbarComponent = class LoggednavbarComponent {
    constructor(iconRegistry, sanitizer, service) {
        this.service = service;
        this.user = [];
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
    ngOnInit() {
        var username = localStorage.getItem('username');
        console.log(username, "checkcheck");
        this.service.getUserDetails(username).subscribe((data) => { console.log(data, "hellooo"); });
        this.service.getUserDetails("manoj1").subscribe((data) => { console.log(data, "hellooo"); });
    }
    logout() {
        this.service.logout();
    }
};
LoggednavbarComponent.ctorParameters = () => [
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__["FrontendserviceService"] }
];
LoggednavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loggednavbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loggednavbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loggednavbar/loggednavbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loggednavbar.component.css */ "./src/app/loggednavbar/loggednavbar.component.css")).default]
    })
], LoggednavbarComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mobile-image{\n    animation: barun 1s infinite ease-in-out alternate-reverse;\n}\n@-webkit-keyframes barun{\n    0%{\n        transform: scale(1);\n     \n        \n    }\n    100%{\n        transform: scale(0.96);\n       \n    }\n}\n@keyframes barun{\n    0%{\n        transform: scale(1);\n     \n        \n    }\n    100%{\n        transform: scale(0.96);\n       \n    }\n}\n.txt2 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #999999;\n  text-align: center;\n}\n/*==================================================================\n[ Social ]*/\n.login100-form-social-item {\n  width: 36px;\n  height: 36px;\n  font-size: 18px;\n  color: #3B5998;\n  border-radius: 50%;\n  margin-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwREFBMEQ7QUFDOUQ7QUFDQTtJQUNJO1FBQ0ksbUJBQW1COzs7SUFHdkI7SUFDQTtRQUNJLHNCQUFzQjs7SUFFMUI7QUFDSjtBQVZBO0lBQ0k7UUFDSSxtQkFBbUI7OztJQUd2QjtJQUNBO1FBQ0ksc0JBQXNCOztJQUUxQjtBQUNKO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBR0E7V0FDVztBQUNYO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2JpbGUtaW1hZ2V7XG4gICAgYW5pbWF0aW9uOiBiYXJ1biAxcyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbkBrZXlmcmFtZXMgYmFydW57XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcbiAgICAgICBcbiAgICB9XG59XG4udHh0MiB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuWyBTb2NpYWwgXSovXG4ubG9naW4xMDAtZm9ybS1zb2NpYWwtaXRlbSB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");






let LoginComponent = class LoginComponent {
    constructor(router, http, FrontEndService) {
        this.router = router;
        this.http = http;
        this.FrontEndService = FrontEndService;
        this.user = new _User__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    ngOnInit() {
        this.loginstatus = "";
    }
    register() {
        this.router.navigateByUrl(`/register`);
    }
    submitlogindetails(username, password) {
        this.user.username = username;
        this.user.password = password;
        this.FrontEndService.login(this.user).subscribe((res) => {
            if (res.status == 200) {
                localStorage.setItem('token', JSON.stringify(res.body));
                localStorage.setItem('username', JSON.stringify(username));
                this.router.navigate(['dashboard']);
            }
        }, (error) => {
            console.log(error, "bbbbbbb");
            if (error.status == 401)
                this.loginstatus = "Incorrect Details";
            // this.router.navigate(['register']);
        });
        // this.http.post<User>(_url,this.user,{observe:'response'}).subscribe((response)=>{
        //   if(response.status==401) {
        //     console.log("****")
        //   }
        //     console.log("passed with "+response)
        // });
        // this.http.post<any>(_url).subscribe((data)=>{this.token=data;console.log(data)});
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_4__["FrontendserviceService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXIvbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let MasterComponent = class MasterComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.masterdata = [];
    }
    ngOnInit() {
        this.fservice.getalltopmasters().subscribe(data => { this.masterdata = data; console.log(this.masterdata, "in master"); });
    }
    masterid(id) {
        console.log("clicked on master with id:" + id);
    }
};
MasterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/master/master.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")).default]
    })
], MasterComponent);



/***/ }),

/***/ "./src/app/mastercard/mastercard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mastercard/mastercard.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXJjYXJkL21hc3RlcmNhcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/mastercard/mastercard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mastercard/mastercard.component.ts ***!
  \****************************************************/
/*! exports provided: MastercardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastercardComponent", function() { return MastercardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MastercardComponent = class MastercardComponent {
    constructor() {
        this.cu = [];
    }
    ngOnInit() {
    }
    master(id) {
        console.log("clicked on master with id:" + id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "master_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "image_path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MastercardComponent.prototype, "cu", void 0);
MastercardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mastercard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mastercard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mastercard/mastercard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mastercard.component.css */ "./src/app/mastercard/mastercard.component.css")).default]
    })
], MastercardComponent);



/***/ }),

/***/ "./src/app/minute-seconds.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/minute-seconds.pipe.ts ***!
  \****************************************/
/*! exports provided: MinuteSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinuteSecondsPipe", function() { return MinuteSecondsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MinuteSecondsPipe = class MinuteSecondsPipe {
    transform(value) {
        const minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' +
            (value - minutes * 60).toString().padStart(2, '0');
    }
};
MinuteSecondsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'minuteSeconds'
    })
], MinuteSecondsPipe);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigateByUrl(`/login`);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/publish-recipe/publish-recipe.component.css":
/*!*************************************************************!*\
  !*** ./src/app/publish-recipe/publish-recipe.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 70%;\n  }\n  \n  .example-full-width {\n    width: 70%;\n  }\n  \n  .example-chip-list{\n    width: 60%;\n  }\n  \n  .example-form-field {\n    width: 200px;\n  }\n  \n  .green {\n    background-color: green;\n}\n  \n  .red {\n    background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2gtcmVjaXBlL3B1Ymxpc2gtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtBQUMzQjs7RUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJwdWJsaXNoLXJlY2lwZS9wdWJsaXNoLXJlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAuZXhhbXBsZS1jaGlwLWxpc3R7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5leGFtcGxlLWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIC5ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/publish-recipe/publish-recipe.component.ts":
/*!************************************************************!*\
  !*** ./src/app/publish-recipe/publish-recipe.component.ts ***!
  \************************************************************/
/*! exports provided: PublishRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishRecipeComponent", function() { return PublishRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");






// export interface Procedure{
//   procedureName: string;
//   process: Process[];
// }
let PublishRecipeComponent = class PublishRecipeComponent {
    constructor(_formBuilder, http, fservice) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.fservice = fservice;
        this.isLinear = false;
        this.isOptional = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.ingredients = [];
        this.n = 1;
        this.processs = [];
        this.stage = [];
        this.step = [];
        this.step1 = [];
        this.step2 = [];
        this.step3 = [];
        this.step4 = [];
        this.steps = ['Step 1'];
        this.activeStep = this.steps[0];
        this.links = [this.steps[0]];
        this.activeLink = this.links[0];
        this.steps1 = ['Step 1'];
        this.activeStep1 = this.steps1[0];
        this.links1 = [this.steps1[0]];
        this.activeLink1 = this.links1[0];
        this.steps2 = ['Step 1'];
        this.activeStep2 = this.steps2[0];
        this.links2 = [this.steps2[0]];
        this.activeLink2 = this.links2[0];
        this.steps3 = ['Step 1'];
        this.activeStep3 = this.steps3[0];
        this.links3 = [this.steps3[0]];
        this.activeLink3 = this.links3[0];
        this.steps4 = ['Step 1'];
        this.activeStep4 = this.steps4[0];
        this.links4 = [this.steps4[0]];
        this.activeLink4 = this.links4[0];
        this.a = 0;
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.a4 = 0;
        this.toggle = true;
        this.status = 'Confirm Ingredients';
        this.toggle1 = true;
        this.status1 = 'Confirm Step';
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        console.log(this.processs);
        console.log(this.ingredients);
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.ingredients.push({ category: "tom",
                name: value.trim(),
                measurement: 45,
                unit: "tom" });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(ingredients) {
        const index = this.ingredients.indexOf(ingredients);
        if (index >= 0) {
            this.ingredients.splice(index, 1);
        }
    }
    addLink() {
        this.links.push(`Step ${this.links.length + 1}`);
    }
    addLink1() {
        this.links1.push(`Step ${this.links1.length + 1}`);
    }
    addLink2() {
        this.links2.push(`Step ${this.links2.length + 1}`);
    }
    addLink3() {
        this.links3.push(`Step ${this.links3.length + 1}`);
    }
    addLink4() {
        this.links4.push(`Step ${this.links4.length + 1}`);
    }
    // addStep() {
    //   this.steps.push(`Step ${this.steps.length + 1}`);
    // }
    addProcess(value) {
        this.step.push({ stepContent: value });
    }
    addProcess1(value) {
        this.step1.push({ stepContent: value });
    }
    addProcess2(value) {
        this.step2.push({ stepContent: value });
    }
    addProcess3(value) {
        this.step3.push({ stepContent: value });
    }
    addProcess4(value) {
        this.step4.push({ stepContent: value });
    }
    adda() {
        this.a++;
    }
    adda1() {
        this.a1++;
    }
    adda2() {
        this.a2++;
    }
    adda3() {
        this.a3++;
    }
    adda4() {
        this.a4++;
    }
    // addStages(value){
    //   if(this.n==1){
    //   this.stage.push({stageDescription:value,steps:this.step});
    //   }else if(this.n==2){
    //     this.stage.push({stageDescription:value,steps:this.step1});
    //     } else if(this.n==3){
    //       this.stage.push({stageDescription:value,steps:this.step2});
    //       } else if(this.n==4){
    //         this.stage.push({stageDescription:value,steps:this.step3});
    //         } else if(this.n==5){
    //           this.stage.push({stageDescription:value,steps:this.step4});
    //           }
    // }
    addStages(value) {
        this.stage.push({ stageName: value, duration: 0, steps: this.step });
    }
    addStages1(value) {
        this.stage.push({ stageName: value, duration: 0, steps: this.step1 });
    }
    addStages2(value) {
        this.stage.push({ stageName: value, duration: 0, steps: this.step2 });
    }
    addStages3(value) {
        this.stage.push({ stageName: value, duration: 0, steps: this.step3 });
    }
    addStages4(value) {
        this.stage.push({ stageName: value, duration: 0, steps: this.step4 });
    }
    addIngredient(value1, value2) {
        let n = this.ingredients.length;
        if (this.ingredients.length > 0) {
            this.ingredients[n - 1].category = '';
            // this.ingredients[n-1].name=value;
            this.ingredients[n - 1].measurement = value1;
            this.ingredients[n - 1].unit = value2;
        }
        else {
            this.ingredients[0].category = '';
            // this.ingredients[0].name=value;
            this.ingredients[0].measurement = value1;
            this.ingredients[0].unit = value2;
        }
    }
    enableDisableRule(job) {
        this.toggle = !this.toggle;
        this.status = this.toggle ? 'Confirm Ingredients' : 'Ingredients Confirmed';
    }
    enableDisableRule1(job) {
        this.toggle1 = !this.toggle1;
        this.status1 = this.toggle1 ? 'Confirm Step' : 'Step Confirmed';
    }
    publishRecipe(value1, value2, value3, value4, value5) {
        this.procedure = ({ stages: this.stage });
        let recipe = ({ recipeName: value1,
            description: value2,
            cuisine: value3,
            course: value4,
            servesFor: value5,
            images: [],
            price: 0,
            publishedBy: '',
            rating: 0,
            //           procedure:this.stage,
            procedure: this.procedure,
            ingredients: this.ingredients,
            comment: [],
            ratingCount: 0,
            duration: 0,
            publishedOn: Date.now()
        });
        //Empty image array being send
        //Getting todays date
        // let dateFormat = require('dateformat');
        // let now = new Date();
        // this.recipe.publishedOn=dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        this.fservice.postPublishRecipe(recipe).subscribe();
    }
    addn() {
        if (this.n == 5) {
        }
        else {
            this.n++;
        }
    }
};
PublishRecipeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_5__["FrontendserviceService"] }
];
PublishRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publish-recipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./publish-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/publish-recipe/publish-recipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./publish-recipe.component.css */ "./src/app/publish-recipe/publish-recipe.component.css")).default]
    })
], PublishRecipeComponent);



/***/ }),

/***/ "./src/app/recipecard/recipecard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/recipecard/recipecard.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVjYXJkL3JlY2lwZWNhcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/recipecard/recipecard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recipecard/recipecard.component.ts ***!
  \****************************************************/
/*! exports provided: RecipecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipecardComponent", function() { return RecipecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RecipecardComponent = class RecipecardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        console.log(this.id, "bar");
        console.log(this.recipe_name);
        console.log(this.duration);
    }
    tr(id) {
        this.router.navigateByUrl(`/recipedetails/${id}`);
    }
};
RecipecardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "recipe_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "cusine_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "image_path", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "serve", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "duration", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "published_on", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "master_name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipecardComponent.prototype, "rating_value", void 0);
RecipecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipecard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipecard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipecard/recipecard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipecard.component.css */ "./src/app/recipecard/recipecard.component.css")).default]
    })
], RecipecardComponent);



/***/ }),

/***/ "./src/app/recipedetails/detail.service.ts":
/*!*************************************************!*\
  !*** ./src/app/recipedetails/detail.service.ts ***!
  \*************************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetailService = class DetailService {
    constructor(http) {
        this.http = http;
        this._url = "http://localhost:4006/Recipe_details";
        this._url1 = "http://localhost:4006/Ingredients";
        this._url2 = "http://localhost:4006/Procedure";
    }
    getrecipedetails() {
        return this.http.get(this._url);
    }
    getrecing() {
        return this.http.get(this._url1);
    }
    getproce() {
        return this.http.get(this._url2);
    }
};
DetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetailService);



/***/ }),

/***/ "./src/app/recipedetails/recipedetails.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGVkZXRhaWxzL3JlY2lwZWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/recipedetails/recipedetails.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipedetailsComponent", function() { return RecipedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.service */ "./src/app/recipedetails/detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let RecipedetailsComponent = class RecipedetailsComponent {
    constructor(search1, route, router, http) {
        this.search1 = search1;
        this.route = route;
        this.router = router;
        this.http = http;
        this.title = 'recipe';
        this.recipedetail = {};
    }
    ngOnInit() {
        this.recipeid = this.route.snapshot.paramMap.get('recipeid');
        let _url = `http://localhost:3000/Recipe_details/` + this.recipeid;
        this.http.get(_url).subscribe((data) => { this.recipedetail = data; console.log(data); });
    }
    navtopage() {
        this.router.navigateByUrl(`/tryrecipe/${this.recipeid}`);
    }
};
RecipedetailsComponent.ctorParameters = () => [
    { type: _detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
RecipedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipedetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipedetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipedetails/recipedetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipedetails.component.css */ "./src/app/recipedetails/recipedetails.component.css")).default]
    })
], RecipedetailsComponent);



/***/ }),

/***/ "./src/app/recommendedbyhistory/recommendedbyhistory.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/recommendedbyhistory/recommendedbyhistory.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvbW1lbmRlZGJ5aGlzdG9yeS9yZWNvbW1lbmRlZGJ5aGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/recommendedbyhistory/recommendedbyhistory.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/recommendedbyhistory/recommendedbyhistory.component.ts ***!
  \************************************************************************/
/*! exports provided: RecommendedbyhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedbyhistoryComponent", function() { return RecommendedbyhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let RecommendedbyhistoryComponent = class RecommendedbyhistoryComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getallrecommendedbyhistoryrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
    tr(id) {
        console.log("clicked on trending recipe id:" + id);
    }
};
RecommendedbyhistoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
RecommendedbyhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recommendedbyhistory',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recommendedbyhistory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recommendedbyhistory/recommendedbyhistory.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recommendedbyhistory.component.css */ "./src/app/recommendedbyhistory/recommendedbyhistory.component.css")).default]
    })
], RecommendedbyhistoryComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {box-sizing: border-box}\n\n/* Add padding to containers */\n\n.container {\n  padding: 16px;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Overwrite default styles of hr */\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* Set a style for the submit/register button */\n\n.registerbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.registerbtn:hover {\n  opacity:1;\n}\n\n/* Add a blue text color to links */\n\na {\n  color: dodgerblue;\n}\n\n/* Set a grey background color and center the text of the \"sign in\" section */\n\n.signin {\n  background-color: #f1f1f1;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0I7O0FBRXpCLDhCQUE4Qjs7QUFDOUI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsNEJBQTRCOztBQUM1QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQSwrQ0FBK0M7O0FBQy9DO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLDZFQUE2RTs7QUFDN0U7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxuXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXG4ucmVnaXN0ZXJidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5yZWdpc3RlcmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6MTtcbn1cblxuLyogQWRkIGEgYmx1ZSB0ZXh0IGNvbG9yIHRvIGxpbmtzICovXG5hIHtcbiAgY29sb3I6IGRvZGdlcmJsdWU7XG59XG5cbi8qIFNldCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciBhbmQgY2VudGVyIHRoZSB0ZXh0IG9mIHRoZSBcInNpZ24gaW5cIiBzZWN0aW9uICovXG4uc2lnbmluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let RegisterComponent = class RegisterComponent {
    constructor(frontendserviceservice, http, router) {
        this.frontendserviceservice = frontendserviceservice;
        this.http = http;
        this.router = router;
        this.state = "";
        this.country = "";
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
        ]);
        this.nameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-zA_Z ]*")
        ]);
        this.userNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-z0-9_-]*")
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.ageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[0-9]{1,3}")
        ]);
        this.cityFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
    }
    getStateAndCountry($event, city) {
        this.frontendserviceservice.getStateAndCountry().subscribe((data) => {
            console.log(data);
            for (var i in Object.keys(data)) {
                let s = data[i].city;
                console.log(s.length);
                if (s == city) {
                    this.state = data[i].state;
                    this.country = data[i].country;
                    break;
                }
            }
        });
    }
    registerUser(name, email, userName, password, city, age, gender) {
        console.log(name + email + userName + password + city + age + gender);
        var userObj = { name: name, emailId: email, username: userName, password: password, city: city, state: this.state, country: this.country, age: age, gender: gender };
        var url = "http://localhost:8080/userLogin/register";
        this.http.post(url, userObj).subscribe();
        this.router.navigateByUrl(`/selectyourinterests`);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__["FrontendserviceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/selectinterests/selectinterests.component.css":
/*!***************************************************************!*\
  !*** ./src/app/selectinterests/selectinterests.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3RpbnRlcmVzdHMvc2VsZWN0aW50ZXJlc3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/selectinterests/selectinterests.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/selectinterests/selectinterests.component.ts ***!
  \**************************************************************/
/*! exports provided: SelectinterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectinterestsComponent", function() { return SelectinterestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SelectinterestsComponent = class SelectinterestsComponent {
    constructor(formBuilder, search1, router) {
        this.formBuilder = formBuilder;
        this.search1 = search1;
        this.router = router;
        this.reposearch = [];
        this.recipeform = this.formBuilder.group({
            favourites: this.formBuilder.array([])
        });
    }
    addfinal() {
        this.search1.submitfinalfavourites(this.recipeform.value.favourites).subscribe();
        console.log(this.recipeform.value.favourites);
        this.router.navigateByUrl(`/login`);
    }
    onChange(view, isChecked) {
        const control = this.recipeform.controls.favourites;
        if (isChecked) {
            control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](view));
            console.log(this.recipeform);
            console.log(control);
            console.log(view);
            console.log(this.recipeform.value.favourites);
        }
        else {
            const index = control.controls.findIndex(x => (x.value == view));
            console.log(view);
            control.removeAt(index);
            console.log(index);
        }
    }
    ngOnInit() {
        this.search1.getdataforinterests().subscribe(data => { this.reposearch = data; console.log(data); });
    }
};
SelectinterestsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SelectinterestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectinterests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selectinterests.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/selectinterests/selectinterests.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./selectinterests.component.css */ "./src/app/selectinterests/selectinterests.component.css")).default]
    })
], SelectinterestsComponent);



/***/ }),

/***/ "./src/app/testcomponent/testcomponent.component.css":
/*!***********************************************************!*\
  !*** ./src/app/testcomponent/testcomponent.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0Y29tcG9uZW50L3Rlc3Rjb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/testcomponent/testcomponent.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/testcomponent/testcomponent.component.ts ***!
  \**********************************************************/
/*! exports provided: TestcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcomponentComponent", function() { return TestcomponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestcomponentComponent = class TestcomponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestcomponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testcomponent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testcomponent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/testcomponent/testcomponent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testcomponent.component.css */ "./src/app/testcomponent/testcomponent.component.css")).default]
    })
], TestcomponentComponent);



/***/ }),

/***/ "./src/app/trending/trending.component.css":
/*!*************************************************!*\
  !*** ./src/app/trending/trending.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZGluZy90cmVuZGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/trending/trending.component.ts":
/*!************************************************!*\
  !*** ./src/app/trending/trending.component.ts ***!
  \************************************************/
/*! exports provided: TrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingComponent", function() { return TrendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");




let TrendingComponent = class TrendingComponent {
    constructor(http, fservice) {
        this.http = http;
        this.fservice = fservice;
        this.recipe = [];
    }
    ngOnInit() {
        this.fservice.getalltrendingrecipe().subscribe(data => { this.recipe = data; console.log(this.recipe, "data of trending recipe"); });
    }
};
TrendingComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
TrendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trending',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trending.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trending/trending.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trending.component.css */ "./src/app/trending/trending.component.css")).default]
    })
], TrendingComponent);



/***/ }),

/***/ "./src/app/tryrecipe/tryrecipe.component.css":
/*!***************************************************!*\
  !*** ./src/app/tryrecipe/tryrecipe.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#head-section {\n    margin-top: 15rem;\n}\n#serve-form {\n    text-align: unset;\n}\n#plus-button {\n    margin-left: 1rem;\n    margin-right: 1rem;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyeXJlY2lwZS90cnlyZWNpcGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InRyeXJlY2lwZS90cnlyZWNpcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xufVxuI3NlcnZlLWZvcm0ge1xuICAgIHRleHQtYWxpZ246IHVuc2V0O1xufVxuI3BsdXMtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/tryrecipe/tryrecipe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tryrecipe/tryrecipe.component.ts ***!
  \**************************************************/
/*! exports provided: TryrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryrecipeComponent", function() { return TryrecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TryrecipeComponent = class TryrecipeComponent {
    constructor(http, route, fservice) {
        this.http = http;
        this.route = route;
        this.fservice = fservice;
        this.recipe = [];
        this.igQuantity = [];
        this.index = 0;
        this.ing = [];
        this.Procedure = [];
        this.timeRem = [];
        this.isStartDisabled = false;
        this.isPauseDisabled = false;
        this.isMainDisabled = false;
    }
    ngOnInit() {
        let recipeid = this.route.snapshot.paramMap.get('recipeid');
        console.log(recipeid, "ddddddd");
        this.fservice.getRecipeDetails(recipeid)
            .subscribe(data => {
            this.recipe = data;
            console.log(this.recipe, "Recipe Details");
            this.num = data.serve_for;
            this.igLength = (data.Ingredients).length;
            this.ing = data.Ingredients;
            this.Procedure = data.procedure;
            console.log(data);
            for (let i = 0; i < this.Procedure.length; i++) {
                this.timeRem[i] = this.Procedure[i].stageTime * 60;
            }
        });
    }
    // Serve for count
    changeserve(operation) {
        if (operation == 'minus') {
            if (this.num <= 0) {
                this.num = 0;
            }
            else {
                this.num = this.num - 1;
            }
        }
        else {
            this.num = this.num + 1;
        }
    }
    // Pass Entered quantity of ingredients to backend
    orderval() {
        var obj = [];
        for (let i = 0; i < this.igLength; i++) {
            var x = { "ingredient_used": this.ing[i].ingredient_used, "quantity_recquired": this.igQuantity[i] };
            obj.push(x);
        }
        console.log(obj);
    }
    // Set time for each stage
    getStageTime() {
        for (let i = 0; i < this.Procedure.length; i++) {
            this.timeRem[i] = this.Procedure[i].stageTime;
        }
    }
    startTimer(i) {
        this.isMainDisabled = true;
        this.isStartDisabled = true;
        this.isPauseDisabled = false;
        this.interval = setInterval(() => {
            if (this.timeRem[i] > 0) {
                this.timeRem[i]--;
            }
            else {
                this.timeRem[i] = 0;
                this.isStartDisabled = false;
            }
        }, 1000);
    }
    // Pause Timer
    pauseTimer(i) {
        this.isPauseDisabled = true;
        this.isStartDisabled = false;
        clearInterval(this.interval);
    }
};
TryrecipeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_3__["FrontendserviceService"] }
];
TryrecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tryrecipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tryrecipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tryrecipe/tryrecipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tryrecipe.component.css */ "./src/app/tryrecipe/tryrecipe.component.css")).default]
    })
], TryrecipeComponent);



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1oiLCJmaWxlIjoidXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frontendservice.service */ "./src/app/frontendservice.service.ts");



let UserprofileComponent = class UserprofileComponent {
    constructor(service) {
        this.service = service;
        this.user = [];
        this.recipespublished = [];
        this.recipestried = [];
        this.recipesliked = [];
    }
    ngOnInit() {
        let username = "barunnew";
        this.service.getUserDetails(username).subscribe((data) => {
            this.user = data;
            console.log(this.user);
            this.recipespublished = data.recipesPublished;
            this.recipestried = data.recipesTried;
            this.recipesliked = data.recipesLiked;
        });
    }
};
UserprofileComponent.ctorParameters = () => [
    { type: _frontendservice_service__WEBPACK_IMPORTED_MODULE_2__["FrontendserviceService"] }
];
UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userprofile/userprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")).default]
    })
], UserprofileComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cgi/Documents/cookify/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map