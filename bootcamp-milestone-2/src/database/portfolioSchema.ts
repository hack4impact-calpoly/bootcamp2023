import mongoose, { Schema, Document, Model } from "mongoose";

export type IPortfolio = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  image: string;
  comments: IComment[]; 
};

export type IComment = {
  user: string;
  comment: string;
  time: Date;
}

export const portfolioSchema = new Schema<IPortfolio>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
comments: {
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: Date, required: false, default: new Date()}
}
});

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
const Portfolio =
  mongoose.models["portfolio"] || mongoose.model("portfolio", portfolioSchema);

export default Portfolio;
