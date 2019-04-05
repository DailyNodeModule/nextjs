webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/list */ "./components/list.js");
/* harmony import */ var _components_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/display */ "./components/display.js");
var _jsxFileName = "/Users/zachary/Projects/dnm/nextjs/pages/index.js";




function Home() {
  var display = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_display__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });

  var updateInfo = function updateInfo(item) {
    return display.setState({
      item: item
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontFamily: 'helvetica'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    updateInfo: updateInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), display);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.21bff0068933517c4c1c.hot-update.js.map