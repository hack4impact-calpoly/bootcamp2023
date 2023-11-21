import mongoose, { Schema } from "mongoose";

type IProject = {
    title: string;
    description: string;
    technologies: string[];
    github: string;
}

// mongoose schema
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: false },
    github: { type: String, required: true }
})

// definition the collection and model
const Project = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Project