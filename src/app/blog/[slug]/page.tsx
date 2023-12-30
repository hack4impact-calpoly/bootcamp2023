// import React from "react";
// import BlogPage from '../../components/blogPage';
// import "../../globals.css"
// import connectDB from "../../../helpers/db";
// import Blogs from "../../../database/blogSchema"

// type Props = {
//     params: { slug: string };
// };

// async function getBlogBySlug(slug: string) {
//     await connectDB();

//     try {
//         // Query for a blog with the specified slug
//         const blog = await Blogs.findOne({ slug }).orFail();
//         return blog;
//     } catch (err) {
//         return null;
//     }
// }

// export default async function Blog({ params }: Props) {
//     const { slug } = params;
//     const blog = await getBlogBySlug(slug);

//     return (
//         <main>
//             {blog ? (
//                 <div>
//                     <BlogPage {...blog.toObject()} />
//                 </div>
//             ) : (
//                 <div className="page-title" >No Blog Found</div>
//             )}
//         </main>
//     );
// }

import { IComment } from "../../../database/blogSchema";
import BlogPreview from "../../components/blogPreview";

type IParams = {
    params: { slug: string }
}

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/{slug}`, {
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

export default async function Blog({ params }: IParams) {
	const { slug } = params;
	const blog = await getBlog(slug);
	blog.comments = blog.comments.lean()
	
	return (
        <div> 
            BlogPreview(blog)
        </div>
        )
}