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
var __N_SSG = true;
function Links(_ref2) {
  _s();

  var _this2 = this;

  var allPostsData = _ref2.allPostsData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showDetails = _useState[0],
      setShowDetails = _useState[1];

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx("section", {
    className: "mx-3 grid grid-cols-3 gap-1 items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-span-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Links"), __jsx("p", {
    className: "text-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Clique no bot\xE3o ao lado para ver os posts relacionados.")), __jsx("div", {
    className: "col-span-1 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 11
    }
  }, showDetails ? '- detalhes' : '+ detalhes'))), showDetails ? __jsx("section", {
    className: "m-3 grid grid-cols-2 gap-2 text-center sm:grid-cols-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
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
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "border rounded p-2 shadow",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    })), __jsx("p", {
      className: "text-xs",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, post.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "text-xs justify-end",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, "(post)"))));
  })) : __jsx("section", {
    className: "m-3 grid grid-cols-4 gap-2 text-center sm:grid-cols-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
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
        lineNumber: 76,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: post.link,
      className: "border rounded p-2 shadow hover:bg-gray-300 hover:no-underline",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    })));
  })));
}

_s(Links, "n2rC7YX8Mzz154E9USQBvseY7a0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MuanN4Il0sIm5hbWVzIjpbIkxpbmtDb250ZW50IiwicG9zdCIsImxpbmtOdW1iZXIiLCJkcmFmdCIsIkxpbmtzIiwiYWxsUG9zdHNEYXRhIiwidXNlU3RhdGUiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwic2l0ZVRpdGxlIiwib2xkIiwiZmlsdGVyIiwibGluayIsInNvcnQiLCJhIiwiYiIsIm1hcCIsInRpdGxlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7O0FBV0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxTQUNsQjtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDQyxVQURSLEVBRUdELElBQUksQ0FBQ0UsS0FBTCxJQUFjO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGakIsQ0FEa0I7QUFBQSxDQUFwQjs7S0FBTUgsVzs7QUFPUyxTQUFTSSxLQUFULFFBQWlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFNBQWhCQSxZQUFnQjs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxLQUFELENBREE7QUFBQSxNQUN2Q0MsV0FEdUM7QUFBQSxNQUMxQkMsY0FEMEI7O0FBRzlDLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQyw0REFBUixDQURGLENBREYsRUFLRTtBQUFTLGFBQVMsRUFBQywwQ0FBbkI7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LEVBQUMsZ0VBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLFdBQUQ7QUFBYSxVQUFJLEVBQUVYLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBREc7QUFBQSxHQUhOLENBREgsQ0EzQ0osQ0FERjtBQTJERDs7R0E5RHVCRyxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpbmtzLjczMGM4YWRmYTk3MWMyZDc4YWViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBMaW5rQ29udGVudCA9ICh7IHBvc3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICB7cG9zdC5saW5rTnVtYmVyfVxuICAgIHtwb3N0LmRyYWZ0ICYmIDxkaXYgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPmRyYWZ0PC9kaXY+fVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmtzKHsgYWxsUG9zdHNEYXRhIH0pIHtcbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LTMgZ3JpZCBncmlkLWNvbHMtMyBnYXAtMSBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMaW5rc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+Q2xpcXVlIG5vIGJvdMOjbyBhbyBsYWRvIHBhcmEgdmVyIG9zIHBvc3RzIHJlbGFjaW9uYWRvcy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgdGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgYm9yZGVyIHJvdW5kZWQgcC0xIHNoYWRvd1wiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXRhaWxzKChvbGQpID0+ICFvbGQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG93RGV0YWlscyA/ICctIGRldGFsaGVzJyA6ICcrIGRldGFsaGVzJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHtzaG93RGV0YWlscyA/IChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibS0zIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgdGV4dC1jZW50ZXIgc206Z3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhXG4gICAgICAgICAgICAuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmxpbmspXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5saW5rTnVtYmVyIC0gYS5saW5rTnVtYmVyKVxuICAgICAgICAgICAgLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF1cIiBhcz17YC9wb3N0LyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC14cyBqdXN0aWZ5LWVuZFwiPihwb3N0KTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApIDogKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtLTMgZ3JpZCBncmlkLWNvbHMtNCBnYXAtMiB0ZXh0LWNlbnRlciBzbTpncmlkLWNvbHMtNlwiPlxuICAgICAgICAgIHthbGxQb3N0c0RhdGFcbiAgICAgICAgICAgIC5maWx0ZXIoKHBvc3QpID0+IHBvc3QubGluaylcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxpbmtOdW1iZXIgLSBhLmxpbmtOdW1iZXIpXG4gICAgICAgICAgICAubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfSBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTIgc2hhZG93IGhvdmVyOmJnLWdyYXktMzAwIGhvdmVyOm5vLXVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9