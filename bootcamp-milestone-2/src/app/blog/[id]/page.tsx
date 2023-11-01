import blogs, { Blog } from "@/app/blogData";

export default function BlogEntry({ params }: { params: { id: number } }) {
    const blog: Blog = blogs[params.id];
    console.log(blog.image);

    return (
        <main>
            <div className="blog-content">
                <img src={blog.image} />
                <h2 className="blog-title">{blog.title}</h2>
                <div className="blog-date">{blog.date.toDateString()}</div>
                <div className="blog-description">{blog.description}</div>
            </div>
            <div className="comment-container">
                <h2>Comments</h2>
                <div className="comment-item">
                    <div className="comment-description">Sample Comment</div>
                </div>
            </div>
            <form className="comment-form">
                <textarea id="description"></textarea>
                <input type="submit" />
            </form>
        </main>
    );
}
