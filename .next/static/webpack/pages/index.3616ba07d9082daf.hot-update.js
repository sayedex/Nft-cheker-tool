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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _hook_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hook/redux */ \"./hook/redux.tsx\");\n/* harmony import */ var _Store_walletSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store/walletSlice */ \"./Store/walletSlice.tsx\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar HomeComponent = function() {\n    _s();\n    var ref = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React)(), active = ref.active, account = ref.account;\n    var ref1 = (0,_hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(function(state) {\n        return state.wallet;\n    }), userNFT = ref1.userNFT, userFetchNFT = ref1.userFetchNFT, filter = ref1.filter;\n    var dispatch = (0,_hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppdispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var run = false;\n        if (!run) {\n            if (!account) {\n                return;\n            }\n            dispatch((0,_Store_walletSlice__WEBPACK_IMPORTED_MODULE_4__.FetchuserNFT)(account));\n        }\n        return function() {\n            run = true;\n        };\n    // Call();\n    }, [\n        account\n    ]);\n    var GetAllNFT = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                dispatch((0,_Store_walletSlice__WEBPACK_IMPORTED_MODULE_4__.FetchuserNFT)(\"0x6d038f41862deb8de768ea6c9829c6702a9eda69\"));\n                return [\n                    2\n                ];\n            });\n        });\n        return function GetAllNFT() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var Filter = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                dispatch(filter(\"0x3a15a630553a52af5a315e8a33b2863978d41174\"));\n                return [\n                    2\n                ];\n            });\n        });\n        return function Filter() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(filter);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                onClick: function() {\n                    return GetAllNFT();\n                },\n                children: \"NFT token id checker\"\n            }, void 0, false, {\n                fileName: \"/home/sayedex/Desktop/ALL FOLDER/my-project-NFT-market-master/components/Home.tsx\",\n                lineNumber: 43,\n                columnNumber: 1\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return Filter();\n                },\n                children: \"Filter\"\n            }, void 0, false, {\n                fileName: \"/home/sayedex/Desktop/ALL FOLDER/my-project-NFT-market-master/components/Home.tsx\",\n                lineNumber: 44,\n                columnNumber: 1\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomeComponent, \"hNe9Sth4vB3WI6EJ+P8WjouylEQ=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_2__.useWeb3React,\n        _hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hook_redux__WEBPACK_IMPORTED_MODULE_3__.useAppdispatch\n    ];\n});\n_c = HomeComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeComponent);\nvar _c;\n$RefreshReg$(_c, \"HomeComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7Ozs7QUFBK0M7QUFDQztBQUNjO0FBQ2U7QUFFN0UsSUFBTU0sYUFBYSxHQUFFLFdBQUk7O0lBQ3JCLElBQXlCSixHQUFjLEdBQWRBLDhEQUFZLEVBQUUsRUFBaENLLE1BQU0sR0FBWUwsR0FBYyxDQUFoQ0ssTUFBTSxFQUFDQyxPQUFPLEdBQUlOLEdBQWMsQ0FBekJNLE9BQU87SUFDckIsSUFBc0NMLElBQXVDLEdBQXZDQSwyREFBYyxDQUFDLFNBQUNNLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxNQUFNO0tBQUEsQ0FBQyxFQUF0RUMsT0FBTyxHQUF3QlIsSUFBdUMsQ0FBdEVRLE9BQU8sRUFBQ0MsWUFBWSxHQUFXVCxJQUF1QyxDQUE5RFMsWUFBWSxFQUFDQyxNQUFNLEdBQUlWLElBQXVDLENBQWpEVSxNQUFNO0lBRXBDLElBQU1DLFFBQVEsR0FBR1YsMkRBQWMsRUFBRTtJQUVqQ0gsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1osSUFBSWMsR0FBRyxHQUFFLEtBQUs7UUFDZCxJQUFHLENBQUNBLEdBQUcsRUFBQztZQUNSLElBQUcsQ0FBQ1AsT0FBTyxFQUFDO2dCQUNWLE9BQU87WUFDVCxDQUFDO1lBQ0RNLFFBQVEsQ0FBQ1QsZ0VBQVksQ0FBQ0csT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELE9BQU0sV0FBSTtZQUNSTyxHQUFHLEdBQUcsSUFBSTtRQUNaLENBQUM7SUFFQSxVQUFVO0lBQ1gsQ0FBQyxFQUFDO1FBQUNQLE9BQU87S0FBQyxDQUFDLENBQUM7SUFFZixJQUFNUSxTQUFTO21CQUFFLCtGQUFVOztnQkFDdkJGLFFBQVEsQ0FBQ1QsZ0VBQVksQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOzs7OztRQUV4RSxDQUFDO3dCQUhLVyxTQUFTOzs7T0FHZDtJQUVELElBQU1DLE1BQU07bUJBQUcsK0ZBQVM7O2dCQUNwQkgsUUFBUSxDQUFDRCxNQUFNLENBQUMsNENBQTRDLENBQUMsQ0FBQzs7Ozs7UUFFbEUsQ0FBQzt3QkFIS0ksTUFBTTs7O09BR1g7SUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLE1BQU0sQ0FBQyxDQUFDO0lBRXBCLHFCQUNBOzswQkFFQSw4REFBQ08sSUFBRTtnQkFBQ0MsT0FBTyxFQUFFOzJCQUFJTCxTQUFTLEVBQUU7aUJBQUE7MEJBQUcsc0JBQW9COzs7OztxQkFBSzswQkFDeEQsOERBQUNNLFFBQU07Z0JBQUNELE9BQU8sRUFBRTsyQkFBSUosTUFBTSxFQUFFO2lCQUFBOzBCQUFFLFFBQU07Ozs7O3FCQUFTOztvQkFFM0MsQ0FFRjtBQUVELENBQUM7R0EzQ0tYLGFBQWE7O1FBQ1VKLDBEQUFZO1FBQ0NDLHVEQUFjO1FBRXJDQyx1REFBYzs7O0FBSjNCRSxLQUFBQSxhQUFhO0FBNkNuQiwrREFBZUEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUudHN4P2U1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBkaXNwYXRjaCB9IGZyb20gJy4uL2hvb2svcmVkdXgnXG5pbXBvcnQge0ZldGNodXNlck5GVCxhZGRDYXJkLHNldE9wZW5tb2RlbCxTZWFyY2h9IGZyb20gXCIuLi9TdG9yZS93YWxsZXRTbGljZVwiXG5cbmNvbnN0IEhvbWVDb21wb25lbnQgPSgpPT57XG4gICAgY29uc3Qge2FjdGl2ZSxhY2NvdW50fSA9IHVzZVdlYjNSZWFjdCgpO1xuICAgIGNvbnN0IHt1c2VyTkZULHVzZXJGZXRjaE5GVCxmaWx0ZXJ9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53YWxsZXQpO1xuICAgIFxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcGRpc3BhdGNoKClcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGxldCBydW4gPWZhbHNlO1xuICAgIGlmKCFydW4pe1xuICAgIGlmKCFhY2NvdW50KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGlzcGF0Y2goRmV0Y2h1c2VyTkZUKGFjY291bnQpKVxuICB9XG4gIHJldHVybigpPT57XG4gICAgcnVuID0gdHJ1ZVxuICB9XG4gICBcbiAgIC8vIENhbGwoKTtcbiAgfSxbYWNjb3VudF0pO1xuICBcbmNvbnN0IEdldEFsbE5GVCA9YXN5bmMgKCk9PntcbiAgICBkaXNwYXRjaChGZXRjaHVzZXJORlQoXCIweDZkMDM4ZjQxODYyZGViOGRlNzY4ZWE2Yzk4MjljNjcwMmE5ZWRhNjlcIikpXG5cbn1cblxuY29uc3QgRmlsdGVyID0gYXN5bmMoKT0+e1xuICAgIGRpc3BhdGNoKGZpbHRlcihcIjB4M2ExNWE2MzA1NTNhNTJhZjVhMzE1ZThhMzNiMjg2Mzk3OGQ0MTE3NFwiKSlcblxufVxuXG5jb25zb2xlLmxvZyhmaWx0ZXIpO1xuXG5yZXR1cm4gKFxuPD5cblxuPGgxIG9uQ2xpY2s9eygpPT5HZXRBbGxORlQoKX0gPk5GVCB0b2tlbiBpZCBjaGVja2VyPC9oMT5cbjxidXR0b24gb25DbGljaz17KCk9PkZpbHRlcigpfT5GaWx0ZXI8L2J1dHRvbj5cblxuPC8+XG5cbilcblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lQ29tcG9uZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlV2ViM1JlYWN0IiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBkaXNwYXRjaCIsIkZldGNodXNlck5GVCIsIkhvbWVDb21wb25lbnQiLCJhY3RpdmUiLCJhY2NvdW50Iiwic3RhdGUiLCJ3YWxsZXQiLCJ1c2VyTkZUIiwidXNlckZldGNoTkZUIiwiZmlsdGVyIiwiZGlzcGF0Y2giLCJydW4iLCJHZXRBbGxORlQiLCJGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home.tsx\n"));

/***/ })

});