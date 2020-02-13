module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CenterLayout.js":
/*!************************************!*\
  !*** ./components/CenterLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yokiijay/Desktop/react-spring-1/components/CenterLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


const CenterLayout = ({
  children
}) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
  css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
    width: 100vw;
    min-height: 100vh;
    display: grid;
    place-items: center;
  `,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, children);

/* harmony default export */ __webpack_exports__["default"] = (CenterLayout);

/***/ }),

/***/ "./libs/transform.js":
/*!***************************!*\
  !*** ./libs/transform.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transform; });
function transform(x, [a, b], [c, d], overflow = false) {
  const result = (x - a) / (b - a) * (d - c) + c;
  if (overflow && result > b) return d;
  if (overflow && result < a) return c;
  return result;
}

/***/ }),

/***/ "./pages/hover3d.js":
/*!**************************!*\
  !*** ./pages/hover3d.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hover3d; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CenterLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CenterLayout */ "./components/CenterLayout.js");
/* harmony import */ var _libs_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/transform */ "./libs/transform.js");
var _jsxFileName = "/Users/yokiijay/Desktop/react-spring-1/pages/hover3d.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







function Hover3d() {
  const [{
    rotateX,
    rotateY,
    scale
  }, setSpring] = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])(() => ({
    config: react_spring__WEBPACK_IMPORTED_MODULE_3__["config"].gentle,
    rotateX: 0,
    rotateY: 0,
    scale: 1
  }));
  const cardInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    pointXInCard: 0,
    pointYInCard: 0
  }).current;

  const handleMouseMove = ev => {
    const {
      target,
      clientX,
      clientY
    } = ev;
    const {
      top,
      left,
      width,
      height,
      bottom,
      right
    } = target.getBoundingClientRect();
    setSpring({
      rotateX: Object(_libs_transform__WEBPACK_IMPORTED_MODULE_6__["default"])(clientY, [top, bottom], [15, -15]),
      rotateY: Object(_libs_transform__WEBPACK_IMPORTED_MODULE_6__["default"])(clientX, [left, right], [-15, 15]),
      scale: 1.15
    });
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_CenterLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(AnimatedCard, {
    onMouseMove: handleMouseMove,
    onMouseOut: () => setSpring({
      rotateX: 0,
      rotateY: 0,
      scale: 1
    }),
    style: {
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([rotateX, rotateY, scale], (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
    src: "https://images.pexels.com/photos/3558597/pexels-photo-3558597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })));
}
const AnimatedCard = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div)`
  ${Object(polished__WEBPACK_IMPORTED_MODULE_4__["size"])(400)};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/hover3d.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yokiijay/Desktop/react-spring-1/pages/hover3d.js */"./pages/hover3d.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ })

/******/ });
//# sourceMappingURL=hover3d.js.map