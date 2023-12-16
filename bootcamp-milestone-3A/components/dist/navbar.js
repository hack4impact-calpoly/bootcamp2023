"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navbar_module_css_1 = require("./navbar.module.css");
var link_1 = require("next/link");
var image_1 = require("next/image");
function Navbar() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("header", { className: navbar_module_css_1["default"].navbar },
            react_1["default"].createElement("div", { style: { display: 'inline-block' } },
                react_1["default"].createElement("nav", { className: navbar_module_css_1["default"].navbar },
                    react_1["default"].createElement(image_1["default"], { className: navbar_module_css_1["default"].profileIcon, src: "/HE.png", width: 68, height: 68, alt: "Profile Icon" }),
                    react_1["default"].createElement("ul", { className: navbar_module_css_1["default"].navList },
                        react_1["default"].createElement(link_1["default"], { href: "/home" }, "Home"),
                        react_1["default"].createElement(link_1["default"], { href: "/contact" }, "Contact"),
                        react_1["default"].createElement(link_1["default"], { href: "/resume" }, "Resume"),
                        react_1["default"].createElement(link_1["default"], { href: "/portfolio" }, "Portfolio"),
                        react_1["default"].createElement(link_1["default"], { href: "/blog" }, "Blog")))))));
}
exports["default"] = Navbar;
