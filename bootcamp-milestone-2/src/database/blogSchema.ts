import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type IBlog = {
  title: string;
  date: string;
  content: string;
  img: string;
  slug: string;
  comments: IComment[];
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, required: true },
  img: { type: String, required: true },
  slug: { type: String, required: true },
  comments: {
    type: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, required: true },
      },
    ],
    required: true,
  },
});

// definition the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
