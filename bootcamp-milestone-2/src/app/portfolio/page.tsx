import PortfolioCard from "../../components/portfolioCard";
import getPortfolios from "../../lib/getPortfolios";

export const metadata = {
  title: {
    default: "Aidan's Portfolio",
  },
};

export default async function Home() {
  const portfolios = await getPortfolios();

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
