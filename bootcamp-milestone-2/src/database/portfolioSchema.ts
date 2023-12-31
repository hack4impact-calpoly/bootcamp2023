import * as mongoose from "mongoose";
import { ObjectId } from "mongodb"; // Assuming you're using MongoDB ObjectId

// typescript type (can also be an interface)
export interface IPortfolio {
  projects: Project[];
  comments: IComment[]; // array for comments
}

export interface IComment {
  user: string;
  comment: string;
  time: Date;
  _id?: ObjectId; // Optional for MongoDB ObjectId
}

export interface Project {
  date: string;
  projectName: string;
  description: string; // for preview
  slug: string;
  image: string; // for individual blog page
  imagealt: string;
}
// mongoose schema
const portfolioSchema = new mongoose.Schema<IPortfolio>({
  projects: [
    {
      date: { type: String, required: true },
      projectName: { type: String, required: true },
      description: { type: String, required: true },
      slug: { type: String, required: true },
      image: { type: String, required: true },
      imagealt: { type: String, required: true },
    },
  ],
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
      ref: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" }, // Adjust this line
    },
  ],
});

const commentSchema = new mongoose.Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

// defining the collection and model

const IPortfolioSchema =
  mongoose.models["portfolios"] ||
  mongoose.model("portfolios", portfolioSchema);

const CommentSchema =
  mongoose.models["Comment"] || mongoose.model("Comment", commentSchema);

export { IPortfolioSchema, CommentSchema };
