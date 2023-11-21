import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IProject = {
    _id: string;
    title: string;
    description: string; // for preview
    url: string;
    image: string; // for individual blog page
    comments: mongoose.Types.ObjectId; // array for comments
};

// mongoose schema
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: false },
    image: { type: String, required: true },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comments",
        },
    ],
});

// Define the model or use the existing one if it has already been defined
const Projects =
    mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Projects;
