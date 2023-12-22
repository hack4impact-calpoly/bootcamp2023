import React from "react";
import "@/app/styles/website.css"
import connectDB from "@/helpers/db";
import Blogs from "@/database/blogSchema"
import BlogPage from '@/app/components/blogPage'

type Props = {
    params: { slug: string };
};

async function getBlogBySlug(slug: string) {
    await connectDB();

    try {
        // Query for a blog with the specified slug
        const blog = await Blogs.findOne({ slug }).orFail();
        return blog;
    } catch (err) {
        return null;
    }
}

export default async function Blog({ params }: Props) {
    const { slug } = params;
    const blog = await getBlogBySlug(slug);

    return (
        <main>
            {blog ? (
                <div>
                    <BlogPage {...blog.toObject()}/>
                </div>
            ) : (
                <div className="page-title">No Blog Found</div>
            )}
        </main>
    );






    // const [blog, setBlog] = useState<IBlog>({ 
    //     title: "", 
    //     slug: "", 
    //     date: new Date(), 
    //     description: "", 
    //     content: "", 
    //     comments: [] 
    // });

    // useEffect(() => {
    //     const fetchBlog = async () => {
    //         try {
    //             const blogpage = await getBlogBySlug(slug);
    //             if (blogpage) {
    //                 setBlog(blog);
    //             } else {
    //                 console.error("Blog not found");
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchBlog();
    // }, [slug]);
    
    // async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    
    //     try {
    //       const formElement = e.target as HTMLFormElement;
    //       const nameInput = formElement.querySelector<HTMLInputElement>('input[name="name"]');
    //       const descriptionText = formElement.querySelector<HTMLTextAreaElement>('textarea[name="comment"]');
    
    //       const newComment: IComment = {
    //         user: nameInput?.value || "",
    //         comment: descriptionText?.value || "",
    //         time: new Date(),
    //       };
    
    //       const response = await fetch(`/api/blog/${slug}/comment`, {
    //         method: "POST",
    //         headers: { 'Content-Type': "application/json" },
    //         body: JSON.stringify(newComment),
    //       });
    
    //       if (nameInput) nameInput.value = "";
    //       if (descriptionText) descriptionText.value = "";
    
    //       if (response.status == 200){
    //         setBlog({
    //             title: blog?.title || "",
    //             slug: blog?.slug || "",
    //             date: blog?.date || new Date(),
    //             description: blog?.description || "",
    //             content: blog?.content || "",
    //             comments: blog
    //             ? [...blog.comments, newComment]
    //             : [newComment],
    //         });
    //     }
    //     } catch (err) {
    //       console.error(err);
    //     }
    //   }

    // if(!blog){
    //     return(
    //         <div className="page-title">Blog Not Found</div>
    //     )
    // }

    // return ( 
    // <div className={style.blogpage}>
    //     <h2 className="page-title">{blog.title}</h2>
    //     <p>{blog.date.toLocaleString('en-US', {
    //         month: "long",
    //         day: "numeric",
    //         year: "numeric",
    //         hour: "numeric",
    //         minute: "2-digit",
    //         hour12: true,
    //         })}</p>
    //     <p>{blog.content}</p>
    //     <Link className={style.backlink} href="/blog">Back To All Blogs</Link>
    //     <div className={style.allcomments}>
    //         <h3>Comments</h3>
    //         {blog.comments.map((comment: IComment, index:number) => (
    //             <Comment key={index} comment={comment} />
    //         ))}
    //     </div>
    //     <div className=''>
    //         <h3>Add Comments:</h3>
    //         {/* <form className={style.commentform}> */}
    //         <form className={style.commentform} onSubmit={handleSumbit}>
    //             <label className={style.label}>Name:</label>
    //             <input type="text" id="name" className={style.commentname} />

    //             <label className={style.label}>Comment:</label>
    //             <textarea id="message" className={style.commentbody} />

    //             <input type="submit" id="submit" className={style.submitbutton} />
    //         </form>
    //     </div>
	// </div>
    // )
    // const { slug } = params;
    // const blog = await getBlogBySlug(slug);
}
