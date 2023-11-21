"use client";
import { useState, useEffect } from "react";
import { IBlog, IComment } from "@/database/blogSchema";
import BlogView from "@/components/blogView";
import Comment from "@/components/comment";
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
                    <BlogView blog={blog} />
                    <div className="comment-container">
                        <h2>Comments</h2>
                        {blog?.comments.map((c) => (
                            <Comment
                                key={c.time.toString()}
                                comment={{
                                    user: c.user,
                                    comment: c.comment,
                                    time: c.time,
                                }}
                            />
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
