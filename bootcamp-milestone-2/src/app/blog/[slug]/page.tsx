import { NextPage } from "next";
import Image from "next/image";
import React from 'react';
import style from "./blog_post.module.css";

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
  const paragraphs = [];
  let i = 0;

  while(i < 5) {
    paragraphs.push(<li key={i}>Item {i+1}</li>);
    i++;
  }
  
return (
    <div>
      <main>
        <h1 className={style.pageTitle}>{blog.title}</h1>
        <h2 className={style.pageDate}>
          <em>{blog.date}</em>
        </h2>
        {/* <ul className="paragraphs">{paragraphs}</ul> */}
        <p className={style.blogContent}>
          {blog.content}
        </p>
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
      </main>
    </div>
  );
}

