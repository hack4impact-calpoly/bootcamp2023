import mongoose from "mongoose";
import { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IProject = {
  title: string;
  date: string;
  description: string;
  image: string;
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
