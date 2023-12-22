"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-pages-browser)/./src/app/contact/page.tsx":
/*!**********************************!*\
  !*** ./src/app/contact/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.module.css */ \"(app-pages-browser)/./src/app/contact/contact.module.css\");\n/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Contact() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>_emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(\"ksUSuevyyQjQPk46_\"), []);\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const validateForm = ()=>{\n        if (!emailRef.current.value) {\n            setError(\"Email is required.\");\n            return false;\n        }\n        if (!nameRef.current.value) {\n            setError(\"Name is required.\");\n            return false;\n        }\n        if (!messageRef.current.value) {\n            setError(\"Message is required.\");\n            return false;\n        }\n        return true;\n    };\n    const clearForm = ()=>{\n        emailRef.current.value = \"\";\n        nameRef.current.value = \"\";\n        messageRef.current.value = \"\";\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!validateForm()) return;\n        const serviceId = \"service_e6lb5c5\";\n        const templateId = \"template_lheivla\";\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(serviceId, templateId, {\n            name: nameRef.current.value,\n            email: emailRef.current.value,\n            message: messageRef.current.value\n        }).then(()=>{\n            setSuccess(\"Messsend successfully!\");\n            clearForm();\n        }).catch((err)=>{\n            console.error(\"Error:\", err);\n            setError(\"Failed to send message\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"pageTitle\",\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        id: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactForm),\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                                htmlFor: \"name\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                name: \"name\",\n                                ref: nameRef,\n                                placeholder: \"Enter your name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().email),\n                                name: \"email\",\n                                ref: emailRef,\n                                placeholder: \"Enter your email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),\n                                htmlFor: \"message\",\n                                children: \"Message\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                rows: 10,\n                                id: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().message),\n                                name: \"message\",\n                                ref: messageRef,\n                                placeholder: \"Type your message here...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_contact_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                                type: \"submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\kayla\\\\OneDrive\\\\Desktop\\\\bootcamp-project-2023\\\\bootcamp-milestone-2\\\\src\\\\app\\\\contact\\\\page.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"qFY7dy6PhfS8V22jdds/uPMX1o0=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkQ7QUFFbEI7QUFDRjtBQUV4QixTQUFTTTs7SUFDdEJMLGdEQUFTQSxDQUFDLElBQU1JLDZEQUFZLENBQUMsc0JBQXNCLEVBQUU7SUFFckQsTUFBTUcsV0FBV04sNkNBQU1BLENBQTBCO0lBQ2pELE1BQU1PLFVBQVVQLDZDQUFNQSxDQUEwQjtJQUNoRCxNQUFNUSxhQUFhUiw2Q0FBTUEsQ0FBMEI7SUFDbkQsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFnQjtJQUNsRCxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQWdCO0lBRXRELE1BQU1ZLGVBQWU7UUFDbkIsSUFBSSxDQUFDUCxTQUFTUSxPQUFPLENBQUVDLEtBQUssRUFBRTtZQUM1QkwsU0FBUztZQUNULE9BQU87UUFDVDtRQUNBLElBQUksQ0FBQ0gsUUFBUU8sT0FBTyxDQUFFQyxLQUFLLEVBQUU7WUFDM0JMLFNBQVM7WUFDVCxPQUFPO1FBQ1Q7UUFDQSxJQUFJLENBQUNGLFdBQVdNLE9BQU8sQ0FBRUMsS0FBSyxFQUFFO1lBQzlCTCxTQUFTO1lBQ1QsT0FBTztRQUNUO1FBQ0EsT0FBTztJQUNUO0lBRUEsTUFBTU0sWUFBWTtRQUNoQlYsU0FBU1EsT0FBTyxDQUFFQyxLQUFLLEdBQUc7UUFDMUJSLFFBQVFPLE9BQU8sQ0FBRUMsS0FBSyxHQUFHO1FBQ3pCUCxXQUFXTSxPQUFPLENBQUVDLEtBQUssR0FBRztJQUM5QjtJQUVBLE1BQU1FLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSSxDQUFDTixnQkFBZ0I7UUFDckIsTUFBTU8sWUFBWTtRQUNsQixNQUFNQyxhQUFhO1FBQ25CbEIsNkRBQ08sQ0FBQ2lCLFdBQVdDLFlBQVk7WUFDM0JFLE1BQU1oQixRQUFRTyxPQUFPLENBQUVDLEtBQUs7WUFDNUJTLE9BQU9sQixTQUFTUSxPQUFPLENBQUVDLEtBQUs7WUFDOUJVLFNBQVNqQixXQUFXTSxPQUFPLENBQUVDLEtBQUs7UUFDcEMsR0FDQ1csSUFBSSxDQUFDO1lBQ0pkLFdBQVc7WUFDWEk7UUFDRixHQUNDVyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUXBCLEtBQUssQ0FBQyxVQUFTbUI7WUFDdkJsQixTQUFTO1FBQ1g7SUFDSjtJQUVBLHFCQUNFLDhEQUFDb0I7a0JBQ0MsNEVBQUNDOzs4QkFDQyw4REFBQ0M7b0JBQUdDLFdBQVU7OEJBQVk7Ozs7Ozs4QkFDMUIsOERBQUNIO29CQUFJRyxXQUFXL0Isb0VBQWE7OEJBQzNCLDRFQUFDaUM7d0JBQUtDLElBQUlsQyx3RUFBaUI7d0JBQUVvQyxVQUFVckI7OzBDQUNyQyw4REFBQ3NCO2dDQUFNTixXQUFXL0Isa0VBQVc7Z0NBQUVzQyxTQUFROzBDQUFPOzs7Ozs7MENBRzlDLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTE4sSUFBSWxDLGlFQUFVO2dDQUNkcUIsTUFBSztnQ0FDTG9CLEtBQUtwQztnQ0FDTHFDLGFBQVk7Ozs7OzswQ0FFZCw4REFBQ0w7Z0NBQU1OLFdBQVcvQixrRUFBVztnQ0FBRXNDLFNBQVE7MENBQVE7Ozs7OzswQ0FHL0MsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMTixJQUFJbEMsa0VBQVc7Z0NBQ2ZxQixNQUFLO2dDQUNMb0IsS0FBS3JDO2dDQUNMc0MsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDTDtnQ0FBTU4sV0FBVy9CLGtFQUFXO2dDQUFFc0MsU0FBUTswQ0FBVTs7Ozs7OzBDQUdqRCw4REFBQ0s7Z0NBQ0NDLE1BQU07Z0NBQ05WLElBQUlsQyxvRUFBYTtnQ0FDakJxQixNQUFLO2dDQUNMb0IsS0FBS25DO2dDQUNMb0MsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDSDtnQ0FBTVIsV0FBVy9CLG1FQUFZO2dDQUFFd0MsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qRDtHQTlGd0J0QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbnRhY3QvcGFnZS50c3g/MGU5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9jb250YWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGVtYWlsanMgZnJvbSBcIkBlbWFpbGpzL2Jyb3dzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IGVtYWlsanMuaW5pdChcImtzVVN1ZXZ5eVFqUVBrNDZfXCIpLCBbXSk7XHJcblxyXG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBuYW1lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoIWVtYWlsUmVmLmN1cnJlbnQhLnZhbHVlKSB7XHJcbiAgICAgIHNldEVycm9yKFwiRW1haWwgaXMgcmVxdWlyZWQuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIW5hbWVSZWYuY3VycmVudCEudmFsdWUpIHtcclxuICAgICAgc2V0RXJyb3IoXCJOYW1lIGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFtZXNzYWdlUmVmLmN1cnJlbnQhLnZhbHVlKSB7XHJcbiAgICAgIHNldEVycm9yKFwiTWVzc2FnZSBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyRm9ybSA9ICgpID0+IHtcclxuICAgIGVtYWlsUmVmLmN1cnJlbnQhLnZhbHVlID0gXCJcIjtcclxuICAgIG5hbWVSZWYuY3VycmVudCEudmFsdWUgPSBcIlwiO1xyXG4gICAgbWVzc2FnZVJlZi5jdXJyZW50IS52YWx1ZSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF2YWxpZGF0ZUZvcm0oKSkgcmV0dXJuO1xyXG4gICAgY29uc3Qgc2VydmljZUlkID0gXCJzZXJ2aWNlX2U2bGI1YzVcIjtcclxuICAgIGNvbnN0IHRlbXBsYXRlSWQgPSBcInRlbXBsYXRlX2xoZWl2bGFcIjtcclxuICAgIGVtYWlsanNcclxuICAgICAgLnNlbmQoc2VydmljZUlkLCB0ZW1wbGF0ZUlkLCB7XHJcbiAgICAgICAgbmFtZTogbmFtZVJlZi5jdXJyZW50IS52YWx1ZSxcclxuICAgICAgICBlbWFpbDogZW1haWxSZWYuY3VycmVudCEudmFsdWUsXHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVJlZi5jdXJyZW50IS52YWx1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldFN1Y2Nlc3MoXCJNZXNzc2VuZCBzdWNjZXNzZnVsbHkhXCIpXHJcbiAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLGVycik7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2VUaXRsZVwiPkNvbnRhY3Q8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWN0fT5cclxuICAgICAgICAgIDxmb3JtIGlkPXtzdHlsZS5jb250YWN0Rm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlLmxhYmVsfSBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPXtzdHlsZS5uYW1lfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICByZWY9e25hbWVSZWZ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZS5sYWJlbH0gaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPXtzdHlsZS5lbWFpbH1cclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHJlZj17ZW1haWxSZWZ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGUubGFiZWx9IGh0bWxGb3I9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgTWVzc2FnZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICByb3dzPXsxMH1cclxuICAgICAgICAgICAgICBpZD17c3R5bGUubWVzc2FnZX1cclxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgcmVmPXttZXNzYWdlUmVmfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLlwiXHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZS5zdWJtaXR9IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGUiLCJlbWFpbGpzIiwiQ29udGFjdCIsImluaXQiLCJlbWFpbFJlZiIsIm5hbWVSZWYiLCJtZXNzYWdlUmVmIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwidmFsaWRhdGVGb3JtIiwiY3VycmVudCIsInZhbHVlIiwiY2xlYXJGb3JtIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VydmljZUlkIiwidGVtcGxhdGVJZCIsInNlbmQiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImRpdiIsIm1haW4iLCJoMSIsImNsYXNzTmFtZSIsImNvbnRhY3QiLCJmb3JtIiwiaWQiLCJjb250YWN0Rm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicmVmIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contact/page.tsx\n"));

/***/ })

});