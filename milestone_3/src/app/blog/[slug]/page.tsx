"use client";
import Image from "next/image"
import {GET} from "../../api/blog/[slug]/route"
import { IComment } from "@/database/blogSchema";
import React, {useState, useEffect} from 'react'
import Comment from "@/components/comment";


type IParams = {
    params: {
        slug: string
    }
}



export default function BlogPage({ params:{slug} }: IParams) {
    const [blog, setBlogData] = useState({
        title: '',
        date: '',
        content: '',
        image: '',
        comments: [],
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
        time: '',
    });
    const submitComment = async () => {
        const response = await fetch(`https://bdons-website.vercel.app/api/blog/${slug}/comments`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
            time: newComment.time,
        }),
        });
        const updatedBlogData = await response.json();
        setBlogData(updatedBlogData);

        setNewComment({
            username: '',
            comment: '',
            time: '',
        });
    }

    useEffect(() => {
        const fetchBlogData = async () => {
          const response = await fetch(`https://bdons-website.vercel.app/api/blog/${slug}`);

          const data = await response.json();
          setBlogData(data);
        };

        fetchBlogData();
      }, [slug]); 

  return (
            <div className="content">
                <div className="blog">
                    <div className="blog-title">
                        {blog.title}
                    </div>
                    <div className="blog-date">{blog.date}</div>
                    <div className="blog-image">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width="500"
                            height="500"
                        />

                    </div>
                    <div className="blog-content">
                        {blog.content}
                    </div>
                </div>
                <h3 className ="commentTitle">Comments</h3>
                <div className="comments">
                    {blog.comments.map((comment:IComment, index:number) => (
                            <Comment key={index} comment={comment} />
                        ))}
        </div>
        <div>
                <form>
                    <div>
                    <label>Name:   </label>
                    <textarea
                        onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
                        required/>
                    </div>
                    <div>
                    <label>Comment:   </label>
                    <textarea
                        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        required/>
                    </div>
                    <div>
                        <button type="button" className="submitButton" onClick={submitComment}>Submit Comment</button>
                    </div>
                </form>
            </div>
            </div>


  )
}