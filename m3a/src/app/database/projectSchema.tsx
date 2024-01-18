import mongoose from "mongoose";
import { Schema } from "mongoose";

export type IProject = {
    title: string;
    link: string;
    description: string;
};


// mongoose schema 
const blogSchema = new Schema<IProject>({
    title: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
})

// defining the collection and model
const ProjectDB = mongoose.models['projects'] ||
mongoose.model('projects', blogSchema);

export default ProjectDB;