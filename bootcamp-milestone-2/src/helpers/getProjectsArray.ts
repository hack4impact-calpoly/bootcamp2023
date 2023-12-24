import getPortfolios from "../lib/getPortfolios";
import { Project } from "../database/portfolioSchema";
import { IComment } from "../database/portfolioSchema";

interface PortfolioData {
  projects: Project[];
  comments: IComment[];
  // Other properties if there are more in the actual data
}

//this method is needed because if you try to access the projects from the firstPortfolio variable outside of this function, it thinks it may be null
const getProjectsArray = async () => {
  try {
    const portfolioArray: PortfolioData[] | null = await getPortfolios();

    if (!portfolioArray || portfolioArray.length === 0) {
      console.error("Error: Portfolio Data is Empty");
      return null;
    }

    // the data entry with comments[] and portfolios[]
    const firstPortfolio = portfolioArray[0];
    //Array of each project in the portfolio
    const projectsArray = firstPortfolio["projects"];

    return projectsArray;
  } catch (error) {
    console.error("Error", error);
    // Handle the error case accordingly, e.g., return an error object or rethrow the error
    throw error;
  }
};

export default getProjectsArray;
