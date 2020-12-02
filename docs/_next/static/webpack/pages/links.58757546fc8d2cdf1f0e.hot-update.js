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

var StyledLinks = function StyledLinks(_ref2) {
  var allPostsData = _ref2.allPostsData,
      showDetails = _ref2.showDetails;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, allPostsData.filter(function (post) {
    return post.link;
  }).sort(function (a, b) {
    return b.linkNumber - a.linkNumber;
  }).map(function (post) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: post.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, showDetails ? __jsx("div", {
      className: "border rounded p-2 shadow",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: post.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    })), __jsx("p", {
      className: "text-xs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, post.title), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/post/[id]",
      as: "/post/".concat(post.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "text-xs justify-end",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, "(post)"))) : __jsx("a", {
      href: post.link,
      className: "border rounded p-2 shadow hover:bg-gray-300 hover:no-underline",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx(LinkContent, {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    })));
  }));
};

_c2 = StyledLinks;
var __N_SSG = true;
function Links(_ref3) {
  _s();

  var allPostsData = _ref3.allPostsData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showDetails = _useState[0],
      setShowDetails = _useState[1];

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, _components_layout__WEBPACK_IMPORTED_MODULE_3__["siteTitle"])), __jsx("section", {
    className: "mx-3 grid grid-cols-3 gap-1 items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-span-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "Links"), __jsx("p", {
    className: "text-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Clique no bot\xE3o ao lado para ver os posts relacionados.")), __jsx("div", {
    className: "col-span-1 text-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 11
    }
  }, showDetails ? '- detalhes' : '+ detalhes'))), __jsx("section", {
    className: linksStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }));
}

_s(Links, "n2rC7YX8Mzz154E9USQBvseY7a0=");

_c3 = Links;

var _c, _c2, _c3;

$RefreshReg$(_c, "LinkContent");
$RefreshReg$(_c2, "StyledLinks");
$RefreshReg$(_c3, "Links");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MuanN4Il0sIm5hbWVzIjpbIkxpbmtDb250ZW50IiwicG9zdCIsImxpbmtOdW1iZXIiLCJkcmFmdCIsInN0eWxlRnJvbURldGFpbHMiLCJzaG93RGV0YWlscyIsIlN0eWxlZExpbmtzIiwiYWxsUG9zdHNEYXRhIiwiZmlsdGVyIiwibGluayIsInNvcnQiLCJhIiwiYiIsIm1hcCIsInRpdGxlIiwiaWQiLCJMaW5rcyIsInVzZVN0YXRlIiwic2V0U2hvd0RldGFpbHMiLCJzaXRlVGl0bGUiLCJvbGQiLCJsaW5rc1N0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQVdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsU0FDbEI7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ0MsVUFEUixFQUVHRCxJQUFJLENBQUNFLEtBQUwsSUFBYztBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmpCLENBRGtCO0FBQUEsQ0FBcEI7O0tBQU1ILFc7O0FBT04sSUFBTUksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxXQUFEO0FBQUEsMENBQ0ZBLFdBQVcsR0FBRyxDQUFILEdBQU8sQ0FEaEIsZ0RBRVJBLFdBQVcsR0FBRyxDQUFILEdBQU8sQ0FGVjtBQUFBLENBQXpCOztBQUtBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsWUFBSCxTQUFHQSxZQUFIO0FBQUEsTUFBaUJGLFdBQWpCLFNBQWlCQSxXQUFqQjtBQUFBLFNBQ2xCLG1FQUNHRSxZQUFZLENBQ1ZDLE1BREYsQ0FDUyxVQUFDUCxJQUFEO0FBQUEsV0FBVUEsSUFBSSxD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RTtBQUFTLGFBQVMsRUFBRWdCLFVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsQ0FERjtBQTJCRDs7R0E5QnVCTCxLOztNQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpbmtzLjU4NzU3NTQ2ZmM4ZDJjZGYxZjBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnO1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBMaW5rQ29udGVudCA9ICh7IHBvc3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICB7cG9zdC5saW5rTnVtYmVyfVxuICAgIHtwb3N0LmRyYWZ0ICYmIDxkaXYgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPmRyYWZ0PC9kaXY+fVxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IHN0eWxlRnJvbURldGFpbHMgPSAoc2hvd0RldGFpbHMpID0+IChgXG4gIG0tMyBncmlkIGdyaWQtY29scy0ke3Nob3dEZXRhaWxzID8gMiA6IDR9IGdhcC0yIHRleHQtY2VudGVyXG4gIHNtOmdyaWQtY29scy0ke3Nob3dEZXRhaWxzID8gNCA6IDZ9XG5gKTtcblxuY29uc3QgU3R5bGVkTGlua3MgPSAoeyBhbGxQb3N0c0RhdGEsIHNob3dEZXRhaWxzIH0pID0+IChcbiAgPD5cbiAgICB7YWxsUG9zdHNEYXRhXG4gICAgICAuZmlsdGVyKChwb3N0KSA9PiBwb3N0LmxpbmspXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5saW5rTnVtYmVyIC0gYS5saW5rTnVtYmVyKVxuICAgICAgLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwb3N0Lmxpbmt9PlxuICAgICAgICAgIHtzaG93RGV0YWlscyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvd1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0Lmxpbmt9PlxuICAgICAgICAgICAgICAgIDxMaW5rQ29udGVudCBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj57cG9zdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9baWRdXCIgYXM9e2AvcG9zdC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC14cyBqdXN0aWZ5LWVuZFwiPihwb3N0KTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QubGlua30gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvdyBob3ZlcjpiZy1ncmF5LTMwMCBob3Zlcjpuby11bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAgPExpbmtDb250ZW50IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpfVxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmtzKHsgYWxsUG9zdHNEYXRhIH0pIHtcbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LTMgZ3JpZCBncmlkLWNvbHMtMyBnYXAtMSBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMaW5rc1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+Q2xpcXVlIG5vIGJvdMOjbyBhbyBsYWRvIHBhcmEgdmVyIG9zIHBvc3RzIHJlbGFjaW9uYWRvcy48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgdGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgYm9yZGVyIHJvdW5kZWQgcC0xIHNoYWRvd1wiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXRhaWxzKChvbGQpID0+ICFvbGQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG93RGV0YWlscyA/ICctIGRldGFsaGVzJyA6ICcrIGRldGFsaGVzJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17bGlua3NTdHlsZX0gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=