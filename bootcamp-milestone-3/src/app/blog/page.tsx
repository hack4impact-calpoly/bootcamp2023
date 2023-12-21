import React from 'react';
import BlogPreview from '../../components/recipePreview';
import Blog from '../../database/blogSchema';
import Header from '../../components/header';
import Styles from './blog.module.css';
import connectDB from '../../helpers/db';

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find()
      if (blogs != null) {
        const blogPreviews = blogs.map((blog) => (<BlogPreview blog={blog}/> ));
        return blogPreviews;
      }
			// send a response as the blogs as the message
	    return null;
	} catch (err) {
      console.error('Promise rejected with error: ' + err);
      return null;
	}
}

export default function BlogPage() {
  const blogs = getBlogs();

  return (
      <div className= {Styles.blogText}>
        <Header pageTitle='Blog'/>
        { blogs }
      </div>
  );
};
