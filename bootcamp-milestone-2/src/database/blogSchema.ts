import { Schema } from "mongoose";
import mongoose from "mongoose";
// typescript type (can also be an interface)

export type IComment = {
    user: string;
    comment: string;
    time: string;
}
export type IBlog = {
    title: string;
    slug: string; 
    date: string;
    description: string; // for preview
    content: string; // for individual blog page
    image: string;
    comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: true}, //default: new Date()},
    description: { type: String, required: true },
    image: {type: String, required: false},
    content: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model("blogs", blogSchema);

export default Blog;