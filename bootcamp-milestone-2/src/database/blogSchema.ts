import { Blog } from "@/app/typings/blog";
import mongoose, { Schema } from "mongoose";
import { IComment } from "@/app/typings/comment";
const commentSchema = new Schema<IComment>(
    {    
        user: {type: String, required: true},
        comment: {type: String, required: true},
        time: {type: Date, required: true},
    }
)

const blogSchema = new Schema<Blog>(
    {    
        title: {type: String, required: true},
        date: {type: String, required: true},
        description: {type: String, required: true},
        slug: {type: String, required: true},
        pageDescription: {type: String, required: true},
        picSlug1: {type: String, required: true},
        picSlug2: {type: String, required: true},
        picSlug3: {type: String, required: true},
        comments: {type: [commentSchema], required:true}
    }
)

export default mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema)
