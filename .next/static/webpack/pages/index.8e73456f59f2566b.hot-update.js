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

/***/ "./components/Home.tsx":
/*!*****************************!*\
  !*** ./components/Home.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _hook_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/redux */ \"./hook/redux.tsx\");\n/* harmony import */ var _Store_walletSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store/walletSlice */ \"./Store/walletSlice.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar HomeComponent = function() {\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), active = ref.active, account = ref.account;\n    var ref1 = (0,_hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function(state) {\n        return state.wallet;\n    }), userNFT = ref1.userNFT, userFetchNFT = ref1.userFetchNFT, filter = ref1.filter;\n    var dispatch = (0,_hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppdispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var run = false;\n        if (!run) {\n            if (!account) {\n                return;\n            }\n            dispatch((0,_Store_walletSlice__WEBPACK_IMPORTED_MODULE_4__.FetchuserNFT)(account));\n        }\n        return function() {\n            run = true;\n        };\n    // Call();\n    }, [\n        account\n    ]);\n    var GetAllNFT = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                dispatch((0,_Store_walletSlice__WEBPACK_IMPORTED_MODULE_4__.FetchuserNFT)(\"0x6d038f41862deb8de768ea6c9829c6702a9eda69\"));\n                return [\n                    2\n                ];\n            });\n        });\n        return function GetAllNFT() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var Filter = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                dispatch((0,_Store_walletSlice__WEBPACK_IMPORTED_MODULE_4__.Search)(\"0x3a15a630553a52af5a315e8a33b2863978d41174\"));\n                return [\n                    2\n                ];\n            });\n        });\n        return function Filter() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(filter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                onClick: function() {\n                    return GetAllNFT();\n                },\n                children: \"NFT token id checker\"\n            }, void 0, false, {\n                fileName: \"/home/sayedex/Desktop/ALL FOLDER/my-project-NFT-market-master/components/Home.tsx\",\n                lineNumber: 43,\n                columnNumber: 1\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return Filter();\n                },\n                children: \"Filter\"\n            }, void 0, false, {\n                fileName: \"/home/sayedex/Desktop/ALL FOLDER/my-project-NFT-market-master/components/Home.tsx\",\n                lineNumber: 44,\n                columnNumber: 1\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomeComponent, \"hNe9Sth4vB3WI6EJ+P8WjouylEQ=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppdispatch\n    ];\n});\n_c = HomeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeComponent);\nvar _c;\n$RefreshReg$(_c, \"HomeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7Ozs7QUFBK0M7QUFDQztBQUNjO0FBQ2U7QUFFN0UsSUFBTU8sYUFBYSxHQUFFLFdBQUk7O0lBQ3JCLElBQXlCTCxHQUFjLEdBQWRBLDhEQUFZLEVBQUUsRUFBaENNLE1BQU0sR0FBWU4sR0FBYyxDQUFoQ00sTUFBTSxFQUFDQyxPQUFPLEdBQUlQLEdBQWMsQ0FBekJPLE9BQU87SUFDckIsSUFBc0NOLElBQXVDLEdBQXZDQSwyREFBYyxDQUFDLFNBQUNPLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxNQUFNO0tBQUEsQ0FBQyxFQUF0RUMsT0FBTyxHQUF3QlQsSUFBdUMsQ0FBdEVTLE9BQU8sRUFBQ0MsWUFBWSxHQUFXVixJQUF1QyxDQUE5RFUsWUFBWSxFQUFDQyxNQUFNLEdBQUlYLElBQXVDLENBQWpEVyxNQUFNO0lBRXBDLElBQU1DLFFBQVEsR0FBR1gsMkRBQWMsRUFBRTtJQUVqQ0gsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1osSUFBSWUsR0FBRyxHQUFFLEtBQUs7UUFDZCxJQUFHLENBQUNBLEdBQUcsRUFBQztZQUNSLElBQUcsQ0FBQ1AsT0FBTyxFQUFDO2dCQUNWLE9BQU87WUFDVCxDQUFDO1lBQ0RNLFFBQVEsQ0FBQ1YsZ0VBQVksQ0FBQ0ksT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELE9BQU0sV0FBSTtZQUNSTyxHQUFHLEdBQUcsSUFBSTtRQUNaLENBQUM7SUFFQSxVQUFVO0lBQ1gsQ0FBQyxFQUFDO1FBQUNQLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZixJQUFNUSxTQUFTO21CQUFFLCtGQUFVOztnQkFDdkJGLFFBQVEsQ0FBQ1YsZ0VBQVksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOzs7OztRQUV4RSxDQUFDO3dCQUhLWSxTQUFTOzs7T0FHZDtJQUVELElBQU1DLE1BQU07bUJBQUcsK0ZBQVM7O2dCQUNwQkgsUUFBUSxDQUFDVCwwREFBTSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Ozs7O1FBRWxFLENBQUM7d0JBSEtZLE1BQU07OztPQUdYO0lBRURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixNQUFNLENBQUMsQ0FBQztJQUVwQixxQkFDQTs7MEJBRUEsOERBQUNPLElBQUU7Z0JBQUNDLE9BQU8sRUFBRTsyQkFBSUwsU0FBUyxFQUFFO2lCQUFBOzBCQUFHLHNCQUFvQjs7Ozs7cUJBQUs7MEJBQ3hELDhEQUFDTSxRQUFNO2dCQUFDRCxPQUFPLEVBQUU7MkJBQUlKLE1BQU0sRUFBRTtpQkFBQTswQkFBRSxRQUFNOzs7OztxQkFBUzs7b0JBRTNDLENBRUY7QUFFRCxDQUFDO0dBM0NLWCxhQUFhOztRQUNVTCwwREFBWTtRQUNDQyx1REFBYztRQUVyQ0MsdURBQWM7OztBQUozQkcsS0FBQUEsYUFBYTtBQTZDbkIsK0RBQWVBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLnRzeD9lNWU1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwZGlzcGF0Y2ggfSBmcm9tICcuLi9ob29rL3JlZHV4J1xuaW1wb3J0IHtGZXRjaHVzZXJORlQsYWRkQ2FyZCxzZXRPcGVubW9kZWwsU2VhcmNofSBmcm9tIFwiLi4vU3RvcmUvd2FsbGV0U2xpY2VcIlxuXG5jb25zdCBIb21lQ29tcG9uZW50ID0oKT0+e1xuICAgIGNvbnN0IHthY3RpdmUsYWNjb3VudH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgICBjb25zdCB7dXNlck5GVCx1c2VyRmV0Y2hORlQsZmlsdGVyfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUud2FsbGV0KTtcbiAgICBcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBkaXNwYXRjaCgpXG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBsZXQgcnVuID1mYWxzZTtcbiAgICBpZighcnVuKXtcbiAgICBpZighYWNjb3VudCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRpc3BhdGNoKEZldGNodXNlck5GVChhY2NvdW50KSlcbiAgfVxuICByZXR1cm4oKT0+e1xuICAgIHJ1biA9IHRydWVcbiAgfVxuICAgXG4gICAvLyBDYWxsKCk7XG4gIH0sW2FjY291bnRdKTtcbiAgXG5jb25zdCBHZXRBbGxORlQgPWFzeW5jICgpPT57XG4gICAgZGlzcGF0Y2goRmV0Y2h1c2VyTkZUKFwiMHg2ZDAzOGY0MTg2MmRlYjhkZTc2OGVhNmM5ODI5YzY3MDJhOWVkYTY5XCIpKVxuXG59XG5cbmNvbnN0IEZpbHRlciA9IGFzeW5jKCk9PntcbiAgICBkaXNwYXRjaChTZWFyY2goXCIweDNhMTVhNjMwNTUzYTUyYWY1YTMxNWU4YTMzYjI4NjM5NzhkNDExNzRcIikpXG5cbn1cblxuY29uc29sZS5sb2coZmlsdGVyKTtcblxucmV0dXJuIChcbjw+XG5cbjxoMSBvbkNsaWNrPXsoKT0+R2V0QWxsTkZUKCl9ID5ORlQgdG9rZW4gaWQgY2hlY2tlcjwvaDE+XG48YnV0dG9uIG9uQ2xpY2s9eygpPT5GaWx0ZXIoKX0+RmlsdGVyPC9idXR0b24+XG5cbjwvPlxuXG4pXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbXBvbmVudCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVdlYjNSZWFjdCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwZGlzcGF0Y2giLCJGZXRjaHVzZXJORlQiLCJTZWFyY2giLCJIb21lQ29tcG9uZW50IiwiYWN0aXZlIiwiYWNjb3VudCIsInN0YXRlIiwid2FsbGV0IiwidXNlck5GVCIsInVzZXJGZXRjaE5GVCIsImZpbHRlciIsImRpc3BhdGNoIiwicnVuIiwiR2V0QWxsTkZUIiwiRmlsdGVyIiwiY29uc29sZSIsImxvZyIsImgxIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home.tsx\n"));

/***/ })

});