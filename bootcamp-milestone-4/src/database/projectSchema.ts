import mongoose, { Schema } from "mongoose";

// Comment 
export type IComment = {
  user: string;
  comment: string;
  image: string;
  date: Date;
}

export const commentSchema = new Schema<IComment>({
  user: {type: String, required: true},
  comment: {type: String, required: true},
  image: {type: String, required: true, default: "/images/profile.jpeg"},
  date: {type: Date, required: false, default: new Date()},
})


// typescript type (can also be an interface)
export type IProject = {
  id: string;
  title: string;
  image: string;
  image_alt: string;
  width: number;
  height: number;
  description: string;
  link: string;
  slug: string; 
  comments: IComment[]; // array for comments
};

// mongoose schema 
export const projectSchema = new Schema<IProject>({
    id: {type: String, required: true},
    title: { type: String, required: true },
    image: { type: String, required: true },
    image_alt: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    description: { type: String, required: true},
    link: { type: String, required: true },
    slug: { type: String, required: true },
    comments: [{ type: commentSchema, required: false}],
})

// export type IPortfolio = {
//   id: string;
//   works: IProject[]; 
//   comments: IComment[]; // array for comments
// };

// export const portfolioSchema = new Schema<IPortfolio>({
//   id: {type: String, required: true},
//   works: [{type: projectSchema, required: true}],
//   comments: [{ type: commentSchema, required: false}],
// })

// defining the collection and model (so we know where to look)
export const Project = mongoose.models.projects || mongoose.model('projects', projectSchema);

export default Project;