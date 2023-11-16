type Props = {
  params: { title: string };
};

async function getBlog(title: string) {
  const res = await fetch(`http://localhost:3000/api/db/blogs/${title}`, {
    cache: "no-store",
  });
  if (res.ok) {
    return res.json();
  }
  return null;
}

export default async function Page({ params: { title } }: Props) {
  const blog = await getBlog(title);
  if (blog) {
    return (
      <div>
        <h1>{blog.title}</h1>
      </div>
    );
  }
}
