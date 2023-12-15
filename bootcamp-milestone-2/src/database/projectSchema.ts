import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IProject = {
  title: string;
  description: string; // for preview
  slug: string;
  imagePath: string; 
  url: string;
};

// mongoose schema 
export const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  imagePath: { type: String, required: true },
  url: { type: String, required: true },
  
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
  mongoose.model('projects', projectSchema);

export default Project;