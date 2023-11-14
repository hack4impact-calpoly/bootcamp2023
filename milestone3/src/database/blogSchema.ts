import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IBlog = {
    title: string;
    slug: string;
    date: Date;
    description: string; // for preview
    comments: string[]; // array for comments
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    comments: {
        comment: { type: String, required: true },
    },
});

// defining the collection and model
const Blogs = mongoose.model("blogs", blogSchema);

export default Blogs;
