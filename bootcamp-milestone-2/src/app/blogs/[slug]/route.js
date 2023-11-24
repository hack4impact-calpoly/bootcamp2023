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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const server_1 = require("next/server");
const db_1 = __importDefault(require("@/helpers/db"));
const blogSchema_1 = __importDefault(require("@/database/blogSchema"));
function GET(req, { params }) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, db_1.default)(); // function from db.ts before
        const { slug } = params; // another destructure
        try {
            const blog = yield blogSchema_1.default.findOne({ slug }).orFail();
            return server_1.NextResponse.json(blog);
        }
        catch (err) {
            return server_1.NextResponse.json('Blog not found.', { status: 404 });
        }
    });
}
exports.GET = GET;
