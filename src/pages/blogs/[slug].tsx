import { GetServerSideProps, NextPage } from 'next';
import mongoose from 'mongoose';
import Blog, { IBlog } from '@/database/blogSchema';
import connectDB from '@/database/helpers/db';

interface BlogPageProps {
  blog: IBlog | null;
}

const BlogPage: NextPage<BlogPageProps> = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Render the blog post using the data
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <article>{blog.content}</article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;

  if (!slug) {
    return { props: { blog: null } };
  }

  await connectDB();

  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return { props: { blog: null } };
  }

  return { props: { blog: JSON.parse(JSON.stringify(blog)) } };
};

export default BlogPage;