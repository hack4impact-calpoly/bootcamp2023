import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
}
//temp
const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});


// typescript type (can also be an interface)
export type IBlog = {
  title: string;
  date: Date;
  description: string; // for preview
  slug: string;
  imagePath: string; 
  content: string; // for individual blog page
  comments: IComment[]; // array for comments
};

// mongoose schema 
export const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  imagePath: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ type: commentSchema, required: true }],
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
  mongoose.model('blogs', blogSchema);

  
export default Blog;