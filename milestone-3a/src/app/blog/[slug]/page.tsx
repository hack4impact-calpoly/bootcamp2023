import { IBlog, IComment } from "@/database/blogSchema";
import Link from "next/link";
type Props = {
    params: { slug: string }
}

export default async function Blog({ params: { slug } }: Props) {
    async function getBlog(slug: string) {
        try {
            const res = await fetch(`http://localhost:3001/api/blog/{slug}`, {
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

    const blog = await getBlog(slug);
    if(blog){
        return (
            <div>
                <h3>{blog.title}</h3>
                <p>{blog.date.toDateString()}</p>
                <p>{blog.content}</p>
                <Link href="/blog">Back</Link>
            </div>
        )
    }
    else{
        return (
        <div>
            Blog Not Found
        </div>
        )
    }
        
}
