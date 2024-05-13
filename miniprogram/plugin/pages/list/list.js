"use strict";
require("../../vendors");
require("../../taro");
require("../../runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["plugin/pages/list/list"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/pages/list/list!./src/plugin/pages/list/list.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/pages/list/list!./src/plugin/pages/list/list.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components_listItem_listItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/listItem/listItem */ "./src/plugin/components/listItem/listItem.tsx");
/* harmony import */ var _dog_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dog.jpg */ "./src/plugin/pages/list/dog.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");















var Index = /*#__PURE__*/function (_Component) {
  (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  var _super = (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Index);

  function Index() {
    var _this;

    (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      list: [{
        name: 'A',
        value: '1'
      }, {
        name: 'B',
        value: '2'
      }, {
        name: 'C',
        value: '3'
      }]
    });

    (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "getElement", function () {
      var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createSelectorQuery().in(_this.props.$scope);
      query.select('.page').boundingClientRect().exec(function (res) {
        console.log(res);
      });
    });

    return _this;
  }

  (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 测试 export 京东小程序不支持在插件侧调用
      if (true) {
        console.log(requireMiniProgram().whoami);
      }
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage() {
      return {
        title: '测试分享',
        path: '/pages/index/index'
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "page",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          children: this.state.list.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_listItem_listItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
              name: item.name,
              value: item.value
            }, item.name);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
          onClick: this.getElement,
          children: "\u6D4B\u8BD5\u5143\u7D20\u83B7\u53D6"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
          src: _dog_jpg__WEBPACK_IMPORTED_MODULE_3__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mp-comp", {})]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/plugin/components/listItem/listItem.tsx":
/*!*****************************************************!*\
  !*** ./src/plugin/components/listItem/listItem.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListItem; }
/* harmony export */ });
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");









var ListItem = /*#__PURE__*/function (_Component) {
  (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ListItem, _Component);

  var _super = (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ListItem);

  function ListItem() {
    (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ListItem);

    return _super.apply(this, arguments);
  }

  (0,_Users_zkxuan_clife_test_taro_taro_examples_build_weapp_plugin_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          value = _this$props.value;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          children: ["name: ", name]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          children: ["value: ", value]
        })]
      });
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/plugin/pages/list/list.tsx":
/*!****************************************!*\
  !*** ./src/plugin/pages/list/list.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "./node_modules/@tarojs/plugin-framework-react/dist/runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");







var component = (__webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/pages/list/list!./list.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=plugin/pages/list/list!./src/plugin/pages/list/list.tsx")["default"])
var config = {"componentGenerics":{"mp-comp":true},"isNewBlended":false};
var inst = Component((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createNativeComponentConfig)(component, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_1__, 2))), react_dom__WEBPACK_IMPORTED_MODULE_2__["default"], config))

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (component);


/***/ }),

/***/ "./src/plugin/pages/list/dog.jpg":
/*!***************************************!*\
  !*** ./src/plugin/pages/list/dog.jpg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "plugin/pages/list/dog.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["plugin/taro","plugin/vendors"], function() { return __webpack_exec__("./src/plugin/pages/list/list.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=list.js.map