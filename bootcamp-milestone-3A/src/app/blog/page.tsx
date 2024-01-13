"use client"
import BlogPreview from "../../../components/blogPreview";
import CommentForm from "../../../components/commentForm";
import { Link } from 'react-router-dom';

type Props = {
  params: { slug: string }
}


async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/singleBlog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function blog({ params }: Props) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  const fetchedBlogs = await fetch("/api/blogs");

  if (!fetchedBlogs.ok) {
    console.error(`Failed to fetch projects. Status: ${fetchedBlogs.status}`);
    return null;
  }

  const blogData = await fetchedBlogs.json();
  const blogs = blogData.blogs;

    return (
      <div>
        <main style={{ textAlign: 'center' }}>
          <h1 style={{ textDecoration: 'underline' }}>Welcome to my Blog</h1>
          <div id="blog-posts" style={{ margin: '50px' }}></div>
        </main>
        {blogs.map((blog : any) => (
          <div key={blog.slug} style={{ textAlign: 'center', fontSize: '25px', paddingBottom: '100px' }}>
            <BlogPreview
              title={blog.title}
              date={blog.date}
              description={blog.description}
              image={blog.image}
              slug={blog.slug}
              comments={blog.comments}
            />
            <div>
              <CommentForm />
            </div>
          </div>
        ))}

       
        
       
    </div>
  );
      
}

