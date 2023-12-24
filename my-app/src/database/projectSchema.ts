// import { Schema } from "mongoose"
// import mongoose from "mongoose"


// type IProject = {
//     name: string;
//     description: string;
//     image: string;
//     image_alt: string;
//     link: string;
//   };
  
//   // mongoose schema
//   const projectSchema = new Schema<IProject>({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     image: { type: String, required: true },
//     image_alt: { type: String, required: true },
//     link: { type: String, required: true },
//   });
  
//   // defining the collection and model
//   const Project =
//     mongoose.models["projects"] || mongoose.model("projects", projectSchema);
  
//   export default Project;
import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IComment } from "./commentSchema";

// typescript type (can also be an interface)
export type IProject = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

const comment = {
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: false, default: new Date() },
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
});

// defining the collection and model
export const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);

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