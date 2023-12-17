import { Schema } from "mongoose";
import mongoose from "mongoose";

// mongoose schema
interface Comment {
  user: string;
  comment: string;
  time: Date;
}

// mongoose schema
const commentSchema = new Schema<Comment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

// defining the collection and model
const Comment =
  mongoose.models["comments"] || mongoose.model("comments", commentSchema);

export default Comment;
