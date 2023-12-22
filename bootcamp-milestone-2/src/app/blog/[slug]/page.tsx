import Image from "next/image";
import CommentComponent from "../comment";
import { Comment } from "@/app/commentData";

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

export default async function Blog(params: Props) {
  let slug = params.params.slug;
	let blog = await getBlog(slug);

  if (!blog) {
    return (
      <div>Blog not found</div>
    )
  }
  
  return (
    <>
      <h1 className="blog-title">{blog.title}</h1>
      <small>{new Date(blog.date).toLocaleDateString("US")}</small>
      <p>{blog.description}</p>
      <Image src={`${blog.src}`} alt={`${blog.alt}`} width="250" height="250" />
      {blog.comments.map((comment: Comment) => (
          <CommentComponent comment={comment} />
      ))}
    </>
  )
}