import { Schema } from "mongoose";
import mongoose from "mongoose";
// typescript type (can also be an interface)

export type IComment = {
  user: string;
  comment: string;
  time: string;
}

export type IProjectPost = {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: string;
    image: string;
    comments: IComment[];
};

// mongoose schema 
const projectSchema = new Schema<IProjectPost>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: true}, //default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: false },
    comments: [
      {
          user: { type: String, required: true },
          comment: { type: String, required: true },
          time: { type: Date, required: false, default: new Date() },
      },
  ],
})

// defining the collection and model
const Projects = mongoose.models['projects'] || mongoose.model('projects', projectSchema);

export default Projects;