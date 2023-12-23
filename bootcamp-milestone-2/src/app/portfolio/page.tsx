import PortfolioCard from "../../components/PortfolioCard";
import getPortfolios from "../../lib/getPortfolios";
import { IComment } from "../../database/blogSchema";
import { Project } from "../../database/portfolioSchema";

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

const handlePortfolios = async () => {
  try {
    const portfolioArray: PortfolioData[] | null = await getPortfolios();

    if (!portfolioArray || portfolioArray.length === 0) {
      console.error("Error: Portfolio Data is Empty");
      return null;
    }

    // Assuming you are working with the first element of the array
    const firstPortfolio = portfolioArray[0];
    // Access the projects array within firstPortfolio
    const projectsArray = firstPortfolio["projects"];

    console.log("Projects Array:", projectsArray);

    return firstPortfolio;
  } catch (error) {
    console.error("Error", error);
    // Handle the error case accordingly, e.g., return an error object or rethrow the error
    throw error;
  }
};

export default async function Home() {
  const portfolios = await handlePortfolios();

  console.log(portfolios);
  return (
    <main>
      <div className="portfolio-content">
        <h1 className="page-title">Portfolio</h1>
        {/* Only renders the portfolio content if portfolio data retrieved successfully*/}
        {portfolios && portfolios.length > 0 ? (
          <div className="generalContent">
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
        ) : (
          <div className="generalContent">
            <p className="contentNotLoaded">
              There was an issue loading portfolio content.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
