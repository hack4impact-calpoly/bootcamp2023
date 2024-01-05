import Image from 'next/image';
import React from 'react';
import { IComment } from '@/app/typings/comment';
import Comment from '@/app/components/comment';

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

export default async function Blog({ params : {slug}}: Props) {
	const blog = await getBlog(slug);
	
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
                    {blog.comments.map((comment: IComment) => (
                        <Comment
                        user = {comment.user}
                        comment = {comment.comment}
                        time = {new Date(comment.time)}/>
                    ))}
                </div> 
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