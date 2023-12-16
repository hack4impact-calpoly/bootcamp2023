// import IBlog from "@/blogData";
import mongoose, { Schema, Document } from "mongoose";

// TypeScript type (can also be an interface)
interface Project extends Document {
  title: string;
  date: Date;
  description: string; // for preview
  image: string;
  slug: string;
}

// Mongoose schema
const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: false },
  slug: { type: String, required: true },
});

// Check if the model already exists
const Project = mongoose.models.projects
  ? mongoose.model<Project>('projects')
  : mongoose.model<Project>('projects', projectSchema);
export default Project;