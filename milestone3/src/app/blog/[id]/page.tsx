"use client";
import { useState, useEffect } from "react";
import { IBlog, IComment } from "@/database/blogSchema";
import axios from "axios";

export default function BlogEntry({ params }: { params: { id: number } }) {
    const [blog, setBlog] = useState<IBlog | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        /*
        Handles form submission by clearing form and appending comment
        */
        e.preventDefault();

        try {
            //get form submission event
            const formElement = e.target as HTMLFormElement;

            // Access values directly from the form elements
            const nameInput =
                formElement.querySelector<HTMLInputElement>(
                    'input[name="name"]'
                );
            const descriptionText =
                formElement.querySelector<HTMLTextAreaElement>(
                    'textarea[name="description"]'
                );

            // Explicitly cast e.target to HTMLFormElement
            const newComment: IComment = {
                user: nameInput?.value || "",
                comment: descriptionText?.value || "",
                time: new Date(),
            };
            //clear form data
            if (nameInput) nameInput.value = "";
            if (descriptionText) descriptionText.value = "";

            //Add comment to db and update UI
            const response = await axios.post(
                `/api/blog/${params.id}`,
                newComment
            );
            if (response.status === 200)
                setBlog({
                    _id: blog?._id || "",
                    title: blog?.title || "",
                    date: blog?.date || new Date(),
                    description: blog?.description || "",
                    slug: blog?.slug || "",
                    image: blog?.image || "",
                    comments: blog
                        ? [...blog.comments, newComment]
                        : [newComment],
                });
        } catch (err) {
            console.error(err);
        }
    }

    async function fetchBlogData() {
        /*
        This function requests data for a blog specified by id in url
        */
        try {
            const response = await axios.get(`/api/blog/${params.id}`);
            if (response.status === 200) {
                const blogData: IBlog = await response.data;
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
                <>
                    <div className="blog-content">
                        <img src={blog?.image} />
                        <h2 className="blog-title">{blog?.title}</h2>
                        <div className="blog-date">{blog?.date.toString()}</div>
                        <div className="blog-description">
                            {blog?.description}
                        </div>
                    </div>
                    <div className="comment-container">
                        <h2>Comments</h2>
                        {blog?.comments.map((c) => (
                            <div className="comment-item">
                                <div className="comment-date">
                                    {c.time.toString()}
                                </div>
                                <div className="comment-user">{c.user}</div>
                                <div className="comment-description">
                                    {c.comment}
                                </div>
                            </div>
                        ))}
                    </div>{" "}
                </>
            ) : (
                <p>Loading...</p>
            )}

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
