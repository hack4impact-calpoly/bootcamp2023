import React from "react";

export default function Blog1() {
  return (
    <div>
      <main>
        <h1 className="page-title">Blog 1</h1>
        <h2 className="section-title">Date: 10-17-2023</h2>
        <div className="about-image">
          <img
            src="blogpost1image.jpeg"
            alt="A picture of 'North East Headlands'."
          />
        </div>
        <p className="entry-info">
          Hi everybody! This is my first blog post. Above is a painting I just
          had to analyze for my art class.
        </p>
      </main>
    </div>
  );
}
