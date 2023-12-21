import blogs from "@app/blogData";
import BlogPreview from "./blogPreview";

{blogs.map(blog => 
    /* we will soon add BlogPreview here */
    // <BlogPreview 
    //     title={blog.title}
    //     date={blog.date}
    //     description={blog.description}
    //     slug={blog.slug}
    // />
    <BlogPreview {...blog}/>
)}
