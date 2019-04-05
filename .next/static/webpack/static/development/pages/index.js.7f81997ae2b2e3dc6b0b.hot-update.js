webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/items.js":
/*!*****************************!*\
  !*** ./components/items.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "name": "esb",
  "label": "HI!"
}]);

/***/ }),

/***/ "./components/list.js":
/*!****************************!*\
  !*** ./components/list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-item */ "./components/list-item.js");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items */ "./components/items.js");
var _jsxFileName = "/Users/zachary/Projects/dnm/nextjs/components/list.js";



function List(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      flexDirection: 'row',
      display: 'flex',
      listStyleType: 'none',
      justifyItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, _items__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (item) {
    var updateDisplay = function updateDisplay() {
      return props.updateInfo(item);
    };

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_list_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onclick: updateDisplay,
      item: {
        name: 'esb',
        label: 'hi'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.7f81997ae2b2e3dc6b0b.hot-update.js.map