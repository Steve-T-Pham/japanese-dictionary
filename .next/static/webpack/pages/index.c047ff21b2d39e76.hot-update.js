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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_definition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/definition */ \"./components/definition.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Homepage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), searchQuery = _useState[0], setSearchQuery = _useState[1];\n    var _useState1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), searchResults = _useState1[0], setSearchResults = _useState1[1];\n    function searchDictionary(searchQuery) {\n        return _searchDictionary.apply(this, arguments);\n    }\n    function _searchDictionary() {\n        _searchDictionary = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function(searchQuery) {\n            var encodedSearchQuery, response, data;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        encodedSearchQuery = encodeURIComponent(searchQuery);\n                        return [\n                            4,\n                            fetch(\"http://localhost:5000/search?q=\".concat(encodedSearchQuery))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        setSearchResults(data.data);\n                        console.log(data.data);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _searchDictionary.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"JP Dictionary | Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"App\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto rounded p-1 h-7 w-1/3 my-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Enter Romaji or English...\",\n                                value: searchQuery,\n                                className: \"w-4/5 focus:outline-0 hover:outline-0 focus:outline-0 text-center\",\n                                onChange: function(e) {\n                                    return setSearchQuery(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 10\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return searchDictionary(searchQuery);\n                                },\n                                className: \"bg-cyan-500 rounded-full text-white h-7 w-1/6 hover:bg-cyan-700 transition-all duration-200 ease-in-out\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: searchResults.map(function(definition, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_definition__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                definition: definition\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 54\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Homepage, \"jn4xHEBDfu/IrX9NjeCde/IJa08=\");\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQXdDO0FBQ047QUFDZ0I7QUFFckI7QUFFN0IsSUFBTUksV0FBcUIsV0FBTTs7SUFDL0IsSUFBc0NILFlBQUFBLGdGQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUF4Q0ksY0FBK0JKLGNBQWxCSyxpQkFBa0JMO0lBQ3RDLElBQTBDQSxhQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsRUFBRSxPQUE5Q00sZ0JBQW1DTixlQUFwQk8sbUJBQW9CUDthQUUzQlEsaUJBQWlCSixXQUFtQjtlQUFwQ0k7O2FBQUFBO1FBQUFBLG9CQUFmLDZGQUFnQ0osV0FBbUIsRUFBQztnQkFDNUNLLG9CQUNBQyxVQUNBQzs7Ozt3QkFGQUYscUJBQXFCRyxtQkFBbUJSO3dCQUM3Qjs7NEJBQU1TLE1BQU0sa0NBQXFELE9BQW5CSjs7O3dCQUF6REMsV0FBVzt3QkFDSjs7NEJBQU1BLFNBQVNJLElBQUk7Ozt3QkFBMUJILE9BQU87d0JBQ2JKLGlCQUFpQkksS0FBS0EsSUFBSTt3QkFDMUJJLFFBQVFDLEdBQUcsQ0FBQ0wsS0FBS0EsSUFBSTs7Ozs7O1FBQ3ZCO2VBTmVIOztJQVFmLHFCQUNFOzswQkFDRSw4REFBQ04sa0RBQUlBOztrQ0FDSCw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFHaEMsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDQztnQ0FDRUMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT3RCO2dDQUNQa0IsV0FBVTtnQ0FDVkssVUFBVSxTQUFDQzsyQ0FBTXZCLGVBQWV1QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7MENBRWhELDhEQUFDSTtnQ0FBT0MsU0FBUzsyQ0FBTXZCLGlCQUFpQko7O2dDQUNwQ2tCLFdBQVU7MENBQTBHOzs7Ozs7Ozs7Ozs7a0NBSTFILDhEQUFDRDtrQ0FDRWYsY0FBYzBCLEdBQUcsQ0FBQyxTQUFDQyxZQUFZQztpREFBVyw4REFBQ2pDLDhEQUFVQTtnQ0FBQ2dDLFlBQVlBOytCQUFpQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUY7R0F4Q00vQjtLQUFBQTtBQTBDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZGVmaW5pdGlvbic7XG5pbXBvcnQgRGVmaW5pdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2RlZmluaXRpb24nO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IEhvbWVwYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hEaWN0aW9uYXJ5KHNlYXJjaFF1ZXJ5OiBzdHJpbmcpe1xuICAgIGNvbnN0IGVuY29kZWRTZWFyY2hRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChzZWFyY2hRdWVyeSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3NlYXJjaD9xPSR7ZW5jb2RlZFNlYXJjaFF1ZXJ5fWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0U2VhcmNoUmVzdWx0cyhkYXRhLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPiBcbiAgICAgICAgPHRpdGxlPkpQIERpY3Rpb25hcnkgfCBIb21lPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cInNlYXJjaFwiPjwvbWV0YT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgICAgey8qIHNlYXJjaCBiYXIgdG8gc2V0IHNlYXJjaFF1ZXJ5LCBtYWtpbmcgYXBpIHJlcXVlc3QgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byByb3VuZGVkIHAtMSBoLTcgdy0xLzMgbXktMTBcIj5cbiAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFJvbWFqaSBvciBFbmdsaXNoLi4uJyBcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQvNSBmb2N1czpvdXRsaW5lLTAgaG92ZXI6b3V0bGluZS0wIGZvY3VzOm91dGxpbmUtMCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VhcmNoRGljdGlvbmFyeShzZWFyY2hRdWVyeSl9IFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1jeWFuLTUwMCByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSBoLTcgdy0xLzYgaG92ZXI6YmctY3lhbi03MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBkZWZpbml0aW9uIHF1ZXJ5IGZvciB0aGUgZ2l2ZW4gd29yZCAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAoKGRlZmluaXRpb24sIGluZGV4KSA9PiAoPERlZmluaXRpb24gZGVmaW5pdGlvbj17ZGVmaW5pdGlvbn0ga2V5PXtpbmRleH0vPikpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZXBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEZWZpbml0aW9uIiwiSGVhZCIsIkhvbWVwYWdlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwic2VhcmNoRGljdGlvbmFyeSIsImVuY29kZWRTZWFyY2hRdWVyeSIsInJlc3BvbnNlIiwiZGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiZGVmaW5pdGlvbiIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});