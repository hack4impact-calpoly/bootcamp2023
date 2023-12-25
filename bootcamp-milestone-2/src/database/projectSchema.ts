import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type IProject = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  slug: string;
  comments: IComment[];
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: false },
  github: { type: String, required: true },
  slug: { type: String, required: true },
  comments: {
    type: [
      {
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, required: true },
      },
    ],
    required: true,
  },
});

// definition the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
