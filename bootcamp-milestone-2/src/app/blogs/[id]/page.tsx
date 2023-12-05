import blogs, { Blog } from "@/app/blogData";

export default function BlogEntry({ params }: { params: { id: number } }) {
    const blog: Blog = blogs[params.id];

    return (
        <main>
            <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <img src={blog.image} />
                <div className="blog-date">{blog.date.toDateString()}</div>
                <div className="blog-description">{blog.description}</div>
            </div>
        </main>
    );
}