import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type IComment = {
    user: string;
    comment: string;
    date: string;
};

// mongoose schema 
const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: String, required: false },
});

// defining the collection and model
const Comments = mongoose.models["comments"] || 
    mongoose.model("comments", commentSchema);

export default Comments;