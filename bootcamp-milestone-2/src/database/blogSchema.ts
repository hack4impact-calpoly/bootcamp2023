import mongoose from "mongoose";

type IBlog = {
  name: string;
  slug: string;
  description: string;
  image: string;
  posted: Date;
  text: string;
};

const blogSchema = new Schema<IBlog>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
  posted: { type: String, required: true },
  text: { type: String, required: true },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
