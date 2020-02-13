webpackHotUpdate("static/development/pages/index.js",{

/***/ "./libs/transform.js":
/*!***************************!*\
  !*** ./libs/transform.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transform; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");

function transform(x, _ref, _ref2) {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
      a = _ref3[0],
      b = _ref3[1];

  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
      c = _ref4[0],
      d = _ref4[1];

  var overflow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var result = (x - a) / (b - a) * (d - c) + c;
  if (overflow && result > b) return d;
  if (overflow && result < a) return c;
  return result;
}

/***/ })

})
//# sourceMappingURL=index.js.c0631f22e9e2ccedceb6.hot-update.js.map