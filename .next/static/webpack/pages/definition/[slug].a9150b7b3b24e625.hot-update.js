"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/definition/[slug]",{

/***/ "./pages/definition/[slug].tsx":
/*!*************************************!*\
  !*** ./pages/definition/[slug].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar DefinitionPage = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var slug = router.query.slug;\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), 2), definition = _useState[0], setDefinition = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var fetchDefinition = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var res, data;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            console.log(\"http://localhost:5000/definition?slug=\".concat(slug));\n                            return [\n                                4,\n                                fetch(\"http://localhost:5000/definition?slug=\".concat(slug))\n                            ];\n                        case 1:\n                            res = _state.sent();\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setDefinition(data.data);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchDefinition() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (slug) {\n            fetchDefinition();\n        }\n    }, [\n        slug\n    ]);\n    if (!definition) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            \"JP Dictionary | \",\n                            definition.slug || \"Loading\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"defintions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl\",\n                        children: definition.slug\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    definition.senses.map(function(sense) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: sense.parts_of_speech[0]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: sense.english_definitions.map(function(def) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: def\n                                        }, def, false, {\n                                            fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, sense.parts_of_speech[0], true, {\n                            fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DefinitionPage, \"uPWFyZ4G+oZwvz+XFaESLBTorS4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DefinitionPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefinitionPage);\nvar _c;\n$RefreshReg$(_c, \"DefinitionPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWZpbml0aW9uL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUE2QjtBQUNXO0FBQ1c7QUFVbkQsSUFBTUssaUJBQWlCLFdBQU07O0lBQzNCLElBQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixJQUFNLE9BQVdLLE9BQU9FLEtBQUssQ0FBckJEO0lBQ1IsSUFBb0NILFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsUUFBckNLLGFBQTZCTCxjQUFqQk0sZ0JBQWlCTjtJQUVwQ0QsZ0RBQVNBLENBQUMsV0FBTTtRQUNkLElBQU1RO3VCQUFrQiwrRkFBWTtvQkFFNUJDLEtBQ0FDOzs7OzRCQUZOQyxRQUFRQyxHQUFHLENBQUMseUNBQThDLE9BQUxSOzRCQUN6Qzs7Z0NBQU1TLE1BQU0seUNBQThDLE9BQUxUOzs7NEJBQTNESyxNQUFNOzRCQUNDOztnQ0FBTUEsSUFBSUssSUFBSTs7OzRCQUFyQkosT0FBTzs0QkFDYkgsY0FBY0csS0FBS0EsSUFBSTs7Ozs7O1lBQ3pCOzRCQUxNRjs7OztRQU1OLElBQUlKLE1BQU07WUFDUkk7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDSjtLQUFLO0lBRVQsSUFBSSxDQUFDRSxZQUFZO1FBQ2YscUJBQU8sOERBQUNTO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDbEIsa0RBQUlBOztrQ0FDSCw4REFBQ21COzs0QkFBTTs0QkFBaUJWLFdBQVdGLElBQUksSUFBSTs7Ozs7OztrQ0FDM0MsOERBQUNhO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDSjs7a0NBQ0MsOERBQUNLO3dCQUFHQyxXQUFVO2tDQUFZZixXQUFXRixJQUFJOzs7Ozs7b0JBQ3hDRSxXQUFXZ0IsTUFBTSxDQUFDQyxHQUFHLENBQUMsU0FBQ0M7NkNBQ3RCLDhEQUFDVDs7OENBQ0MsOERBQUNVO29DQUFHSixXQUFVOzhDQUFzQkcsTUFBTUUsZUFBZSxDQUFDLEVBQUU7Ozs7Ozs4Q0FDNUQsOERBQUNDOzhDQUNFSCxNQUFNSSxtQkFBbUIsQ0FBQ0wsR0FBRyxDQUFDLFNBQUNNOzZEQUM5Qiw4REFBQ0M7c0RBQWNEOzJDQUFOQTs7Ozs7Ozs7Ozs7OzJCQUpMTCxNQUFNRSxlQUFlLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUFZNUM7R0EzQ014Qjs7UUFDV0osa0RBQVNBOzs7S0FEcEJJO0FBNkNOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RlZmluaXRpb24vW3NsdWddLnRzeD9mZjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgRGVmaW5pdGlvbkRhdGEge1xyXG4gIHNsdWc6IHN0cmluZztcclxuICBzZW5zZXM6IHtcclxuICAgIHBhcnRzX29mX3NwZWVjaDogc3RyaW5nW107XHJcbiAgICBlbmdsaXNoX2RlZmluaXRpb25zOiBzdHJpbmdbXTtcclxuICB9W107XHJcbn1cclxuXHJcbmNvbnN0IERlZmluaXRpb25QYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtkZWZpbml0aW9uLCBzZXREZWZpbml0aW9uXSA9IHVzZVN0YXRlPERlZmluaXRpb25EYXRhPigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEZWZpbml0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2RlZmluaXRpb24/c2x1Zz0ke3NsdWd9YClcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9kZWZpbml0aW9uP3NsdWc9JHtzbHVnfWApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0RGVmaW5pdGlvbihkYXRhLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIGlmIChzbHVnKSB7XHJcbiAgICAgIGZldGNoRGVmaW5pdGlvbigpO1xyXG4gICAgfVxyXG4gIH0sIFtzbHVnXSk7XHJcblxyXG4gIGlmICghZGVmaW5pdGlvbikge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SlAgRGljdGlvbmFyeSB8IHtkZWZpbml0aW9uLnNsdWcgfHwgXCJMb2FkaW5nXCJ9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiZGVmaW50aW9uc1wiPjwvbWV0YT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGxcIj57ZGVmaW5pdGlvbi5zbHVnfTwvaDE+XHJcbiAgICAgICAge2RlZmluaXRpb24uc2Vuc2VzLm1hcCgoc2Vuc2UpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtzZW5zZS5wYXJ0c19vZl9zcGVlY2hbMF19PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3NlbnNlLnBhcnRzX29mX3NwZWVjaFswXX08L2gyPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3NlbnNlLmVuZ2xpc2hfZGVmaW5pdGlvbnMubWFwKChkZWYpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2RlZn0+e2RlZn08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmluaXRpb25QYWdlOyJdLCJuYW1lcyI6WyJIZWFkIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRlZmluaXRpb25QYWdlIiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5IiwiZGVmaW5pdGlvbiIsInNldERlZmluaXRpb24iLCJmZXRjaERlZmluaXRpb24iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwianNvbiIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaDEiLCJjbGFzc05hbWUiLCJzZW5zZXMiLCJtYXAiLCJzZW5zZSIsImgyIiwicGFydHNfb2Zfc3BlZWNoIiwidWwiLCJlbmdsaXNoX2RlZmluaXRpb25zIiwiZGVmIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/definition/[slug].tsx\n"));

/***/ })

});