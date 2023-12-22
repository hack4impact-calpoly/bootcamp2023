import mongoose, { Schema } from "mongoose";
// typescript type (can also be an interface)
type IProject = {
  title: string;
  slug: string; 
  description: string; // for preview
  github: string;
  image: string;
  content: string;
  comments: IComment[]
};

type IComment = {
  user: string;
  comment: string;
  time: Date;
}

// mongoose schema 
const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    github: { type: String, required: true },
    image:{type: String, required: true},
    content:{type: String, required: true},
    comments:{}
})

// defining the collection and model
const Project = mongoose.models['projects'] ||
  mongoose.model('projects', projectSchema);

export default Project;