import Comment from "@/components/comment";
import type { IComment } from "@/database/commentSchema";

async function getBlog(id: number) {
    try {
        const blog = `http://localhost:3000/api/blogs/${id}`;
        const res = await fetch(blog, {
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

export default async function BlogEntry({ params } : { params: { id: number } }) {
    const blog = await getBlog(params.id);
    if (blog) {
        console.log(blog);
        console.log(blog.comments);
        return (
            <main>
                <div className="blog-content">
                    <h2 className="blog-title">{blog.title}</h2>
                    <img src={blog.image} />
                    <div className="blog-date">{new Date(blog.date).toDateString()}</div>
                    <div className="blog-description">{blog.description}</div>
                </div>
                <h2>Comments</h2>
                    <>
                    {blog.comments?.map((c: IComment) => (
                        <Comment
                            key={(c._id)}
                            comment={{
                                _id: c._id,
                                user: c.user,
                                comment: c.comment,
                                date: c.date,
                            }}
                        />
                    ))}
                    </>
            </main>
        );
    }
     
    else {
        return (
            <h1> 404 Blog NOT FOUND </h1>
        );
    }
}
