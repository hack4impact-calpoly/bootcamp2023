import style from '../../components/blogPreview.module.css'
import Image from "next/image";
import Link from "next/link";
import Comment from "../../components/blogComment";
import { IComment } from "../../database/blogSchema";

type Props = {
    params: {slug: string}
}

async function getBlog (slug: string){
    try {
        const res = await fetch(`http://localhost:3002/api/blog/${slug}`, {
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

export default async function Page ({params: {slug}}: Props){
    const blog = await getBlog(slug)

    if (blog){
        return (
        <div className={style.row}>
        <div className={style.column}>
            <Link className={style.link} href="/blog">Back</Link>
            <h1 className={style.blogTitle}> {blog.title} </h1> 
            <h2 className={style.blogData}> {blog.date} </h2>
            <div className={style.blogContainer}>
                <p className="blog-description"> {blog.description} </p>
                <Image className={style.image} src={blog.image} width="500" height="500" alt="Image of blog post" />
            </div>
      </div>

      <span className={style.column}>
      <h2 className={style.blogTitle}>Comments:</h2>
                {(blog.comments)?.map((comment: IComment, index:number) => (
	                <Comment key={index} comment={comment} />
	            ))}
      </span>
      </div>
        )
    } else {
        return [{ params: {title: '404'}}]
    }
}