import mongoose from "mongoose";
import { Schema } from "mongoose";

// NOTE FOR SELF: IBlog and IComment use convention where I in front signifies that it is an interface
// make Comment interface (type)
export type IComment = {
    user: string;
    comment: string;
    time: string;
}

// typescript type (can also be an interface)
export type IBlog = {
    title: string;
    slug: string; 
    date: string;
    description: string;    // for preview
    content: string;        // for individual blog page
    comments: IComment[];   // array for comments
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: true},
    description: { type: String, required: true },
    content: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;