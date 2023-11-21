"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
function Home() {
    (0, jsx_runtime_1.jsx)(link_1.default, { href: "page.tsx" });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "Leila", children: [(0, jsx_runtime_1.jsx)("a", { href: "page.tsx", children: " personal website " }), " "] }), (0, jsx_runtime_1.jsxs)("ul", { className: "nav-list", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "page.tsx", children: " Home |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/blogs", children: " Blog |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio", children: " Portfolio |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/resume", children: " Resume |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/contact", children: " Contact " })] })] }), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "page-title", children: " Home " }), (0, jsx_runtime_1.jsx)("div", { className: "about", children: (0, jsx_runtime_1.jsxs)("div", { className: "about-text", children: [(0, jsx_runtime_1.jsx)("div", { className: "about-image", children: (0, jsx_runtime_1.jsx)(image_1.default, { src: '/boat2.JPG', width: 200, height: 300, alt: "Photo of me on a ferry boat.", className: "boat" }) }), (0, jsx_runtime_1.jsxs)("p", { children: [" Leila Touati is a second year ", (0, jsx_runtime_1.jsx)("strong", { children: " Journalism " }), " major with a minor in ", (0, jsx_runtime_1.jsx)("strong", { children: " Computer Science." })] }), (0, jsx_runtime_1.jsxs)("p", { children: [" Leila loves peppermint tea, ", (0, jsx_runtime_1.jsx)("em", { children: "Scout Coffee" }), " matcha, and reading during her free time."] })] }) })] }), (0, jsx_runtime_1.jsx)("footer", { className: "footer", children: " \u00A9 2023 Leila's World | All Rights Reserved " })] }));
}
exports.default = Home;
