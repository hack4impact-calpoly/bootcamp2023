import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
};

// typescript type (can also be an interface)
export type IBlog = {
    _id: string;
    title: string;
    date: Date;
    description: string; // for preview
    slug: string;
    image: string; // for individual blog page
    comments: IComment[]; // array for comments
};

// mongoose schema
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
    description: { type: String, required: true },
    slug: {
        type: String,
        required: true,
        default: function () {
            return `./blog/${this._id}`;
        },
    },
    image: { type: String, required: true },
    comments: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
            time: { type: Date, required: false, default: new Date() },
        },
    ],
});

// defining the collection and model
// defining the collection and model
const Blogs = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blogs;
