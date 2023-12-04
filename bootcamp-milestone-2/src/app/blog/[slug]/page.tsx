import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import style from "./blog_post.module.css";
import Comment from "../../../components/comment";

export async function fetchBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    const res_j = await res.json();
    return res_j;
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blog = await fetchBlog(slug);
  const contents = blog.content;
  let paragraphs = [];
  let i = 0;

  // checks that blog exists
  if (!blog || !blog.content) {
    return <div>Blog not found or has no content</div>;
  }

  // creates different paragraphs for content
  while (i < contents.length) {
    paragraphs.push(
      <li className={style.paragraph} key={i}>
        {blog.content[i]}
      </li>
    );
    paragraphs.push(<br />);
    i++;
  }

  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>{blog.title}</h1>
        <h2 className={style.pageDate}>
          <em>{blog.date}</em>
        </h2>

        <div className={style.pageContents}>
          <ul className={style.paragraphList}>{paragraphs}</ul>
          <div className={style.pageComments}>
            <h3 className={style.pageCommentsHeader}>Comments</h3>
            {blog.comments.map((comment, index: number) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
        <div className={style.pageImages}>
          <Image
            src="/cinque_terre_1.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_2.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_3.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_4.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_sunrise.jpg"
            alt="sunrise at the first town, Monterosso"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_water.jpg"
            alt="picture of crystal-clear water from the hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_me.jpg"
            alt="me at Riomaggiore on the second day"
            className={style.blogPic}
            width="350"
            height="350"
          />
        </div>
      </main>
    </div>
  );
}
