import mongoose, { ObjectId, Schema } from "mongoose";

type IBlog = {
    title: string;
    date: string;
    content: string;
    img: string;
    slug: string;
}

// mongoose schema
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    content: { type: String, required: true},
    img: { type: String, required: true},
    slug: { type: String, required: true },

})

// definition the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;