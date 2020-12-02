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
    className: linksStyle,
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
    }, showDetails ? __jsx("div", {
      className: "border rounded p-2 shadow",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 23
      }
    })), __jsx("p", {
      className: "text-xs",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, post.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "text-xs justify-end",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 23
      }
    }, "(post)"))) : __jsx("a", {
      href: post.link,
      className: "border rounded p-2 shadow hover:bg-gray-300 hover:no-underline",
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
    })));
  })) : __jsx("section", {
    className: linksStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
        lineNumber: 82,
        columnNumber: 15
      }
    }, showDetails ? __jsx("div", {
      className: "border rounded p-2 shadow",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 23
      }
    })), __jsx("p", {
      className: "text-xs",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, post.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "text-xs justify-end",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 23
      }
    }, "(post)"))) : __jsx("a", {
      href: post.link,
      className: "border rounded p-2 shadow hover:bg-gray-300 hover:no-underline",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MuanN4Il0sIm5hbWVzIjpbIkxpbmtDb250ZW50IiwicG9zdCIsImxpbmtOdW1iZXIiLCJkcmFmdCIsIkxpbmtzIiwiYWxsUG9zdHNEYXRhIiwidXNlU3RhdGUiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwic2l0ZVRpdGxlIiwib2xkIiwibGlua3NTdHlsZSIsImZpbHRlciIsImxpbmsiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQVdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDbEI7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ0MsVUFEUixFQUVHRCxJQUFJLENBQUNFLEtBQUwsSUFBYztBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmpCLENBRGtCO0FBQUEsQ0FBcEI7O0tBQU1ILFc7O0FBT1MsU0FBU0ksS0FBVCxRQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixTQUFoQkEsWUFBZ0I7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsS0FBRCxDQURBO0FBQUEsTUFDdkNDLFdBRHVDO0FBQUEsTUFDMUJDLGNBRDBCOztBQUc5QyxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUMsNERBQVIsQ0FERixDQURGLEVBS0U7QUFBUyxhQUFT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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saW5rcy4xYTk1ODVhOWI4ZTI3YjMxYzEwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJztcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgTGlua0NvbnRlbnQgPSAoeyBwb3N0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XG4gICAge3Bvc3QubGlua051bWJlcn1cbiAgICB7cG9zdC5kcmFmdCAmJiA8ZGl2IGNsYXNzTmFtZT1cIml0YWxpYyB0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5kcmFmdDwvZGl2Pn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rcyh7IGFsbFBvc3RzRGF0YSB9KSB7XG4gIGNvbnN0IFtzaG93RGV0YWlscywgc2V0U2hvd0RldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJteC0zIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTGlua3NcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14c1wiPkNsaXF1ZSBubyBib3TDo28gYW8gbGFkbyBwYXJhIHZlciBvcyBwb3N0cyByZWxhY2lvbmFkb3MuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIGJvcmRlciByb3VuZGVkIHAtMSBzaGFkb3dcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGV0YWlscygob2xkKSA9PiAhb2xkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2hvd0RldGFpbHMgPyAnLSBkZXRhbGhlcycgOiAnKyBkZXRhbGhlcyd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7c2hvd0RldGFpbHMgPyAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17bGlua3NTdHlsZX0+XG4gICAgICAgICAge2FsbFBvc3RzRGF0YVxuICAgICAgICAgICAgLmZpbHRlcigocG9zdCkgPT4gcG9zdC5saW5rKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGlua051bWJlciAtIGEubGlua051bWJlcilcbiAgICAgICAgICAgIC5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICB7c2hvd0RldGFpbHMgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMiBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRlbnQgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW2lkXVwiIGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteHMganVzdGlmeS1lbmRcIj4ocG9zdCk8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9IGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIHAtMiBzaGFkb3cgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6bm8tdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGVudCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtsaW5rc1N0eWxlfT5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhXG4gICAgICAgICAgICAuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmxpbmspXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5saW5rTnVtYmVyIC0gYS5saW5rTnVtYmVyKVxuICAgICAgICAgICAgLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICAgIHtzaG93RGV0YWlscyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGVudCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9baWRdXCIgYXM9e2AvcG9zdC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC14cyBqdXN0aWZ5LWVuZFwiPihwb3N0KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QubGlua30gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvdyBob3ZlcjpiZy1ncmF5LTMwMCBob3Zlcjpuby11bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==