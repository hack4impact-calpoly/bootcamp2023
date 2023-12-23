import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
type Project = {
    name: string;
    description: string; // for preview
    image: string;
    link: string;
    comments: IComment[];
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true },
});


// mongoose schema 
const projectSchema = new Schema<Project>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    comments: {
        type: [commentSchema],
        required: true,
      }
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;