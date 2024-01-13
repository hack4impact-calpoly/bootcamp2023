import mongoose from "mongoose";
import { Schema } from "mongoose";


// typescript type (can also be an interface)
export type IProject = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    
};


// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    
})

// defining the collection and model
const ProjectModel = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default ProjectModel;