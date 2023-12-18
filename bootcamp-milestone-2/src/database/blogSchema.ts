import { Schema } from "mongoose";
import mongoose from "mongoose";
import { Blog } from "../app/blogData";

// mongoose schema
export interface Comment {
  user: string;
  comment: string;
  time: Date;
}

// mongoose schema
export const commentSchema = new Schema<Comment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: false, default: new Date() },
});

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: String, required: false }, //{ type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: [String], required: true },
  comments: { type: [commentSchema], required: true },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
