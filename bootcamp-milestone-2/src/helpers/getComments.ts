import getPortfolios from "../lib/getPortfolios";
import { Project } from "../database/portfolioSchema";
import { IComment } from "../database/portfolioSchema";

interface PortfolioData {
  projects: Project[];
  comments: IComment[];
  // Other properties if there are more in the actual data
}

//returns the only entry in the Portfolios db
const getComments = async () => {
  try {
    const portfolioArray: PortfolioData[] | null = await getPortfolios();

    if (!portfolioArray || portfolioArray.length === 0) {
      console.error("Error: Portfolio Data is Empty");
      return null;
    }

    // the data entry with comments[] and portfolios[]
    const portfolio = portfolioArray[0];
    //Array of each project in the portfolio

    return portfolio["comments"];
  } catch (error) {
    console.error("Error", error);
    // Handle the error case accordingly, e.g., return an error object or rethrow the error
    throw error;
  }
};

export default getComments;
