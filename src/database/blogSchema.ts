import mongoose, { Schema } from "mongoose";
import { IComment } from "./commentSchema";

// typescript type (can also be an interface)
export type IBlog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // for individual blog page
  image: string;
  comments: IComment[];
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: false },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
});

// defining the collection and model
const Blogs = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blogs;
