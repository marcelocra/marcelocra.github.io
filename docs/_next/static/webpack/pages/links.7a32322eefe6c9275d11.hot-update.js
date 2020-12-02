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

  var linkStyle = "m-3 grid grid-cols-".concat(showDetails ? 2 : 4, " gap-2 text-center\n  sm:grid-cols-").concat(showDetails ? 4 : 6); // const [linksStyle, setLinksStyle] = useState(styleFromDetails(showDetails));
  // useEffect(() => {
  //   setLinksStyle(styleFromDetails(showDetails));
  // }, [showDetails]);

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx("section", {
    className: "mx-3 grid grid-cols-3 gap-1 items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-span-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Links"), __jsx("p", {
    className: "text-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Clique no bot\xE3o ao lado para ver os posts relacionados.")), __jsx("div", {
    className: "col-span-1 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 11
    }
  }, showDetails ? '- detalhes' : '+ detalhes'))), __jsx("section", {
    className: linksStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
        lineNumber: 68,
        columnNumber: 13
      }
    }, showDetails ? __jsx("div", {
      className: "border rounded p-2 shadow",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    })), __jsx("p", {
      className: "text-xs",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, post.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "text-xs justify-end",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, "(post)"))) : __jsx("a", {
      href: post.link,
      className: "border rounded p-2 shadow hover:bg-gray-300 hover:no-underline",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MuanN4Il0sIm5hbWVzIjpbIkxpbmtDb250ZW50IiwicG9zdCIsImxpbmtOdW1iZXIiLCJkcmFmdCIsInN0eWxlRnJvbURldGFpbHMiLCJzaG93RGV0YWlscyIsIkxpbmtzIiwiYWxsUG9zdHNEYXRhIiwidXNlU3RhdGUiLCJzZXRTaG93RGV0YWlscyIsImxpbmtTdHlsZSIsInNpdGVUaXRsZSIsIm9sZCIsImxpbmtzU3R5bGUiLCJmaWx0ZXIiLCJsaW5rIiwic29ydCIsImEiLCJiIiwibWFwIiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFXQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFNBQ2xCO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQUFJLENBQUNDLFVBRFIsRUFFR0QsSUFBSSxDQUFDRSxLQUFMLElBQWM7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZqQixDQURrQjtBQUFBLENBQXBCOztLQUFNSCxXOztBQU9OLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsV0FBRDtBQUFBLDBDQUNGQSxXQUFXLEdBQUcsQ0FBSCxHQUFPLENBRGhCLGdEQUVSQSxXQUFXLEdBQUcsQ0FBSCxHQUFPLENBRlY7QUFBQSxDQUF6Qjs7O0FBS2UsU0FBU0MsS0FBVCxRQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixTQUFoQkEsWUFBZ0I7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsS0FBRCxDQURBO0FBQUEsTUFDdkNILFdBRHVDO0FBQUEsTUFDMUJJLGNBRDBCOztBQUU5QyxNQUFNQyxTQUFTLGdDQUF5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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVpKLENBREc7QUFBQSxHQUhOLENBREgsQ0F2QkYsQ0FERjtBQWtERDs7R0E1RHVCSyxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpbmtzLjdhMzIzMjJlZWZlNmM5Mjc1ZDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cyc7XG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IExpbmtDb250ZW50ID0gKHsgcG9zdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgIHtwb3N0LmxpbmtOdW1iZXJ9XG4gICAge3Bvc3QuZHJhZnQgJiYgPGRpdiBjbGFzc05hbWU9XCJpdGFsaWMgdGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+ZHJhZnQ8L2Rpdj59XG4gIDwvZGl2PlxuKTtcblxuY29uc3Qgc3R5bGVGcm9tRGV0YWlscyA9IChzaG93RGV0YWlscykgPT4gKGBcbiAgbS0zIGdyaWQgZ3JpZC1jb2xzLSR7c2hvd0RldGFpbHMgPyAyIDogNH0gZ2FwLTIgdGV4dC1jZW50ZXJcbiAgc206Z3JpZC1jb2xzLSR7c2hvd0RldGFpbHMgPyA0IDogNn1cbmApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rcyh7IGFsbFBvc3RzRGF0YSB9KSB7XG4gIGNvbnN0IFtzaG93RGV0YWlscywgc2V0U2hvd0RldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsaW5rU3R5bGUgPSBgbS0zIGdyaWQgZ3JpZC1jb2xzLSR7c2hvd0RldGFpbHMgPyAyIDogNH0gZ2FwLTIgdGV4dC1jZW50ZXJcbiAgc206Z3JpZC1jb2xzLSR7c2hvd0RldGFpbHMgPyA0IDogNn1gO1xuICAvLyBjb25zdCBbbGlua3NTdHlsZSwgc2V0TGlua3NTdHlsZV0gPSB1c2VTdGF0ZShzdHlsZUZyb21EZXRhaWxzKHNob3dEZXRhaWxzKSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRMaW5rc1N0eWxlKHN0eWxlRnJvbURldGFpbHMoc2hvd0RldGFpbHMpKTtcbiAgLy8gfSwgW3Nob3dEZXRhaWxzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LTMgZ3JpZCBncmlkLWNvbHMtMyBnYXAtMSBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMaW5rc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+Q2xpcXVlIG5vIGJvdMOjbyBhbyBsYWRvIHBhcmEgdmVyIG9zIHBvc3RzIHJlbGFjaW9uYWRvcy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgdGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgYm9yZGVyIHJvdW5kZWQgcC0xIHNoYWRvd1wiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXRhaWxzKChvbGQpID0+ICFvbGQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG93RGV0YWlscyA/ICctIGRldGFsaGVzJyA6ICcrIGRldGFsaGVzJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17bGlua3NTdHlsZX0+XG4gICAgICAgIHthbGxQb3N0c0RhdGFcbiAgICAgICAgICAuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmxpbmspXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGlua051bWJlciAtIGEubGlua051bWJlcilcbiAgICAgICAgICAubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICB7c2hvd0RldGFpbHMgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTIgc2hhZG93XCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua0NvbnRlbnQgcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW2lkXVwiIGFzPXtgL3Bvc3QvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGp1c3RpZnktZW5kXCI+KHBvc3QpPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QubGlua30gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvdyBob3ZlcjpiZy1ncmF5LTMwMCBob3Zlcjpuby11bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rQ29udGVudCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9