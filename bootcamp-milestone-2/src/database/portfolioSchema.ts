import mongoose,{ Schema } from "mongoose";

export type IPortfolio = {
    title: string;
    slug: string;
    description: string;
    img: string;
}

const portfolioSchema = new Schema<IPortfolio>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
})

const Portfolio = mongoose.models['portfolios'] ||
mongoose.model('portfolios', portfolioSchema);

export default Portfolio;