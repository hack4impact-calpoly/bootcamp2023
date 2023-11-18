import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
};

// typescript type (can also be an interface)
export type IProject = {
    _id: string;
    title: string;
    description: string; // for preview
    url: string;
    image: string; // for individual blog page
    comments: IComment[]; // array for comments
};

// mongoose schema
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: false },
    image: { type: String, required: true },
    comments: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
            time: { type: Date, required: false, default: new Date() },
        },
    ],
});

// Define the model or use the existing one if it has already been defined
const Project =
    mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
