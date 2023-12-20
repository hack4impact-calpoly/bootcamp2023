import mongoose, { Schema } from "mongoose";


type IComment = {
    user: string;
    comment: string;
    date: Date;
}

// typescript type (can also be an interface)
type IBlog = {
    title: string;
    slug: string; 
    date: Date;
    description: string; // for preview
    comments: IComment[]; 
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comments",
        },
    ],
});

// defining the collection and model
const Blogs = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blogs;