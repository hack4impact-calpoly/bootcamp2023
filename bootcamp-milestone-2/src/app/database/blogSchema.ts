import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
export type IBlog = {
  title: string;
  date: string;
  description: string; // for preview
  slug: string;
  image: string;
  comments: IComment[];
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  date: { type: String, required: true},
  description: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  comments: [{type: commentSchema, required: true}]
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;