import mongoose, { Schema } from "mongoose";
// typescript type (can also be an interface)
type IBlog = {
  name: string;
  posted: string;
  description: string;
  text: string;
  image: string;
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
  name: { type: String, required: true },
  posted: { type: String, required: false },
  description: { type: String, required: false },
  text: { type: String, required: false },
  image: { type: String, required: false },
});

// defining the collection and model
const Blog = mongoose.model("blogs", blogSchema) || mongoose.models["blogs"];

export default Blog;
