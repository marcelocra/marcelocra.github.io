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
    className: linksStyle,
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
    }, showDetails ? __jsx("div", {
      className: "border rounded p-2 shadow",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 23
      }
    })), __jsx("p", {
      className: "text-xs",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, post.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "text-xs justify-end",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    }, "(post)"))) : __jsx("a", {
      href: post.link,
      className: "border rounded p-2 shadow hover:bg-gray-300 hover:no-underline",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 19
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MuanN4Il0sIm5hbWVzIjpbIkxpbmtDb250ZW50IiwicG9zdCIsImxpbmtOdW1iZXIiLCJkcmFmdCIsIkxpbmtzIiwiYWxsUG9zdHNEYXRhIiwidXNlU3RhdGUiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwic2l0ZVRpdGxlIiwib2xkIiwiZmlsdGVyIiwibGluayIsInNvcnQiLCJhIiwiYiIsIm1hcCIsInRpdGxlIiwiaWQiLCJsaW5rc1N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQVdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDbEI7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ0MsVUFEUixFQUVHRCxJQUFJLENBQUNFLEtBQUwsSUFBYztBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmpCLENBRGtCO0FBQUEsQ0FBcEI7O0tBQU1ILFc7O0FBT1MsU0FBU0ksS0FBVCxRQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixTQUFoQkEsWUFBZ0I7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsS0FBRCxDQURBO0FBQUEsTUFDdkNDLFdBRHVDO0FBQUEsTUFDMUJDLGNBRDBCOztBQUc5QyxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUMsNERBQVIsQ0FERixDQURGLEVBS0U7QUFBUyxhQUFT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QWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFFTixJQUFJLENBQUNXLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsV0FBRDtBQUFhLFVBQUksRUFBRVgsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFHLGVBQVMsRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0JBLElBQUksQ0FBQ2dCLEtBQTdCLENBSkYsRUFLRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBd0IsUUFBRSxrQkFBV2hCLElBQUksQ0FBQ2lCLEVBQWhCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBTEYsQ0FEVSxHQVdWO0FBQUcsVUFBSSxFQUFFakIsSUFBSSxDQUFDVyxJQUFkO0FBQW9CLGVBQVMsRUFBQyxnRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsV0FBRDtBQUFhLFVBQUksRUFBRVgsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBWkosQ0FERztBQUFBLEdBSE4sQ0FESCxDQTNDSixDQURGO0FBdUVEOztHQTFFdUJHLEs7O01BQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGlua3MuYzk3YjgzMGI5MDM1Y2QwNGU1MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cyc7XG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IExpbmtDb250ZW50ID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgIHtwb3N0LmxpbmtOdW1iZXJ9XG4gICAge3Bvc3QuZHJhZnQgJiYgPGRpdiBjbGFzc05hbWU9XCJpdGFsaWMgdGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+ZHJhZnQ8L2Rpdj59XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua3MoeyBhbGxQb3N0c0RhdGEgfSkge1xuICBjb25zdCBbc2hvd0RldGFpbHMsIHNldFNob3dEZXRhaWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXgtMyBncmlkIGdyaWQtY29scy0zIGdhcC0xIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExpbmtzXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj5DbGlxdWUgbm8gYm90w6NvIGFvIGxhZG8gcGFyYSB2ZXIgb3MgcG9zdHMgcmVsYWNpb25hZG9zLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyBib3JkZXIgcm91bmRlZCBwLTEgc2hhZG93XCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0RldGFpbHMoKG9sZCkgPT4gIW9sZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Nob3dEZXRhaWxzID8gJy0gZGV0YWxoZXMnIDogJysgZGV0YWxoZXMnfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAge3Nob3dEZXRhaWxzID8gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtLTMgZ3JpZCBncmlkLWNvbHMtMiBnYXAtMiB0ZXh0LWNlbnRlciBzbTpncmlkLWNvbHMtNFwiPlxuICAgICAgICAgIHthbGxQb3N0c0RhdGFcbiAgICAgICAgICAgIC5maWx0ZXIoKHBvc3QpID0+IHBvc3QubGluaylcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxpbmtOdW1iZXIgLSBhLmxpbmtOdW1iZXIpXG4gICAgICAgICAgICAubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3Bvc3QubGlua30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTIgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRlbnQgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW2lkXVwiIGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGp1c3RpZnktZW5kXCI+KHBvc3QpPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17bGlua3NTdHlsZX0+XG4gICAgICAgICAge2FsbFBvc3RzRGF0YVxuICAgICAgICAgICAgLmZpbHRlcigocG9zdCkgPT4gcG9zdC5saW5rKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGlua051bWJlciAtIGEubGlua051bWJlcilcbiAgICAgICAgICAgIC5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICB7c2hvd0RldGFpbHMgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMiBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRlbnQgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW2lkXVwiIGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteHMganVzdGlmeS1lbmRcIj4ocG9zdCk8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMiBzaGFkb3cgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6bm8tdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGVudCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=