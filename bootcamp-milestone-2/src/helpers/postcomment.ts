async function postComment(
  slug: string,
  comment: { name: string; content: string }
) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to post comment");
    }
  } catch (err: unknown) {
    console.log(`error: ${err}`);
  }
}

export default postComment;