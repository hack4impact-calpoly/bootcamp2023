import { Blog } from "@/app/typings/blog";
import mongoose, { Schema } from "mongoose";


// mongoose schema 
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: String, required: true},
    description: { type: String, required: true },
    slug: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);
