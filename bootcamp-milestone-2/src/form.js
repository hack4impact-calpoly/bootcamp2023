"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Form = ({ onSubmit }) => {
    const [formData, setFormData] = react_1.default.useState({ name: '', email: '', message: '' });
};
exports.Form = Form;
function Form1({ onSubmit }) {
    const [formData, setFormData] = react_1.default.useState({ name: '', email: '', message: '' });
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(formData);
    }
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("label", { children: ["Name:", (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", value: formData.name, onChange: handleInputChange })] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("label", { children: ["Email:", (0, jsx_runtime_1.jsx)("input", { type: "text", name: "email", value: formData.email, onChange: handleInputChange })] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("label", { children: ["Message:", (0, jsx_runtime_1.jsx)("input", { type: "text", name: "message", value: formData.email, onChange: handleInputChange })] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Submit" })] }));
}
