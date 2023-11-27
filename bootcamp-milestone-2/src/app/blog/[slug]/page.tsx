import style from '../../components/blogPreview.module.css'
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: {slug: string}
}

async function getBlog (slug: string){
    const res = await fetch (`http://localhost:3000/api/blog/${slug}`, {
        cache: "no-store",
      });
    if (res.ok){
        return await res.json()
    } 
    return null
}

export default async function Page ({params: {slug}}: Props){
    const blog = await getBlog(slug)
    
    if (blog){
        return (
        <div className={style.blogPage}>
            <Link className={style.link} href="/blog">Back</Link>
            <h1 className={style.blogTitle}> {blog.title} </h1> 
            <h2 className={style.blogData}> {blog.date} </h2>
            <div className={style.blogContainer}>
                <p className="blog-description"> {blog.description} </p>
                <Image className={style.image} src={blog.image} width="500" height="500" alt="Image of blog post" />
            </div>
      </div>
        )
    } else {
        return [{ params: {title: '404'}}]
    }
}