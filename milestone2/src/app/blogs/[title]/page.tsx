import Comment from "@/components/comment";
type Props = {
  params: { title: string };
};

async function getBlog(title: string) {
  try {
    const res = await fetch(`http://localhost:3000/blog/${title}`);
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { title } }: Props) {
  const blog = await getBlog(title);

  if (blog) {
    return (
      <div>
        <h1>{blog.title}</h1>
        <h2>{blog.date} </h2>
        <h3>{blog.description}</h3>
        <p>{blog.content}</p>

        <hr></hr>
        <h2> Comments </h2>
        {blog.comments.map((comment: any, index: any) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1> 404 Blog Not Found</h1>
      </div>
    );
  }
}
