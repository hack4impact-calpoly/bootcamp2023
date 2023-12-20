import React from "react";
import BlogPage from "../../components/blogPreview";
import blogSchema from "../../database/blogSchema";

type Props = {
  slug: string;
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
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

export default async function Blog({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  if (blog == null) {
    return (
      <main>
        <p>Blog not found.</p>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h1>{blog.title}</h1>
        </div>
      </main>
    );
  }
}
