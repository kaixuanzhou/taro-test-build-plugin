"use strict";
require("../../vendors");
require("../../taro");
require("../../runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["plugin/components/avatar/avatar"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/components/avatar/avatar!./src/plugin/components/avatar/avatar.tsx":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/components/avatar/avatar!./src/plugin/components/avatar/avatar.tsx ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");











var Avatar = /*#__PURE__*/function (_Component) {
  (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Avatar, _Component);

  var _super = (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Avatar);

  function Avatar() {
    (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Avatar);

    return _super.apply(this, arguments);
  }

  (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Avatar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          children: "slot 1\uFF1A"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.NativeSlot, {
          name: "slot1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Text, {
          children: "slot 2\uFF1A"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.NativeSlot, {
          name: "slot2"
        })]
      });
    }
  }]);

  return Avatar;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

(0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Avatar, "options", {
  multipleSlots: true
});



/***/ }),

/***/ "./src/plugin/components/avatar/avatar.tsx":
/*!*************************************************!*\
  !*** ./src/plugin/components/avatar/avatar.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "./node_modules/@tarojs/plugin-framework-react/dist/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");







var component = (__webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/components/avatar/avatar!./avatar.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/components/avatar/avatar!./src/plugin/components/avatar/avatar.tsx")["default"])
var config = {"isNewBlended":false};
var inst = Component((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createNativeComponentConfig)(component, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_1__, 2))), react_dom__WEBPACK_IMPORTED_MODULE_2__["default"], config))

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (component);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["plugin/taro","plugin/vendors"], function() { return __webpack_exec__("./src/plugin/components/avatar/avatar.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=avatar.js.map