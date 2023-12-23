
async function getPortfolios(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolios`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default getPortfolios;