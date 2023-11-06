"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
require("./globals.css");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
exports.metadata = {
    title: "Leila's Personal Website",
    description: 'A personal website for Leila',
};
function RootLayout({ children, }) {
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className }, children)));
}
exports.default = RootLayout;
