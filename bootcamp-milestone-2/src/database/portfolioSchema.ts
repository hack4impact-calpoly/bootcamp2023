import connectDB from "@/helpers/db";
import { Portfolio } from "@/portfolioData";
import mongoose, { Schema } from "mongoose";

type IPortfolio = {
  projectName: string;
  slug: string;
  projectDescription: string;
  image: string;
  learnMore: string;
};

const portfolioSchema = new Schema<IPortfolio>({
  projectName: { type: String, required: true },
  slug: { type: String, required: true },
  projectDescription: { type: String, required: true },
  image: { type: String, required: true },
  learnMore: { type: String, required: true },

});

const Portfolio = mongoose.models["portfolio"] || mongoose.model("portfolio", portfolioSchema);

export default Portfolio;

async function getPortfolios() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const portfolio = await Portfolio.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return portfolio;
  } catch (err) {
    return null;
  }
}
