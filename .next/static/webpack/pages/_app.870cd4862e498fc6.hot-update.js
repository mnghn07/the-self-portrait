"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.tsx":
/*!*******************************!*\
  !*** ./components/navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.tsx\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./components/menu.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/.pnpm/@chakra-ui+react@2.8.1_@emotion+react@11.11.1_@emotion+styled@11.11.0_@types+react@18.2.22_fr_dzbc6qjuv5wefjpu7s6jvsk54q/node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, children } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n            p: 2,\n            bg: active ? \"gray\" : undefined,\n            color: active ? \"white\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/archer/Desktop/Personal/the-self-portrait/components/navbar.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/archer/Desktop/Personal/the-self-portrait/components/navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst Navbar = (props)=>{\n    _s1();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        position: \"fixed\",\n        maxW: \"100%\",\n        px: 4,\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#b3b3b3\", \"#333333\"),\n        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"#333333\", \"#b3b3b3\"),\n        top: 0,\n        left: 0,\n        right: 0,\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            display: \"flex\",\n            justifyContent: \"flex-start\",\n            alignItems: \"center\",\n            maxW: \"100%\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/archer/Desktop/Personal/the-self-portrait/components/navbar.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                    display: \"flex\",\n                    alignItems: \"flex-start\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        items: [\n                            \"One\",\n                            \"Two\",\n                            \"Three\"\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/archer/Desktop/Personal/the-self-portrait/components/navbar.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/archer/Desktop/Personal/the-self-portrait/components/navbar.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/archer/Desktop/Personal/the-self-portrait/components/navbar.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/archer/Desktop/Personal/the-self-portrait/components/navbar.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Navbar, \"5rxRexUsrrZIvnjV+vC1pFVSBPE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0E7QUFDQTtBQUNPO0FBUVA7QUFJMUIsTUFBTVMsV0FBVztRQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQU87O0lBQzdDLE1BQU1DLFNBQVNGLFNBQVNEO0lBQ3hCLE1BQU1JLGdCQUFnQlAsbUVBQWlCQSxDQUFDLFdBQVc7SUFDbkQscUJBQ0UsOERBQUNKLGtEQUFRQTtRQUFDTyxNQUFNQTtrQkFDZCw0RUFBQ0Ysa0RBQUlBO1lBQ0hPLEdBQUc7WUFDSEMsSUFBSUgsU0FBUyxTQUFTSTtZQUN0QkMsT0FBT0wsU0FBUyxVQUFVQztzQkFFekJGOzs7Ozs7Ozs7OztBQUlUO0dBZE1IOztRQUVrQkYsK0RBQWlCQTs7O0tBRm5DRTtBQWdCTixNQUFNVSxTQUEwQkMsQ0FBQUE7O0lBQzlCLHFCQUNFLDhEQUFDaEIsaURBQUdBO1FBQ0ZpQixVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsSUFBSTtRQUNKUCxJQUFJVCxtRUFBaUJBLENBQUMsV0FBVztRQUNqQ1csT0FBT1gsbUVBQWlCQSxDQUFDLFdBQVc7UUFDcENpQixLQUFLO1FBQ0xDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxRQUFRO1FBQ1AsR0FBR1AsS0FBSztrQkFFVCw0RUFBQ2YsdURBQVNBO1lBQ1J1QixTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaUixNQUFNOzs4QkFFTiw4REFBQ3JCLDZDQUFJQTs7Ozs7OEJBQ0wsOERBQUNLLG1EQUFLQTtvQkFBQ3NCLFNBQVM7b0JBQVFFLFlBQVk7OEJBQ2xDLDRFQUFDNUIsNkNBQUlBO3dCQUFDNkIsT0FBTzs0QkFBQzs0QkFBTzs0QkFBTzt5QkFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztJQTNCTVo7O1FBTUlaLCtEQUFpQkE7UUFDZEEsK0RBQWlCQTs7O01BUHhCWTtBQTZCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci50c3g/N2YwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDb250YWluZXIsXG4gIFN0YWNrLFxuICBIZWFkaW5nLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgTGlua1xufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge31cblxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZjtcbiAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheTIwMFwiLCBcIndoaXRlQWxwaGEuOTAwXCIpO1xuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxMaW5rXG4gICAgICAgIHA9ezJ9XG4gICAgICAgIGJnPXthY3RpdmUgPyBcImdyYXlcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgY29sb3I9e2FjdGl2ZSA/IFwid2hpdGVcIiA6IGluYWN0aXZlQ29sb3J9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICA8L05leHRMaW5rPlxuICApO1xufTtcblxuY29uc3QgTmF2YmFyOiBSZWFjdC5GQzxQcm9wcz4gPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcG9zaXRpb249e1wiZml4ZWRcIn1cbiAgICAgIG1heFc9e1wiMTAwJVwifVxuICAgICAgcHg9ezR9XG4gICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCIjYjNiM2IzXCIsIFwiIzMzMzMzM1wiKX1cbiAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMzMzMzMzNcIiwgXCIjYjNiM2IzXCIpfVxuICAgICAgdG9wPXswfVxuICAgICAgbGVmdD17MH1cbiAgICAgIHJpZ2h0PXswfVxuICAgICAgekluZGV4PXsxfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtcImZsZXgtc3RhcnRcIn1cbiAgICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cbiAgICAgICAgbWF4Vz17XCIxMDAlXCJ9XG4gICAgICA+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxTdGFjayBkaXNwbGF5PXtcImZsZXhcIn0gYWxpZ25JdGVtcz17XCJmbGV4LXN0YXJ0XCJ9PlxuICAgICAgICAgIDxNZW51IGl0ZW1zPXtbXCJPbmVcIiwgXCJUd29cIiwgXCJUaHJlZVwiXX0gLz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTG9nbyIsIk1lbnUiLCJOZXh0TGluayIsIkJveCIsIkNvbnRhaW5lciIsIlN0YWNrIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJMaW5rIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInAiLCJiZyIsInVuZGVmaW5lZCIsImNvbG9yIiwiTmF2YmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsIm1heFciLCJweCIsInRvcCIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.tsx\n"));

/***/ })

});