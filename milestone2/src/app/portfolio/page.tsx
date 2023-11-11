import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <main>
        <h1 className="'page-title">
          &quot;All our dreams can come true if we have the courage to pursue
          them.&quot; - Walt Disney
        </h1>
        <div className="project">
          <a href="index.html">
            <Image
              id="webpage-img"
              src="/homepage.png"
              alt="Webpage image"
              width={500}
              height={500}
            />
          </a>
          <div className="project-details">
            <p className="project-name">Portfolio Website</p>
            <p className="project-description">
              A portfolio website made for the Hack4Impact starterpack
            </p>
            <a href="index.html">Learn More</a>
          </div>
        </div>

        <p>Hello World! This is my website.</p>
        <p>This is a sentence.</p>
      </main>
      <footer className="footer">
        © 2023 Tammy Sis Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
