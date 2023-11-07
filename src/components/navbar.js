"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const navbar_module_css_1 = __importDefault(require("./navbar.module.css"));
function Navbar() {
    return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    react_1.default.createElement("header", { className: navbar_module_css_1.default.navbar },
        react_1.default.createElement("h1", null, " Leila's Personal Website "),
        react_1.default.createElement("nav", null,
            react_1.default.createElement("a", { href: "/" }, "Home"),
            react_1.default.createElement("a", { href: "/about" }, "About Me"),
            react_1.default.createElement("a", { href: "/resume" }, "Resume"))));
}
exports.default = Navbar;
