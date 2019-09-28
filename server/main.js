(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_0, View_ɵEmptyOutletComponent_Host_0, ɵEmptyOutletComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵEmptyOutletComponent", function() { return RenderType_ɵEmptyOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_0", function() { return View_ɵEmptyOutletComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_Host_0", function() { return View_ɵEmptyOutletComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory", function() { return ɵEmptyOutletComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });

function View_ɵEmptyOutletComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵEmptyOutletComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], [], null, null)], null, null); }
var ɵEmptyOutletComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], View_ɵEmptyOutletComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);

var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _introduction_introduction_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction/introduction.component.ngfactory */ "./src/app/introduction/introduction.component.ngfactory.js");
/* harmony import */ var _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction/introduction.component */ "./src/app/introduction/introduction.component.ts");
/* harmony import */ var _my_project_my_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-project/my-project.component.ngfactory */ "./src/app/my-project/my-project.component.ngfactory.js");
/* harmony import */ var _my_project_my_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-project/my-project.component */ "./src/app/my-project/my-project.component.ts");
/* harmony import */ var _my_skill_my_skill_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-skill/my-skill.component.ngfactory */ "./src/app/my-skill/my-skill.component.ngfactory.js");
/* harmony import */ var _my_skill_my_skill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-skill/my-skill.component */ "./src/app/my-skill/my-skill.component.ts");
/* harmony import */ var _know_me_more_know_me_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./know-me-more/know-me-more.component.ngfactory */ "./src/app/know-me-more/know-me-more.component.ngfactory.js");
/* harmony import */ var _know_me_more_know_me_more_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./know-me-more/know-me-more.component */ "./src/app/know-me-more/know-me-more.component.ts");
/* harmony import */ var _my_footer_my_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-footer/my-footer.component.ngfactory */ "./src/app/my-footer/my-footer.component.ngfactory.js");
/* harmony import */ var _my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-footer/my-footer.component */ "./src/app/my-footer/my-footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-introduction", [], null, null, null, _introduction_introduction_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IntroductionComponent_0"], _introduction_introduction_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IntroductionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _introduction_introduction_component__WEBPACK_IMPORTED_MODULE_3__["IntroductionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Loading Introduction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "app-my-project", [], null, null, null, _my_project_my_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MyProjectComponent_0"], _my_project_my_project_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MyProjectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _my_project_my_project_component__WEBPACK_IMPORTED_MODULE_5__["MyProjectComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Projects"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "app-my-skill", [], null, null, null, _my_skill_my_skill_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MySkillComponent_0"], _my_skill_my_skill_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MySkillComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, _my_skill_my_skill_component__WEBPACK_IMPORTED_MODULE_7__["MySkillComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "app-know-me-more", [], null, null, null, _know_me_more_know_me_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_KnowMeMoreComponent_0"], _know_me_more_know_me_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_KnowMeMoreComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 114688, null, 0, _know_me_more_know_me_more_component__WEBPACK_IMPORTED_MODULE_9__["KnowMeMoreComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "app-my-footer", [], null, null, null, _my_footer_my_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MyFooterComponent_0"], _my_footer_my_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MyFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, _my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_11__["MyFooterComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); _ck(_v, 7, 0); _ck(_v, 9, 0); _ck(_v, 11, 0); _ck(_v, 13, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'parichay';
    }
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "angular-font-awesome");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "@angular/http");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_http__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_8__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeService"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_12__["BrowserXhr"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_12__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_12__["XSRFStrategy"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_12__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["XHRBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_12__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["XSRFStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_12__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_12__["Http"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_g"], [_angular_http__WEBPACK_IMPORTED_MODULE_12__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_platform_server_platform_server_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_14__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_15__["ModuleMapNgFactoryLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_15__["MODULE_MAP"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () { return [[]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_17__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_17__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_15__["ModuleMapLoaderModule"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_15__["ModuleMapLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/introduction/introduction.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/introduction/introduction.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#profile-pic[_ngcontent-%COMP%]{\r\n    border:2px solid orange;\r\n    border-radius: 50%;\r\n    height: 15em;\r\n    width: 15em; \r\n    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.62), 0 6px 20px 0 rgba(65, 61, 49, 0.57);\r\n\r\n}\r\n\r\n#profile-pic[_ngcontent-%COMP%]:hover{\r\n    border:4px solid rgb(255, 136, 0);\r\n}\r\n\r\n.center[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.introductory-content[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n#intro[_ngcontent-%COMP%]{\r\n    \r\n    background-color: #dd1b16;;\r\n    color:white;\r\n    border-radius: 10px;\r\n    \r\n    font-size: large; \r\n    padding:10px;\r\n}\r\n\r\n#intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    decoration:none;\r\n    color: #f1e209;\r\n}\r\n\r\n.letter-highlight[_ngcontent-%COMP%]{\r\n    background-color:#403e37;\r\n    color:white;\r\n}\r\n\r\n#introduction[_ngcontent-%COMP%]{\r\n    background:linear-gradient(to bottom, rgba(228, 173, 96, 0.62), rgba(255, 252, 247, 0.79)), url('sunset.jpg');\r\n    background-size: cover;\r\n   \r\n\r\n}\r\n\r\n#designation[_ngcontent-%COMP%]{\r\n    border:1px solid #ff9900;\r\n    \r\n}\r\n\r\n#designation-head[_ngcontent-%COMP%]{\r\n    color: #ff9900;\r\n    background-color: white;\r\n}\r\n\r\n#designation-tail[_ngcontent-%COMP%]{\r\n    background: #ff9900;\r\n    color: white;\r\n}\r\n\r\n#contactBtn[_ngcontent-%COMP%]{\r\n    background-color: #18a018;\r\n}\r\n\r\n#contactBtn[_ngcontent-%COMP%]:hover{\r\n    background-color: #107c10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGlGQUFpRjs7QUFFckY7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2R0FBc0k7SUFDdEksc0JBQXNCOzs7QUFHMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvaW50cm9kdWN0aW9uL2ludHJvZHVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGUtcGlje1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICB3aWR0aDogMTVlbTsgXHJcbiAgICBib3gtc2hhZG93OiAgMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjYyKSwgMCA2cHggMjBweCAwIHJnYmEoNjUsIDYxLCA0OSwgMC41Nyk7XHJcblxyXG59XHJcblxyXG4jcHJvZmlsZS1waWM6aG92ZXJ7XHJcbiAgICBib3JkZXI6NHB4IHNvbGlkIHJnYigyNTUsIDEzNiwgMCk7XHJcbn1cclxuLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3RvcnktY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2ludHJve1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2RkMWIxNjsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDFiMTY7O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLyogZm9udC1mYW1pbHk6c2VyaWYgOyAqL1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTsgXHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuXHJcbiNpbnRybyBhe1xyXG4gICAgZGVjb3JhdGlvbjpub25lO1xyXG4gICAgY29sb3I6ICNmMWUyMDk7XHJcbn1cclxuXHJcblxyXG4ubGV0dGVyLWhpZ2hsaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQwM2UzNztcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jaW50cm9kdWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyOCwgMTczLCA5NiwgMC42MiksIHJnYmEoMjU1LCAyNTIsIDI0NywgMC43OSkpLCB1cmwoXCIuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcvc3Vuc2V0LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuI2Rlc2lnbmF0aW9ue1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmY5OTAwO1xyXG4gICAgLyogYmFja2dyb3VuZDogeWVsbG93OyAqL1xyXG59XHJcblxyXG4jZGVzaWduYXRpb24taGVhZHtcclxuICAgIGNvbG9yOiAjZmY5OTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNkZXNpZ25hdGlvbi10YWlse1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTkwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2NvbnRhY3RCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhMDE4O1xyXG59XHJcblxyXG4jY29udGFjdEJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDdjMTA7XHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/introduction/introduction.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/introduction/introduction.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_IntroductionComponent, View_IntroductionComponent_0, View_IntroductionComponent_Host_0, IntroductionComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_IntroductionComponent", function() { return RenderType_IntroductionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IntroductionComponent_0", function() { return View_IntroductionComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_IntroductionComponent_Host_0", function() { return View_IntroductionComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponentNgFactory", function() { return IntroductionComponentNgFactory; });
/* harmony import */ var _introduction_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./introduction.component.css.shim.ngstyle */ "./src/app/introduction/introduction.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _introduction_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./introduction.component */ "./src/app/introduction/introduction.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_IntroductionComponent = [_introduction_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_IntroductionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_IntroductionComponent, data: {} });

function View_IntroductionComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 29, "section", [["class", "jumbotron"], ["id", "introduction"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["id", "profile-border"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "profile pic"], ["class", " img img-responsive center"], ["id", "profile-pic"], ["src", "assets/images/prof2.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 26, "div", [["class", "container introductory-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 14, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "span", [["style", "border:1px solid black;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "letter-highlight"], ["style", "background-color: black"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["\u00A0", "\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", "\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" <\u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "span", [["id", "designation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [["id", "designation-head"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0Software\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [["id", "designation-tail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0Engineer\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" /> "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 7, "p", [["id", "intro"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Graduated in BE-CSE from "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "a", [["href", "https://www.sonatech.ac.in/"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sona College of Technology"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" in May 2018, I have been working as a full stack developer at "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "a", [["href", "https://www.infosys.com"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Infosys"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" since June 2018. I keep on learning, unlearning and relearninig the tools and technology to come up with the best solution to the problem. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "a", [["class", "btn btn-success btn-lg"], ["href", "#myfooter"], ["id", "contactBtn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Contact Me"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.firstName; _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.lastName; _ck(_v, 10, 0, currVal_1); }); }
function View_IntroductionComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-introduction", [], null, null, null, View_IntroductionComponent_0, RenderType_IntroductionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _introduction_component__WEBPACK_IMPORTED_MODULE_2__["IntroductionComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var IntroductionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-introduction", _introduction_component__WEBPACK_IMPORTED_MODULE_2__["IntroductionComponent"], View_IntroductionComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/introduction/introduction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/introduction/introduction.component.ts ***!
  \********************************************************/
/*! exports provided: IntroductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionComponent", function() { return IntroductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var IntroductionComponent = /** @class */ (function () {
    function IntroductionComponent() {
        this.firstName = "Dayanand";
        this.lastName = "Raut";
        this.designantion = "< Full Stack Developer />";
        this.intro = "   Graduated in BE-CSE from Sona College of Technology in May 2018, I have been working as a full stack developer at Infosys since June 2018. I keep on learning, unlearning and relearninig the tools and technology to come up with the best solution to the problem.     ";
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    return IntroductionComponent;
}());



/***/ }),

/***/ "./src/app/know-me-more/know-me-more.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/know-me-more/know-me-more.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color:#8950a0;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n    color: #fe9800;\r\n}\r\n\r\n.faq-heading[_ngcontent-%COMP%]{\r\n    background: #8950a0;\r\n    color: white;\r\n}\r\n\r\n.faq-heading[_ngcontent-%COMP%]:hover{\r\n    background: #401d4e;    \r\n}\r\n\r\n.faq-answer[_ngcontent-%COMP%]{\r\n    border: 1px solid #8950a0;\r\n    color: #401d4e;\r\n    font-size: medium;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva25vdy1tZS1tb3JlL2tub3ctbWUtbW9yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2tub3ctbWUtbW9yZS9rbm93LW1lLW1vcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiM4OTUwYTA7XHJcbn1cclxuXHJcbiN0aXRsZXtcclxuICAgIGNvbG9yOiAjZmU5ODAwO1xyXG59XHJcblxyXG4uZmFxLWhlYWRpbmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODk1MGEwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmFxLWhlYWRpbmc6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDAxZDRlOyAgICBcclxufVxyXG5cclxuLmZhcS1hbnN3ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODk1MGEwO1xyXG4gICAgY29sb3I6ICM0MDFkNGU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/know-me-more/know-me-more.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/know-me-more/know-me-more.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_KnowMeMoreComponent, View_KnowMeMoreComponent_0, View_KnowMeMoreComponent_Host_0, KnowMeMoreComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_KnowMeMoreComponent", function() { return RenderType_KnowMeMoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_KnowMeMoreComponent_0", function() { return View_KnowMeMoreComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_KnowMeMoreComponent_Host_0", function() { return View_KnowMeMoreComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowMeMoreComponentNgFactory", function() { return KnowMeMoreComponentNgFactory; });
/* harmony import */ var _know_me_more_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./know-me-more.component.css.shim.ngstyle */ "./src/app/know-me-more/know-me-more.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _know_me_more_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./know-me-more.component */ "./src/app/know-me-more/know-me-more.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_KnowMeMoreComponent = [_know_me_more_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_KnowMeMoreComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_KnowMeMoreComponent, data: {} });

function View_KnowMeMoreComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "panel panel-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "panel-heading faq-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h4", [["class", "panel-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [["data-parent", "#accordion"], ["data-toggle", "collapse"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" Q. ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "panel-collapse collapse"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "panel-body faq-answer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "#faq", _v.context.index, ""); _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.question; _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "faq", _v.context.index, ""); _ck(_v, 5, 0, currVal_2); var currVal_3 = _v.context.$implicit.answer; _ck(_v, 7, 0, currVal_3); }); }
function View_KnowMeMoreComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "section", [["class", "container"], ["id", "knowMeMore"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["< "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["id", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Know Me More"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" />"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "panel-group"], ["id", "accordion"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_KnowMeMoreComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.faq; _ck(_v, 9, 0, currVal_0); }, null); }
function View_KnowMeMoreComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_KnowMeMoreComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.faq; _ck(_v, 1, 0, currVal_0); }, null); }
function View_KnowMeMoreComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-know-me-more", [], null, null, null, View_KnowMeMoreComponent_0, RenderType_KnowMeMoreComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _know_me_more_component__WEBPACK_IMPORTED_MODULE_3__["KnowMeMoreComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var KnowMeMoreComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-know-me-more", _know_me_more_component__WEBPACK_IMPORTED_MODULE_3__["KnowMeMoreComponent"], View_KnowMeMoreComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/know-me-more/know-me-more.component.ts":
/*!********************************************************!*\
  !*** ./src/app/know-me-more/know-me-more.component.ts ***!
  \********************************************************/
/*! exports provided: KnowMeMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowMeMoreComponent", function() { return KnowMeMoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var KnowMeMoreComponent = /** @class */ (function () {
    function KnowMeMoreComponent() {
        this.faq = [
            {
                question: "What other projects have you done? What other technologies you have worked on?",
                answer: "Apart from projects shown in the project section, I have developed  'Sona Discussion Forum', an online platform for discussing doubts amoung professors and students at Sona. I have also developed 'Coding Assistant', a window application where you can code by speaking. I have been involved in developing online application to estimate budget for NCC, Salem. Likewise I have worked on 'PackXpress', an online platform for courier service. Apart from these, I have also worked on Selenium (Java) for automation testing for web application."
            },
            {
                question: "What is more important? Programming language or the logic?",
                answer: "Programming language is just a tool to implement the solution. The solution comes from the well framed logic. So yes, the logic is more important. At the same time, knowing the features of language matters too, especially while implementing the solution in the efficient way."
            },
            {
                question: "How important is team for you?",
                answer: "I believe in teamwork. Team mates are required for pair programming, code reviews, helping each other when stuck, and most importantly having fun at work."
            },
            {
                question: "What is your favourite part in software development?",
                answer: "My favourite part in software development is analysis and coming up with the solution (logic). Although I work on full stack, I like the backend more. That's where I enjoy implementing my solution. Even in the front end, I love coding in javascript/typescript more than writing html script."
            },
            {
                question: "Any thoughts on doing project in mobile development?",
                answer: "Yes, I am looking for the opportunity."
            },
            {
                question: "Apart from web development, what interest you?",
                answer: "During my Computer Science programme at College, I was amazed by the concepts used in Data Science, Machine Learning and Artificial Intelligence. I am interested to explore these fields."
            },
            {
                question: "How do you keep up with the other technologies when you are working on a particular technology?",
                answer: "It is true that you tend to forget other technologies once you start working on one particular technology. I tend to forget Python syntax when I am working with Java and vice versa. But a small brush up is enough to recall the syntax. However, I keep revising the core concepts  like Data structures and Algorithms, DBMS etc from time to time. To keep up with my programming skills, I do solve online problems at Hackerrank, and Hackerearth. Apart from these, I read tech blogs to keep myself updated."
            },
            {
                question: "What is your favourite quote that keeps you motivated at work?",
                answer: "If you ask me a question, and if I don't know the answer, I am going to say that I don't know. But I know how to find the answer and I bet I will find the answer. -The Pursuit of Happyness"
            },
            {
                question: "What do you do in your free time?",
                answer: "I love exploring places. So whenever it is possible, I do travelling. I like to think myself as a sports person. I play cricket, volleyball, badminton. When bored, I do watch tv series."
            }
        ];
    }
    KnowMeMoreComponent.prototype.ngOnInit = function () {
    };
    return KnowMeMoreComponent;
}());



/***/ }),

/***/ "./src/app/my-footer/my-footer.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/my-footer/my-footer.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#myfooter[_ngcontent-%COMP%]{\r\n    background-color: #401d4e;\r\n    color: white;\r\n}\r\n.footer-block[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    padding-left: 30px;\r\n    text-align: center;\r\n   \r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n#credit[_ngcontent-%COMP%]{\r\n    color: #7f8394;\r\n    text-align: center;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n#social-media-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #7f8394;\r\n}\r\n#social-media-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color:white;\r\n}\r\n#credit-quote[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #eeff92;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZm9vdGVyL215LWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjs7QUFFdEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNIQUFzSDtBQUMxSDtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL215LWZvb3Rlci9teS1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDFkNGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmZvb3Rlci1ibG9ja3tcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNjcmVkaXR7XHJcbiAgICBjb2xvcjogIzdmODM5NDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNzb2NpYWwtbWVkaWEtbGlua3MgYXtcclxuICAgIGNvbG9yOiAjN2Y4Mzk0O1xyXG59XHJcblxyXG4jc29jaWFsLW1lZGlhLWxpbmtzIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuI2NyZWRpdC1xdW90ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZWVmZjkyO1xyXG59Il19 */"];



/***/ }),

/***/ "./src/app/my-footer/my-footer.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/my-footer/my-footer.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_MyFooterComponent, View_MyFooterComponent_0, View_MyFooterComponent_Host_0, MyFooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyFooterComponent", function() { return RenderType_MyFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyFooterComponent_0", function() { return View_MyFooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyFooterComponent_Host_0", function() { return View_MyFooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFooterComponentNgFactory", function() { return MyFooterComponentNgFactory; });
/* harmony import */ var _my_footer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-footer.component.css.shim.ngstyle */ "./src/app/my-footer/my-footer.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _my_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-footer.component */ "./src/app/my-footer/my-footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_MyFooterComponent = [_my_footer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MyFooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MyFooterComponent, data: {} });

function View_MyFooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 38, "footer", [["id", "myfooter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 33, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 32, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 11, "div", [["class", "col-xs-12 col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 10, "div", [["class", "footer-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact Me"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "fa fa-phone"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["\u00A0", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "i", [["class", "fa fa-envelope-o "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 19, "div", [["class", "col-xs-12 col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 18, "div", [["class", "footer-block"], ["id", "social-media-links"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Follow Me"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "i", [["class", "fa fa-linkedin-square fa-2x"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "i", [["class", "fa fa-github-square fa-2x"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "i", [["class", "fa fa-facebook-square fa-2x"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "a", [["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "i", [["class", "fa fa-quora fa-2x"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "div", [["id", "credit-quote"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \" DESTINY is not created by the SHOES we wear but by the STEPS we take \" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "div", [["id", "credit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logos and background image used in this page have been downloaded from Google"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.phone; _ck(_v, 9, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "mailto:", _co.email, ""); _ck(_v, 13, 0, currVal_1); var currVal_2 = _co.email; _ck(_v, 14, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.linkedin, ""); _ck(_v, 20, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.git, ""); _ck(_v, 24, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.facebook, ""); _ck(_v, 28, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.quora, ""); _ck(_v, 32, 0, currVal_6); }); }
function View_MyFooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-my-footer", [], null, null, null, View_MyFooterComponent_0, RenderType_MyFooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _my_footer_component__WEBPACK_IMPORTED_MODULE_2__["MyFooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MyFooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-my-footer", _my_footer_component__WEBPACK_IMPORTED_MODULE_2__["MyFooterComponent"], View_MyFooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/my-footer/my-footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-footer/my-footer.component.ts ***!
  \**************************************************/
/*! exports provided: MyFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFooterComponent", function() { return MyFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MyFooterComponent = /** @class */ (function () {
    function MyFooterComponent() {
        this.phone = "+918508632484";
        this.email = "dayanandraut2015@gmail.com";
        this.git = "https://github.com/dayanandraut/";
        this.linkedin = "https://www.linkedin.com/in/dayanand-raut-9b1845129";
        this.facebook = "https://www.facebook.com/dayanand.raut.5";
        this.quora = "https://www.quora.com/profile/Dayanand-Raut";
    }
    MyFooterComponent.prototype.ngOnInit = function () {
    };
    return MyFooterComponent;
}());



/***/ }),

/***/ "./src/app/my-project/my-project.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/my-project/my-project.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#title[_ngcontent-%COMP%]{\r\n    color: yellow;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]{\r\n    height: 15em;\r\n    border: 1px #b4b4c5;\r\n    padding: 5px 10px;\r\n    text-align: center;   \r\n    background:white; \r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.project-background[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    background: #dd1b16;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.mypanel[_ngcontent-%COMP%]{\r\n    padding: 10px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.tech[_ngcontent-%COMP%]{\r\n    font-family: 'Courier New';\r\n    font-style: italic;\r\n    \r\n    background: #dd1b16;\r\n    color: white;\r\n    padding: 2px 2px;\r\n    font-size: 50%;\r\n}\r\n\r\n.domain[_ngcontent-%COMP%]{\r\n    color: #b4b4c5;\r\n    font-size: 80%;\r\n}\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%]{\r\n    background: #dd1b16;\r\n    color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.11), 0 6px 20px 0 rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]{\r\n    border: 1px solid #dd1b16;\r\n    color: #dd1b16;\r\n    background: inherit;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]:hover{\r\n    \r\n    color: white;\r\n    background: #dd1b16;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n    font-style: italic;\r\n}\r\n\r\n.tech-lg[_ngcontent-%COMP%]{\r\n    font-size: medium;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvamVjdC9teS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSx3REFBd0Q7SUFDeEQsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDJFQUEyRTtBQUMvRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRFQUE0RTtBQUNoRjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbXktcHJvamVjdC9teS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGV7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4ucHJvamVjdHtcclxuICAgIGhlaWdodDogMTVlbTtcclxuICAgIGJvcmRlcjogMXB4ICNiNGI0YzU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7IFxyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLnByb2plY3QtYmFja2dyb3VuZHtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvYmcvYmVuY2guanBnXCIpOyovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiNjZmNjZmY4YzsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNkZDFiMTY7XHJcbn0gXHJcbi5wcm9qZWN0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4ubXlwYW5lbHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRlY2h7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2RkMWIxNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJweCAycHg7XHJcbiAgICBmb250LXNpemU6IDUwJTtcclxufVxyXG5cclxuLmRvbWFpbntcclxuICAgIGNvbG9yOiAjYjRiNGM1O1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuXHJcbi8qIERlc2lnaW5pbmcgbW9kYWwgKi9cclxuXHJcbi5tb2RhbC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQxYjE2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjExKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmNsb3NlLWJ0bntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZDFiMTY7XHJcbiAgICBjb2xvcjogI2RkMWIxNjtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5jbG9zZS1idG46aG92ZXJ7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGQxYjE2OyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2RkMWIxNjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgdWx7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4udGVjaC1sZ3tcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59Il19 */"];



/***/ }),

/***/ "./src/app/my-project/my-project.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/my-project/my-project.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_MyProjectComponent, View_MyProjectComponent_0, View_MyProjectComponent_Host_0, MyProjectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MyProjectComponent", function() { return RenderType_MyProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyProjectComponent_0", function() { return View_MyProjectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MyProjectComponent_Host_0", function() { return View_MyProjectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectComponentNgFactory", function() { return MyProjectComponentNgFactory; });
/* harmony import */ var _my_project_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-project.component.css.shim.ngstyle */ "./src/app/my-project/my-project.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _my_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-project.component */ "./src/app/my-project/my-project.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_MyProjectComponent = [_my_project_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MyProjectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MyProjectComponent, data: {} });

function View_MyProjectComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "tech"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0 "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MyProjectComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "col-lg-3 col-md-4 col-sm-6 col-xs-12 mypanel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "project"], ["data-toggle", "modal"]], [[1, "data-target", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "domain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_3 = _v.context.$implicit.tech; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.generateId(_v.context.index, "#"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_1); var currVal_2 = _v.context.$implicit.domain; _ck(_v, 5, 0, currVal_2); }); }
function View_MyProjectComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "container"], ["style", "text-align: center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["id", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Projects"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.myprojects; _ck(_v, 6, 0, currVal_0); }, null); }
function View_MyProjectComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_MyProjectComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.responsibilities; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MyProjectComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "tech tech-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0 "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }); }
function View_MyProjectComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "p", [["style", "text-align: center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.tech; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MyProjectComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["id", "modals"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "div", [["class", "modal fade"], ["role", "dialog"]], [[8, "id", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 16, "div", [["class", "modal-dialog"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 15, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h4", [["class", "modal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "button", [["class", "btn close-btn"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Close"]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit.responsibilities; _ck(_v, 13, 0, currVal_3); var currVal_4 = _v.context.$implicit.tech; _ck(_v, 15, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.generateId(_v.context.index, ""); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; _ck(_v, 8, 0, currVal_1); var currVal_2 = _v.context.$implicit.description; _ck(_v, 11, 0, currVal_2); }); }
function View_MyProjectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "section", [["class", "jumbotron project-background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MyProjectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.myprojects; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.myprojects; _ck(_v, 4, 0, currVal_1); }, null); }
function View_MyProjectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-my-project", [], null, null, null, View_MyProjectComponent_0, RenderType_MyProjectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _my_project_component__WEBPACK_IMPORTED_MODULE_3__["MyProjectComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MyProjectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-my-project", _my_project_component__WEBPACK_IMPORTED_MODULE_3__["MyProjectComponent"], View_MyProjectComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/my-project/my-project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-project/my-project.component.ts ***!
  \****************************************************/
/*! exports provided: MyProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectComponent", function() { return MyProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MyProjectComponent = /** @class */ (function () {
    function MyProjectComponent() {
        this.myprojects = [
            {
                "title": "Verisoft-Lab", "domain": "Health",
                "tech": ["Java", "Spring boot", "REST", "MySQL", "Angular 6", "HTML5", "Bootstrap", "Javascript"],
                "description": "A web application for pathology lab management that provides a platform to make patient's entry, manage test's data and generate bill and report",
                "responsibilities": ["Involved in understanding the business requirements from the client", "Designing database schema", "Implementing REST service to be consumed by the front end", "Securing the REST end points"]
            },
            {
                "title": "Ekart", "domain": "ECommerce",
                "tech": ["Java", "Spring boot", "REST", "MySQL", "Angular 6", "HTML5", "CSS", "Bootstrap", "Typescript"],
                "description": "An end-to-end single page web application for buying and selling the products",
                "responsibilities": ["Understanding user stories and developing back end points of the services (controllers)", "Developing UI, validation logic, and calling backend services from the frontend"]
            },
            {
                "title": "CLI Monitoring Portal", "domain": "Railway",
                "tech": ["PHP", "MySQL", "HTML5", "CSS", "Javascript", "Bootstrap", "JQuery"],
                "description": "An online web based Integrated Performance Assessment & Monitoring System for Loco running staff(IPMAS) for Southern Railway, Salem, Tamil Nadu. An online platform for storing the officer's assessment's data and tracking their location during duty",
                "responsibilities": ["Involved in coordinating with the client", "Understanding the business requirements", "Leading the team towards development of website and android app"]
            },
            {
                "title": "My Favourite Movies", "domain": "Entertainment",
                "tech": ["Angular 6", "HTML5", "CSS", "Bootstrap", "Typescript"],
                "description": "Angular app created to demonstrate CRUD operation using in-memory API (to simulate REST api)",
                "responsibilities": ["Involved in designing and developing the site", "Implementing service to interact with data from in-memory database"]
            }
        ];
    }
    MyProjectComponent.prototype.ngOnInit = function () {
    };
    MyProjectComponent.prototype.generateId = function (i, s) {
        var res = "myproj" + i;
        if (s == '#')
            res = "#" + res;
        return res;
    };
    return MyProjectComponent;
}());



/***/ }),

/***/ "./src/app/my-skill/my-skill.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/my-skill/my-skill.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".jumbotron[_ngcontent-%COMP%]{\r\n    background: #ff9900;\r\n}\r\n\r\n#title[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.skill-logo[_ngcontent-%COMP%]{\r\n    height: 3em;\r\n    width: auto;\r\n\r\n}\r\n\r\n.center-logo[_ngcontent-%COMP%]{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.my-skill[_ngcontent-%COMP%]{\r\n    height: 15em;\r\n    border: 1px #b4b4c5;\r\n    padding: 5px 10px;\r\n    text-align: center;   \r\n    background:white; \r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.skill-block[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\r\n\r\nfigure[_ngcontent-%COMP%]{\r\n    display: inline;\r\n}\r\n\r\n.skill-margin[_ngcontent-%COMP%]{\r\n    \r\n    margin-left:-10px;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n\r\n.skill-card[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    \r\n    margin:10px;\r\n    padding: 10px;\r\n    \r\n    background: white;\r\n    color: #ff9900;\r\n    border-radius: 5px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    \r\n}\r\n\r\n.skill-card[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);\r\n    \r\n}\r\n\r\n.skill-card-image[_ngcontent-%COMP%]{\r\n    height:4rem;\r\n    width:auto;\r\n    display: inline-block;\r\n}\r\n\r\n.skill-card-text[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktc2tpbGwvbXktc2tpbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw0RUFBNEU7O0FBRWhGOztBQUVBO0lBQ0ksd0ZBQXdGOztBQUU1Rjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL215LXNraWxsL215LXNraWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9ue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTkwMDtcclxufVxyXG5cclxuI3RpdGxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5za2lsbC1sb2dve1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5jZW50ZXItbG9nb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5teS1za2lsbHtcclxuICAgIGhlaWdodDogMTVlbTtcclxuICAgIGJvcmRlcjogMXB4ICNiNGI0YzU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7IFxyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLnNraWxsLWJsb2Nre1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbmZpZ3VyZXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnNraWxsLW1hcmdpbntcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLyogc3R5bGVzIGZvciBza2lsbC1jYXJkICovXHJcbi5za2lsbC1jYXJke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLyogaGVpZ2h0OiAxMHJlbTsgKi9cclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogI2ZmOTkwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBcclxufVxyXG5cclxuLnNraWxsLWNhcmQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTkpO1xyXG4gICAgXHJcbn1cclxuXHJcbi5za2lsbC1jYXJkLWltYWdle1xyXG4gICAgaGVpZ2h0OjRyZW07XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2tpbGwtY2FyZC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgXHJcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/my-skill/my-skill.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/my-skill/my-skill.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_MySkillComponent, View_MySkillComponent_0, View_MySkillComponent_Host_0, MySkillComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MySkillComponent", function() { return RenderType_MySkillComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MySkillComponent_0", function() { return View_MySkillComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MySkillComponent_Host_0", function() { return View_MySkillComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySkillComponentNgFactory", function() { return MySkillComponentNgFactory; });
/* harmony import */ var _my_skill_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-skill.component.css.shim.ngstyle */ "./src/app/my-skill/my-skill.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _my_skill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-skill.component */ "./src/app/my-skill/my-skill.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_MySkillComponent = [_my_skill_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MySkillComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MySkillComponent, data: {} });

function View_MySkillComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "span", [["class", "skill-card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "a", [["style", "text-decoration: none;"], ["target", "_blank"]], [[8, "href", 4], [8, "title", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "img img-responsive skill-card-image"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \u00A0\u00A0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "skill-card-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.link, ""); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.category)), ""); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "assets/images/skill/", _v.context.$implicit.logo, ""); _ck(_v, 3, 0, currVal_2); var currVal_3 = _v.context.$implicit.title; _ck(_v, 6, 0, currVal_3); }); }
function View_MySkillComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "section", [["class", "jumbotron"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "container"], ["style", "text-align: center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [["id", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Skills"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MySkillComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.skills; _ck(_v, 7, 0, currVal_0); }, null); }
function View_MySkillComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MySkillComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.technology; _ck(_v, 2, 0, currVal_0); }, null); }
function View_MySkillComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-my-skill", [], null, null, null, View_MySkillComponent_0, RenderType_MySkillComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _my_skill_component__WEBPACK_IMPORTED_MODULE_3__["MySkillComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MySkillComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-my-skill", _my_skill_component__WEBPACK_IMPORTED_MODULE_3__["MySkillComponent"], View_MySkillComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/my-skill/my-skill.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-skill/my-skill.component.ts ***!
  \************************************************/
/*! exports provided: MySkillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySkillComponent", function() { return MySkillComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MySkillComponent = /** @class */ (function () {
    function MySkillComponent() {
        this.languages = [
            { title: "Java", logo: "language/java.png", link: "https://www.java.com/" },
            { title: "Python", logo: "language/python.png", link: "https://www.python.org/" },
            { title: "C#", logo: "language/csharp.png", link: "https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/" },
            { title: "PHP", logo: "language/php.png", link: "https://www.php.net/" }
        ];
        this.web_development = [
            { title: "HTML 5", logo: "webdev/html5.png", src: "", link: "https://www.java.com/" },
            { title: "CSS ", logo: "webdev/css3.png", link: "https://www.python.org/" },
            { title: "Javascript", logo: "webdev/javascript.png", link: "https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/" },
            { title: "Bootstrap", logo: "webdev/bootstrap.png", link: "https://www.php.net/" }
        ];
        this.database = [
            { title: "My SQL", logo: "db/mysql.png", src: "", link: "https://www.java.com/" },
            { title: "MSSQL", logo: "db/mssql.png", link: "https://www.python.org/" },
            { title: "Mongo DB", logo: "db/mongodb.png", link: "https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/" }
        ];
        this.framework = [
            { title: "Spring", logo: "framework/spring.png", src: "", link: "https://www.java.com/" },
            { title: "Angular", logo: "framework/angular.png", link: "https://www.python.org/" },
            { title: ".NET", logo: "framework/dotnet.png", link: "https://www.python.org/" }
        ];
        this.ide = [
            { title: "Eclipse", logo: "ide/eclipse.png", src: "", link: "https://www.java.com/" },
            { title: "Spring Tool Suite", logo: "ide/sts.png", link: "https://www.python.org/" },
            { title: "VS Code", logo: "ide/vscode.png", link: "https://www.python.org/" }
        ];
        this.others = [
            { title: "Git", logo: "other/git.png", src: "", link: "https://www.java.com/" },
            { title: "Source Tree", logo: "other/sourcetree.png", link: "https://www.python.org/" },
            { title: "Postman", logo: "other/postman.png", link: "https://www.python.org/" },
            { title: "Scrum", logo: "other/scrum.png", link: "https://www.python.org/" }
        ];
        this.technology = [
            { "category": "Language", "data": this.languages },
            { "category": "Web Development", "data": this.web_development },
            { "category": "Database", "data": this.database },
            { "category": "Framework", "data": this.framework },
            { "category": "IDE", "data": this.ide },
            { "category": "Others", "data": this.others }
        ];
        this.skills = [
            { title: "Java", category: "language", logo: "java.png", link: "https://www.java.com/" },
            { title: "Python", category: "language", logo: "python.png", link: "https://www.python.org/" },
            { title: "C#", category: "language", logo: "csharp.png", link: "https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/" },
            { title: "PHP", category: "language", logo: "php.png", link: "https://www.php.net/" },
            { title: "Spring", category: "framework", logo: "spring.png", link: "https://spring.io/" },
            { title: "Angular", category: "framework", logo: "angular.png", link: "https://spring.io/" },
            { title: ".NET", category: "framework", logo: "dotnet.png", link: "https://dotnet.microsoft.com/" },
            // add orm : hibernate and EF
            { title: "HTML 5", category: "web development", logo: "html5.png", src: "", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
            { title: "CSS ", category: "web development", logo: "css3.png", link: "https://developer.mozilla.org/en-US/docs/Archive/CSS3" },
            { title: "Javascript", category: "web development", logo: "javascript.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            // add typescript
            { title: "Bootstrap", category: "web development", logo: "bootstrap.png", link: "https://getbootstrap.com" },
            { title: "My SQL", category: "database", logo: "mysql.png", src: "", link: "https://www.mysql.com/" },
            { title: "MSSQL", category: "database", logo: "mssql.png", link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019" },
            { title: "Mongo DB", category: "database", logo: "mongodb.png", link: "https://www.mongodb.com/" },
            { title: "Git", category: "others", logo: "git.png", link: "https://git-scm.com/" },
            { title: "Source Tree", category: "others", logo: "sourcetree.png", link: "https://www.sourcetreeapp.com/" },
            { title: "Postman", category: "others", logo: "postman.png", link: "https://www.getpostman.com" },
            { title: "Scrum", category: "others", logo: "scrum.png", link: "https://www.scrum.org/" },
            { title: "Eclipse", category: "ide", logo: "eclipse.png", src: "", link: "https://www.eclipse.org/" },
            { title: "Spring Tool Suite", category: "ide", logo: "sts.png", link: "https://spring.io/tools3/sts/all" },
            { title: "VS Code", category: "others", logo: "vscode.png", link: "https://code.visualstudio.com/" },
        ];
    }
    MySkillComponent.prototype.ngOnInit = function () {
    };
    return MySkillComponent;
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
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular Project\parichay\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "angular-font-awesome":
/*!***************************************!*\
  !*** external "angular-font-awesome" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angular-font-awesome");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map