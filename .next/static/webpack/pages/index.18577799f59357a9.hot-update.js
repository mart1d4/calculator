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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.module.css */ \"./src/components/calculator.module.css\");\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calculator_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_calculateFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/calculateFromArray */ \"./src/utils/calculateFromArray.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst secondaryButtons = [\n    \"√\",\n    \"π\",\n    \"^\",\n    \"!\",\n    \"DEG\",\n    \"sin\",\n    \"cos\",\n    \"tan\",\n    \"INV\",\n    \"e\",\n    \"ln\",\n    \"log\"\n];\nconst primaryButtons = [\n    \"AC\",\n    \"()\",\n    \"%\",\n    \"\\xf7\",\n    \"7\",\n    \"8\",\n    \"9\",\n    \"\\xd7\",\n    \"4\",\n    \"5\",\n    \"6\",\n    \"-\",\n    \"1\",\n    \"2\",\n    \"3\",\n    \"+\",\n    \"0\",\n    \"\\xb7\",\n    \"d\",\n    \"=\"\n];\nconst Calculator = ()=>{\n    _s();\n    const [displayOtherSecondaryButtons, setDisplayOtherSecondaryButtons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [string, setString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().display),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displaySettings),\n                        children: \"settings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displayString),\n                        value: string,\n                        onChange: (e)=>setString(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displayResult),\n                        children: result === NaN ? \"\" : result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtons),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtonsGrid),\n                        children: secondaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: !displayOtherSecondaryButtons ? index > 3 ? (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtonHidden) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButton) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButton),\n                                children: button\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropDownButton),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropDownIcon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M12 14.375q-.15 0-.287-.05-.138-.05-.288-.2L7.05 9.75q-.175-.175-.175-.363 0-.187.175-.337.15-.175.35-.175.2 0 .35.175L12 13.275l4.25-4.25q.15-.15.35-.15.2 0 .35.175.175.15.175.35 0 .2-.175.35l-4.375 4.375q-.15.15-.287.2-.138.05-.288.05Z\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButtons),\n                children: primaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButton),\n                        children: button\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Calculator, \"Gt8Q1btJPtqFA8hIc9jO8W0WGNA=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFpQztBQUNZO0FBQ2dCO0FBRTdELE1BQU1HLG1CQUFtQjtJQUNyQjtJQUFLO0lBQUs7SUFBSztJQUNmO0lBQU87SUFBTztJQUFPO0lBQ3JCO0lBQU87SUFBSztJQUFNO0NBQ3JCO0FBRUQsTUFBTUMsaUJBQWlCO0lBQ25CO0lBQU07SUFBTTtJQUFLO0lBQ2pCO0lBQUs7SUFBSztJQUFLO0lBQ2Y7SUFBSztJQUFLO0lBQUs7SUFDZjtJQUFLO0lBQUs7SUFBSztJQUNmO0lBQUs7SUFBSztJQUFLO0NBQ2xCO0FBRUQsTUFBTUMsYUFBYSxJQUFNOztJQUNyQixNQUFNLENBQUNDLDhCQUE4QkMsZ0NBQWdDLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEYsTUFBTSxDQUFDUSxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyQyxxQkFDSSw4REFBQ1k7UUFDR0MsV0FBV1oseUVBQWdCOzswQkFFM0IsOERBQUNXO2dCQUNHQyxXQUFXWix1RUFBYzs7a0NBRXpCLDhEQUFDVzt3QkFDR0MsV0FBV1osK0VBQXNCO2tDQUNwQzs7Ozs7O2tDQUlELDhEQUFDZ0I7d0JBQ0dDLE1BQUs7d0JBQ0xMLFdBQVdaLDZFQUFvQjt3QkFDL0JtQixPQUFPWjt3QkFDUGEsVUFBVSxDQUFDQyxJQUFNYixVQUFVYSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FHN0MsOERBQUNSO3dCQUNHQyxXQUFXWiw2RUFBb0I7a0NBRzNCUyxXQUFXZSxNQUNMLEtBQ0FmLE1BQU07Ozs7Ozs7Ozs7OzswQkFLeEIsOERBQUNFO2dCQUNHQyxXQUFXWixnRkFBdUI7O2tDQUVsQyw4REFBQ1c7d0JBQ0dDLFdBQVdaLG9GQUEyQjtrQ0FFckNFLGlCQUFpQndCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDM0IsOERBQUNEO2dDQUVHZixXQUNJLENBQUNQLCtCQUNLdUIsUUFBUSxJQUFJNUIscUZBQTRCLEdBQUdBLCtFQUFzQixHQUNqRUEsK0VBQXNCOzBDQUcvQjJCOytCQVBJQzs7Ozs7Ozs7OztrQ0FZakIsOERBQUNEO3dCQUNHZixXQUFXWiw4RUFBcUI7a0NBRWhDLDRFQUFDZ0M7NEJBQ0dDLE9BQU07NEJBQ05yQixXQUFXWiw0RUFBbUI7c0NBRTlCLDRFQUFDbUM7Z0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3BCLDhEQUFDekI7Z0JBQ0dDLFdBQVdaLDhFQUFxQjswQkFFL0JHLGVBQWV1QixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3pCLDhEQUFDRDt3QkFFR2YsV0FBV1osNkVBQW9CO2tDQUU5QjJCO3VCQUhJQzs7Ozs7Ozs7Ozs7Ozs7OztBQVM3QjtHQWxGTXhCO0tBQUFBO0FBb0ZOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbGN1bGF0b3IuanN4P2Q1ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYWxjdWxhdG9yLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY2FsY3VsYXRlRnJvbUFycmF5IGZyb20gJy4uL3V0aWxzL2NhbGN1bGF0ZUZyb21BcnJheSc7XHJcblxyXG5jb25zdCBzZWNvbmRhcnlCdXR0b25zID0gW1xyXG4gICAgJ+KImicsICfPgCcsICdeJywgJyEnLFxyXG4gICAgJ0RFRycsICdzaW4nLCAnY29zJywgJ3RhbicsXHJcbiAgICAnSU5WJywgJ2UnLCAnbG4nLCAnbG9nJyxcclxuXTtcclxuXHJcbmNvbnN0IHByaW1hcnlCdXR0b25zID0gW1xyXG4gICAgJ0FDJywgJygpJywgJyUnLCAnw7cnLFxyXG4gICAgJzcnLCAnOCcsICc5JywgJ8OXJyxcclxuICAgICc0JywgJzUnLCAnNicsICctJyxcclxuICAgICcxJywgJzInLCAnMycsICcrJyxcclxuICAgICcwJywgJ8K3JywgJ2QnLCAnPSdcclxuXTtcclxuXHJcbmNvbnN0IENhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGlzcGxheU90aGVyU2Vjb25kYXJ5QnV0dG9ucywgc2V0RGlzcGxheU90aGVyU2Vjb25kYXJ5QnV0dG9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3RyaW5nLCBzZXRTdHJpbmddID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXlTZXR0aW5nc31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5U3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdHJpbmcoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXlSZXN1bHR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT09IE5hTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRhcnlCdXR0b25zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uc0dyaWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZGFyeUJ1dHRvbnMubWFwKChidXR0b24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaW5kZXggPiAzID8gc3R5bGVzLnNlY29uZGFyeUJ1dHRvbkhpZGRlbiA6IHN0eWxlcy5zZWNvbmRhcnlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkljb259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIgMTQuMzc1cS0uMTUgMC0uMjg3LS4wNS0uMTM4LS4wNS0uMjg4LS4yTDcuMDUgOS43NXEtLjE3NS0uMTc1LS4xNzUtLjM2MyAwLS4xODcuMTc1LS4zMzcuMTUtLjE3NS4zNS0uMTc1LjIgMCAuMzUuMTc1TDEyIDEzLjI3NWw0LjI1LTQuMjVxLjE1LS4xNS4zNS0uMTUuMiAwIC4zNS4xNzUuMTc1LjE1LjE3NS4zNSAwIC4yLS4xNzUuMzVsLTQuMzc1IDQuMzc1cS0uMTUuMTUtLjI4Ny4yLS4xMzguMDUtLjI4OC4wNVonLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByaW1hcnlCdXR0b25zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJpbWFyeUJ1dHRvbnMubWFwKChidXR0b24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmltYXJ5QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsImNhbGN1bGF0ZUZyb21BcnJheSIsInNlY29uZGFyeUJ1dHRvbnMiLCJwcmltYXJ5QnV0dG9ucyIsIkNhbGN1bGF0b3IiLCJkaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zIiwic2V0RGlzcGxheU90aGVyU2Vjb25kYXJ5QnV0dG9ucyIsInN0cmluZyIsInNldFN0cmluZyIsInJlc3VsdCIsInNldFJlc3VsdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJkaXNwbGF5U2V0dGluZ3MiLCJpbnB1dCIsInR5cGUiLCJkaXNwbGF5U3RyaW5nIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJkaXNwbGF5UmVzdWx0IiwiTmFOIiwic2Vjb25kYXJ5QnV0dG9uc0dyaWQiLCJtYXAiLCJidXR0b24iLCJpbmRleCIsInNlY29uZGFyeUJ1dHRvbkhpZGRlbiIsInNlY29uZGFyeUJ1dHRvbiIsImRyb3BEb3duQnV0dG9uIiwic3ZnIiwieG1sbnMiLCJkcm9wRG93bkljb24iLCJwYXRoIiwiZCIsInByaW1hcnlCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Calculator.jsx\n"));

/***/ }),

/***/ "./src/utils/calculateFromArray.js":
/*!*****************************************!*\
  !*** ./src/utils/calculateFromArray.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst calculateFromArray = (array)=>{\n    const calculateByTwo = (operator1, operator2)=>{\n        while(array.includes(operator1) || array.includes(operator2)){\n            const index = array.indexOf(operator1) !== -1 ? array.indexOf(operator1) : array.indexOf(operator2);\n            operator1 === \"%\" ? array.splice(index - 1, 3, array.indexOf(operator1) !== -1 ? array[index - 1] / 100 * array[index + 1] : Math.pow(array[index - 1], array[index + 1])) : operator1 === \"/\" ? array.splice(index - 1, 3, array.indexOf(operator1) !== -1 ? array[index - 1] / array[index + 1] : array[index - 1] * array[index + 1]) : array.splice(index - 1, 3, array.indexOf(operator1) !== -1 ? array[index - 1] - array[index + 1] : array[index - 1] + array[index + 1]);\n        }\n        console.log(array);\n    };\n    calculateByTwo(\"%\", \"^\");\n    calculateByTwo(\"/\", \"x\");\n    calculateByTwo(\"-\", \"+\");\n    return array[0];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculateFromArray);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2FsY3VsYXRlRnJvbUFycmF5LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxxQkFBcUIsQ0FBQ0MsUUFBVTtJQUNsQyxNQUFNQyxpQkFBaUIsQ0FBQ0MsV0FBV0MsWUFBYztRQUM3QyxNQUFPSCxNQUFNSSxRQUFRLENBQUNGLGNBQWNGLE1BQU1JLFFBQVEsQ0FBQ0QsV0FBWTtZQUMzRCxNQUFNRSxRQUNGTCxNQUFNTSxPQUFPLENBQUNKLGVBQWUsQ0FBQyxJQUN4QkYsTUFBTU0sT0FBTyxDQUFDSixhQUNkRixNQUFNTSxPQUFPLENBQUNILFVBQVU7WUFDbENELGNBQWMsTUFDUkYsTUFBTU8sTUFBTSxDQUNSRixRQUFRLEdBQ1IsR0FDQUwsTUFBTU0sT0FBTyxDQUFDSixlQUFlLENBQUMsSUFDeEIsS0FBTSxDQUFDRyxRQUFRLEVBQUUsR0FBRyxNQUFPTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUMzQ0csS0FBS0MsR0FBRyxDQUFDVCxLQUFLLENBQUNLLFFBQVEsRUFBRSxFQUFFTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxDQUFDLElBRXRESCxjQUFjLE1BQ2RGLE1BQU1PLE1BQU0sQ0FDUkYsUUFBUSxHQUNSLEdBQ0FMLE1BQU1NLE9BQU8sQ0FBQ0osZUFBZSxDQUFDLElBQ3hCRixLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUFHTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUNuQ0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsR0FBR0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsSUFFN0NMLE1BQU1PLE1BQU0sQ0FDUkYsUUFBUSxHQUNSLEdBQ0FMLE1BQU1NLE9BQU8sQ0FBQ0osZUFBZSxDQUFDLElBQ3hCRixLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUFHTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUNuQ0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsR0FBR0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsQ0FDNUM7UUFDWDtRQUNBSyxRQUFRQyxHQUFHLENBQUNYO0lBQ2hCO0lBRUFDLGVBQWUsS0FBSztJQUNwQkEsZUFBZSxLQUFLO0lBQ3BCQSxlQUFlLEtBQUs7SUFFcEIsT0FBT0QsS0FBSyxDQUFDLEVBQUU7QUFDbkI7QUFFQSwrREFBZUQsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9jYWxjdWxhdGVGcm9tQXJyYXkuanM/MzFmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxjdWxhdGVGcm9tQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZUJ5VHdvID0gKG9wZXJhdG9yMSwgb3BlcmF0b3IyKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKGFycmF5LmluY2x1ZGVzKG9wZXJhdG9yMSkgfHwgYXJyYXkuaW5jbHVkZXMob3BlcmF0b3IyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9XHJcbiAgICAgICAgICAgICAgICBhcnJheS5pbmRleE9mKG9wZXJhdG9yMSkgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhcnJheS5pbmRleE9mKG9wZXJhdG9yMSlcclxuICAgICAgICAgICAgICAgICAgICA6IGFycmF5LmluZGV4T2Yob3BlcmF0b3IyKTtcclxuICAgICAgICAgICAgb3BlcmF0b3IxID09PSAnJSdcclxuICAgICAgICAgICAgICAgID8gYXJyYXkuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFycmF5LmluZGV4T2Yob3BlcmF0b3IxKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IChhcnJheVtpbmRleCAtIDFdIC8gMTAwKSAqIGFycmF5W2luZGV4ICsgMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgucG93KGFycmF5W2luZGV4IC0gMV0sIGFycmF5W2luZGV4ICsgMV0pXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogb3BlcmF0b3IxID09PSAnLydcclxuICAgICAgICAgICAgICAgID8gYXJyYXkuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFycmF5LmluZGV4T2Yob3BlcmF0b3IxKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFycmF5W2luZGV4IC0gMV0gLyBhcnJheVtpbmRleCArIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhcnJheVtpbmRleCAtIDFdICogYXJyYXlbaW5kZXggKyAxXVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6IGFycmF5LnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnJheS5pbmRleE9mKG9wZXJhdG9yMSkgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcnJheVtpbmRleCAtIDFdIC0gYXJyYXlbaW5kZXggKyAxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYXJyYXlbaW5kZXggLSAxXSArIGFycmF5W2luZGV4ICsgMV1cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyYXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjYWxjdWxhdGVCeVR3bygnJScsICdeJyk7XHJcbiAgICBjYWxjdWxhdGVCeVR3bygnLycsICd4Jyk7XHJcbiAgICBjYWxjdWxhdGVCeVR3bygnLScsICcrJyk7XHJcblxyXG4gICAgcmV0dXJuIGFycmF5WzBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlRnJvbUFycmF5O1xyXG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlRnJvbUFycmF5IiwiYXJyYXkiLCJjYWxjdWxhdGVCeVR3byIsIm9wZXJhdG9yMSIsIm9wZXJhdG9yMiIsImluY2x1ZGVzIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiTWF0aCIsInBvdyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/calculateFromArray.js\n"));

/***/ })

});