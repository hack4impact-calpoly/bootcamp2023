import Blog from '../../database/blogSchema';
import connectDB from '../../helpers/db';
import BlogPreview from '../blogPreview';




async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

const blogs = await getBlogs();


export default function BlogComponent() {
  return (
  	<div className={"about"}>
		<h1 className="page-title">Blog</h1>

		{blogs && blogs.map(blog =>
				BlogPreview(blog)
				)
		}
	</div>)
}