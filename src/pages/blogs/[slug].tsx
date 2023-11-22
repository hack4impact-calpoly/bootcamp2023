import { GetServerSideProps, NextPage } from 'next';
import Blog, { IBlog } from '@/database/blogSchema';
import connectDB from '@/database/helpers/db';
import style from '@/styles/blog.module.css'
import Comment from '@/components/Comment';

interface BlogPageProps {
  blog: IBlog | null;
}

const BlogPage: NextPage<BlogPageProps> = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={style.blogContainer}>
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <article>{blog.content}</article>
      <section>
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments</p>
        )}
      </section>
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