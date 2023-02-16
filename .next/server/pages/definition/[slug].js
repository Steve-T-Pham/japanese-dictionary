"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/definition/[slug]";
exports.ids = ["pages/definition/[slug]"];
exports.modules = {

/***/ "./pages/definition/[slug].tsx":
/*!*************************************!*\
  !*** ./pages/definition/[slug].tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst DefinitionPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug  } = router.query;\n    const [definition, setDefinition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchDefinition = async ()=>{\n            console.log(slug);\n            const res = await fetch(`http://localhost:5000/search?q=${slug}`);\n            const data = await res.json();\n            setDefinition(data.data);\n            console.log(\"Test:\" + definition);\n        };\n        if (slug) {\n            fetchDefinition();\n        }\n    }, [\n        slug\n    ]);\n    if (!definition) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            \"JP Dictionary | \",\n                            definition.slug || \"Loading\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"defintions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl\",\n                        children: definition.slug\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    definition.senses && definition.senses.map((sense)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: sense.parts_of_speech[0]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: sense.english_definitions.map((def)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: def\n                                        }, def, false, {\n                                            fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, sense.parts_of_speech[0], true, {\n                            fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\definition\\\\[slug].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefinitionPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZWZpbml0aW9uL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDVztBQUNXO0FBVW5ELE1BQU1LLGlCQUFpQixJQUFNO0lBQzNCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLEtBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUE7SUFFNUNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUSxrQkFBa0IsVUFBWTtZQUNsQ0MsUUFBUUMsR0FBRyxDQUFDTjtZQUNaLE1BQU1PLE1BQU0sTUFBTUMsTUFBTSxDQUFDLCtCQUErQixFQUFFUixLQUFLLENBQUM7WUFDaEUsTUFBTVMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1lBQzNCUCxjQUFjTSxLQUFLQSxJQUFJO1lBQ3ZCSixRQUFRQyxHQUFHLENBQUMsVUFBVUo7UUFBVztRQUNuQyxJQUFJRixNQUFNO1lBQ1JJO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ0o7S0FBSztJQUVULElBQUksQ0FBQ0UsWUFBWTtRQUNmLHFCQUFPLDhEQUFDUztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQ2xCLGtEQUFJQTs7a0NBQ0gsOERBQUNtQjs7NEJBQU07NEJBQWlCVixXQUFXRixJQUFJLElBQUk7Ozs7Ozs7a0NBQzNDLDhEQUFDYTt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdoQyw4REFBQ0o7O2tDQUNDLDhEQUFDSzt3QkFBR0MsV0FBVTtrQ0FBWWYsV0FBV0YsSUFBSTs7Ozs7O29CQUN4Q0UsV0FBV2dCLE1BQU0sSUFBSWhCLFdBQVdnQixNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxzQkFDM0MsOERBQUNUOzs4Q0FDQyw4REFBQ1U7b0NBQUdKLFdBQVU7OENBQXNCRyxNQUFNRSxlQUFlLENBQUMsRUFBRTs7Ozs7OzhDQUM1RCw4REFBQ0M7OENBQ0VILE1BQU1JLG1CQUFtQixDQUFDTCxHQUFHLENBQUMsQ0FBQ00sb0JBQzlCLDhEQUFDQztzREFBY0Q7MkNBQU5BOzs7Ozs7Ozs7OzsyQkFKTEwsTUFBTUUsZUFBZSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFZNUM7QUFFQSxpRUFBZXhCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXBhbmVzZS1kaWN0aW9uYXJ5Ly4vcGFnZXMvZGVmaW5pdGlvbi9bc2x1Z10udHN4P2ZmNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBEZWZpbml0aW9uRGF0YSB7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIHNlbnNlczoge1xyXG4gICAgcGFydHNfb2Zfc3BlZWNoOiBzdHJpbmdbXTtcclxuICAgIGVuZ2xpc2hfZGVmaW5pdGlvbnM6IHN0cmluZ1tdO1xyXG4gIH1bXTtcclxufVxyXG5cclxuY29uc3QgRGVmaW5pdGlvblBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW2RlZmluaXRpb24sIHNldERlZmluaXRpb25dID0gdXNlU3RhdGU8RGVmaW5pdGlvbkRhdGE+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERlZmluaXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNsdWcpO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3NlYXJjaD9xPSR7c2x1Z31gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldERlZmluaXRpb24oZGF0YS5kYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coXCJUZXN0OlwiICsgZGVmaW5pdGlvbil9O1xyXG4gICAgaWYgKHNsdWcpIHtcclxuICAgICAgZmV0Y2hEZWZpbml0aW9uKCk7XHJcbiAgICB9XHJcbiAgfSwgW3NsdWddKTtcclxuXHJcbiAgaWYgKCFkZWZpbml0aW9uKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5KUCBEaWN0aW9uYXJ5IHwge2RlZmluaXRpb24uc2x1ZyB8fCBcIkxvYWRpbmdcIn08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJkZWZpbnRpb25zXCI+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPntkZWZpbml0aW9uLnNsdWd9PC9oMT5cclxuICAgICAgICB7ZGVmaW5pdGlvbi5zZW5zZXMgJiYgZGVmaW5pdGlvbi5zZW5zZXMubWFwKChzZW5zZSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3NlbnNlLnBhcnRzX29mX3NwZWVjaFswXX0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c2Vuc2UucGFydHNfb2Zfc3BlZWNoWzBdfTwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7c2Vuc2UuZW5nbGlzaF9kZWZpbml0aW9ucy5tYXAoKGRlZikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZGVmfT57ZGVmfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVmaW5pdGlvblBhZ2U7Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGVmaW5pdGlvblBhZ2UiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJkZWZpbml0aW9uIiwic2V0RGVmaW5pdGlvbiIsImZldGNoRGVmaW5pdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJoMSIsImNsYXNzTmFtZSIsInNlbnNlcyIsIm1hcCIsInNlbnNlIiwiaDIiLCJwYXJ0c19vZl9zcGVlY2giLCJ1bCIsImVuZ2xpc2hfZGVmaW5pdGlvbnMiLCJkZWYiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/definition/[slug].tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/definition/[slug].tsx"));
module.exports = __webpack_exports__;

})();