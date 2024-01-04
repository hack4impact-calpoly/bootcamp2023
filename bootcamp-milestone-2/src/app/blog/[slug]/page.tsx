import blogs from "@/app/blogData";
import { IComment } from "@/app/typings/comment";
import blogSchema from "@/database/blogSchema";
import connectDB from "@/helpers/db";
import Image from "next/image";
import React from "react";
import Comment from "@/app/components/comment";


type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    console.log(slug)
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    } );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params: { slug } }: Props) {
	const blogPage = await getBlog(slug);

    if (blogPage) {
        return (
            <div>
                <main>
                  <h1 className="page-title">{blogPage.title}</h1>
                  <div className="hike-description">
                      {blogPage.pageDescription}
                  </div>
                  <div className="hikes">
                  <Image src={`/${blogPage.picSlug1}`} alt="abc" width="500" height="500"/>
                  <Image src={`/${blogPage.picSlug2}`} alt="abc" width="500" height="500"/>
                  <Image src={`/${blogPage.picSlug3}`} alt="abc" width="500" height="500"/>
                  </div>
                  <div className="comments">
                    {blogPage.comments.map((comment: IComment) => (
                      <Comment
                      user = {comment.user}
                      comment = {comment.comment}
                      time = {new Date(comment.time)}
                      />
                    )
                  )}
                </div>
                </main>
            </div>
        );
    } else {
        return (
            <>Blog not found.</>
        );
    }
  } 

