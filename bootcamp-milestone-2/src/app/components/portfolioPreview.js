"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const portfolioPreview_module_css_1 = __importDefault(require("./portfolioPreview.module.css"));
const image_1 = __importDefault(require("next/image"));
function BlogPreview(props) {
    return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    (0, jsx_runtime_1.jsxs)("div", { className: portfolioPreview_module_css_1.default.div, children: [(0, jsx_runtime_1.jsxs)("h3", { children: [" ", props.portfolioName, " "] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(image_1.default, { src: "/props.image", alt: "img", width: 500, height: 500 }), (0, jsx_runtime_1.jsx)("p", { children: props.projectDescription }), (0, jsx_runtime_1.jsx)("p", { children: props.learnMore })] })] }));
}
exports.default = BlogPreview;
