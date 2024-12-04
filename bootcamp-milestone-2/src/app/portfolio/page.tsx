import portfolioSchema from "@/database/portfolioSchema";
import connectDB from "@/database/db";
import PortfolioPreview from "../components/portfolioPreview";

async function getPortfolio() {
  //connect to the database
  await connectDB();
  try {
    const portfolio = await portfolioSchema.find({}).orFail();
    return portfolio;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const portfolioEntries = await getPortfolio();
  if (portfolioEntries) {
    return (
      <div>
        <h1 className="page-title">My Portfolio</h1>
        <main>
          {portfolioEntries.map((portfolio) => (
            <PortfolioPreview
              key={portfolio._id}
              title={portfolio.title}
              description={portfolio.description}
              slug={portfolio.slug}
              picSlug={portfolio.picSlug}
              picDescription={portfolio.picDescription}
              picWidth={portfolio.picWidth}
              picHeight={portfolio.picHeight}
            />
          ))}
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No portfolio entries found</h1>
      </div>
    );
  }
}
