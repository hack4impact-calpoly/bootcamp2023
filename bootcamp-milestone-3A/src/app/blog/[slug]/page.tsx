import React from "react"
import Comment from "@/app/components/comment";
type Props = {
    params: { slug: string }
}


async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function Page({params: {slug}}: Props) {
	//slug = params.slug;
	const blog = await getBlog(slug);
    console.log("ji")
    console.log(blog.comments);
	
    if(blog !=null){
        return (
            <>
                <main>
                <div className="content">
                    <br></br>
                    Title: {blog.title}<br></br>
                    Date: {blog.date}<br></br>
                    <br></br>
                    <img src={`/${blog.image}`} height={200} width={200}></img>
                     <br></br>
                    {blog.content} <br></br>
                    <br></br>
                    
                    
                </div>
                
                </main>
                <div className="comments_box">
                    <h2>Comment Section:</h2>
                    {blog.comments.map((comment: any, index: React.Key | null | undefined) => (
	                <Comment key={index} comment={comment} />
	            ))}
                    </div>
                <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
            </>
        )
    }
    else{
        return (
            <>Blog not found.</>
        )
    }
}