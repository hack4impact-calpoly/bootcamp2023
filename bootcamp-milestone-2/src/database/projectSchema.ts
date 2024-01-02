import mongoose, { Schema } from "mongoose";

type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
type IProject = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    comments: IComment[]; // array for comments
    image: string;
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
    },
    image: { type: String, required: false }
})

// defining the collection and model
const Projects = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);


// export const ProjectComment =
//   mongoose.models["projectcomment"] ||
//   mongoose.model("projectcomment", projectCommentSchema);
  
export type { IProject };
export type {IComment};
export default Projects;

