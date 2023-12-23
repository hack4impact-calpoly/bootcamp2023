"use client"
import React from "react";
import "@/global.css";
import "@/app/full.css" 
import Image from "next/image";
import Comment from "@/components/commentView";
import { IComment } from "@/database/blogSchema";
import { useState } from "react";


type Props = {
    params: { slug: string }
}


async function getBlog(slug: string) {
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
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const { slug } = params
  const blog = await getBlog(slug)


  const handleSubmit = (e: any) => {

    e.preventDefault();

    fetch(`http://localhost:3000/api/blog/${slug}`, {
      method: "POST",
      body: JSON.stringify({
        userid: name,
        comment: message
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
  }
});
  }


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


            <form id="comment-form" onSubmit={handleSubmit}>

                <label htmlFor="name" id="comment">Name</label>
                <input type="text" id="comment" name="name" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
                
                <label htmlFor="message" id="comment">Message</label>
                <textarea
                id="contact"
                name="message"
                placeholder="Message"
                required
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button id="contact"><input type="submit" value="Submit"/> </button>
            </form>
          </main>
          <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
        </main>
      </div>
    );
  }