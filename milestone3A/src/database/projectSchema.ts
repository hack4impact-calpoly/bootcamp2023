import mongoose from "mongoose";
import { Schema } from "mongoose";

// NOTE FOR SELF: IBlog and IComment use convention where I in front signifies that it is an interface

// typescript type (can also be an interface)
export type IProject = {
    title: string;
    date: string;
    description: string;
    link: string;
    linkImage: string;
};


// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    linkImage: { type: String, required: true },
    date: { type: String, required: true},
    description: { type: String, required: true },
    link: { type: String, required: false }
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;