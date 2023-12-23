import Image from "next/image";
import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";
import PostComment from "@/components/postComment";

type IParams = {
    params: {
        slug: string;
    };
};

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

export default async function BlogPage({ params }: IParams) {
    // Get page info
    const { slug } = params; // another destructure
    const blogInfo = await getBlog(slug);

    return (
        <>
            {blogInfo == null ? (
                <h1 className="page-title">Blog not found</h1>
            ) : (
                <main>
                    <h1 className="page-title">{blogInfo.title}!</h1>

                    <div className="blogContent">
                        <div className="blogPostDate">
                            <p>{blogInfo.title}</p>
                            <p>{blogInfo.date}</p>
                        </div>
                        <div className="blogDescription">
                            <p>{blogInfo.description}</p>
                        </div>
                        <div>
                            <Image
                                src={blogInfo.imagePath}
                                alt="Climbing Image"
                                height="500"
                                width="500"
                            />
                        </div>
                        <p>Content:{blogInfo.content}</p>
                    </div>

                    <div>

                        {blogInfo.comments.map((comment:IComment, index:number) => (
                            <Comment key={index} comment={comment} />
                        ))}
                    </div>
                </main>
            )}
            <h1>Post a comment!</h1>
            <PostComment PostURL={`http://localhost:3000/api/blog/${slug}/comment`} />

        </>
    );
}
