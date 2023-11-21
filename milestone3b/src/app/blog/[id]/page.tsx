"use client";
import { useState, useEffect } from "react";
import { IBlog } from "@/database/blogSchema";
import { IComment } from "@/database/commentSchema";
import BlogView from "@/components/blogView";
import Comment from "@/components/comment";
import axios from "axios";

export default function BlogEntry({ params }: { params: { id: number } }) {
    const [blog, setBlog] = useState<IBlog | null>(null);
    const [comments, setComments] = useState<IComment[]>([]);

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
            const newComment = {
                user: nameInput?.value || "",
                comment: descriptionText?.value || "",
                date: new Date(),
            };
            //clear form data
            if (nameInput) nameInput.value = "";
            if (descriptionText) descriptionText.value = "";

            //Add comment to db and update UI
            const response = await axios.post(
                `/api/blog/${params.id}`,
                newComment
            );
            if (response.status === 200) {
                const addedComment: IComment = response.data;
                setComments([...comments, addedComment]);
            }
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
                console.log(blogData);
                setBlog(blogData);
                setComments(blogData.comments);
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
                        {comments?.map((c) => (
                            <Comment
                                key={c.date.toString()}
                                comment={{
                                    _id: c._id,
                                    user: c.user,
                                    comment: c.comment,
                                    date: c.date,
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
