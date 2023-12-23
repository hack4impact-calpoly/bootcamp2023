import mongoose, { Schema } from "mongoose";

type IComment = {
    user: string;
    comment: string;
    time: string;
}

// typescript type (can also be an interface)
type IProject = {
    title: string;
    slug: string;
    description: string; // for preview
    image: string;
    comments: IComment[]; // array for comments
};

// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    comments: {
        user: {type: String, required: true},
        comment: {type: String, required: true},
        time: {type: String, required: false, default: new Date()}
    }
})

// defining the collection and model
const Projects = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Projects;
export type { IComment };
export type { IProject };