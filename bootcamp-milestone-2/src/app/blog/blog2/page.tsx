
import Image from "next/image"
export default function BlogPage2() {
    return (
        <>
            <main>
                <h1 className="page-title">TypeScript and NextJS</h1>

                <div className="blogContent">
                    <div className="blogPostDate">
                        <p>10-20-2023</p>
                    </div>
                    <div className="blogDescription">
                        <p>Discussions on New Technologies</p>
                    </div>
                    <div>
                        <Image src="/house.jpg" alt="House Image" height="500" width="500" />
                    </div>
                    <p>
                        Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.
                    </p>
                </div>

            </main>
        </>
    )
}