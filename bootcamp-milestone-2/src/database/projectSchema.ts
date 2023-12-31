import mongoose, { Schema } from "mongoose";
// import { IComment } from "./blogSchema";

// const projectCommentSchema = new mongoose.Schema<IComment>({
//     user: {
//       type: String,
//       required: true,
//     },
//     comment: {
//       type: String,
//       required: true,
//     },
//     time: {
//       type: Date,
//       required: false,
//       default: new Date(),
//     },
//   });

// typescript type (can also be an interface)
type IProject = {
    title: string;
    slug: string;
    description: string; // for preview
    image: string;
};

// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
})

// defining the collection and model
const Projects = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Projects;

// export const ProjectComment =
//   mongoose.models["projectcomment"] ||
//   mongoose.model("projectcomment", projectCommentSchema);
  
export type { IProject };