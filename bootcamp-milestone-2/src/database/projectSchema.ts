import mongoose, { Schema } from "mongoose";
import { IComment } from "./blogSchema";

type IProject = {
  name: string;
  href: string; 
  description: string;
  src: string;
  alt: string;
  comments: IComment[];
};

// mongoose schema 
const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  href: { type: String, required: true },
  description: { type: String, required: true },
  src: { type: String, required: true },
  alt: { type: String, required: true },
  comments: {
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: false, default: new Date() }
  },
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
  mongoose.model('projects', projectSchema);

export default Project;