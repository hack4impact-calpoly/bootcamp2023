import mongoose, { Schema } from "mongoose";
import {IComment} from "@/database/blogSchema"

// typescript type (can also be an interface)
export type IProj = {

        title: string;
        slug: string; 
        description: string;
        link: string;
        image: string;
        comments: IComment[];
};
const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: false },
  });




// mongoose schema 
const projectSchema = new Schema<IProj>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    link: { type: String, required: false },
    comments: [{ type: commentSchema, required: true }],

})



// defining the collection and model
const Project = mongoose.models['Projects'] || mongoose.model('Projects', projectSchema);

export default Project;
