import React from "react";
import { IBlog } from "../../../database/blogSchema";
import Image from "next/image";
import getBlog from "../../../helpers/getblog";
import CommentSection from "../../../components/CommentSection";

type Props = {
  params: { slug: string };
};

//renders the Blog on the page
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
        <CommentSection blog={blog} slug={slug} />
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
