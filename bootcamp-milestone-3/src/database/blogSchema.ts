import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type IBlog = {
    slug: string; 
    name: string;
    description: string; // for preview
    image: string;
    posted: string;
    text: string; // for individual blog page
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    slug: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    posted: { type: String, required: true },
    text: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;