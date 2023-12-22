import mongoose, { Schema } from "mongoose";


type IComment = {
    _id: string;
    user: string;
    comment: string;
    date: Date;
}

// typescript type (can also be an interface)
export type IBlog = {
    title: string;
    slug: string; 
    date: Date;
    image: string;
    description: string;
    comments: IComment[]; 
};


const commentSchema = new Schema({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now } // Use default to set the date when a comment is created
  });

// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    image: {type: String, required: true},
    description: { type: String, required: true },
    comments: [commentSchema]
});

// defining the collection and model
const Blogs = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blogs;