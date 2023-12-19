import mongoose, { Schema } from "mongoose";
import { IComment } from "./commentSchema";

// typescript type (can also be an interface)
export type IBlog = {
    _id: string;
    title: string;
    date: Date;
    description: string; // for preview
    image: string; // for individual blog page
    comments: IComment[];
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    image: { type: String, required: true },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comments",
        },
    ],
});

// defining the collection and model
const Blogs = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blogs;
