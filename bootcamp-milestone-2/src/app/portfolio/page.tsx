import React from "react";
import "../globals.css";
import style from "./portfolio.module.css";
import Image from "next/image";
import portfolios from "../portfolioData";
import PortfolioEntry from "../components/portfolioEntry";
export default function Portfolio() {
  return (
    <div>
      <main>
        <h1 className="page-title">My Portfolio</h1>
        {portfolios.map(
          (portfolio) => (
            <PortfolioEntry
              name={portfolio.name}
              image={portfolio.image}
              slug={portfolio.slug}
              text={portfolio.text}
            />
          ) // This is how we call the component
        )}
      </main>
      <footer className="footer">
        © 2023 Kelly Becker| All Rights Reserved
      </footer>
    </div>
  );
}
