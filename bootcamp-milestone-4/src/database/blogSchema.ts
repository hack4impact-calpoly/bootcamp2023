import mongoose from "mongoose";
import { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IComment = {
    name: string;
    time: Date;
    comment: string;
}

export type IBlog = {
    title: string;
    date: string;
    description: string;
    image: string;
    slug: string; 
 
    image2: string;
    para1: string;
    para2: string;
    comments: IComment[];
};

// mongoose schema 
const commentSchema = new Schema<IComment>({
    name: { type: String, required: true },
    time: { type: Date, required: false, default: new Date() },
    comment: { type: String, required: true },
  });

const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, required: true },

    image2: { type: String, required: true },
    para1: { type: String, required: true },
    para2: { type: String, required: true },
    comments: { type: Schema.Types.Mixed, required: true }
})

// defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;