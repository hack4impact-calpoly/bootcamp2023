import Image from "next/image"
import {GET} from "../../api/blog/[slug]/route"


type IParams = {
    params: {
        slug: string
    }
}


export default async function BlogPage({ params }: IParams) {
    const { slug } = params // another destructure
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
    const blog = await res.json()
    console.log(blog)

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


        </main>

  )
}