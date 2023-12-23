import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
type IBlog = {
    slug: string; 
    name: string;
    description: string; // for preview
    image: string;
    posted: string;
    text: string; // for individual blog page
    comments: IComment[]; 
};


const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true },
});

// mongoose schema 
const blogSchema = new Schema<IBlog>({
    slug: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    posted: { type: String, required: true },
    text: { type: String, required: true },
    comments: {
        type: [commentSchema],
        required: true,
      },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;