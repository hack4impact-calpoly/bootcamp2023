'use client';
import React from 'react';
import Link from 'next/link';
import style from './blogPage.module.css';
import { IBlog, IComment } from '@/database/blogSchema';
import Comment from './comment'
import NewComment from "@/app/components/createComment";

export default function BlogPage(blogpage: IBlog) {
    return (
    <div className={style.blogpage}>
        <h2 className="page-title">{blogpage.title}</h2>
        <p>{blogpage.date.toLocaleString('en-US', {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            })}</p>
        <p>{blogpage.content}</p>
        <Link className={style.backlink} href="/blog">Back To All Blogs</Link>
        <div className={style.allcomments}>
            <h3>Comments</h3>
            {blogpage.comments.map((comment: IComment, index:number) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
        <NewComment slug={blogpage.slug}/>
	</div>
    )
}




    // const [blog, setBlog] = useState<IBlog | null>(null);
    // useEffect(() => {
    //     getBlogBySlug(blogpage.slug).then((blog: IBlog | null) => {
    //       setBlog(blog);
    //     });
    //   }, [blogpage.slug]);



// const [blog, setBlog] = useState<IBlog | null>(null);
    // useEffect(() => {
    //     getBlogBySlug(slug).then((blog: IBlog | null) => {
    //       setBlog(blog);
    //     });
    //   }, [slug]);

    // async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    
    //     try {
    //       const formElement = e.target as HTMLFormElement;
    //         const nameInput =
    //           formElement.querySelector<HTMLInputElement>(
    //             'input[name="name"]'
    //           );
    //         const descriptionText =
    //           formElement.querySelector<HTMLTextAreaElement>(
    //             'textarea[name="comment"]'
    //           );
    
    //         const newComment: IComment = {
    //           user: nameInput?.value || "",
    //           comment: descriptionText?.value || "",
    //           time: new Date(),
    //         };
    
    //         const response = await fetch(
    //           `/api/blog/${slug}/comment`, {
    //             method: "POST",
    //             headers: { 'Content-Type': "application/json" },
    //             body: JSON.stringify(newComment),
    //           });
    
    //         if (nameInput) nameInput.value = "";
    //         if (descriptionText) descriptionText.value = "";
    
    //         if (response.status === 200)
    //           setBlog({
    //             title: blog?.title || "",
    //             slug: blog?.slug || "",
    //             date: blog?.date || new Date(),
    //             description: blog?.description || "",
    //             content: blog?.content || "",
    //             comments: blog
    //               ? [...blog.comments, newComment]
    //               : [newComment],
    //           });
    //     } catch (err) {
    //       console.error(err);
    //     }
    
    // }
