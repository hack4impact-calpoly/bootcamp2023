import { Schema } from "mongoose"
import mongoose from "mongoose"


type IComment = {
    username: string;
    comment: string; 
}


// typescript type (can also be an interface)
type IBlog = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    content: string; // for individual blog page
    comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
})

// defining the collection and model
const BlogModel = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default BlogModel;