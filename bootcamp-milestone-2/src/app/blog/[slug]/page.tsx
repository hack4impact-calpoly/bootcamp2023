"use client"
import { IComment } from "@/app/typings/comment";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Comment from "@/app/components/comment";
import { Blog } from "@/app/typings/blog";
import { v4 as uuidv4 } from'uuid';
import 'ldrs/ring';
import { dotWave } from "ldrs";
dotWave.register();

function generateUniqueId(): string {
  return uuidv4();
}

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    console.log(slug)
    const res = await fetch(`/api/blog/${slug}`, {
      cache: "no-store",
    } );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.clone().json();
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

    const [isLoading, setLoading] = useState(true);

    const fetchBlog = async () => {
      try {
      const fetchedBlog = await getBlog(slug);

      setBlog(fetchedBlog)
      //initialize allComments array to what is already in the database
      setComments(fetchedBlog.comments)
      } catch (error) {
      console.error('Error fetching updated blog:', error);
      } finally {
      setLoading(false);
      }
    };

    

    const handleCommentSubmit = async () => {
      const commentBody = {
        user: user,
        comment: comment,
        time: time
      }
      console.log("commentBody")
      try {
        const response = await fetch(`/api/blog/${slug}/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentBody),
        });

        if (response.ok) {
          setComments([...allComments, {user: commentBody.user, comment: commentBody.comment, time: new Date(Date.now())}])
        } else {
          console.error('Failed to add comment:');
        }
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };

    useEffect(() => {fetchBlog()}, [fetchBlog]);
    
    

    if (isLoading) {
        return (
            <div className="loading-comp">
              <l-dot-wave
              size="100"
              speed="1" 
              color="#bc986a"/>
            </div>
        )
    } else if (blogPage) {
        return (
            <div>
                <main>
                  <div className="blog-page">
                    <div className="blog-container">
                    <h1 className="page-title">{blogPage.title}</h1>
                    <div className="blog-content">
                        <div className="hike-description">
                            {blogPage.pageDescription}
                        </div>
                        <div className="hikes">
                          <Image src={`/${blogPage.picSlug1}`} alt="abc" width="500" height="500"/>
                          <Image src={`/${blogPage.picSlug2}`} alt="abc" width="500" height="500"/>
                          <Image src={`/${blogPage.picSlug3}`} alt="abc" width="500" height="500"/>
                        </div>
                      </div>
                    </div>
                    <div className="comments-container">
                      <div className="comments-header">
                        <h2>Comments</h2>
                      </div>
                      <div className="comments-list">
                      {allComments.map((comment: IComment) => (
                        <Comment
                          key={generateUniqueId()}
                          user={comment.user}
                          comment={comment.comment}
                          time={new Date(comment.time)}/>
                      ))}
                      </div>
                      <form className="comment-form" onSubmit={handleCommentSubmit}>
                          <label htmlFor="user">Name</label>
                          <input type="text" id="user" placeholder="Enter Name" value={user} onChange={e => setUser(e.target.value)} required/>

                          <label htmlFor="comments">Comment</label>
                          <textarea id="comments" name="comments" placeholder="Enter Comment" value={comment} onChange={e => setComment(e.target.value)} required></textarea>
                          
                          {/* <label htmlFor="time">Time</label>
                          <p>year-month-day 0000-00-00</p>
                          <input type="text" id="time" placeholder="Time" value={time} onChange={e => setTime(e.target.value)} required/> */}
                          <input type="submit" value="Submit Comment"/>
                      </form>
                    </div>
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

