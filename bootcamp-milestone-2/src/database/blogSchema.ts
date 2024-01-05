import { Blog } from "@/app/typings/blog";
import mongoose, { Schema } from "mongoose";
import { IComment } from "@/app/typings/comment";

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true},
    time: { type: Date, required: true },
})

// mongoose schema 
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    date: { type: String, required: true},
    description: { type: String, required: true },
    slug: { type: String, required: true },
    piccap: { type: String, required: true},
    picslug: { type: String, required: true},
    comments: {type: [commentSchema], required: true}
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;
