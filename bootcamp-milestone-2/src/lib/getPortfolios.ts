import connectDB from "@/helpers/db";
import { IPortfolioSchema } from "../database/portfolioSchema";

//fetches the blogs from the Database
async function getPortfolios() {
  await connectDB(); // function from db.ts before
  try {
    // query for all blogs and sort by date
    const portfolios = await IPortfolioSchema.find().orFail();
    // send a response as the blogs as the message
    return portfolios;
  } catch (err) {
    return null;
  }
}

export default getPortfolios;
