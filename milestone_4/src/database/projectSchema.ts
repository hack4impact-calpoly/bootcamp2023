import mongoose, { Schema } from "mongoose";

export type IComment = {
    _id: string;
    user: string;
    comment: string;
    date: Date;
};

// typescript type (can also be an interface)
export type IProject = {
    _id: string;
    image: string; // for individual blog page
    name: string;
    point1: string;
    point2: string;
    point3: string;
    link: string;
    slug: string;
    comments: IComment;
};



const commentSchema = new mongoose.Schema({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
});
  
  // Define the Blog interface as per your TypeScript definition
const projectSchema = new mongoose.Schema({
    image: { type: String, required: false },
    name: { type: String, required: true },
    point1: { type: String, required: true },
    point2: { type: String, required: true },
    point3: { type: String, required: true },
    slug: {type: String, required: true},
    link: {type: String, required: true},
    comments: [commentSchema],
});

// Define the model or use the existing one if it has already been defined
const Projects =
    mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Projects;