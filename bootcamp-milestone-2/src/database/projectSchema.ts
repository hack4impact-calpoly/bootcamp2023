import mongoose, { Schema } from "mongoose";
// typescript type (can also be an interface)
type IProject = {
    name: string;
    text: string;
    image: string;
    slug: string;
};


// mongoose schema 
const projectSchema = new Schema<IProject>({
    name: { type: String, required: true },
    text: { type: String, required: false },
    image: { type: String, required: false},
    slug: { type: String, required: false },
})

// defining the collection and model
const Project = mongoose.model('projects', projectSchema) || mongoose.models['projects'];

export default Project;