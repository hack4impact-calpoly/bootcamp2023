import React from "react";
import { IBlog, IComment } from "../../../database/blogSchema";
import Image from "next/image";
import CommentSection from "../../../components/CommentSection";
import Comment from "../../../components/Comment";

type Props = {
  params: { slug: string };
};

type CommentsProps = {
  comment: IComment;
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

//renders the Blog on the page?
export default async function Blog({ params: { slug } }: Props) {
  try {
    //attempt to declare variables
    const blog: IBlog | null = await getBlog(slug);

    if (!blog) {
      //handles null blog error
      return (
        <div>
          <p>Blog not found</p>
        </div>
      );
    }

    // renders the blog content if successful
    return (
      <main className="blogCommentContainer">
        <div className="blogsHolder">
          <div className="blogPageInformation">
            <h1 className="pageTitle">{blog.title}</h1>
            <p className="blogPostDescription">{blog.description}</p>
            <p className="blogPostDate">{blog.date}</p>
            <p className="blogPostContent">{blog.content}</p>
            <Image
              src={blog.image}
              alt={blog.imagealt}
              width="250"
              height="250"
              className="blogPostImage"
            />
          </div>
        </div>
        <div className="comments-container">
          <div className="comments-header">
            <h2>Comments</h2>
          </div>
          <div className="comments-list">
            {blog.comments.map((comment: IComment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return (
      <div>
        <p>Error fetching blog.</p>
      </div>
    );
  }
}
