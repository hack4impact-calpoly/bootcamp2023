import { Schema, Document } from "mongoose";
import mongoose from "mongoose";

// Define the TypeScript type (interface)
export interface Project {
  title: string;
  desc: string;
  image: string;
}

// Define the Mongoose schema
const projectSchema = new Schema<Project & Document>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
});

// Define the Mongoose model
const ProjectModel = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default ProjectModel;
