// typescript type (can also be an interface)
import { Schema } from "mongoose";
import mongoose from "mongoose";


export type IBlog = {
    title: string;
    slug: string; 
    date: string;
    description: string; // for preview
    content: string; // for individual blog page
};


// mongoose schema 
export const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: false},
    description: { type: String, required: true },
    content: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;