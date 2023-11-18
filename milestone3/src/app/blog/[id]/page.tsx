"use client";
import { useState, useEffect } from "react";
import { IBlog, IComment } from "@/database/blogSchema";

export default function BlogEntry({ params }: { params: { id: number } }) {
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [comments, setComments] = useState<IComment[]>([]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        /*
        Handles form submission by clearing form and appending comment
        */
        e.preventDefault();

        //get form submission event
        const formElement = e.target as HTMLFormElement;

        // Access values directly from the form elements
        const nameInput =
            formElement.querySelector<HTMLInputElement>('input[name="name"]');
        const descriptionText = formElement.querySelector<HTMLTextAreaElement>(
            'textarea[name="description"]'
        );

        // Explicitly cast e.target to HTMLFormElement
        const newComment: IComment = {
            user: nameInput?.value || "",
            comment: descriptionText?.value || "",
            time: new Date(),
        };
        if (nameInput) nameInput.value = "";
        if (descriptionText) descriptionText.value = "";
        setComments((prevState) => [...prevState, newComment]);
    }
    async function fetchBlogData() {
        try {
            const response = await fetch(`/api/blog/${params.id}`);
            if (response.ok) {
                const blogData: IBlog = await response.json();
                setBlog(blogData);
            } else {
                console.error("Failed to fetch blog data");
            }
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    }

    useEffect(() => {
        fetchBlogData();
    }, [params.id]);

    return (
        <main>
            {blog ? (
                <div className="blog-content">
                    <img src={blog?.image} />
                    <h2 className="blog-title">{blog?.title}</h2>
                    <div className="blog-date">{blog?.date.toString()}</div>
                    <div className="blog-description">{blog?.description}</div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <div className="comment-container">
                <h2>Comments</h2>
                {comments.map((c) => (
                    <div className="comment-item">
                        <div className="comment-date">
                            {c.time.toDateString()}
                        </div>
                        <div className="comment-user">{c.user}</div>
                        <div className="comment-description">{c.comment}</div>
                    </div>
                ))}
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name" />
                <textarea
                    id="description"
                    placeholder="Enter Comment"
                    name="description"
                ></textarea>
                <input type="submit" />
            </form>
        </main>
    );
}
