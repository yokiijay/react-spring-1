webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _components_CenterLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CenterLayout */ "./components/CenterLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");

var _jsxFileName = "/Users/yokiijay/Desktop/react-spring-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 200px;\n  height: 80px;\n  background: royalblue;\n  color: white;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  display: grid;\n  place-items: center;\n  text-transform: uppercase;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */






function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      state = _useState[0],
      toggle = _useState[1];

  var springA = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["useSpring"])({
    scale: state ? 1.2 : 1,
    from: {
      scale: 1
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_CenterLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/hover3d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(AnimatedA, {
    style: {
      transform: springA.scale.interpolate(function (scale) {
        return "scale(".concat(scale, ")");
      })
    },
    onMouseOver: function onMouseOver() {
      return toggle(!state);
    },
    onMouseOut: function onMouseOut() {
      return toggle(!state);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "hover3d")));
}
var StyledA = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject());
var AnimatedA = Object(react_spring__WEBPACK_IMPORTED_MODULE_6__["animated"])(StyledA);

/***/ })

})
//# sourceMappingURL=index.js.36b8f3611c76d536d169.hot-update.js.map