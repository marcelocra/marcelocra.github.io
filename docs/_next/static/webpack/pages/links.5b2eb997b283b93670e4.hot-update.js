webpackHotUpdate_N_E("pages/links",{

/***/ "./pages/links.jsx":
/*!*************************!*\
  !*** ./pages/links.jsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Links; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
var _this = undefined,
    _jsxFileName = "/home/marcelocra/projects/marcelocra.github.io/pages/links.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var LinkContent = function LinkContent(_ref) {
  var post = _ref.post;
  return __jsx("div", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, post.linkNumber, post.draft && __jsx("div", {
    className: "italic text-xs text-gray-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 20
    }
  }, "draft"));
};

_c = LinkContent;

var styleFromDetails = function styleFromDetails(showDetails) {
  return "\n  m-3 grid grid-cols-".concat(showDetails ? 2 : 4, " gap-2 text-center\n  sm:grid-cols-").concat(showDetails ? 4 : 6, "\n");
};

var __N_SSG = true;
function Links(_ref2) {
  _s();

  var _this2 = this;

  var allPostsData = _ref2.allPostsData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showDetails = _useState[0],
      setShowDetails = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(styleFromDetails(showDetails)),
      linksStyle = _useState2[0],
      setLinksStyle = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLinksStyle(styleFromDetails(showDetails));
  }, [showDetails]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx("section", {
    className: "mx-3 grid grid-cols-3 gap-1 items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-span-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Links"), __jsx("p", {
    className: "text-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Clique no bot\xE3o ao lado para ver os posts relacionados.")), __jsx("div", {
    className: "col-span-1 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "text-xs border rounded p-1 shadow",
    type: "button",
    onClick: function onClick() {
      return setShowDetails(function (old) {
        return !old;
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, showDetails ? '- detalhes' : '+ detalhes'))), __jsx("section", {
    className: linksStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, allPostsData.filter(function (post) {
    return post.link;
  }).sort(function (a, b) {
    return b.linkNumber - a.linkNumber;
  }).map(function (post) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: post.link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, showDetails ? __jsx("div", {
      className: "border rounded p-2 shadow",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    })), __jsx("p", {
      className: "text-xs",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, post.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "text-xs justify-end",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, "(post)"))) : __jsx("a", {
      href: post.link,
      className: "border rounded p-2 shadow hover:bg-gray-300 hover:no-underline",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    })));
  })));
}

_s(Links, "j8BerOTcqxNptuiyf0sPxNQoS1k=");

_c2 = Links;

var _c, _c2;

$RefreshReg$(_c, "LinkContent");
$RefreshReg$(_c2, "Links");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MuanN4Il0sIm5hbWVzIjpbIkxpbmtDb250ZW50IiwicG9zdCIsImxpbmtOdW1iZXIiLCJkcmFmdCIsInN0eWxlRnJvbURldGFpbHMiLCJzaG93RGV0YWlscyIsIkxpbmtzIiwiYWxsUG9zdHNEYXRhIiwidXNlU3RhdGUiLCJzZXRTaG93RGV0YWlscyIsImxpbmtzU3R5bGUiLCJzZXRMaW5rc1N0eWxlIiwidXNlRWZmZWN0Iiwic2l0ZVRpdGxlIiwib2xkIiwiZmlsdGVyIiwibGluayIsInNvcnQiLCJhIiwiYiIsIm1hcCIsInRpdGxlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBV0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNsQjtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDQyxVQURSLEVBRUdELElBQUksQ0FBQ0UsS0FBTCxJQUFjO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGakIsQ0FEa0I7QUFBQSxDQUFwQjs7S0FBTUgsVzs7QUFPTixJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFdBQUQ7QUFBQSwwQ0FDRkEsV0FBVyxHQUFHLENBQUgsR0FBTyxDQURoQixnREFFUkEsV0FBVyxHQUFHLENBQUgsR0FBTyxDQUZWO0FBQUEsQ0FBekI7OztBQUtlLFNBQVNDLEtBQVQsUUFBaUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsWUFBZ0IsU0FBaEJBLFlBQWdCOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDLEtBQUQsQ0FEQTtBQUFBLE1BQ3ZDSCxXQUR1QztBQUFBLE1BQzFCSSxjQUQwQjs7QUFBQSxt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ZUFBUyxFQUFDLGdFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxXQUFEO0FBQWEsVUFBSSxFQUFFZixJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FaSixDQURHO0FBQUEsR0FITixDQURILENBdkJGLENBREY7QUFrREQ7O0dBMUR1QkssSzs7TUFBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saW5rcy41YjJlYjk5N2IyODNiOTM2NzBlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBMaW5rQ29udGVudCA9ICh7IHBvc3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICB7cG9zdC5saW5rTnVtYmVyfVxuICAgIHtwb3N0LmRyYWZ0ICYmIDxkaXYgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPmRyYWZ0PC9kaXY+fVxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IHN0eWxlRnJvbURldGFpbHMgPSAoc2hvd0RldGFpbHMpID0+IChgXG4gIG0tMyBncmlkIGdyaWQtY29scy0ke3Nob3dEZXRhaWxzID8gMiA6IDR9IGdhcC0yIHRleHQtY2VudGVyXG4gIHNtOmdyaWQtY29scy0ke3Nob3dEZXRhaWxzID8gNCA6IDZ9XG5gKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua3MoeyBhbGxQb3N0c0RhdGEgfSkge1xuICBjb25zdCBbc2hvd0RldGFpbHMsIHNldFNob3dEZXRhaWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpbmtzU3R5bGUsIHNldExpbmtzU3R5bGVdID0gdXNlU3RhdGUoc3R5bGVGcm9tRGV0YWlscyhzaG93RGV0YWlscykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TGlua3NTdHlsZShzdHlsZUZyb21EZXRhaWxzKHNob3dEZXRhaWxzKSk7XG4gIH0sIFtzaG93RGV0YWlsc10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJteC0zIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTGlua3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPkNsaXF1ZSBubyBib3TDo28gYW8gbGFkbyBwYXJhIHZlciBvcyBwb3N0cyByZWxhY2lvbmFkb3MuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJvcmRlciByb3VuZGVkIHAtMSBzaGFkb3dcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGV0YWlscygob2xkKSA9PiAhb2xkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2hvd0RldGFpbHMgPyAnLSBkZXRhbGhlcycgOiAnKyBkZXRhbGhlcyd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2xpbmtzU3R5bGV9PlxuICAgICAgICB7YWxsUG9zdHNEYXRhXG4gICAgICAgICAgLmZpbHRlcigocG9zdCkgPT4gcG9zdC5saW5rKVxuICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxpbmtOdW1iZXIgLSBhLmxpbmtOdW1iZXIpXG4gICAgICAgICAgLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAge3Nob3dEZXRhaWxzID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF1cIiBhcz17YC9wb3N0LyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC14cyBqdXN0aWZ5LWVuZFwiPihwb3N0KTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMiBzaGFkb3cgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6bm8tdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICA8TGlua0NvbnRlbnQgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICkpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==