import mongoose, { Schema } from "mongoose";
import { IComment } from "./commentSchema";

export type IProject = {
    title: string;
    slug: string;
    date: Date;
    description: string; // for preview
    comments: IComment[];
};

const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: false },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: "comments",
        },
      ],
})

const Projects = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Projects