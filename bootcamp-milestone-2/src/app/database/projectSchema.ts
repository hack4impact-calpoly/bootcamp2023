import mongoose from "mongoose";
import { Schema } from "mongoose";
import { IComment } from "../database/blogSchema";

export type IProject = {
    title: string;
    slug: string; 
    description: string; // for preview
    image: string; // for individual blog page
    comments: IComment[]; 
};


// mongoose schema 
const blogSchema = new Schema <IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
})

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true },
  });
  
  // mongoose schema
  const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true },
    comments: [{ type: commentSchema, required: true }],
  });

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;