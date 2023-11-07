import React from 'react';
import BlogPreview from '../components/recipePreview';
import { Blog } from '../components/blog'; // Import the Blog type
import blogData from '../data/blogs.json'; // Import the JSON data
import Header from '../components/header';
import Layout from '../layout';
import Styles from './blog.module.css';

const Home: React.FC = () => {
  const blogItems: Blog[] = blogData;
  
  return (
    <Layout>
      <div className= {Styles.blogText}>
        <Header pageTitle='Blog'/>
        {blogItems.map((blog) => (
          <BlogPreview blog={blog} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
