webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/list-item.js":
/*!*********************************!*\
  !*** ./components/list-item.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/zachary/Projects/dnm/nextjs/components/list-item.js";


function randomNumber(end, start) {
  return Math.floor(Math.random() * end) + (start || 0);
}

function ListItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundImage: "url(/static/images/".concat(props.item.name, ".jpg)"),
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      marginRight: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      background: "rgba(".concat([randomNumber(255), randomNumber(255), randomNumber(255)].join(','), ",0.5)"),
      height: '100%',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      lineHeight: '200px',
      color: 'white',
      height: '100%',
      fontSize: '2em',
      width: '100%',
      textShadow: '0px 0px 5px rgba(0,0,0,0.75)',
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.item.label)));
}

/***/ })

})
//# sourceMappingURL=index.js.c78f3381417ae192c567.hot-update.js.map