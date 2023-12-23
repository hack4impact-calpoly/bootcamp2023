import mongoose, { Schema } from "mongoose";

export type IComment = {
    _id: string;
    user: string;
    comment: string;
    date: Date;
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
});

// Define the model or use the existing one if it has already been defined
const Comments =
    mongoose.models["comments"] || mongoose.model("comments", commentSchema);

export default Comments;