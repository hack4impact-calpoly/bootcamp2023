// Import necessary modules and types
import { Schema, Document } from "mongoose";
import mongoose from "mongoose";
import CommentModel, { Comment } from "@/database/commentSchema"; // Assuming CommentModel is in the same directory

// Define the TypeScript type (interface)
export interface Blog {
  title: string;
  date: Date;
  desc: string;
  content: string; // Use lowercase 'string' instead of 'String'
  slug: string;
  comments: Comment[]; // Use Comment type from CommentModel
}

// Define the Mongoose schema
const blogSchema = new Schema<Blog & Document>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  desc: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  comments: { type: [CommentModel.schema], default: [] },
});

// Define the Mongoose model
const BlogModel = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default BlogModel;
