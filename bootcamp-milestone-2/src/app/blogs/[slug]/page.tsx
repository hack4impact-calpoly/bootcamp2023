import Comment from "@/components/commentPreview"

type Props = {
  params: { slug: string };
};

export default async function Blog({ params }: Props) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  if (blog) {
    return (
      <div>
        {blog.comments.map((comment: any, index: any, user: any, time: any) => (
          <Comment
            key={index}
            user={comment.user}
            comment={comment.comment}
            time={comment.time}
          />
        ))}
      </div>
    );
  }
  return;
}

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/{slug}`, {
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
