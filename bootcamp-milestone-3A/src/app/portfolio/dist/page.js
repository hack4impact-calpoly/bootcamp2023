"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var portfolio_module_css_1 = require("./portfolio.module.css");
var db_1 = require("@/helpers/db");
var projectSchema_1 = require("@/database/projectSchema");
var projectPreview_1 = require("../../../components/projectPreview");
var projectCommentSchema_1 = require("@/database/projectCommentSchema");
function getProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var blogs, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1["default"]()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, projectSchema_1["default"].find().sort({ date: -1 }).orFail()];
                case 3:
                    blogs = _a.sent();
                    console.log("All Projects:", blogs);
                    return [2 /*return*/, blogs];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error fetching blogs:", error_1);
                    throw error_1; // Re-throw the error to handle it elsewhere if needed
                case 5: return [2 /*return*/];
            }
        });
    });
}
function updateBlog(commentID, updatedData) {
    return __awaiter(this, void 0, void 0, function () {
        var blog, updatedBlog, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1["default"]()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, projectCommentSchema_1["default"].findById(commentID)];
                case 3:
                    blog = _a.sent();
                    if (!blog) {
                        throw new Error('Blog not found');
                    }
                    // Update the blog post with the new data
                    blog.set(updatedData);
                    return [4 /*yield*/, blog.save()];
                case 4:
                    updatedBlog = _a.sent();
                    console.log('Blog updated successfully:', updatedBlog);
                    return [2 /*return*/, updatedBlog];
                case 5:
                    error_2 = _a.sent();
                    console.error('Error updating blog:', error_2);
                    throw error_2;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function project() {
    return __awaiter(this, void 0, void 0, function () {
        var projects, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    projects = getProjects();
                    if (!projects) return [3 /*break*/, 2];
                    _b = (_a = React).createElement;
                    _c = ["div", null, React.createElement("main", { style: { textAlign: "center" } },
                            React.createElement("p", { className: portfolio_module_css_1["default"].projectName }, "Here are some of my projects"))];
                    return [4 /*yield*/, projects];
                case 1: return [2 /*return*/, (_b.apply(_a, _c.concat([(_d.sent()).map(function (project) { return (React.createElement(projectPreview_1["default"], { title: project.title, date: project.date, description: project.description, image: project.image, slug: project.slug })); }),
                        React.createElement("form", { className: portfolio_module_css_1["default"].contactForm, method: "POST", action: "/api/submit-form" },
                            React.createElement("p", { style: {
                                    textAlign: "center",
                                    fontSize: "25px",
                                    paddingTop: "100px"
                                } }, "Comments on Portfolio!"),
                            React.createElement("div", { className: portfolio_module_css_1["default"].formGroup },
                                React.createElement("label", { htmlFor: "name" }, "Name:"),
                                React.createElement("input", { name: "Name", type: "text", id: "name", className: portfolio_module_css_1["default"].inputField })),
                            React.createElement("div", { className: portfolio_module_css_1["default"].formGroup },
                                React.createElement("label", { htmlFor: "message-box" }, "Message:"),
                                React.createElement("textarea", { name: "Message", id: "message-box", className: portfolio_module_css_1["default"].textareaField, style: { color: "black" } })),
                            React.createElement("div", { className: portfolio_module_css_1["default"].submitButton, style: { borderColor: "white", borderStyle: "double" } },
                                React.createElement("input", { type: "submit", id: "submit" }))),
                        React.createElement("div", null)])))];
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports["default"] = project;
