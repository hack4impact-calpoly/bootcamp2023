import React from "react";
import Image from "next/image";
import Portfolio from "../database/portfolioSchema";

export default function PortfolioPreview(props: typeof Portfolio) {
  const portfolio_info = (props as any)._doc;
  console.log(portfolio_info);
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <>
      <main>
        <a href={portfolio_info.slug}>
          <h1>{portfolio_info.name}</h1>
          <p>{portfolio_info.description}</p>
          <p>{portfolio_info.content}</p>
          <Image
            src={portfolio_info.image}
            alt="Portfolio image"
            height={500}
            width={500}
          />
        </a>
      </main>
      <footer className="footer">
        © 2023 Tammy Si&apos;s personal website | all rights reserved
      </footer>
    </>
  );
}
