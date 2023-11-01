"use client";
import blogs, { Blog } from "@/app/blogData";
import React, { useState } from "react";

interface CommentsData {
    comments: string[];
    comment: string;
}

export default function BlogEntry({ params }: { params: { id: number } }) {
    const blog: Blog = blogs[params.id];
    const [comments, setComments] = useState<CommentsData>({
        comments: [],
        comment: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        /*
        Handles change in form
        :param e: event object
        */
        setComments((prevState) => ({
            ...prevState,
            comment: e.target.value,
        }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        /*
        Handles form submission by clearing form and appending comment
        */
        e.preventDefault();
        setComments((prevState) => ({
            comments: [...prevState.comments, prevState.comment],
            comment: "",
        }));
    }

    return (
        <main>
            <div className="blog-content">
                <img src={blog.image} />
                <h2 className="blog-title">{blog.title}</h2>
                <div className="blog-date">{blog.date.toDateString()}</div>
                <div className="blog-description">{blog.description}</div>
            </div>
            <div className="comment-container">
                <h2>Comments</h2>
                {comments.comments.map((c) => (
                    <div className="comment-item">
                        <div className="comment-description">{c}</div>
                    </div>
                ))}
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <textarea
                    id="description"
                    value={comments.comment}
                    onChange={handleChange}
                ></textarea>
                <input type="submit" />
            </form>
        </main>
    );
}
