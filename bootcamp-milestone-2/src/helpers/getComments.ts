import getPortfolios from "../lib/getPortfolios";
import { IPortfolio } from "../database/portfolioSchema";

//handles making the request and returns the json object
const makeRequest = async (api_url: string) => {
  try {
    const res = await fetch(`${api_url}/api/portfolio/getcomments`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("res error");
      throw new Error("Failed to fetch portfolio comments");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
};

//splitting this function from the top allows the use of [0] and ["comments"]
const getComments = async (api_url: string) => {
  const portfolio = await makeRequest(api_url);

  if (portfolio !== null) {
    const firstObject = portfolio[0];
    const comments = firstObject["comments"];
    return comments;
  }

  return null;
};

export default getComments;
