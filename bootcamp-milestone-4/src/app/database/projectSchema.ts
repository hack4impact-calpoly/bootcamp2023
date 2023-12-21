import mongoose from "mongoose";
import { IComment } from "./blogSchema";

// Define the Project schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Define the model or use the existing one if it has already been defined
export const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

const projectCommentSchema = new mongoose.Schema<IComment>({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: false,
    default: new Date(),
  },
});

export const ProjectComment =
  mongoose.models["projectcomment"] ||
  mongoose.model("projectcomment", projectCommentSchema);
