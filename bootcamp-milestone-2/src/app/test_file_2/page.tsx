import React from 'react';
import Layout from '../layout';
import BlogPage from '../components/recipeBlogPage';
import blogData from '../data/blogs.json'; // Import the JSON data

const Home: React.FC = () => {
  const desiredSlug = 'test_file_2';

  const specificBlog = blogData.find((blog) => blog.slug === desiredSlug);

  return (
    <Layout>
    <div>
      {specificBlog && <BlogPage blog={specificBlog} />}
    </div>
    </Layout>
  );
};

export default Home;
