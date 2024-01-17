import mongoose from "mongoose";
import {Schema} from "mongoose";

export type IProject = {
    project: string;
    date: Date;
    description: string;
}

const projectSchema = new Schema<IProject>({
    project: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
})

const Projects = mongoose.models['projects'] || mongoose.model('projects', projectSchema);
export default Projects;