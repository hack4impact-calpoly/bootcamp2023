import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import BlogPreview from "@/components/blogPreview";
import Navbar from "@/components/navbar";


async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message

	    return blogs;
	} catch (err) {
	    return null;
	}
}

export default async function BlogPage() {
    const blogData = await getBlogs();
    return (<>
        <head>
            <title>
                Keila's blog
            </title>
            {/* <link rel="stylesheet" href="styles.css" /> */}
        </head>
        <body>
            <nav className="navbar">
                {<Navbar/>}
              </nav>
            <main>

                <h1 className="pagetitle">blogs</h1>
                <div className="card">
                {blogData ? (
                    blogData.map(blog => 
                                <BlogPreview 

                                title={blog.title}
                                description={blog.description}
                                date={blog.date.toDateString()}
                                image={blog.image}
                                slug={blog.slug}
                            />
                        )) : (
                            <p>
                                There was an error
                            </p>
                        )
                    }
                </div>
            </main>
            <footer></footer>
        </body>
        <script src="/Users/keilamohan/bootcamp-project-2023/src/blog.js"></script>
        </>)
  }