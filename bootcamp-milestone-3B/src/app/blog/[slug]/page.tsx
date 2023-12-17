import { IBlog, IComment } from "@/app/database/blogSchema";
import React from "react";
import styles from "./blogview.module.css";

type Props = {
    params: { slug: string };
};

type CommentProps = {
    comment: IComment;
};

function Comment({ comment }: CommentProps) {
    return (
        <div className={styles.comment}>
            <p className={styles.commentUser}>{comment.user}</p>
            <p className={styles.commentText}>{comment.comment}</p>
            <small className={styles.commentDate}>
                {new Date(comment.time).toLocaleDateString()}
            </small>
        </div>
    );
}

export default async function Blog({ params: { slug } }: Props) {
    async function getBlog(slug: string) {
        try {
            console.log("API URL:", `${process.env.API_URL}/blog/${slug}`);

            const res = await fetch(`${process.env.API_URL}/blog/${slug}`, {
                cache: "no-store",
            });

            if (!res.ok) {
                throw new Error("Failed to fetch blog");
            }

            return res.json();
        } catch (err: unknown) {
            console.log(`error: ${err}`);
            return null;
        }
    }

    const blog: IBlog | null = await getBlog(slug);

    return (
        <div className={styles.blogView}>
            {blog ? (
                <div className={styles.blogContent}>
                    <h1 className={styles.blogTitle}>{blog.title}</h1>
                    <p className={styles.blogDate}>
                        {new Date(blog.date).toLocaleDateString()}
                    </p>
                    <p className={styles.blogDescription}>{blog.description}</p>
                    <div className={styles.blogBody}>{blog.content}</div>
                    <div className={styles.blogComments}>
                        {blog.comments.map((comment: IComment, index: number) => (
                            <Comment key={index} comment={comment} />
                        ))}
                    </div>
                </div>
            ) : (
                <p className={styles.blogNotFound}>Blog not found</p>
            )}
        </div>
    );
}
