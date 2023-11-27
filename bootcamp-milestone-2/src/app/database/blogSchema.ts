import mongoose from "mongoose";
import { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IBlog = {
  title: string;
  date: string;
  description: string; // for preview
  slug: string;
  image: string;
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  date: { type: String, required: true},
  description: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;