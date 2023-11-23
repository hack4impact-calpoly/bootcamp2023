import mongoose, { Schema, Document, Model } from "mongoose";

export type IPortfolio = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  image: string;
};

export const portfolioSchema = new Schema<IPortfolio>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

// defining the collection and model
const Portfolio =
  mongoose.models["portfolio"] || mongoose.model("portfolio", portfolioSchema);

export default Portfolio;
