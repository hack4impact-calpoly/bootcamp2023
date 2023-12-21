import CommentPreview from "@/components/comment";
import style from "@/components/blogPreview.module.css";
import Image from "next/image";


type Props = {
  slug: string;
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/API/blogs/${slug}`, {
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

export default async function Blog({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  if (!blog) {
    // Handle the case when the blog is not found or an error occurs
    return (
      <div>
        <p style={{ color: "white" }}>Error fetching blog or blog not found</p>
      </div>
    );
  }

  // Render your blog content using the 'blog' data
  return (
    <div className={style.blogEntry}>
      <h1>{blog.title}</h1>
      <div className="blog-date">{new Date(blog.date).toDateString()}</div>
      <p>{blog.content}</p>
      <Image
          src={blog.image}
          width={200}
          height={200}
          alt="blog image"
        ></Image>

      <h2>Comments</h2>
      <div>
        {Array.isArray(blog.comments) ? (
          blog.comments.map((comment: any) => (
            <CommentPreview key={comment.id} {...comment} />
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </div>
  );
}
