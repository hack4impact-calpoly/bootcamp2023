import React from "react";
import style from "../blog.module.css";
import Image from "next/image";
import Comment from "@/app/components/comment";

type Props = {
  slug: string;
};

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
  const blog = await getBlog(slug);

  if (blog == null) {
    return (
      <main>
        <p>Blog not found.</p>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h1 className={style.pageTitle}>{blog.title}</h1>
          <div className={style.blog}>
            <Image src={blog.image} alt="" height={300} width={250}></Image>
            <p>{blog.content}</p>
          </div>
        </div>
        <div className={style.comments}>
          <h2 className={style.commentTitle}>Comments</h2>
          {blog.comments.map(
            (comment: any, index: React.Key | null | undefined) => (
              <Comment key={index} comment={comment} />
            )
          )}
          <div className={style.newComments}>
            <form className={style.new}>
              <input type="text" className={style.newName} name="name" placeholder="Name" />
              <textarea 
                className={style.newComment}
                rows={5}
                id={style.message}
                name="message"
                placeholder="Type your comment here"
                ></textarea>
              <button type="submit" className={style.button}>Submit</button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
