import React from "react";
import PortfolioPreview from "../components/portfolioPreview";
import connectDB from "../../helpers/db";
import PortfolioMod from "../../database/portfolioSchema"

async function getPortfolios(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await PortfolioMod.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Portfolio() {
  const portfolios = await getPortfolios();
  
  
    if (portfolios) {
      return (
        <div>
          <main>
            <h1>Portfolio</h1>
  
            {portfolios.map((portfolio) => (
              <PortfolioPreview
                key={portfolio.slug} // Add a unique key prop

                title={portfolio.title}
                description={portfolio.description}
                slug={portfolio.slug}
                img={portfolio.img}
                comments={portfolio.comment}
              />
            ))}
          </main>
  
        </div>
      );
    } else {
      return (
        <div>
          <h1>No blog posts found</h1>
        </div>
      );
    }
        
  
}