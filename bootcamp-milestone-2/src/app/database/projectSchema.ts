import { Schema } from "mongoose";
import mongoose from "mongoose";

// typescript type (can also be an interface)
export type IProject = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
