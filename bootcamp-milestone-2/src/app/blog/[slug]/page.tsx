import BlogPreview from "@/components/blogPreview";
import React from "react";
import "@/global.css";
import "@/app/full.css" 
import Image from "next/image";
import Comment from "@/components/commentView";
import { IComment } from "@/database/blogSchema";
import next from "next";
import { NextPage } from "next";


type Props = {
    params: { slug: string }
}


export async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params
  const blog = await getBlog(slug)
    return (
      <div>
        <main>
          <main className="main">
            <div className="title" id="blog">
              <h1>{blog?.title}</h1>
            </div>
            <div className="image" id="blog">
              <Image src={`/images/${blog?.image}`} alt="temp" height="500" width="500"/> 
            </div>

            <div className="content" id="blog">
              <p>{blog?.content}</p>
            </div>

            <div className="comment" id="blog">
              {blog.comments.map((comment: IComment, index: number) => (
	                <Comment key={index} comment={comment} />
	            ))}
            </div>
          </main>
          <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
        </main>
      </div>
    );
  }