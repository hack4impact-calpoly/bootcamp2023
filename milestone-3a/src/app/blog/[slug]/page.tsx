import { IComment } from "@/database/blogSchema";
import Comment from "../../components/blogComment";
import Link from "next/link";
type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
    try {
      const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
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

export default async function Blog({ params: { slug } }: Props) {
    const blog = await getBlog(slug);
    
    if(blog){
        return (
            <div>
                <h3>{blog.title}</h3>
                <p>{blog.date.toDateString()}</p>
                <p>{blog.content}</p>
                <div>
                    {blog.comments.map((comment: IComment, index:number) => (
                        <Comment key={index} comment={comment} />
                    ))}
                </div>
                <Link href="/blog">Back</Link>
            </div>
        )
    }
    else{
        return (
            <h1 className="page-title">Blog not found</h1>
        )
    }
        
}
