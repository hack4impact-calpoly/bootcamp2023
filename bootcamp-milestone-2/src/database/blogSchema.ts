import mongoose, { Schema, Document, Model } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
export type IBlog = {
    save(): unknown;
    title: string;
  slug: string; 
    date: Date;
    image: string;
    description: string; // for preview
  content: string; // for individual blog page
    comments: IComment[]; // array for comments
};


// mongoose schema 
export const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    image: {type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
comments: {
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: Date, required: false, default: new Date()}
}
})


{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
  comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
  Makes your code look nicer and allows for better readability.
*/}
function parseCommentTime(time: Date){
/*
  Implementation up to you...
*/
}



// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;


