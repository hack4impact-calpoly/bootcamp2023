import mongoose, { Schema } from "mongoose";

export interface Comment {
    user: string;
    comment: string;
    date: Date;
};

const commentSchema = new Schema<Comment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    date: { type: Date, required: false, default: new Date() },
});

// Define the model or use the existing one if it has already been defined
const CommentModel = mongoose.models["comments"] || mongoose.model("comments", commentSchema);

export default CommentModel;