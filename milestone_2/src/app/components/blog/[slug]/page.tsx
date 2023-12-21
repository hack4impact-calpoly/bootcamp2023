import { IComment } from "../../../database/blogSchema";
import BlogPreview from "../../blogPreview";

type IParams = {
    params: { slug: string }
}

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/{slug}`, {
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

export default async function Blog({ params }: IParams) {
	const { slug } = params;
	const blog = await getBlog(slug);
	blog.comments = blog.comments.lean()
	
	return (
        <div> 
            BlogPreview(blog)
        </div>
        )
}