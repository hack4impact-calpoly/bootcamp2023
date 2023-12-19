import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";
import IBlog from "@/database/blogSchema";
/*
export interface Blog {
    title: string;
    date: string;
    description: string
    slug:string
}
*/

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().orFail()
		/*.sort({ date: -1 })*/
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

var blogs=getBlogs()

export default blogs;