import mongoose,{ Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
  }

export type IPortfolio = {
    title: string;
    slug: string;
    description: string;
    img: string;
    comments: IComment[]; // array for comments
}

const portfolioSchema = new Schema<IPortfolio>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    comments: [{
        user: { type: String, required: true },
        comment: { type: String, required: true },
        time: { type: Date, required: false, default: new Date()},
      }]
})

const Portfolio = mongoose.models['portfolios'] ||
mongoose.model('portfolios', portfolioSchema);

export default Portfolio;