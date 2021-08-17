"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
        img: "https://links.papareact.com/4cj",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjhjNDczZjQ3NzliMmQwYWMyYTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTTSxJQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLFNBQVksUUFBWkEsU0FBWTtBQUNyRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKLGVBU0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRKLGVBV0k7QUFBTSxlQUFTLEVBQUMsaUNBQWhCO0FBQUEsOEJBRUU7QUFBUyxpQkFBUyxFQUFDLE1BQW5CO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUk7QUFBSyxtQkFBUyxFQUFDLGdFQUFmO0FBQUEsb0JBRUNELFdBRkQsYUFFQ0EsV0FGRCx1QkFFQ0EsV0FBVyxDQUFFRSxHQUFiLENBQWlCO0FBQUEsZ0JBQUVDLEdBQUYsU0FBRUEsR0FBRjtBQUFBLGdCQUFPQyxRQUFQLFNBQU9BLFFBQVA7QUFBQSxnQkFBaUJDLFFBQWpCLFNBQWlCQSxRQUFqQjtBQUFBLGdDQUNoQiw4REFBQywwREFBRDtBQUVBLGlCQUFHLEVBQUVGLEdBRkw7QUFHQSxzQkFBUSxFQUFFQyxRQUhWO0FBSUEsc0JBQVEsRUFBR0M7QUFKWCxlQUNLRixHQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGdCO0FBQUEsV0FBakI7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBbUJFO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLDZCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUE7QUFBSyxtQkFBUyxFQUFDLDBEQUFmO0FBQUEsb0JBRUdGLFNBRkgsYUFFR0EsU0FGSCx1QkFFR0EsU0FBUyxDQUFFQyxHQUFYLENBQWU7QUFBQSxnQkFBR0MsR0FBSCxTQUFHQSxHQUFIO0FBQUEsZ0JBQVFHLEtBQVIsU0FBUUEsS0FBUjtBQUFBLGdDQUNkLDhEQUFDLDJEQUFEO0FBRUUsaUJBQUcsRUFBRUgsR0FGUDtBQUdFLG1CQUFLLEVBQUVHO0FBSFQsZUFDT0gsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBZjtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGLGVBZ0NFLDhEQUFDLDBEQUFEO0FBQ0EsV0FBRyxFQUFDLGlDQURKO0FBRUEsYUFBSyxFQUFDLGFBRk47QUFHQSxtQkFBVyxFQUFDLHNFQUhaO0FBSUEsa0JBQVUsRUFBQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1REQ7S0F4RHVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL0NvbXBvbmVudHMvQmFubmVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBMYXJnZUNhcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9MYXJnZUNhcmQnO1xuaW1wb3J0IE1lZGl1bUNhcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9NZWRpdW1DYXJkJztcbmltcG9ydCBTbWFsbENhcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9TbWFsbENhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtleHBsb3JlRGF0YSwgY2FyZHNEYXRhfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZhaXllIEFwYXJ0bWVudDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgXG5cbiAgICAgICAgPEhlYWRlci8+XG4gICAgICAgIDxCYW5uZXIgLz5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC04IHNtOnB4LTE2XCI+XG4gICAgICAgICAgey8qIDFzdCBDYXJkICovfVxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIHBiLTVcIj5FeHBsb3JlIE5lYXJieTwvaDI+XG5cbiAgICAgICAgICAgIHsvKiBQdWxsIHNvbWUgZGF0YSBmcm9tIGEgc2VydmVyIC0gQVBJIGVuZHBvaW50cyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIFxuICAgICAgICAgICAgICBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgICAgICB7ZXhwbG9yZURhdGE/Lm1hcCgoe2ltZywgZGlzdGFuY2UsIGxvY2F0aW9ufSk9PihcbiAgICAgICAgICAgICAgICA8U21hbGxDYXJkIFxuICAgICAgICAgICAgICAgIGtleT17aW1nfVxuICAgICAgICAgICAgICAgIGltZz17aW1nfSBcbiAgICAgICAgICAgICAgICBkaXN0YW5jZT17ZGlzdGFuY2V9IFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uPSB7bG9jYXRpb259Lz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICB7LyogMm5kIGNhcmQgKi99XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCBweS04XCI+TGl2ZSBBbnl3aGVyZTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMyBvdmVyZmxvdy1zY3JvbGwgXG4gICAgICAgICAgc2Nyb2xsYmFyLWhpZGUgcC0zIC1tbC0zXCI+IFxuICAgICAgICAgICAge2NhcmRzRGF0YT8ubWFwKCh7IGltZywgdGl0bGUgfSkgPT4oXG4gICAgICAgICAgICAgIDxNZWRpdW1DYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpbWd9XG4gICAgICAgICAgICAgICAgaW1nPXtpbWd9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPExhcmdlQ2FyZFxuICAgICAgICAgIGltZz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS80Y2pcIlxuICAgICAgICAgIHRpdGxlPVwiVHJ5IEhvc3RpbmdcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRWFybiBleHRyYSBpbmNvbWUgYW5kIHVubG9jayBuZXcgb3Bwb3J0dW5pdGllcyBieSBzaGFyaW5nIHlvdXIgc3BhY2VcIlxuICAgICAgICAgIGJ1dHRvblRleHQ9XCJMZWFybiBNb3JlXCJcblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgY29uc3QgZXhwbG9yZURhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3B5cCcpLlxuICB0aGVuKFxuICAgIChyZXMpPT5yZXMuanNvbigpXG4gICk7XG5cbiAgY29uc3QgY2FyZHNEYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS96cDEnKS5cbiAgdGhlbihcbiAgICByZXM9PnJlcy5qc29uKClcbiAgICApO1xuXG5cbiAgcmV0dXJue1xuICAgIHByb3BzOiB7XG4gICAgICBleHBsb3JlRGF0YSxcbiAgICAgIGNhcmRzRGF0YSxcbiAgICB9LFxuICB9O1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiQmFubmVyIiwiSGVhZGVyIiwiTGFyZ2VDYXJkIiwiTWVkaXVtQ2FyZCIsIlNtYWxsQ2FyZCIsIkhvbWUiLCJleHBsb3JlRGF0YSIsImNhcmRzRGF0YSIsIm1hcCIsImltZyIsImRpc3RhbmNlIiwibG9jYXRpb24iLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=