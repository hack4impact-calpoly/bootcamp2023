"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const portfolioData_1 = __importDefault(require("@/portfolioData"));
const portfolioPreview_1 = __importDefault(require("../components/portfolioPreview"));
function Portfolio() {
    (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio" });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "Leila", children: [(0, jsx_runtime_1.jsx)("a", { href: "/home", children: " personal website " }), " "] }), (0, jsx_runtime_1.jsxs)("ul", { className: "nav-list", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "/home", children: " Home |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/blogs", children: " Blog |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio", children: " Portfolio |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/resume", children: " Resume |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/contact", children: " Contact " })] })] }), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "page-title", children: " Portfolio " }), (0, jsx_runtime_1.jsx)("ul", { id: "portfolio-list", className: "portfolio-list", children: " " }), portfolioData_1.default.map((portfolio) => ((0, jsx_runtime_1.jsx)(portfolioPreview_1.default, { projectName: portfolio.projectName, slug: portfolio.slug, projectDescription: portfolio.projectDescription, image: portfolio.image, learnMore: portfolio.learnMore })))] }), (0, jsx_runtime_1.jsx)("footer", { className: "footer", children: " \u00A9 2023 Leila's World | All Rights Reserved " })] }));
}
exports.default = Portfolio;
