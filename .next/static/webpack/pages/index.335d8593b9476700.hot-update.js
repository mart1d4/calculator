"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Calculator.jsx":
/*!***************************************!*\
  !*** ./src/components/Calculator.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator.module.css */ \"./src/components/calculator.module.css\");\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calculator_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst secondaryButtons = [\n    \"√\",\n    \"π\",\n    \"^\",\n    \"!\",\n    \"DEG\",\n    \"sin\",\n    \"cos\",\n    \"tan\",\n    \"INV\",\n    \"e\",\n    \"ln\",\n    \"log\"\n];\nconst primaryButtons = [\n    \"AC\",\n    \"()\",\n    \"%\",\n    \"\\xf7\",\n    \"7\",\n    \"8\",\n    \"9\",\n    \"\\xd7\",\n    \"4\",\n    \"5\",\n    \"6\",\n    \"-\",\n    \"1\",\n    \"2\",\n    \"3\",\n    \"+\",\n    \"0\",\n    \"\\xb7\",\n    \"d\",\n    \"=\"\n];\nconst Calculator = ()=>{\n    _s();\n    const [displayOtherSecondaryButtons, setDisplayOtherSecondaryButtons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Previous result\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Current result\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"To calculate: 3 x 4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondaryButtons),\n                children: secondaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: !displayOtherSecondaryButtons ? index > 3 ? (_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondaryButtonHidden) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondaryButton) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default().secondaryButton),\n                        children: button\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default().primaryButtons),\n                children: primaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default().primaryButton),\n                        children: button\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Calculator, \"m11KaD5BH/LOT6G1/KxbJRLfVZM=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlDO0FBQ1k7QUFFN0MsTUFBTUUsbUJBQW1CO0lBQ3JCO0lBQUs7SUFBSztJQUFLO0lBQ2Y7SUFBTztJQUFPO0lBQU87SUFDckI7SUFBTztJQUFLO0lBQU07Q0FDckI7QUFFRCxNQUFNQyxpQkFBaUI7SUFDbkI7SUFBTTtJQUFNO0lBQUs7SUFDakI7SUFBSztJQUFLO0lBQUs7SUFDZjtJQUFLO0lBQUs7SUFBSztJQUNmO0lBQUs7SUFBSztJQUFLO0lBQ2Y7SUFBSztJQUFLO0lBQUs7Q0FDbEI7QUFFRCxNQUFNQyxhQUFhLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsOEJBQThCQyxnQ0FBZ0MsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUV0RixxQkFDSSw4REFBQ087UUFDR0MsV0FBV1AseUVBQWdCOzswQkFFM0IsOERBQUNNOztrQ0FDRyw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7OztrQ0FDTCw4REFBQ0E7a0NBQUk7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQ0E7Z0JBQ0dDLFdBQVdQLGdGQUF1QjswQkFFakNDLGlCQUFpQlEsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUMzQiw4REFBQ0Q7d0JBRUdILFdBQ0ksQ0FBQ0gsK0JBQ0tPLFFBQVEsSUFBSVgscUZBQTRCLEdBQUdBLCtFQUFzQixHQUNqRUEsK0VBQXNCO2tDQUcvQlU7dUJBUElDOzs7Ozs7Ozs7OzBCQVlqQiw4REFBQ0w7Z0JBQ0dDLFdBQVdQLDhFQUFxQjswQkFFL0JFLGVBQWVPLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDekIsOERBQUNEO3dCQUVHSCxXQUFXUCw2RUFBb0I7a0NBRTlCVTt1QkFISUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0I7R0E1Q01SO0tBQUFBO0FBOENOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanN4P2Q1ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYWxjdWxhdG9yLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3Qgc2Vjb25kYXJ5QnV0dG9ucyA9IFtcclxuICAgICfiiJonLCAnz4AnLCAnXicsICchJyxcclxuICAgICdERUcnLCAnc2luJywgJ2NvcycsICd0YW4nLFxyXG4gICAgJ0lOVicsICdlJywgJ2xuJywgJ2xvZycsXHJcbl07XHJcblxyXG5jb25zdCBwcmltYXJ5QnV0dG9ucyA9IFtcclxuICAgICdBQycsICcoKScsICclJywgJ8O3JyxcclxuICAgICc3JywgJzgnLCAnOScsICfDlycsXHJcbiAgICAnNCcsICc1JywgJzYnLCAnLScsXHJcbiAgICAnMScsICcyJywgJzMnLCAnKycsXHJcbiAgICAnMCcsICfCtycsICdkJywgJz0nXHJcbl07XHJcblxyXG5jb25zdCBDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Rpc3BsYXlPdGhlclNlY29uZGFyeUJ1dHRvbnMsIHNldERpc3BsYXlPdGhlclNlY29uZGFyeUJ1dHRvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5QcmV2aW91cyByZXN1bHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+Q3VycmVudCByZXN1bHQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+VG8gY2FsY3VsYXRlOiAzIHggNDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZGFyeUJ1dHRvbnN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzZWNvbmRhcnlCdXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpbmRleCA+IDMgPyBzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uSGlkZGVuIDogc3R5bGVzLnNlY29uZGFyeUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGVzLnNlY29uZGFyeUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJpbWFyeUJ1dHRvbnN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcmltYXJ5QnV0dG9ucy5tYXAoKGJ1dHRvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByaW1hcnlCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwic2Vjb25kYXJ5QnV0dG9ucyIsInByaW1hcnlCdXR0b25zIiwiQ2FsY3VsYXRvciIsImRpc3BsYXlPdGhlclNlY29uZGFyeUJ1dHRvbnMiLCJzZXREaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFwIiwiYnV0dG9uIiwiaW5kZXgiLCJzZWNvbmRhcnlCdXR0b25IaWRkZW4iLCJzZWNvbmRhcnlCdXR0b24iLCJwcmltYXJ5QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Calculator.jsx\n"));

/***/ })

});