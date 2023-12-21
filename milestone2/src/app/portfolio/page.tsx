import React from "react";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/helpers/db";
import Portfolio from "../../database/portfolioSchema";
import PortfolioPreview from "@/components/portfolio";
import { useState, useEffect } from "react";
import Comment from "@/components/comment";

export default async function PortfolioComponent() {
  const portfolio = await getPortfolio();
  return (
    <>
      {portfolio &&
        portfolio.map(
          (port) => <PortfolioPreview key={port.name} {...port} /> // This is how we call the component
        )}
      {portfolio[0].comments.map((comment: any, index: any) => (
        <Comment key={index} comment={comment} />
      ))}

      <footer className="footer">
        © 2023 Tammy Si&apos;s Personal Website | All Rights Reserved
      </footer>
    </>
  );
}

async function getPortfolio() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const portfolio = await Portfolio.find().orFail();
    // send a response as the blogs as the message
    return portfolio;
  } catch (err) {
    console.log(err);
    return null;
  }
}
