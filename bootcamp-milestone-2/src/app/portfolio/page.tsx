import PortfolioCard from "../../components/PortfolioCard";
import getPortfolios from "../../lib/getPortfolios";
import { IComment } from "../../database/blogSchema";
import { Project } from "../../database/portfolioSchema";
import CommentSectionPortfolio from "../../components/CommentSectionPortfolio";

export const metadata = {
  title: {
    default: "Aidan's Portfolio",
  },
};

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

//this method is needed because if you try to access the comments from the firstPortfolio variable outside of this function, it thinks it may be null
const getCommentsArray = async () => {
  try {
    const portfolioArray: PortfolioData[] | null = await getPortfolios();

    if (!portfolioArray || portfolioArray.length === 0) {
      console.error("Error: Portfolio Data is Empty");
      return null;
    }

    // the data entry with comments[] and portfolios[]
    const firstPortfolio = portfolioArray[0];
    //Array of each project in the portfolio
    const commentsArray = firstPortfolio["comments"];

    return commentsArray;
  } catch (error) {
    console.error("Error", error);
    // Handle the error case accordingly, e.g., return an error object or rethrow the error
    throw error;
  }
};

export default async function Home() {
  const portfolios = await getProjectsArray();
  const comments = await getCommentsArray();
  const message = "hi";
  const comment = { user: "aidan", comment: "hi", time: new Date() };
  const comment2 = { user: "aidan", comment: "hi", time: new Date() };
  const commentList: IComment[] = [comment, comment2];
  // const singlecomment = comments[0];

  console.log("comments: ", commentList);
  return (
    <main className="portfolioCommentContainer">
      <div className="portfolio-content">
        <h1 className="page-title">Portfolio</h1>
        {/* Only renders the portfolio content if portfolio data retrieved successfully*/}
        {portfolios && portfolios.length > 0 ? (
          <div className="generalContent">
            <div>
              {portfolios.map((portfolio) => (
                <PortfolioCard
                  key={portfolio.slug}
                  date={portfolio.date}
                  projectName={portfolio.projectName}
                  description={portfolio.description}
                  slug={portfolio.slug}
                  image={portfolio.image}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="generalContent">
            <p className="contentNotLoaded">
              There was an issue loading portfolio content.
            </p>
          </div>
        )}
      </div>
      {portfolios && portfolios.length > 0 ? (
        <CommentSectionPortfolio comments={commentList} />
      ) : (
        <div className="generalContent">
          <p className="contentNotLoaded">
            There was an issue loading portfolio content.
          </p>
        </div>
      )}
    </main>
  );
}
