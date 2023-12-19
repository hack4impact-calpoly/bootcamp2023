import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type IProject = {
  id: string;
  title: string;
  image: string;
  image_alt: string;
  width: number;
  height: number;
  link: string;
  slug: string;  
};


// mongoose schema 
const projectSchema = new Schema<IProject>({
    id: {type: String, required: true},
    title: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    link: { type: String, required: true },
    slug: { type: String, required: true },
})

// defining the collection and model (so we know where to look)
const Project = mongoose.models.projects || mongoose.model('projects', projectSchema);

export default Project;