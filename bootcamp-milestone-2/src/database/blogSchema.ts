import { Schema, Document } from "mongoose";
import mongoose from "mongoose";

// Define the TypeScript type (interface)
export interface Blog {
  title: string;
  date: Date;
  desc: string;
  slug: string;
}

// Define the Mongoose schema
const blogSchema = new Schema<Blog & Document>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  desc: { type: String, required: true },
  slug: { type: String, required: true },
});

// Define the Mongoose model
const BlogModel = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default BlogModel;
