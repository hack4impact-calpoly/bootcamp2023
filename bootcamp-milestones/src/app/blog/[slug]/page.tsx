import Comment from "@/components/comment";
import type { IComment } from "@/database/commentSchema";
import AddComment from "../../../components/addComment";

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {    
	try {
		// https://hack4impact-bootcamp.vercel.app/api/blog/${slug}
        // http://localhost:3000/api/blog/${slug}
        const res = await fetch(`https://hack4impact-bootcamp.vercel.app/api/blog/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		// console.log(`error: ${err}`);
		return null;
	}
}

export default async function Blog({ params : {slug} }: Props) {
	// now we can access slug
    // slug = params.slug;
	const blog = await getBlog(slug);
    if (blog) {
        return (
            <>
                <h1>{blog.title}</h1>
                {/* <p>{blog.date}</p> */}
                <p>{blog.content}</p>
                
                <div className="comment_container">
                    <h2>Comments</h2>
                    {blog.comments.map((comment: IComment) => (
                        <Comment
                            comment={{
                                user: comment.user,
                                comment: comment.comment,
                                date: comment.date,
                            }}
                        />
                    ))}
                    <AddComment slug={blog.slug} />
                </div>
                
            </>
        );
    }
     
    else {
        return (
            <h1> 404 Blog NOT FOUND </h1>
        );
    }
}