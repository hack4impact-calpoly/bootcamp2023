"use client"
import { IComment } from "@/app/typings/comment";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Comment from "@/app/components/comment";
import { Blog } from "@/app/typings/blog";


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



export default function Blog({ params: { slug } }: Props) {
    //array storing comments
    const [allComments, setComments] = useState<IComment[]>([]);
  
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [time, setTime] = useState('');

    const [blogPage, setBlog] = useState<Blog | null>(null);

    const fetchBlog = async () => {
      try {
      const fetchedBlog = await getBlog(slug);
      setBlog(fetchedBlog)
      //initialize allComments array to what is already in the database
      setComments(fetchedBlog.comments)
      } catch (error) {
      console.error('Error fetching updated blog:', error);
      }
    };

    

    const handleCommentSubmit = async () => {
      const commentBody = {
        user: user,
        comment: comment,
        time: time
      }
      try {
        const response = await fetch(`http://localhost:3000/api/blog/${slug}/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentBody),
        });

        if (response.ok) {
          setComments([...allComments, {user: commentBody.user, comment: commentBody.comment, time: new Date(commentBody.time)}])
        } else {
          console.error('Failed to add comment:');
        }
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };

    useEffect(() => {fetchBlog()}, []);
    
    

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
                  <form id="contact-form" onSubmit={handleCommentSubmit}>
                      <label htmlFor="user">User</label>
                      <input type="text" id="user" placeholder="User" value={user} onChange={e => setUser(e.target.value)} required/>

                      <label htmlFor="comments">Comments</label>
                      <textarea id="comments" name="comments" placeholder="Comments" value={comment} onChange={e => setComment(e.target.value)} required></textarea>
                      
                      <label htmlFor="time">Time</label>
                      <p>year-month-day 0000-00-00</p>
                      <input type="text" id="time" placeholder="Time" value={time} onChange={e => setTime(e.target.value)} required/>
                      <input type="submit" value="Submit Comment"/>

                  </form>
                  <div className="comments">
                    {allComments.map((comment: IComment) => (
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

