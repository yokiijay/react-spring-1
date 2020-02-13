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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.es.js");
/* harmony import */ var _components_CenterLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CenterLayout */ "./components/CenterLayout.js");


var _jsxFileName = "/Users/yokiijay/Desktop/react-spring-1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  /* transform: perspective(600px) rotateX(-30deg) rotateY(-30deg); */\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */





function Index() {
  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__["useSpring"])(function () {
    return {
      scale: 1
    };
  }),
      _useSpring2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useSpring, 2),
      spring = _useSpring2[0],
      setSpring = _useSpring2[1];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_CenterLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(AnimatedCard, {
    onMouseOver: function onMouseOver() {
      return setSpring({
        scale: 1.2
      });
    },
    onMouseOut: function onMouseOut() {
      return setSpring({
        scale: 1
      });
    },
    style: {
      transform: spring.scale.interpolate(function (s) {
        return "scale(".concat(s, ")");
      })
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
    src: "https://images.pexels.com/photos/3558597/pexels-photo-3558597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
}
var AnimatedCard = Object(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_5__["animated"].div)(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_6__["size"])(400));

/***/ })

})
//# sourceMappingURL=index.js.1a0f1b4eec5903a8d5b9.hot-update.js.map