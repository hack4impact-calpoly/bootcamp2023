async function postPortfolioComment(
  comment: {
    user: string;
    comment: string;
    time: Date;
  },
  api_url: string
) {
  try {
    //creates a POST request at the api endpoint with the specified comment
    const res = await fetch(`${api_url}/api/portfolio/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
      cache: "no-store",
    });

    console.log("res", res);

    if (!res.ok) {
      console.log("ERROR");
      throw new Error("Failed to post comment");
      return null;
    }
    return res;
  } catch (err: unknown) {
    console.log("ERROR");
    console.log(`error: ${err}`);
    return null;
  }
}

export default postPortfolioComment;
