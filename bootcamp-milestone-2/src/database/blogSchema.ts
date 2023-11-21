import mongoose, { Schema } from "mongoose";

type IBlog = {
    title: string;
    slug: string;
    date: Date;
    content: string;
}

// mongoose schema
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: true, default: new Date() },
    content: { type: String, required: true}
})

// definition the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;