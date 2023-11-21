"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const navbar_module_css_1 = __importDefault(require("./navbar.module.css"));
const link_1 = __importDefault(require("next/link"));
function Navbar() {
    return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    (0, jsx_runtime_1.jsxs)("header", { className: navbar_module_css_1.default.navbar, children: [(0, jsx_runtime_1.jsx)("h1", { children: " Leila's Personal Website " }), (0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { className: "nav-list", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "/page.tsx", children: " Home |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/blogs", children: " Blog |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio", children: " Portfolio |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/resume", children: " Resume |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/contact", children: " Contact " })] }) })] }));
}
exports.default = Navbar;
