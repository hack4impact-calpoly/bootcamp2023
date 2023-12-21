import React from 'react';
import Blog from '../../database/blogSchema';
import BlogPage from '../../components/recipeBlogPage';
import connectDB from '../../helpers/db';

async function getBlog(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find();
      if (blogs != null) {
        const desiredBlog = blogs.find((blog) => blog.slug == 'test_file_2');
        const blogPage = <BlogPage blog={desiredBlog}/>;
        return blogPage;
      }
			// send a response as the blogs as the message
	    return null;
	} catch (err) {
      console.error('Promise rejected with error: ' + err);
      return null;
	}
}

export default function BlogOne() {
  const blogTwo = getBlog();

  return (
    <div>
      { blogTwo }
    </div>
  );
};

