async function postBlogComment(
  slug: string,
  comment: { user: string; comment: string; time: Date }
) {
  try {
    //creates a POST request at the api endpoint with the specified comment
    const res = await fetch(
      `https://bootcamp-project-2023-nu.vercel.app/api/blog/${slug}/comment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to post comment");
      return null;
    }
    return res;
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default postBlogComment;
