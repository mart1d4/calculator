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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.module.css */ \"./src/components/calculator.module.css\");\n/* harmony import */ var _calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calculator_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_calculateFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/calculateFromArray */ \"./src/utils/calculateFromArray.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst secondaryButtons = [\n    \"√\",\n    \"π\",\n    \"^\",\n    \"!\",\n    \"DEG\",\n    \"sin\",\n    \"cos\",\n    \"tan\",\n    \"INV\",\n    \"e\",\n    \"ln\",\n    \"log\"\n];\nconst primaryButtons = [\n    \"AC\",\n    \"( )\",\n    \"%\",\n    \"\\xf7\",\n    \"7\",\n    \"8\",\n    \"9\",\n    \"\\xd7\",\n    \"4\",\n    \"5\",\n    \"6\",\n    \"-\",\n    \"1\",\n    \"2\",\n    \"3\",\n    \"+\",\n    \"0\",\n    \"\\xb7\",\n    \"d\",\n    \"=\"\n];\nconst operators = [\n    \"+\",\n    \"-\",\n    \"*\",\n    \"\\xd7\",\n    \"/\",\n    \"\\xf7\",\n    \"^\",\n    \"%\",\n    \"( )\",\n    \"√\",\n    \"!\",\n    \"π\",\n    \"e\",\n    \"ln\",\n    \"log\",\n    \"sin\",\n    \"cos\",\n    \"tan\"\n];\nconst Calculator = ()=>{\n    _s();\n    const [displayOtherSecondaryButtons, setDisplayOtherSecondaryButtons] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [string, setString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleButtonClick = (button)=>{\n        if (button === \"AC\") {\n            setString(\"\");\n            setResult(\"\");\n        } else if (button === \"=\") {\n            setString(result.toString());\n            setResult(\"\");\n        } else if (button === \"d\") {\n            setString(string.slice(0, -1));\n        } else {\n            setString(string + button);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (string && !operators.includes(string[string.length - 1])) {\n            const newString = string.replace(/×/g, \"*\").replace(/÷/g, \"/\").replace(/·/g, \".\");\n            const array = newString.split(/([+\\-%*/^()])/);\n            const newArray = array.map((item)=>{\n                if (!operators.includes(item)) {\n                    return Number(item);\n                }\n                return item;\n            });\n            const result = (0,_utils_calculateFromArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(newArray);\n            setResult(result);\n        }\n    }, [\n        string\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().display),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displaySettings),\n                        children: \"settings\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displayString),\n                        value: string,\n                        onChange: (e)=>setString(e.target.button)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().displayResult),\n                        children: isNaN(result) || result === Infinity || result === -Infinity ? \"\" : result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtons),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtonsGrid),\n                        children: secondaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: !displayOtherSecondaryButtons ? index > 3 ? (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButtonHidden) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButton) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().secondaryButton),\n                                children: button\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropDownButton),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().dropDownIcon),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M12 14.375q-.15 0-.287-.05-.138-.05-.288-.2L7.05 9.75q-.175-.175-.175-.363 0-.187.175-.337.15-.175.35-.175.2 0 .35.175L12 13.275l4.25-4.25q.15-.15.35-.15.2 0 .35.175.175.15.175.35 0 .2-.175.35l-4.375 4.375q-.15.15-.287.2-.138.05-.288.05Z\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButtons),\n                children: primaryButtons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: operators.includes(button) ? (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButtonOperator) : button === \"AC\" || button === \"d\" ? (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButtonClear) : (_calculator_module_css__WEBPACK_IMPORTED_MODULE_3___default().primaryButton),\n                        onClick: ()=>handleButtonClick(button),\n                        children: button\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mart1d4\\\\Documents\\\\Programming\\\\MyProjects\\\\Calculator\\\\calculator\\\\src\\\\components\\\\Calculator.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Calculator, \"jN+dflH3IKF1+azX6+QYqg1cpWU=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHQSwrRUFBc0IsR0FDakVBLCtFQUFzQjswQ0FHL0JhOytCQVBJNkI7Ozs7Ozs7Ozs7a0NBWWpCLDhEQUFDN0I7d0JBQ0djLFdBQVczQiw4RUFBcUI7a0NBRWhDLDRFQUFDOEM7NEJBQ0dDLE9BQU07NEJBQ05wQixXQUFXM0IsNEVBQW1CO3NDQUU5Qiw0RUFBQ2lEO2dDQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwQiw4REFBQ3hCO2dCQUNHQyxXQUFXM0IsOEVBQXFCOzBCQUUvQkcsZUFBZW9CLEdBQUcsQ0FBQyxDQUFDVixRQUFRNkIsc0JBQ3pCLDhEQUFDN0I7d0JBRUdjLFdBQ0l2QixVQUFVWSxRQUFRLENBQUNILFVBQ2JiLHFGQUE0QixHQUM1QmEsV0FBVyxRQUFRQSxXQUFXLE1BQzFCYixrRkFBeUIsR0FDekJBLDZFQUFvQjt3QkFFbENzRCxTQUFTLElBQU0xQyxrQkFBa0JDO2tDQUVoQ0E7dUJBVkk2Qjs7Ozs7Ozs7Ozs7Ozs7OztBQWdCN0I7R0F4SE1yQztLQUFBQTtBQTBITiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYWxjdWxhdG9yLmpzeD9kNWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYWxjdWxhdG9yLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgY2FsY3VsYXRlRnJvbUFycmF5IGZyb20gJy4uL3V0aWxzL2NhbGN1bGF0ZUZyb21BcnJheSc7XHJcblxyXG5jb25zdCBzZWNvbmRhcnlCdXR0b25zID0gW1xyXG4gICAgJ+KImicsICfPgCcsICdeJywgJyEnLFxyXG4gICAgJ0RFRycsICdzaW4nLCAnY29zJywgJ3RhbicsXHJcbiAgICAnSU5WJywgJ2UnLCAnbG4nLCAnbG9nJyxcclxuXTtcclxuXHJcbmNvbnN0IHByaW1hcnlCdXR0b25zID0gW1xyXG4gICAgJ0FDJywgJyggKScsICclJywgJ8O3JyxcclxuICAgICc3JywgJzgnLCAnOScsICfDlycsXHJcbiAgICAnNCcsICc1JywgJzYnLCAnLScsXHJcbiAgICAnMScsICcyJywgJzMnLCAnKycsXHJcbiAgICAnMCcsICfCtycsICdkJywgJz0nXHJcbl07XHJcblxyXG5jb25zdCBvcGVyYXRvcnMgPSBbJysnLCAnLScsICcqJywgJ8OXJywgJy8nLCAnw7cnLCAnXicsICclJywgJyggKScsICfiiJonLCAnIScsICfPgCcsICdlJywgJ2xuJywgJ2xvZycsICdzaW4nLCAnY29zJywgJ3RhbiddO1xyXG5cclxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zLCBzZXREaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdHJpbmcsIHNldFN0cmluZ10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGlmIChidXR0b24gPT09ICdBQycpIHtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKCcnKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0KCcnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbiA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgIHNldFN0cmluZyhyZXN1bHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdCgnJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24gPT09ICdkJykge1xyXG4gICAgICAgICAgICBzZXRTdHJpbmcoc3RyaW5nLnNsaWNlKDAsIC0xKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U3RyaW5nKHN0cmluZyArIGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0cmluZyAmJiAhb3BlcmF0b3JzLmluY2x1ZGVzKHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0cmluZyA9IHN0cmluZy5yZXBsYWNlKC/Dly9nLCAnKicpLnJlcGxhY2UoL8O3L2csICcvJykucmVwbGFjZSgvwrcvZywgJy4nKTtcclxuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBuZXdTdHJpbmcuc3BsaXQoLyhbK1xcLSUqL14oKV0pLyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdBcnJheSA9IGFycmF5Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvcGVyYXRvcnMuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FsY3VsYXRlRnJvbUFycmF5KG5ld0FycmF5KTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3N0cmluZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXNwbGF5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGlzcGxheVNldHRpbmdzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXlTdHJpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0cmluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0cmluZyhlLnRhcmdldC5idXR0b24pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc3BsYXlSZXN1bHR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc05hTihyZXN1bHQpIHx8IHJlc3VsdCA9PT0gSW5maW5pdHkgfHwgcmVzdWx0ID09PSAtSW5maW5pdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZGFyeUJ1dHRvbnNHcmlkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWNvbmRhcnlCdXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZGlzcGxheU90aGVyU2Vjb25kYXJ5QnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGluZGV4ID4gMyA/IHN0eWxlcy5zZWNvbmRhcnlCdXR0b25IaWRkZW4gOiBzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGVzLnNlY29uZGFyeUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcERvd25JY29ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEyIDE0LjM3NXEtLjE1IDAtLjI4Ny0uMDUtLjEzOC0uMDUtLjI4OC0uMkw3LjA1IDkuNzVxLS4xNzUtLjE3NS0uMTc1LS4zNjMgMC0uMTg3LjE3NS0uMzM3LjE1LS4xNzUuMzUtLjE3NS4yIDAgLjM1LjE3NUwxMiAxMy4yNzVsNC4yNS00LjI1cS4xNS0uMTUuMzUtLjE1LjIgMCAuMzUuMTc1LjE3NS4xNS4xNzUuMzUgMCAuMi0uMTc1LjM1bC00LjM3NSA0LjM3NXEtLjE1LjE1LS4yODcuMi0uMTM4LjA1LS4yODguMDVaJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmltYXJ5QnV0dG9uc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3ByaW1hcnlCdXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9ycy5pbmNsdWRlcyhidXR0b24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMucHJpbWFyeUJ1dHRvbk9wZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBidXR0b24gPT09ICdBQycgfHwgYnV0dG9uID09PSAnZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMucHJpbWFyeUJ1dHRvbkNsZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc3R5bGVzLnByaW1hcnlCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayhidXR0b24pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvciJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImNhbGN1bGF0ZUZyb21BcnJheSIsInNlY29uZGFyeUJ1dHRvbnMiLCJwcmltYXJ5QnV0dG9ucyIsIm9wZXJhdG9ycyIsIkNhbGN1bGF0b3IiLCJkaXNwbGF5T3RoZXJTZWNvbmRhcnlCdXR0b25zIiwic2V0RGlzcGxheU90aGVyU2Vjb25kYXJ5QnV0dG9ucyIsInN0cmluZyIsInNldFN0cmluZyIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiYnV0dG9uIiwidG9TdHJpbmciLCJzbGljZSIsImluY2x1ZGVzIiwibGVuZ3RoIiwibmV3U3RyaW5nIiwicmVwbGFjZSIsImFycmF5Iiwic3BsaXQiLCJuZXdBcnJheSIsIm1hcCIsIml0ZW0iLCJOdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZGlzcGxheVNldHRpbmdzIiwiaW5wdXQiLCJ0eXBlIiwiZGlzcGxheVN0cmluZyIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGlzcGxheVJlc3VsdCIsImlzTmFOIiwiSW5maW5pdHkiLCJzZWNvbmRhcnlCdXR0b25zR3JpZCIsImluZGV4Iiwic2Vjb25kYXJ5QnV0dG9uSGlkZGVuIiwic2Vjb25kYXJ5QnV0dG9uIiwiZHJvcERvd25CdXR0b24iLCJzdmciLCJ4bWxucyIsImRyb3BEb3duSWNvbiIsInBhdGgiLCJkIiwicHJpbWFyeUJ1dHRvbk9wZXJhdG9yIiwicHJpbWFyeUJ1dHRvbkNsZWFyIiwicHJpbWFyeUJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Calculator.jsx\n"));

/***/ })

});