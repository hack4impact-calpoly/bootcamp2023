"use strict";
exports.__esModule = true;
var react_1 = require("react");
var recipePreview_module_css_1 = require("./recipePreview.module.css");
var image_1 = require("next/image");
function BlogPreview() {
    return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    react_1["default"].createElement("div", { className: recipePreview_module_css_1["default"].div },
        react_1["default"].createElement("h3", { className: "blog-date" }, " Hiking "),
        react_1["default"].createElement("div", null,
            "// ",
            react_1["default"].createElement("img", { src: "./imageLinkHere", alt: "img" })
        // we will replace img with Image, made to optimize images produced with Next.js
        ,
            "// we will replace img with Image, made to optimize images produced with Next.js",
            react_1["default"].createElement(image_1["default"], { src: "./hike-pick.png", alt: "img", width: 500, height: 500 }),
            react_1["default"].createElement("p", null, "Something else outside of the realm of technology is hiking, and enjoying nature."),
            react_1["default"].createElement("p", null))));
}
exports["default"] = BlogPreview;
