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

/***/ "./src/utils/calculateFromArray.js":
/*!*****************************************!*\
  !*** ./src/utils/calculateFromArray.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst calculateFromArray = (array)=>{\n    const calculateByTwo = (operator1, operator2)=>{\n        while(array.includes(operator1) || array.includes(operator2)){\n            const index = array.indexOf(operator1) !== -1 ? array.indexOf(operator1) : array.indexOf(operator2);\n            operator1 === \"%\" ? array.splice(index - 1, 3, array.indexOf(operator1) !== -1 ? array[index - 1] / 100 * array[index + 1] : Math.pow(array[index - 1], array[index + 1])) : operator1 === \"/\" ? array.splice(index - 1, 3, array.indexOf(operator1) !== -1 ? array[index - 1] / array[index + 1] : array[index - 1] * array[index + 1]) : array.splice(index - 1, 3, array.indexOf(operator1) !== -1 ? array[index - 1] - array[index + 1] : array[index - 1] + array[index + 1]);\n        }\n    };\n    calculateByTwo(\"%\", \"^\");\n    calculateByTwo(\"/\", \"*\");\n    calculateByTwo(\"-\", \"+\");\n    return array[0];\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculateFromArray);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY2FsY3VsYXRlRnJvbUFycmF5LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxxQkFBcUIsQ0FBQ0MsUUFBVTtJQUNsQyxNQUFNQyxpQkFBaUIsQ0FBQ0MsV0FBV0MsWUFBYztRQUM3QyxNQUFPSCxNQUFNSSxRQUFRLENBQUNGLGNBQWNGLE1BQU1JLFFBQVEsQ0FBQ0QsV0FBWTtZQUMzRCxNQUFNRSxRQUNGTCxNQUFNTSxPQUFPLENBQUNKLGVBQWUsQ0FBQyxJQUN4QkYsTUFBTU0sT0FBTyxDQUFDSixhQUNkRixNQUFNTSxPQUFPLENBQUNILFVBQVU7WUFDbENELGNBQWMsTUFDUkYsTUFBTU8sTUFBTSxDQUNSRixRQUFRLEdBQ1IsR0FDQUwsTUFBTU0sT0FBTyxDQUFDSixlQUFlLENBQUMsSUFDeEIsS0FBTSxDQUFDRyxRQUFRLEVBQUUsR0FBRyxNQUFPTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUMzQ0csS0FBS0MsR0FBRyxDQUFDVCxLQUFLLENBQUNLLFFBQVEsRUFBRSxFQUFFTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxDQUFDLElBRXRESCxjQUFjLE1BQ2RGLE1BQU1PLE1BQU0sQ0FDUkYsUUFBUSxHQUNSLEdBQ0FMLE1BQU1NLE9BQU8sQ0FBQ0osZUFBZSxDQUFDLElBQ3hCRixLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUFHTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUNuQ0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsR0FBR0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsSUFFN0NMLE1BQU1PLE1BQU0sQ0FDUkYsUUFBUSxHQUNSLEdBQ0FMLE1BQU1NLE9BQU8sQ0FBQ0osZUFBZSxDQUFDLElBQ3hCRixLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUFHTCxLQUFLLENBQUNLLFFBQVEsRUFBRSxHQUNuQ0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsR0FBR0wsS0FBSyxDQUFDSyxRQUFRLEVBQUUsQ0FDNUM7UUFDWDtJQUNKO0lBRUFKLGVBQWUsS0FBSztJQUNwQkEsZUFBZSxLQUFLO0lBQ3BCQSxlQUFlLEtBQUs7SUFFcEIsT0FBT0QsS0FBSyxDQUFDLEVBQUU7QUFDbkI7QUFFQSwrREFBZUQsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9jYWxjdWxhdGVGcm9tQXJyYXkuanM/MzFmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWxjdWxhdGVGcm9tQXJyYXkgPSAoYXJyYXkpID0+IHtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZUJ5VHdvID0gKG9wZXJhdG9yMSwgb3BlcmF0b3IyKSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKGFycmF5LmluY2x1ZGVzKG9wZXJhdG9yMSkgfHwgYXJyYXkuaW5jbHVkZXMob3BlcmF0b3IyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9XHJcbiAgICAgICAgICAgICAgICBhcnJheS5pbmRleE9mKG9wZXJhdG9yMSkgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgPyBhcnJheS5pbmRleE9mKG9wZXJhdG9yMSlcclxuICAgICAgICAgICAgICAgICAgICA6IGFycmF5LmluZGV4T2Yob3BlcmF0b3IyKTtcclxuICAgICAgICAgICAgb3BlcmF0b3IxID09PSAnJSdcclxuICAgICAgICAgICAgICAgID8gYXJyYXkuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFycmF5LmluZGV4T2Yob3BlcmF0b3IxKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IChhcnJheVtpbmRleCAtIDFdIC8gMTAwKSAqIGFycmF5W2luZGV4ICsgMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IE1hdGgucG93KGFycmF5W2luZGV4IC0gMV0sIGFycmF5W2luZGV4ICsgMV0pXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogb3BlcmF0b3IxID09PSAnLydcclxuICAgICAgICAgICAgICAgID8gYXJyYXkuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFycmF5LmluZGV4T2Yob3BlcmF0b3IxKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFycmF5W2luZGV4IC0gMV0gLyBhcnJheVtpbmRleCArIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhcnJheVtpbmRleCAtIDFdICogYXJyYXlbaW5kZXggKyAxXVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6IGFycmF5LnNwbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcnJheS5pbmRleE9mKG9wZXJhdG9yMSkgIT09IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhcnJheVtpbmRleCAtIDFdIC0gYXJyYXlbaW5kZXggKyAxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogYXJyYXlbaW5kZXggLSAxXSArIGFycmF5W2luZGV4ICsgMV1cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNhbGN1bGF0ZUJ5VHdvKCclJywgJ14nKTtcclxuICAgIGNhbGN1bGF0ZUJ5VHdvKCcvJywgJyonKTtcclxuICAgIGNhbGN1bGF0ZUJ5VHdvKCctJywgJysnKTtcclxuXHJcbiAgICByZXR1cm4gYXJyYXlbMF07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVGcm9tQXJyYXk7XHJcbiJdLCJuYW1lcyI6WyJjYWxjdWxhdGVGcm9tQXJyYXkiLCJhcnJheSIsImNhbGN1bGF0ZUJ5VHdvIiwib3BlcmF0b3IxIiwib3BlcmF0b3IyIiwiaW5jbHVkZXMiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJNYXRoIiwicG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/calculateFromArray.js\n"));

/***/ })

});