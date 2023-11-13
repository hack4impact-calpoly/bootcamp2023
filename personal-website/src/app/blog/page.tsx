import Link from "next/link";
import Navbar from "../navbar";
import Footer from "../footer";

export default function BlogPage() {
  type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
  };

  const blogs: Blog[] = [
    {
      title: "Happy Halloween",
      date: "Oct. 23 2023",
      description: "A little early, but Happy Halloween!",
      slug: "/blog/Happy_Halloween",
    },
    {
      title: "First Blog",
      date: "Oct. 23 2023",
      description:
        "First blog entry! Super excited to have finished my own personal website, huge thanks to Cal Poly's Hack4Impact Starter Pack for helping me make this wesbite. Hopefully this website will be a living document and will receive new updates in the future!",
      slug: "/blog/First_Blog",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <h1 className="page-title">Blog</h1>
        <div className="blog-component">
          {blogs.map((blog) => (
            <article className="blog-entry">
              <div className="blog-entry-details">
                <Link href={blog.slug} className="blog-title">
                  {blog.title}
                </Link>
                <h2 className="blog-date">{blog.date}</h2>
              </div>
              <p className="blog-description">{blog.description}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
