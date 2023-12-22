import React from "react"
import Comment from "@/app/components/comment";
import CommentEntry from "@/app/components/commentEntry";
type Props = {
    params: { slug: string }
}


async function getProject(slug: string) {
	try {
		const res = await fetch(`https://bootcamp-project-2023-bbgd-git-main-sumedha-kundurthis-projects.vercel.app/api/portfolio/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch project");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function Page({params: {slug}}: Props) {
	//slug = params.slug;
	const project = await getProject(slug);
  
    if(project !=null){
        return (
            <>
                <main>
                <div className="content">
                    <br></br>
                    Title: {project.title}<br></br>
                    Github: {project.github}<br></br>
                    <br></br>
                    <img src={`/${project.image}`} height={200} width={200}></img>
                     <br></br>
                    {project.content} <br></br>
                    <br></br>
                    
                    
                </div>
                <CommentEntry params={{
                        slug: slug,
                        component:"portfolio"
                    }}></CommentEntry>
                </main>
                
                <div className="comments_box">
                    <h2>Comment Section:</h2>
                    {project.comments.map((comment: any, index: React.Key | null | undefined) => (
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
