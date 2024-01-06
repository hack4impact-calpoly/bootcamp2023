import Comment from "../../components/comment";
import type { IComment } from "@/database/commentSchema";
import connectDB from "@/helpers/db";
import Blogs from "@/database/blogSchema";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  // try {
  //   const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
  //     cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch blog");
  //   }

  //   return res.json();
  // } catch (err: unknown) {
  //   // console.log(`error: ${err}`);
  //   return null;
  // }
  await connectDB();

  try {
    // Query for a blog with the specified slug
    const blog = await Blogs.findOne({ slug }).orFail();
    return blog;
  } catch (err) {
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
  // now we can access slug
  // slug = params.slug;
  const blog = await getBlog(slug);
  if (blog) {
    return (
      <>
        <h1>{blog.title}</h1>
        {/* <img src={blog.image} alt="Blog Image" /> */}
        <img src={blog.image} alt="blog image" width={400} height={300} />
        <p>{blog.content}</p>

        <div className="comment_container">
          <h2>Comments</h2>
          {blog.comments.map((comment: IComment, index: number) => (
            <Comment
              key={index}
              comment={{
                user: comment.user,
                comment: comment.comment,
                date: comment.date,
              }}
            />
          ))}
        </div>
      </>
    );
  } else {
    return <h1> 404 Blog NOT FOUND </h1>;
  }
}
