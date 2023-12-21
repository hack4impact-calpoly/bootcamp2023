import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IComment } from "./commentSchema";

// typescript type (can also be an interface)
export type IBlog = {
  title: string;
  slug: string;
  date: string;
  description: String; // for preview
  image: string; // for individual blog page
  content: string;
  comments: mongoose.Types.ObjectId;
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  content: { type: String, required: false },
  comments: [],
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);


export default Blog;
