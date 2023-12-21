import mongoose, {Schema} from "mongoose";

export type IComment = {
    _id: string;
    user: string;
    comment: string;
    time: Date;
  };


export const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: new Date() },
});

const Comments = mongoose.models["comments"] || mongoose.model("comments", commentSchema);
export default Comments;