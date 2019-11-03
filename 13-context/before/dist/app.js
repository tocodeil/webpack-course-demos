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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colored_buttons/blue.js":
/*!*************************************!*\
  !*** ./src/colored_buttons/blue.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createButton; });\nfunction createButton() {\n  const b = document.createElement('button');\n  b.textContent = 'Blue';\n  b.style.backgroundColor = 'blue';\n  b.style.color = 'white';\n  document.body.appendChild(b);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29sb3JlZF9idXR0b25zL2JsdWUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29sb3JlZF9idXR0b25zL2JsdWUuanM/OGI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oKSB7XG4gIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYi50ZXh0Q29udGVudCA9ICdCbHVlJztcbiAgYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gIGIuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGIpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/colored_buttons/blue.js\n");

/***/ }),

/***/ "./src/colored_buttons/green.js":
/*!**************************************!*\
  !*** ./src/colored_buttons/green.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createButton; });\nfunction createButton() {\n  const b = document.createElement('button');\n  b.textContent = 'Green';\n  b.style.backgroundColor = 'green';\n  b.style.color = 'white';\n  document.body.appendChild(b);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29sb3JlZF9idXR0b25zL2dyZWVuLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9yZWRfYnV0dG9ucy9ncmVlbi5qcz85OWNiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbigpIHtcbiAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBiLnRleHRDb250ZW50ID0gJ0dyZWVuJztcbiAgYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICBiLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiKTtcbn1cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/colored_buttons/green.js\n");

/***/ }),

/***/ "./src/colored_buttons/red.js":
/*!************************************!*\
  !*** ./src/colored_buttons/red.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createButton; });\nfunction createButton() {\n  const b = document.createElement('button');\n  b.textContent = 'Red';\n  b.style.backgroundColor = 'red';\n  b.style.color = 'white';\n  document.body.appendChild(b);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29sb3JlZF9idXR0b25zL3JlZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb2xvcmVkX2J1dHRvbnMvcmVkLmpzPzFkZDgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKCkge1xuICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGIudGV4dENvbnRlbnQgPSAnUmVkJztcbiAgYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgYi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYik7XG59XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/colored_buttons/red.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _colored_buttons_red__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colored_buttons/red */ \"./src/colored_buttons/red.js\");\n/* harmony import */ var _colored_buttons_blue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colored_buttons/blue */ \"./src/colored_buttons/blue.js\");\n/* harmony import */ var _colored_buttons_green__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colored_buttons/green */ \"./src/colored_buttons/green.js\");\n \n \n \n\nObject(_colored_buttons_red__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_colored_buttons_blue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_colored_buttons_green__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_colored_buttons_blue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVJlZEJ1dHRvbiBmcm9tICcuL2NvbG9yZWRfYnV0dG9ucy9yZWQnOyBcbmltcG9ydCBjcmVhdGVCbHVlQnV0dG9uIGZyb20gJy4vY29sb3JlZF9idXR0b25zL2JsdWUnOyBcbmltcG9ydCBjcmVhdGVHcmVlbkJ1dHRvbiBmcm9tICcuL2NvbG9yZWRfYnV0dG9ucy9ncmVlbic7IFxuXG5jcmVhdGVSZWRCdXR0b24oKTtcbmNyZWF0ZUJsdWVCdXR0b24oKTtcbmNyZWF0ZUdyZWVuQnV0dG9uKCk7XG5jcmVhdGVCbHVlQnV0dG9uKCk7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });