import React from "react"

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
                    {blog.content}
                </div>
                </main>
                <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
            </>
        )
    }
    else{
        return (
            <>Nothing to see here</>
        )
    }
}