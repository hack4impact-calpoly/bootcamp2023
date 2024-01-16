import mongoose from "mongoose";
import { Schema } from "mongoose";

type IComment = {
    user: string;
    comment: string;
    time: Date;
}
// typescript type (can also be an interface)
export type IProject = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    comments: IComment[]; // array for comments
};


// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: {
        user: {type: String, required: true},
        comment: {type: String, required: true},
        time: {type: Date, required: false, default: new Date()}
      }
    
})

// defining the collection and model
const ProjectModel = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default ProjectModel;