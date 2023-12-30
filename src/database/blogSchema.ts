import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export type IBlog = {
  _id: string;
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // for individual blog page
  comments: IComment[]; // array for comments
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: {
    user: { type: String, required: false },
    comment: { type: String, required: false },
    time: { type: Date, required: false, default: new Date() },
  },
});

// defining the collection and model
const Blogs = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blogs;
