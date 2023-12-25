async function getBlog(slug: string, api_url: string) {
  try {
    const res = await fetch(`${api_url}/api/blog/${slug}`, {
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

export default getBlog;
