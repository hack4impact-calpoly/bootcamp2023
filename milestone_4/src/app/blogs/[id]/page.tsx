"use client";
import Comment from "@/components/comment";
import type { IComment } from "@/database/commentSchema";
import { useState, useEffect } from "react";
import { IBlog } from "@/database/blogSchema";
import styles from './comment.module.css';



export default function BlogEntry({ params } : { params: { id: number } }) {
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [new_comment, setComment] = useState({
        name: "",
        message: "",
    });
    
    async function postComment(blogId: number, commentData: { user: string; comment: string; date: Date }) {
        const apiUrl = `http://localhost:3000/api/blogs/${blogId}/comments`;
        try {
            const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
          });
      
          if (!res.ok) {
            throw new Error('Failed to post comment');
          }
      
          const data = await res.json();
          setBlog(data);
          console.log('Comment posted:', data);
          return data;
        } catch (err) {
          console.error('Error posting comment:', err);
          return null;
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        if (name === "name") {
            setComment({name: value, message: new_comment['message']});
        }

        else {
            setComment({name: new_comment['name'], message: value});
        }

    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const commentData = {
          user: new_comment.name,
          comment: new_comment.message,
          date: new Date(),
        };
        await postComment(params.id, commentData).then((result) => {
            setStatusMessage('Comment sent successfully!');
                setComment({ name: "", message: "" });
                setIsSubmitting(false);
            }, (error) => {
                setStatusMessage('Failed to send comment. Please try again later.');
                setIsSubmitting(false);
            });
      };
      

    async function getBlog(id: number) {
        try {
            const blog = `http://localhost:3000/api/blogs/${id}`;
            const res = await fetch(blog, {
                cache: "no-store",	
            });
    
            if (!res.ok) {
                throw new Error("Failed to fetch blog");
            }

            const data = await res.json();
            console.log("IN GET BLOG");
            console.log(data);
            setBlog(data);
            return res.json();
    
        } catch (err: unknown) {
            console.log(`error: ${err}`);
            return null;
        }
    }
    
    useEffect(() => {
        console.log("here");
        if (params.id){
            getBlog(params.id);
        }
    }, [params.id]);

    if (blog) {
        return (
            <main>
                <div className="blog-content">
                    <h2 className="blog-title">{blog.title}</h2>
                    <img src={blog.image} />
                    <div className="blog-date">{new Date(blog.date).toDateString()}</div>
                    <div className="blog-description">{blog.description}</div>
                </div>
                <h2>Comments</h2>
                    <>
                    {blog.comments?.map((c: IComment) => (
                        <Comment
                            key={(c._id)}
                            comment={{
                                _id: c._id,
                                user: c.user,
                                comment: c.comment,
                                date: c.date,
                            }}
                        />
                    ))}
                    </>
                
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Your Name"
                        className={styles.formField}
                        onChange={handleChange}
                        value={new_comment.name}
                        required
                        />
                    <textarea
                        name="message"
                        placeholder="Your Comment"
                        className={styles.formField}
                        value={new_comment.message}
                        onChange={handleChange}
                        required
                        />
                    <input
                        type="submit"
                        value={isSubmitting ? "Sending..." : "Send"}
                        className={styles.submitButton}
                        disabled={isSubmitting}
                        />
                    {statusMessage && <div className={styles.statusMessage}>{statusMessage}</div>}
                </form>
            </main>
        );
    }
     
    else {
        return (
            <h1> Loading</h1>
        );
    }
}
