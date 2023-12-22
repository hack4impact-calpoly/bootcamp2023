import BlogPreview from '@/components/blogPreview';
import connectDB from '@/helpers/db';
import Blogs from '@/database/blogSchema';

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
		// query for all blogs and sort by date
		const blogs = await Blogs.find().sort({ date: -1 }).orFail();
		// send a response as the blogs as the message
		return blogs
	} catch (err) {
		return null
	}
}

export default function Blog() {
    return getBlogs().then((blogs)=> {
        return (
            <>
                {blogs?.map((blog) => (
                    <BlogPreview
                        key={blog.title}
                        title={blog.title}
                        slug={blog.slug}
                        date={blog.date}
                        description={blog.description}
                        content={blog.content}
                        image={blog.image}
                    />
                ))}
            </>
        );
    });
}

