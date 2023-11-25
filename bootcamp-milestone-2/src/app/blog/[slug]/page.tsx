import Image from "next/image"
import {GET} from "../../api/blog/[slug]/route"


type IParams = {
    params: {
        slug: string
    }
}

  
export default async function BlogPage({ params }: IParams) {
    // Get page info 
    const { slug } = params // another destructure
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
    const blogInfo = await res.json()
    console.log(blogInfo)


    return (


        <>
            <main>
                <h1 className="page-title">Cal Poly Classes</h1>

                <div className="blogContent">
                    <div className="blogPostDate">
                        <p>{blogInfo.title}</p>
                        <p>{blogInfo.date}</p>
                    </div>
                    <div className="blogDescription">
                        <p>{blogInfo.description}</p>
                    </div>
                    <div>
                        <Image src={blogInfo.imagePath} alt="Climbing Image" height="500" width="500" />
                    </div>
                    <p>Content:{blogInfo.content}</p>
                </div>

            </main>
        </>
    )
}