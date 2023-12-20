import React from "react";
import BlogPage from "../../components/blogPreview";
import blogSchema from "../../database/blogSchema";
import style from "../blog.module.css";
import Image from "next/image";

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
            <Image
              src={"/{blog.image}"}
              alt=""
              height={150}
              width={250}
            ></Image>
            <p>{blog.content}</p>
          </div>
        </div>
      </main>
    );
  }
}
