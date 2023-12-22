import Image from "next/image"
import {GET} from "../../api/blog/[slug]/route"
import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";

type IParams = {
    params: {
        slug: string
    }
}


export default async function BlogPage({ params }: IParams) {
    const { slug } = params // another destructure
    console.log(slug);
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
        cache : "no-cache"
    });
    const blog = await res.json();
    console.log("slug page")
    console.log(blog);

  return (
        <main>        
            <div className="content">
                <div className="blog">
                    <div className="blog-title">
                        {blog.title}
                    </div>
                    <div className="blog-date">{blog.date}</div>
                    <div className="blog-image">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width="500"
                            height="500"
                        />

                    </div>
                    <div className="blog-content">
                        {blog.content}
                    </div>
                </div>
            </div>
            <div>


            {blog.comments.map((comment:IComment, index:number) => (
                            <Comment key={index} comment={comment} />
                        ))}
        </div>
        </main>

  )
}