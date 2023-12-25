async function getBlog(slug: string) {
  try {
    const res = await fetch(
      `https://bootcamp-project-2023-nu.vercel.app/api/blog/${slug}`,
      {
        cache: "no-store",
      }
    );

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
