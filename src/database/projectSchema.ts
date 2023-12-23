import mongoose, { Schema } from "mongoose";

export type IProject = {
    title: string;
    slug: string;
    date: Date;
    description: string; // for preview
};

const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: false },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
})

const Projects = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Projects