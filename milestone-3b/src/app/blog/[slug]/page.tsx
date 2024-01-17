import React from "react";
import Image from "next/image";
import connectDB from "../../helpers/db";
import IComment from "../../database/blogSchema";
import Comment from "../../components/commentPreview";
import CreateComment from "../../components/createComment";

type Props = {
  params: { slug: string };
};

export default async function Blog({ params: { slug } }: Props) {
  // slug = params.slug;

  async function getBlogs(slug: string) {
    await connectDB(); // function from db.ts before

    try {
      console.log(`${slug}`);
      const res = await fetch(
        `https://bootcamp-project-2023-ebon.vercel.app/blog/${slug}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch blog");
      }

      return res.json();
    } catch (err: unknown) {
      console.log(`error: ${err}`);
      return null;
    }
  }

  const blogInfo = await getBlogs(slug);

  // console.log(`getting ${blogInfo.slug}`);

  if (blogInfo) {
    return (
      <>
        <main>
          <h1>{blogInfo.title}</h1>
          <div className="blog-entry">
            <div className="blog1-image">
              <Image
                src={blogInfo.image}
                width={600}
                height={400}
                alt="Blog image"
              ></Image>
            </div>
            <h3>
              {blogInfo.date}
              <br />
              {blogInfo.description}
            </h3>
            <div className="blog-text">
              <p>{blogInfo.content}</p>
            </div>
          </div>

          <h2>Comments</h2>

          {blogInfo.comments.map((comment: any, index: number) => (
            <Comment key={index} comment={comment} />
          ))}

          <br></br>
          <br></br>
          <div>
            <h2>Add A Comment</h2>
            <CreateComment slug={blogInfo.slug}></CreateComment>
            <br></br>
            <br></br>
          </div>
        </main>
        <footer className="footer">
          © 2023 Angela Chen | All Rights Reserved
        </footer>
      </>
    );
  } else {
    // handling null that may be returned if no blogs are found
    return (
      <>
        <main>
          <h1>Blog not found.</h1>
        </main>
        <footer className="footer">
          © 2023 Angela Chen | All Rights Reserved
        </footer>
      </>
    );
  }
}
