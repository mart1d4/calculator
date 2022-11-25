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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.module.css */ \"./src/components/calculator.module.css\");\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calculator_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_calculateFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/calculateFromArray */ \"./src/utils/calculateFromArray.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst secondaryButtons = [\n    \"√\",\n    \"π\",\n    \"^\",\n    \"!\",\n    \"DEG\",\n    \"sin\",\n    \"cos\",\n    \"tan\",\n    \"INV\",\n    \"e\",\n    \"ln\",\n    \"log\"\n];\nconst primaryButtons = [\n    \"AC\",\n    \"()\",\n    \"%\",\n    \"\\xf7\",\n    \"7\",\n    \"8\",\n    \"9\",\n    \"\\xd7\",\n    \"4\",\n    \"5\",\n    \"6\",\n    \"-\",\n    \"1\",\n    \"2\",\n    \"3\",\n    \"+\",\n    \"0\",\n    \"\\xb7\",\n    \"d\",\n    \"=\"\n];\nconst operators = [\n    \"+\",\n    \"-\",\n    \"*\",\n    \"/\",\n    \"^\",\n    \"√\",\n    \"!\",\n    \"π\",\n    \"e\",\n    \"ln\",\n    \"log\",\n    \"sin\",\n    \"cos\",\n    \"tan\"\n];\nconst Calculator = ()=>{\n    _s();\n    const [displayOtherSecondaryButtons, setDisplayOtherSecondaryButtons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [string, setString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleButtonClick = (button)=>{\n        if (button === \"AC\") {\n            setString(\"\");\n            setResult(\"\");\n        } else if (button === \"=\") {\n            setString(result);\n            setResult(\"\");\n        } else if (button === \"d\") {\n            setString(string.slice(0, -1));\n        } else {\n            setString(string + button);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (string) {\n            const newString = string.replace(/×/g, \"*\").replace(/÷/g, \"/\").replace(/·/g, \".\");\n            const array = newString.split(/([+*/^()])/);\n            array.map((item)=>{\n                if (!operators.includes(item)) {\n                    return Number(item);\n                }\n                return item;\n            });\n            console.log(array);\n        }\n    }, [\n        string\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().display),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displaySettings),\n                        children: \"settings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displayString),\n                        value: string,\n                        onChange: (e)=>setString(e.target.button)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displayResult),\n                        children: result === NaN ? \"\" : result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtons),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtonsGrid),\n                        children: secondaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: !displayOtherSecondaryButtons ? index > 3 ? (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtonHidden) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButton) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButton),\n                                children: button\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropDownButton),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropDownIcon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M12 14.375q-.15 0-.287-.05-.138-.05-.288-.2L7.05 9.75q-.175-.175-.175-.363 0-.187.175-.337.15-.175.35-.175.2 0 .35.175L12 13.275l4.25-4.25q.15-.15.35-.15.2 0 .35.175.175.15.175.35 0 .2-.175.35l-4.375 4.375q-.15.15-.287.2-.138.05-.288.05Z\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                            lineNumber: 108,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButtons),\n                children: primaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButton),\n                        onClick: ()=>handleButtonClick(button),\n                        children: button\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Calculator, \"jN+dflH3IKF1+azX6+QYqg1cpWU=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwQiw4REFBQ3ZCO2dCQUNHQyxXQUFXMUIsOEVBQXFCOzBCQUUvQkcsZUFBZWdCLEdBQUcsQ0FBQyxDQUFDTixRQUFRMkIsc0JBQ3pCLDhEQUFDM0I7d0JBRUdhLFdBQVcxQiw2RUFBb0I7d0JBQy9Ca0QsU0FBUyxJQUFNdEMsa0JBQWtCQztrQ0FFaENBO3VCQUpJMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0I7R0EvR01uQztLQUFBQTtBQWlITiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeD9kNWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYWxjdWxhdG9yLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY2FsY3VsYXRlRnJvbUFycmF5IGZyb20gJy4uL3V0aWxzL2NhbGN1bGF0ZUZyb21BcnJheSc7XHJcblxyXG5jb25zdCBzZWNvbmRhcnlCdXR0b25zID0gW1xyXG4gICAgJ+KImicsICfPgCcsICdeJywgJyEnLFxyXG4gICAgJ0RFRycsICdzaW4nLCAnY29zJywgJ3RhbicsXHJcbiAgICAnSU5WJywgJ2UnLCAnbG4nLCAnbG9nJyxcclxuXTtcclxuXHJcbmNvbnN0IHByaW1hcnlCdXR0b25zID0gW1xyXG4gICAgJ0FDJywgJygpJywgJyUnLCAnw7cnLFxyXG4gICAgJzcnLCAnOCcsICc5JywgJ8OXJyxcclxuICAgICc0JywgJzUnLCAnNicsICctJyxcclxuICAgICcxJywgJzInLCAnMycsICcrJyxcclxuICAgICcwJywgJ8K3JywgJ2QnLCAnPSdcclxuXTtcclxuXHJcbmNvbnN0IG9wZXJhdG9ycyA9IFsnKycsICctJywgJyonLCAnLycsICdeJywgJ+KImicsICchJywgJ8+AJywgJ2UnLCAnbG4nLCAnbG9nJywgJ3NpbicsICdjb3MnLCAndGFuJ107XHJcblxyXG5jb25zdCBDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Rpc3BsYXlPdGhlclNlY29uZGFyeUJ1dHRvbnMsIHNldERpc3BsYXlPdGhlclNlY29uZGFyeUJ1dHRvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0cmluZywgc2V0U3RyaW5nXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbiA9PT0gJ0FDJykge1xyXG4gICAgICAgICAgICBzZXRTdHJpbmcoJycpO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHQoJycpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uID09PSAnPScpIHtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdCgnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24gPT09ICdkJykge1xyXG4gICAgICAgICAgICBzZXRTdHJpbmcoc3RyaW5nLnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKHN0cmluZyArIGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0cmluZykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvw5cvZywgJyonKS5yZXBsYWNlKC/Dty9nLCAnLycpLnJlcGxhY2UoL8K3L2csICcuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycmF5ID0gbmV3U3RyaW5nLnNwbGl0KC8oWysqL14oKV0pLyk7XHJcbiAgICAgICAgICAgIGFycmF5Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcGVyYXRvcnMuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N0cmluZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheVNldHRpbmdzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXlTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0cmluZyhlLnRhcmdldC5idXR0b24pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXlSZXN1bHR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT09IE5hTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWNvbmRhcnlCdXR0b25zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uc0dyaWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlY29uZGFyeUJ1dHRvbnMubWFwKChidXR0b24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaW5kZXggPiAzID8gc3R5bGVzLnNlY29uZGFyeUJ1dHRvbkhpZGRlbiA6IHN0eWxlcy5zZWNvbmRhcnlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRyb3BEb3duQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkljb259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTIgMTQuMzc1cS0uMTUgMC0uMjg3LS4wNS0uMTM4LS4wNS0uMjg4LS4yTDcuMDUgOS43NXEtLjE3NS0uMTc1LS4xNzUtLjM2MyAwLS4xODcuMTc1LS4zMzcuMTUtLjE3NS4zNS0uMTc1LjIgMCAuMzUuMTc1TDEyIDEzLjI3NWw0LjI1LTQuMjVxLjE1LS4xNS4zNS0uMTUuMiAwIC4zNS4xNzUuMTc1LjE1LjE3NS4zNSAwIC4yLS4xNzUuMzVsLTQuMzc1IDQuMzc1cS0uMTUuMTUtLjI4Ny4yLS4xMzguMDUtLjI4OC4wNVonLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByaW1hcnlCdXR0b25zfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJpbWFyeUJ1dHRvbnMubWFwKChidXR0b24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmltYXJ5QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayhidXR0b24pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImNhbGN1bGF0ZUZyb21BcnJheSIsInNlY29uZGFyeUJ1dHRvbnMiLCJwcmltYXJ5QnV0dG9ucyIsIm9wZXJhdG9ycyIsIkNhbGN1bGF0b3IiLCJkaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zIiwic2V0RGlzcGxheU90aGVyU2Vjb25kYXJ5QnV0dG9ucyIsInN0cmluZyIsInNldFN0cmluZyIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiYnV0dG9uIiwic2xpY2UiLCJuZXdTdHJpbmciLCJyZXBsYWNlIiwiYXJyYXkiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJpbmNsdWRlcyIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZGlzcGxheVNldHRpbmdzIiwiaW5wdXQiLCJ0eXBlIiwiZGlzcGxheVN0cmluZyIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGlzcGxheVJlc3VsdCIsIk5hTiIsInNlY29uZGFyeUJ1dHRvbnNHcmlkIiwiaW5kZXgiLCJzZWNvbmRhcnlCdXR0b25IaWRkZW4iLCJzZWNvbmRhcnlCdXR0b24iLCJkcm9wRG93bkJ1dHRvbiIsInN2ZyIsInhtbG5zIiwiZHJvcERvd25JY29uIiwicGF0aCIsImQiLCJwcmltYXJ5QnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Calculator.jsx\n"));

/***/ })

});