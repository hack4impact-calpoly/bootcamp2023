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
      </div>
    );
  }
}
