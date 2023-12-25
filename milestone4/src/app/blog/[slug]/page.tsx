"use client"
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import React from "react";
import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";
import style from "./page.module.css";
import { parseCommentTime } from "@/components/comment";

const initState = {
    user: "",
    comment: "",
}

export default function Page({ params }: { params: { slug: string } }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(initState);
    const [blogData, setBlogData] = useState<any>(null);
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentDate = new Date();
        const { user, comment } = data;
    
        try {
            const res = await fetch(`/api/blog/${params.slug}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user, comment, date: currentDate,
                }),
            });
    
            if (res.ok) {
                const updatedBlogData = await res.json();
                setBlogData(updatedBlogData);
            } else {
                console.error('Error submitting comment');
            }
        } catch (error) {
            console.error('Error submitting comment', error);
        }
    };    

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name
        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/blog/${params.slug}`, {
                    cache: "no-store",
                });
                const data = await res.json();
    
                if (res.ok) {
                    setBlogData(data);
                } else {
                    console.error("Error fetching blog data");
                }
            } catch (error) {
                console.error("Error fetching blog data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params.slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blogData) {
        return <div>Blog Not Found</div>;
    }

    return(
        <main>
        <div className={style.blog}>
            <h1 className={style.title}> {blogData.title} </h1>
            <p className={style.date}> {parseCommentTime(blogData.date)} </p>
            <p className={style.description}> {blogData.description} </p>
            <div className={style.blogContent}>
                <img src={blogData.imageSlug} className={style.image} alt="blog image"></img>
                <p className={style.content}> {blogData.content} </p>
            </div>

            <form onSubmit={ handleSubmit } id={style["commentForm"]}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user" placeholder="Name" required value={data.user} onChange={handleChange}/>
                <br/>
                <label htmlFor="comments">Comments</label>
                <textarea id="comments" name="comment" placeholder="Comments" required value={data.comment} onChange={handleChange}></textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>

            <div className={style.commentSection}>
                    {blogData.comments.map((comment: IComment, index: number) => (
                        <Comment key={index} comment={comment} />
                    ))}
            </div>
        </div>
        </main>
    )

    }