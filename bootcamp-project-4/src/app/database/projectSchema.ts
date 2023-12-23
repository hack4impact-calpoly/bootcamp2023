import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  date: Date;
};

// typescript type (can also be an interface)
export type IProject = {
  title: string;
  date: Date;
  description: string;
  image: string;
  slug: string;
  comments: IComment[]; // array for comments
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: Date, required: true },
});

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [{ type: commentSchema, required: true }],
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
