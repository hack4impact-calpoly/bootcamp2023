"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./globals.css");
const google_1 = require("next/font/google");
const navbar_1 = __importDefault(require("./components/navbar"));
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "Leila's Personal Website",
    description: "A personal website for Leila.",
};
function RootLayout({ children, }) {
    (0, jsx_runtime_1.jsx)("html", { lang: "en", children: (0, jsx_runtime_1.jsxs)("body", { className: inter.className, children: [(0, jsx_runtime_1.jsx)(navbar_1.default, {}), children] }) });
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", children: (0, jsx_runtime_1.jsx)("body", { className: inter.className, children: children }) }));
}
exports.default = RootLayout;
