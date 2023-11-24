"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const blogData_1 = __importDefault(require("@/blogData"));
const blogPreview_1 = __importDefault(require("../components/blogPreview"));
// import blogs from '@/blogData';
// import BlogPreview from '../components/blogPreview';
// import blogs from "blogData.ts";
// import BlogPreview from "@/components/blogPreview";
function Blogs() {
    (0, jsx_runtime_1.jsx)(link_1.default, { href: "/home" });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "Leila", children: [(0, jsx_runtime_1.jsx)("a", { href: "/home", children: " personal website " }), " "] }), (0, jsx_runtime_1.jsxs)("ul", { className: "nav-list", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "/home", children: " Home |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/blogs", children: " Blog |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio", children: " Portfolio |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/resume", children: " Resume |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/contact", children: " Contact " })] })] }), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "page-title", children: " Blog " }), (0, jsx_runtime_1.jsx)("div", { id: "blog", children: (0, jsx_runtime_1.jsx)("ul", { id: "blog-list", className: "blog-list", children: " " }) }), blogData_1.default.map((blog) => ((0, jsx_runtime_1.jsx)(blogPreview_1.default, { name: blog.name, description: blog.description, image: blog.image, posted: blog.posted, text: blog.text })))] }), (0, jsx_runtime_1.jsxs)("footer", { className: "footer", children: [" ", "\u00A9 2023 Leila's World | All Rights Reserved", " "] })] }));
}
exports.default = Blogs;
