"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/LargeCard.js":
/*!*********************************!*\
  !*** ./Components/LargeCard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\faiye-apartment\\Components\\LargeCard.js";


function LargeCard(_ref) {
  var imag = _ref.imag,
      title = _ref.title,
      description = _ref.description,
      buttonText = _ref.buttonText;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: img,
        layout: "fill",
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = LargeCard;
/* harmony default export */ __webpack_exports__["default"] = (LargeCard);

var _c;

$RefreshReg$(_c, "LargeCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Banner */ "./Components/Banner.js");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Header */ "./Components/Header.js");
/* harmony import */ var _Components_LargeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/LargeCard */ "./Components/LargeCard.js");
/* harmony import */ var _Components_MediumCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/MediumCard */ "./Components/MediumCard.js");
/* harmony import */ var _Components_SmallCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/SmallCard */ "./Components/SmallCard.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\USER\\Desktop\\faiye-apartment\\pages\\index.js";






var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var exploreData = _ref.exploreData,
      cardsData = _ref.cardsData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Faiye Apartment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Banner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-7xl mx-auto px-8 sm:px-16",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "pt-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-4xl font-semibold pb-5",
          children: "Explore Nearby"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4",
          children: exploreData === null || exploreData === void 0 ? void 0 : exploreData.map(function (_ref2) {
            var img = _ref2.img,
                distance = _ref2.distance,
                location = _ref2.location;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_SmallCard__WEBPACK_IMPORTED_MODULE_6__.default, {
              img: img,
              distance: distance,
              location: location
            }, img, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "text-4xl font-semibold py-8",
          children: "Live Anywhere"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex space-x-3 overflow-scroll  scrollbar-hide p-3 -ml-3",
          children: cardsData === null || cardsData === void 0 ? void 0 : cardsData.map(function (_ref3) {
            var img = _ref3.img,
                title = _ref3.title;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MediumCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              img: img,
              title: title
            }, img, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_LargeCard__WEBPACK_IMPORTED_MODULE_4__.default, {
        imag: "https://links.papareact.com/4cj",
        title: "Try Hosting",
        description: "Earn extra income and unlock new opportunities by sharing your space",
        buttonText: "Learn More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU3NGJhYWIwYTI2NmYzYzk3MDEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNDLFNBQVQsT0FBMkQ7QUFBQSxNQUF2Q0MsSUFBdUMsUUFBdkNBLElBQXVDO0FBQUEsTUFBakNDLEtBQWlDLFFBQWpDQSxLQUFpQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxVQUFhLFFBQWJBLFVBQWE7QUFDdkQsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUEsNkJBQ0ksOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVDLEdBQVo7QUFBaUIsY0FBTSxFQUFDLE1BQXhCO0FBQStCLGlCQUFTLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztLQVhRTDtBQWFULCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU1csSUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQXpCQyxXQUF5QixRQUF6QkEsV0FBeUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7QUFDckQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixlQVNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQVdJO0FBQU0sZUFBUyxFQUFDLGlDQUFoQjtBQUFBLDhCQUVFO0FBQVMsaUJBQVMsRUFBQyxNQUFuQjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlJO0FBQUssbUJBQVMsRUFBQyxnRUFBZjtBQUFBLG9CQUVDRCxXQUZELGFBRUNBLFdBRkQsdUJBRUNBLFdBQVcsQ0FBRUUsR0FBYixDQUFpQjtBQUFBLGdCQUFFVCxHQUFGLFNBQUVBLEdBQUY7QUFBQSxnQkFBT1UsUUFBUCxTQUFPQSxRQUFQO0FBQUEsZ0JBQWlCQyxRQUFqQixTQUFpQkEsUUFBakI7QUFBQSxnQ0FDaEIsOERBQUMsMERBQUQ7QUFFQSxpQkFBRyxFQUFFWCxHQUZMO0FBR0Esc0JBQVEsRUFBRVUsUUFIVjtBQUlBLHNCQUFRLEVBQUdDO0FBSlgsZUFDS1gsR0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURnQjtBQUFBLFdBQWpCO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQW1CRTtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVBO0FBQUssbUJBQVMsRUFBQywwREFBZjtBQUFBLG9CQUVHUSxTQUZILGFBRUdBLFNBRkgsdUJBRUdBLFNBQVMsQ0FBRUMsR0FBWCxDQUFlO0FBQUEsZ0JBQUdULEdBQUgsU0FBR0EsR0FBSDtBQUFBLGdCQUFRSCxLQUFSLFNBQVFBLEtBQVI7QUFBQSxnQ0FDZCw4REFBQywyREFBRDtBQUVFLGlCQUFHLEVBQUVHLEdBRlA7QUFHRSxtQkFBSyxFQUFFSDtBQUhULGVBQ09HLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYztBQUFBLFdBQWY7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CRixlQWdDRSw4REFBQywwREFBRDtBQUNBLFlBQUksRUFBQyxpQ0FETDtBQUVBLGFBQUssRUFBQyxhQUZOO0FBR0EsbUJBQVcsRUFBQyxzRUFIWjtBQUlBLGtCQUFVLEVBQUM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUREO0tBeER1Qk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXJnZUNhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcblxyXG5mdW5jdGlvbiBMYXJnZUNhcmQoe2ltYWcsIHRpdGxlLCBkZXNjcmlwdGlvbiwgYnV0dG9uVGV4dH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWd9IGxheW91dD1cImZpbGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXJnZUNhcmRcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9Db21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgTGFyZ2VDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvTGFyZ2VDYXJkJztcbmltcG9ydCBNZWRpdW1DYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvTWVkaXVtQ2FyZCc7XG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvU21hbGxDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7ZXhwbG9yZURhdGEsIGNhcmRzRGF0YX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GYWl5ZSBBcGFydG1lbnQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIFxuXG4gICAgICAgIDxIZWFkZXIvPlxuICAgICAgICA8QmFubmVyIC8+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtOCBzbTpweC0xNlwiPlxuICAgICAgICAgIHsvKiAxc3QgQ2FyZCAqL31cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwdC02XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCBwYi01XCI+RXhwbG9yZSBOZWFyYnk8L2gyPlxuXG4gICAgICAgICAgICB7LyogUHVsbCBzb21lIGRhdGEgZnJvbSBhIHNlcnZlciAtIEFQSSBlbmRwb2ludHMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBcbiAgICAgICAgICAgICAgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICAgICAge2V4cGxvcmVEYXRhPy5tYXAoKHtpbWcsIGRpc3RhbmNlLCBsb2NhdGlvbn0pPT4oXG4gICAgICAgICAgICAgICAgPFNtYWxsQ2FyZCBcbiAgICAgICAgICAgICAgICBrZXk9e2ltZ31cbiAgICAgICAgICAgICAgICBpbWc9e2ltZ30gXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U9e2Rpc3RhbmNlfSBcbiAgICAgICAgICAgICAgICBsb2NhdGlvbj0ge2xvY2F0aW9ufS8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgey8qIDJuZCBjYXJkICovfVxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgcHktOFwiPkxpdmUgQW55d2hlcmU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTMgb3ZlcmZsb3ctc2Nyb2xsIFxuICAgICAgICAgIHNjcm9sbGJhci1oaWRlIHAtMyAtbWwtM1wiPiBcbiAgICAgICAgICAgIHtjYXJkc0RhdGE/Lm1hcCgoeyBpbWcsIHRpdGxlIH0pID0+KFxuICAgICAgICAgICAgICA8TWVkaXVtQ2FyZFxuICAgICAgICAgICAgICAgIGtleT17aW1nfVxuICAgICAgICAgICAgICAgIGltZz17aW1nfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxMYXJnZUNhcmRcbiAgICAgICAgICBpbWFnPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzRjalwiXG4gICAgICAgICAgdGl0bGU9XCJUcnkgSG9zdGluZ1wiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJFYXJuIGV4dHJhIGluY29tZSBhbmQgdW5sb2NrIG5ldyBvcHBvcnR1bml0aWVzIGJ5IHNoYXJpbmcgeW91ciBzcGFjZVwiXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIkxlYXJuIE1vcmVcIlxuXG4gICAgICAgICAgLz5cblxuICAgICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICBjb25zdCBleHBsb3JlRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vcHlwJykuXG4gIHRoZW4oXG4gICAgKHJlcyk9PnJlcy5qc29uKClcbiAgKTtcblxuICBjb25zdCBjYXJkc0RhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3pwMScpLlxuICB0aGVuKFxuICAgIHJlcz0+cmVzLmpzb24oKVxuICAgICk7XG5cblxuICByZXR1cm57XG4gICAgcHJvcHM6IHtcbiAgICAgIGV4cGxvcmVEYXRhLFxuICAgICAgY2FyZHNEYXRhLFxuICAgIH0sXG4gIH07XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGFyZ2VDYXJkIiwiaW1hZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJidXR0b25UZXh0IiwiaW1nIiwiSGVhZCIsIkJhbm5lciIsIkhlYWRlciIsIk1lZGl1bUNhcmQiLCJTbWFsbENhcmQiLCJIb21lIiwiZXhwbG9yZURhdGEiLCJjYXJkc0RhdGEiLCJtYXAiLCJkaXN0YW5jZSIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==