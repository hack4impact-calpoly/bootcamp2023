import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IBlog = {
  id: string;
  title: string;
  image: string;
  date: Date;
  image_alt: string;
  width: number;
  height: number;
  description: string; // for individual blog page
  slug: string;  
  preview: string;
  comments: IComment[]; // array for comments
};

export type IComment = {
    user: string;
		comment: string;
    image: string;
		date: Date;
}

// schema for comments
const commentSchema = new Schema<IComment>({
    user: {type: String, required: true},
    comment: {type: String, required: true},
    image: {type: String, required: true, default: "/images/profile.jpeg"},
    date: {type: Date, required: false, default: new Date()},
})

// mongoose schema 
export const blogSchema = new Schema<IBlog>({
    id: {type: String, required: true},
    title: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    image_alt: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    preview: { type: String, required: true },
    comments: [{ type: commentSchema, required: false}],
})

// defining the collection and model
const Blog = mongoose.models.blogs || mongoose.model('blogs', blogSchema);

export default Blog;