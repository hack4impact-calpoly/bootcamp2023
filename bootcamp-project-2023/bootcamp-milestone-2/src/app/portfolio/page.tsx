import PortfolioCard from "../../components/portfolioCard";
import portfolios from "../../portfolioData";

export default function Home() {
  return (
    <main>
      <section className="portfolio-content">
        <h1 className="pageTitle">Portfolio</h1>
        {portfolios.map((portfolio: Portfolio) => (
          <PortfolioCard
            key={portfolio.slug}
            date={portfolio.date}
            projectName={portfolio.projectName}
            description={portfolio.description}
            slug={portfolio.slug}
            image={portfolio.image}
          />
        ))}
      </section>
    </main>
  );
}
