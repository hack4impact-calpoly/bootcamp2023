import React from "react"
import Comment from "@/app/components/comment";
import CommentEntry from "@/app/components/commentEntry";
type Props = {
    params: { slug: string }
}


async function getBlog(slug: string) {
	try {
		console.log(' retrieving blog data ');
		const res = await fetch("https://bootcamp-project-2023-bbgd-git-main-sumedha-kundurthis-projects.vercel.app" + `/api/blog/${slug}`, {
			cache: "no-store",	
		})

		console.log(` retrieving blog data status: ${res.ok} `);
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}
		const resJson = await res.json();
		console.log('response json ' + resJson);
		return resJson;
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function Page({params: {slug}}: Props) {
	//slug = params.slug;
	const blog = await getBlog(slug);
  
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
                <CommentEntry params={{
                        slug: slug,
                        component: "blog"
                    }}></CommentEntry>
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
