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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/definition.tsx":
/*!***********************************!*\
  !*** ./components/definition.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Definition = ({ definition  })=>{\n    const englishDefinitions = definition.senses.map((sense)=>sense.english_definitions);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container rounded border-2 w-4/5 mx-auto my-4 border-grey pt-2 pb-2 hover:cursor-pointer hover:border-cyan-500 flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-10 ml-4 my-auto mx-auto flex-col w-1/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm\",\n                        children: definition.japanese[0].reading\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-2xl\",\n                        children: definition.slug\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: definition.jlpt.map((level)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-full bg-cyan-500 text-center my-1 w-fit text-sm px-1.5\",\n                                children: level\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 58\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"rounded-full bg-red-400 text-center my-1 w-fit text-sm px-1.5\",\n                        children: definition.senses[0].parts_of_speech[0]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-grow-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    className: \"list-decimal flex-1 column-count-5 column-gap-4\",\n                    children: englishDefinitions.map((definitions)=>definitions.map((definition)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: definition\n                            }, definition, false, {\n                                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 62\n                            }, undefined)))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\components\\\\definition.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Definition);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RlZmluaXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFMUIsTUFBTUMsYUFBYSxDQUFDLEVBQUVDLFdBQVUsRUFBcUIsR0FBSTtJQUVyRCxNQUFNQyxxQkFBcUJELFdBQVdFLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFFBQWVBLE1BQU1DLG1CQUFtQjtJQUUxRixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVdQLFdBQVdRLFFBQVEsQ0FBQyxFQUFFLENBQUNDLE9BQU87Ozs7OztrQ0FDeEQsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUFzQlAsV0FBV1UsSUFBSTs7Ozs7O2tDQUNwRCw4REFBQ0o7a0NBQ0lOLFdBQVdXLElBQUksQ0FBQ1IsR0FBRyxDQUFDLENBQUNTLHNCQUFlLDhEQUFDTjtnQ0FBSUMsV0FBVTswQ0FBa0VLOzs7Ozs7Ozs7OztrQ0FFMUgsOERBQUNOO3dCQUFJQyxXQUFVO2tDQUFpRVAsV0FBV0UsTUFBTSxDQUFDLEVBQUUsQ0FBQ1csZUFBZSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OzswQkFHM0gsOERBQUNQO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDTztvQkFBR1AsV0FBVTs4QkFDVE4sbUJBQW1CRSxHQUFHLENBQUMsQ0FBQ1ksY0FDckJBLFlBQVlaLEdBQUcsQ0FBQyxDQUFDSCwyQkFBb0IsOERBQUNnQjswQ0FBcUJoQjsrQkFBYkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90RTtBQUVBLGlFQUFlRCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFwYW5lc2UtZGljdGlvbmFyeS8uL2NvbXBvbmVudHMvZGVmaW5pdGlvbi50c3g/MjA2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGVmaW5pdGlvbiA9ICh7IGRlZmluaXRpb24gfToge2RlZmluaXRpb246IGFueX0pID0+e1xyXG5cclxuICAgIGNvbnN0IGVuZ2xpc2hEZWZpbml0aW9ucyA9IGRlZmluaXRpb24uc2Vuc2VzLm1hcCgoc2Vuc2U6IGFueSkgPT4gc2Vuc2UuZW5nbGlzaF9kZWZpbml0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJvdW5kZWQgYm9yZGVyLTIgdy00LzUgbXgtYXV0byBteS00IGJvcmRlci1ncmV5IHB0LTIgcGItMiBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItY3lhbi01MDAgZmxleFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xMCBtbC00IG15LWF1dG8gbXgtYXV0byBmbGV4LWNvbCB3LTEvNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+e2RlZmluaXRpb24uamFwYW5lc2VbMF0ucmVhZGluZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+e2RlZmluaXRpb24uc2x1Z308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2RlZmluaXRpb24uamxwdC5tYXAoKGxldmVsOiBhbnkpID0+IDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLWN5YW4tNTAwIHRleHQtY2VudGVyIG15LTEgdy1maXQgdGV4dC1zbSBweC0xLjVcIj57bGV2ZWx9PC9kaXY+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctcmVkLTQwMCB0ZXh0LWNlbnRlciBteS0xIHctZml0IHRleHQtc20gcHgtMS41XCI+e2RlZmluaXRpb24uc2Vuc2VzWzBdLnBhcnRzX29mX3NwZWVjaFswXX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93LTFcIj5cclxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJsaXN0LWRlY2ltYWwgZmxleC0xIGNvbHVtbi1jb3VudC01IGNvbHVtbi1nYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlbmdsaXNoRGVmaW5pdGlvbnMubWFwKChkZWZpbml0aW9uczogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb246IGFueSkgPT4gPGxpIGtleT17ZGVmaW5pdGlvbn0+e2RlZmluaXRpb259PC9saT4pXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmluaXRpb247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZW5nbGlzaERlZmluaXRpb25zIiwic2Vuc2VzIiwibWFwIiwic2Vuc2UiLCJlbmdsaXNoX2RlZmluaXRpb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwiamFwYW5lc2UiLCJyZWFkaW5nIiwic2x1ZyIsImpscHQiLCJsZXZlbCIsInBhcnRzX29mX3NwZWVjaCIsIm9sIiwiZGVmaW5pdGlvbnMiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/definition.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_definition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/definition */ \"./components/definition.tsx\");\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return(// Wrap all the pages in your app with a common parent element\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\_app.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Steve\\\\Desktop\\\\Front End Projects\\\\japanese-dictionary\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBRVQ7QUFDRztBQUVsQyxNQUFNQyxNQUEwQixDQUFDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUs7SUFDNUQsT0FDRSw4REFBOEQ7a0JBQzlELDhEQUFDSCx1REFBYztrQkFDYiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFwYW5lc2UtZGljdGlvbmFyeS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvZGVmaW5pdGlvbic7XHJcblxyXG5jb25zdCBBcHA6IFJlYWN0LkZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgLy8gV3JhcCBhbGwgdGhlIHBhZ2VzIGluIHlvdXIgYXBwIHdpdGggYSBjb21tb24gcGFyZW50IGVsZW1lbnRcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkZyYWdtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();