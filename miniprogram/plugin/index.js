"use strict";
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["plugin/index"],{

/***/ "./src/plugin/index.ts":
/*!*****************************!*\
  !*** ./src/plugin/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   answer: function() { return /* binding */ answer; },
/* harmony export */   sayHello: function() { return /* binding */ sayHello; }
/* harmony export */ });
function sayHello() {
  console.log('Hello plugin!');
}
var answer = 42;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugin/index.ts"));
/******/ var __webpack_export_target__ = exports;
/******/ for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ }
]);;
//# sourceMappingURL=index.js.map