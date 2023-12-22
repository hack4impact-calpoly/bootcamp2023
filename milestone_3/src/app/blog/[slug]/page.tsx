import { NextRequest, NextResponse } from "next/server"
import connectDB from "../../../helpers/db";
import blogSchema from "../../../database/blogSchema";
import BlogSlug from "../../components/blogSlug";


type Props = {
    params: { slug: string };
};

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/${slug}`, {
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

export default async function Blog({ params }: Props) {
    const { slug } = params;
    const blog = await getBlog(slug);

    return (
        <main>
            {blog ? (
                <div>
                    <h2>{blog.title}</h2>
                    <BlogSlug
                        title={blog.title}
                        date={blog.date}
                        description={blog.description}
                        slug={blog.slug}
                        comments={blog.comments}
                    />
                 </div>
            ) : (
                <div>No blog found</div>
            )}
        </main>
    );
}