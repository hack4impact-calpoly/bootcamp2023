import mongoose, { Schema } from "mongoose";

type CommentType = {
  user: string;
  comment: string;
  time: Date;
};

const subSchema = new Schema<CommentType>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: false, default: new Date() },
})
// typescript type (can also be an interface)
type BlogType = {
  title: string;
  date: Date;
  description: string;
  slug: string;
  image: string;
  comments: CommentType[];
  blogNum: number;
};

// mongoose schema
const blogSchema = new Schema<BlogType>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  comments: { type: [subSchema] },
  blogNum: { type: Number, required: true },
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
