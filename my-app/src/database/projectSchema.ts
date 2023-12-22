import { Schema } from "mongoose"
import mongoose from "mongoose"


// typescript type (can also be an interface)
type IProject = {
    title: string;
    slug: string; 
    description: string; // for preview
};

// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: false },
    description: { type: String, required: true }
})

// defining the collection and model
const ProjectModel = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default ProjectModel;