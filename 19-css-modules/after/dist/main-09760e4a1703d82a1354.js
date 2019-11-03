/******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/bluecircle/bluecircle.js":
/*!**************************************!*\
  !*** ./src/bluecircle/bluecircle.js ***!
  \**************************************/
/*! exports provided: paint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paint\", function() { return paint; });\n/* harmony import */ var _bluecircle_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bluecircle.module.scss */ \"./src/bluecircle/bluecircle.module.scss\");\n/* harmony import */ var _bluecircle_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bluecircle_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction paint(el) {\n  el.textContent = \"I'm a blue circle\";\n  el.setAttribute('class', _bluecircle_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.bluecircle);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmx1ZWNpcmNsZS9ibHVlY2lyY2xlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2JsdWVjaXJjbGUvYmx1ZWNpcmNsZS5qcz9mYmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICcuL2JsdWVjaXJjbGUubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFpbnQoZWwpIHtcbiAgZWwudGV4dENvbnRlbnQgPSBcIkknbSBhIGJsdWUgY2lyY2xlXCI7XG4gIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzdHlsZS5ibHVlY2lyY2xlKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/bluecircle/bluecircle.js\n");

/***/ }),

/***/ "./src/bluecircle/bluecircle.module.scss":
/*!***********************************************!*\
  !*** ./src/bluecircle/bluecircle.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"bluecircle\":\"MIMklhJ7sQCn6e6KhSBUT\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmx1ZWNpcmNsZS9ibHVlY2lyY2xlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2JsdWVjaXJjbGUvYmx1ZWNpcmNsZS5tb2R1bGUuc2Nzcz81YmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJibHVlY2lyY2xlXCI6XCJNSU1rbGhKN3NRQ242ZTZLaFNCVVRcIn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/bluecircle/bluecircle.module.scss\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redbox_redbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redbox/redbox */ \"./src/redbox/redbox.js\");\n/* harmony import */ var _bluecircle_bluecircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bluecircle/bluecircle */ \"./src/bluecircle/bluecircle.js\");\n\n\n\nconst e1 = document.createElement('div');\nconst e2 = document.createElement('div');\n\ndocument.body.appendChild(e1);\ndocument.body.appendChild(e2);\n\nObject(_redbox_redbox__WEBPACK_IMPORTED_MODULE_0__[\"paint\"])(e1);\nObject(_bluecircle_bluecircle__WEBPACK_IMPORTED_MODULE_1__[\"paint\"])(e2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFpbnQgYXMgcGFpbnRSZWRib3ggfSBmcm9tICcuL3JlZGJveC9yZWRib3gnO1xuaW1wb3J0IHsgcGFpbnQgYXMgcGFpbnRCbHVlY2lyY2xlIH0gZnJvbSAnLi9ibHVlY2lyY2xlL2JsdWVjaXJjbGUnO1xuXG5jb25zdCBlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlMSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUyKTtcblxucGFpbnRSZWRib3goZTEpO1xucGFpbnRCbHVlY2lyY2xlKGUyKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/redbox/redbox.js":
/*!******************************!*\
  !*** ./src/redbox/redbox.js ***!
  \******************************/
/*! exports provided: paint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paint\", function() { return paint; });\n/* harmony import */ var _redbox_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redbox.module.scss */ \"./src/redbox/redbox.module.scss\");\n/* harmony import */ var _redbox_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redbox_module_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction paint(el) {\n  el.textContent = \"I'm a red box\";\n  el.setAttribute('class', _redbox_module_scss__WEBPACK_IMPORTED_MODULE_0___default.a.redbox);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkYm94L3JlZGJveC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWRib3gvcmVkYm94LmpzPzZjMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gJy4vcmVkYm94Lm1vZHVsZS5zY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhaW50KGVsKSB7XG4gIGVsLnRleHRDb250ZW50ID0gXCJJJ20gYSByZWQgYm94XCI7XG4gIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzdHlsZS5yZWRib3gpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redbox/redbox.js\n");

/***/ }),

/***/ "./src/redbox/redbox.module.scss":
/*!***************************************!*\
  !*** ./src/redbox/redbox.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"redbox\":\"_3NM333o9uDszzSsAPf24QF\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkYm94L3JlZGJveC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZWRib3gvcmVkYm94Lm1vZHVsZS5zY3NzPzI0YzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInJlZGJveFwiOlwiXzNOTTMzM285dURzenpTc0FQZjI0UUZcIn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redbox/redbox.module.scss\n");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzPzRhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/style.scss\n");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/main.js ./src/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.js */"./src/main.js");
module.exports = __webpack_require__(/*! ./src/style.scss */"./src/style.scss");


/***/ })

/******/ });