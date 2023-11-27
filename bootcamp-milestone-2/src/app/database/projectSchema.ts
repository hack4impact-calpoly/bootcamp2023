import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IProject = {
    title: string;
    slug: string; 
    description: string; // for preview
    image: string; // for individual blog page
};


// mongoose schema 
const blogSchema = new Schema <IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', blogSchema);

export default Project;