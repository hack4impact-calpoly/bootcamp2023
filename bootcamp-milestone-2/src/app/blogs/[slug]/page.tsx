import CommentPreview from "@/components/CommentPreview/CommentPreview";
import Image from "next/image";
import { Key } from "react";

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
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

  try {
    //attempt to declare variables
    const blog = await getBlog(slug);
    const comments = blog.comments;

    if (!blog) {
      return (
        <div>
          <p>Blog not found</p>
        </div>
      );
    } else if (blog) {
      return (
        <main className="flex flex-col px-20 overflow-y-scroll text-white">
          <Image
            className="my-5"
            height={500}
            width={500}
            src={blog.img}
            alt={blog.title}
          />
          <h3 className="text-center text-2xl">{blog.title}</h3>
          <h4 className="text-center text-lg italic">{blog.date}</h4>
          <p className="my-5 text-[#adb5bd] font-light">{blog.content}</p>
          {comments.map(
            (
              comment: { user: string; comment: string; time: Date },
              index: Key | null | undefined
            ) => (
              <CommentPreview
                key={index}
                user={comment.user}
                comment={comment.comment}
                time={comment.time}
              />
            )
          )}
        </main>
      );
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <div>
        <p>Error fetching blog.</p>
      </div>
    );
  }
}
