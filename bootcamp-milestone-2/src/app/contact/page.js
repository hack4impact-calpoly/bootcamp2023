"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const link_1 = __importDefault(require("next/link"));
const form_1 = __importDefault(require("./form"));
function Contact() {
    (0, jsx_runtime_1.jsx)(link_1.default, { href: "/contact" });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "Leila", children: [(0, jsx_runtime_1.jsx)("a", { href: "/page.tsx", children: " personal website " }), " "] }), (0, jsx_runtime_1.jsxs)("ul", { className: "nav-list", children: [(0, jsx_runtime_1.jsx)(link_1.default, { href: "/page.tsx", children: " Home |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/blogs", children: " Blog |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/portfolio", children: " Portfolio |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/resume", children: " Resume |" }), (0, jsx_runtime_1.jsx)(link_1.default, { href: "/contact", children: " Contact " })] })] }), (0, jsx_runtime_1.jsxs)("main", { children: ["function App() ", function handleSubmit(formData) {
                        console.log(formData);
                        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(form_1.default, { onSubmit: handleSubmit }) }));
                    }, "export default App;"] }), (0, jsx_runtime_1.jsx)("footer", { className: "footer", children: " \u00A9 2023 Leila's World | All Rights Reserved " })] }));
}
exports.default = Contact;
