import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IProject = {
    _id: string;
    image: string; // for individual blog page
    name: string;
    point1: string;
    point2: string;
    point3: string;
    link: string;
};

// mongoose schema
const projectSchema = new Schema<IProject>({
    image: { type: String, required: false },
    name: { type: String, required: true },
    point1: { type: String, required: true },
    point2: { type: String, required: true },
    point3: { type: String, required: true },
    link: {type: String, required: true}
});

// Define the model or use the existing one if it has already been defined
const Project =
    mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;