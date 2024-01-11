"use client"
import BlogPreview from "../../../components/blogPreview";
import CommentForm from "../../../components/commentForm";

type Props = {
  params: { slug: string }
}

export default async function blog(slug: Props) {
  const fetchedBlogs = await fetch("/api/blogs");

  if (!fetchedBlogs.ok) {
    console.error(`Failed to fetch projects. Status: ${fetchedBlogs.status}`);
    return null;
  }

  const blogData = await fetchedBlogs.json();
  const blogs = blogData.blogs;

  var b = null;
  for (const blog of blogs) {
    if (blog.slug === slug) {
      b = blog; // Found the blog with the specified slug
    }
  }

  if (b) {
    return (
      <div style={{ textAlign: 'center', fontSize: '25px', paddingBottom: '100px' }}>
        <BlogPreview
          title={b.title}
          date={b.date}
          description={b.description}
          image={b.image}
          slug={b.slug}
          comments={b.comments}
        />
      </div>
    )
  } else {
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
}

