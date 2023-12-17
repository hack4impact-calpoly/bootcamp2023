"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const blogPreview_module_css_1 = __importDefault(require("./blogPreview.module.css"));
const image_1 = __importDefault(require("next/image"));
function BlogPreview(props) {
    return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    (0, jsx_runtime_1.jsxs)("div", { className: blogPreview_module_css_1.default.div, children: [(0, jsx_runtime_1.jsxs)("h3", { children: [" ", props.name, " "] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: "/{props.image}", alt: "img", width: 500, height: 500 }), (0, jsx_runtime_1.jsx)("p", { children: props.description }), (0, jsx_runtime_1.jsx)("p", { children: props.posted })] })] }));
}
exports.default = BlogPreview;
