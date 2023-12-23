import mongoose, { Schema } from "mongoose";
import { IComment } from "./commentSchema";

// typescript type (can also be an interface)
export type IProject = {
    _id: string;
    title: string;
    description: string; // for preview
    content: string; // for individual blog page
    comments: IComment[]; // array for comments
};

// mongoose schema
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comments",
        },
    ],
});

// Define the model or use the existing one if it has already been defined
const ProjectModel =
    mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default ProjectModel;