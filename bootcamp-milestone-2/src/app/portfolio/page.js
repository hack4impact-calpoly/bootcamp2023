"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
function Portfolio() {
    (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio" });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "Leila", children: [(0, jsx_runtime_1.jsx)("a", { href: "/home", children: " personal website " }), " "] }), (0, jsx_runtime_1.jsxs)("ul", { className: "nav-list", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "/home", children: " Home |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/blogs", children: " Blog |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio", children: " Portfolio |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/resume", children: " Resume |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/contact", children: " Contact " })] })] }), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "page-title", children: " Portfolio " }), (0, jsx_runtime_1.jsx)("div", { className: "project", children: (0, jsx_runtime_1.jsxs)("a", { id: "screenshot", href: "/home", children: [" ", (0, jsx_runtime_1.jsx)(image_1.default, { src: "/screenshot.jpg", width: 400, height: 300, alt: "screenshot of Home page", className: "screen" }), " "] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "project-details", children: [(0, jsx_runtime_1.jsxs)("p", { className: "project-name", children: [" ", (0, jsx_runtime_1.jsx)("strong", { children: "Personal Website 2023" })] }), (0, jsx_runtime_1.jsx)("p", { className: "project-description", children: " After completing the Hack4Impact Starter Pack, I learned the skills of HTML, CSS, and JavaScript to create an updated website with all working links. " }), (0, jsx_runtime_1.jsx)("a", { id: "learn-more", href: "/home", children: " LEARN MORE " })] })] }), (0, jsx_runtime_1.jsx)("footer", { className: "footer", children: " \u00A9 2023 Leila's World | All Rights Reserved " })] }));
}
exports.default = Portfolio;
