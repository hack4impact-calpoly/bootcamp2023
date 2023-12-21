import * as mongoose from "mongoose";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// typescript type (can also be an interface)
type IPortfolio = {
  name: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: { type: String };
  comments: [
    {
      user: { type: String; required: true };
      comment: { type: String; required: true };
      time: { type: Date; required: false };
    }
  ];
};

// mongoose schema
const portfolioSchema = new mongoose.Schema<IPortfolio>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: false, default: new Date() },
    },
  ],
});

// defining the collection and model
const Portfolio =
  mongoose.models["Portfolio"] ||
  mongoose.model<IPortfolio>("Portfolio", portfolioSchema);

export default Portfolio;
