import { Project } from "@/app/typings/project";
import mongoose, { Schema } from "mongoose";


// mongoose schema 
const projectSchema = new Schema<Project>({
    title: { type: String, required: true },
    date: { type: String, required: true},
    description: { type: String, required: true },
    slug: { type: String, required: true },
    imgSlug: { type: String, required: true },
    imgDesc: { type: String, required: true },
    imgWidth: { type: Number, required: true },
    imgHeight: { type: Number, required: true }
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;