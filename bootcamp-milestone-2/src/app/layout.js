"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const react_1 = __importDefault(require("react"));
const google_1 = require("next/font/google");
require("./globals.css");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
exports.metadata = {
    title: "Leila's Personal Website",
    description: 'A personal website for Leila',
};
function RootLayout({ children, }) {
    return (react_1.default.createElement("html", { lang: "en" },
        react_1.default.createElement("body", { className: inter.className }, children)));
}
exports.default = RootLayout;
