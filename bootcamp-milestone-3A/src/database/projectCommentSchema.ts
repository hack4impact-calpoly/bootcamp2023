import mongoose, { Schema } from "mongoose";
import comment from "@/projCommentData";

const projComment = new Schema<comment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
});

const c =
  mongoose.models["projComments"] ||
  mongoose.model("projComments", projComment);
export default c;
