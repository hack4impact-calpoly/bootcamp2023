import * as mongoose from "mongoose";

// typescript type (can also be an interface)
type IPortfolio = {
  date: string;
  projectName: string;
  description: string; // for preview
  slug: string;
  image: string; // for individual blog page
  comments: IComment[]; // array for comments
};

// mongoose schema
const portfolioSchema = new mongoose.Schema<IPortfolio>({
  date: { type: String, required: true },
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
});

// defining the collection and model

export default mongoose.models["portfolios"] || mongoose.model("portfolios", portfolioSchema);
