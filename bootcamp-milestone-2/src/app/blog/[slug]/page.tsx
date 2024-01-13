"use client"
import Image from 'next/image';
import { IComment } from '@/app/typings/comment';
import Comment from '@/app/components/comment';
import React, { useState, useEffect } from 'react';
import { Blog } from '@/app/typings/blog';


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

export default function Blog({ params : {slug}}: Props) {
    const [allComments, setComments] = useState<IComment[]>([]);

    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [time, setTime] = useState('');

    const [blog, setBlog] = useState<Blog | null>(null);

    const fetchBlog = async () => {
        try {
            const fetchedBlog = await getBlog(slug);
            setBlog(fetchedBlog);
            setComments(fetchedBlog.comments)
          } catch (error) {
            console.error('error', error);
          }
      };

      const commentSubmit = async () => {
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
            console.error('error');
          }
        } catch (error) {
          console.error('error', error);
        }
      };

      useEffect(() => {
        fetchBlog()}, []);

	if (blog) {
        return (
            <div>
                <main>
                    <h1 className="page-title">{blog.title}</h1>
                        <div className="blog-description">
                            {blog.piccap}
                        </div>
                        <div className="blog-picture">
                            <Image src={`/${blog.picslug}`} width={300} height={400} alt='image of blog'></Image>
                        </div>
                </main>
                <div className="comments">
                    {allComments.map((comment: IComment) => (
                        <Comment
                        user = {comment.user}
                        comment = {comment.comment}
                        time = {new Date(comment.time)}/>
                    ))}
                </div> 
                <form id="contact-form" onSubmit={commentSubmit}>
                    <label htmlFor="name">User </label>
                    <input type="text" id="name" name="name" placeholder="User" value={user} onChange={e => setUser(e.target.value)} required />
                    <br></br>
                    <br></br>
                    <label htmlFor="time">Time </label>
                    <input type="text" id="time" name="time" placeholder="Time" value={time} onChange={e => setTime(e.target.value)}/>
                    <br></br>
                    <br></br>
                    <label htmlFor="message">Comment </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Comment"
                        value={comment} 
                        onChange={e => setComment(e.target.value)}
                        required
                    ></textarea>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Comment"/>
                </form>
            </div>
        )
    }
    else {
        return (
            <div>
                No blogs found.
            </div>
        )
    }
}