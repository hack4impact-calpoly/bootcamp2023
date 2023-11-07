import React from "react";
import aidan_profile_image from "public/aidan_profile_image.png";
import Image from "next/image";
import blogs from "../../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Home() {
  return (
    <main>
      <div className="about">
        <div className="about-image">
          <Image
            src={aidan_profile_image}
            id="profile-image"
            alt="Aidan Nesbitt looking at a Redwood tree"
          />
        </div>
        <div className="about-text">
          <div className="center-hero-content">
            <h1 className="page-title" id="hero">
              Hey There!
            </h1>
            <p>
              I'm <span className="green-emphasis">Aidan</span>, a
              <em> fourth-year Graphic Communication student (UX)</em> with a
              <em> Computer Science minor</em>, and I'm from Tustin, California!
            </p>
            <p className="underline">
              To the left is a picture of me in the Redwoods from my roadtrip up
              to Oregon this past summer!
            </p>
          </div>
        </div>
      </div>
      <div className="blogsPreviewHolder">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
            image={blog.image}
          />
        ))}
      </div>
    </main>
  );
}
