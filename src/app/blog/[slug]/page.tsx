import React from "react";
import connectDB from "@/helpers/db";
import Blogs from "@/database/blogSchema"
import BlogPage from '@/app/components/blogPage'

type Props = {
    params: { slug: string };
};

async function getBlogBySlug(slug: string) {
    await connectDB();

    try {
        // Query for a blog with the specified slug
        const blog = await Blogs.findOne({ slug }).orFail();
        return blog;
    } catch (err) {
        return null;
    }
}

export default async function Blog({ params }: Props) {
    const { slug } = params;
    const blog = await getBlogBySlug(slug);

    return (
        <main>
            {blog ? (
                <div>
                    <BlogPage {...blog.toObject()}/>
                </div>
            ) : (
                <div className="page-title">No Blog Found</div>
            )}
        </main>
    );
}