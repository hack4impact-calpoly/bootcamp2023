"use client";
import React from "react";
import "./styles/index.css";
import "./globals.css";

function toggleGallery(galleryId) {
  const galleries = document.querySelectorAll(".image-gallery");
  galleries.forEach((gallery) => {
    gallery.style.display = "none";
  });
  const gallery = document.getElementById(galleryId);
  gallery.style.display = "block";
}

function Home() {
  return (
    <html lang="en">
      <head>
        <title>Carson's Website</title>
      </head>
      <body>
        <main>
          <div className="pg-title">
            <h1>Hello Reader!</h1>
          </div>
          <div className="about">
            <div className="about-image">
              <img
                src="me.png"
                alt="me"
                width="195"
                height="300"
                className="about-image-img"
              />
            </div>
            <div className="about-text">
              <h2>About Me</h2>
              <p>Hey all, my name is Carson Gabler.</p>
              <p>
                I am a second-year Computer Science major from{" "}
                <strong>Portland, Oregon</strong>. Here are some things I did
                this summer!
              </p>
              <p>
                I{" "}
                <strong>
                  <a href="#" onClick={() => toggleGallery("gallery-soccer")}>
                    love soccer
                  </a>
                </strong>
                . I have played it my whole life
              </p>
              <p>
                I was also able to{" "}
                <strong>
                  <a href="#" onClick={() => toggleGallery("gallery-gym")}>
                    work out
                  </a>
                </strong>{" "}
                with all my friends.
              </p>
              <p>
                I went to visit my good friends at Oregon State.{" "}
                <strong>
                  <a href="#" onClick={() => toggleGallery("gallery-beavs")}>
                    GO BEAVS
                  </a>
                </strong>
              </p>
              <p>
                I attended a couple{" "}
                <strong>
                  <a href="#" onClick={() => toggleGallery("gallery-concerts")}>
                    concerts
                  </a>
                </strong>{" "}
                and{" "}
                <strong>
                  <a
                    href="#"
                    onClick={() => toggleGallery("gallery-music-festivals")}
                  >
                    music festivals
                  </a>
                </strong>
                .
              </p>
              <p>
                Finally, I was able to{" "}
                <strong>
                  <a href="resume.html">intern</a>
                </strong>{" "}
                with my local high school and my favorite teacher. Focusing in{" "}
                <em>software development, testing algorithms, and teaching!</em>
              </p>
            </div>
          </div>
          <div className="image-gallery" id="gallery-soccer">
            <img src="soccer.JPG" alt="Soccer" />
          </div>
          <div className="image-gallery" id="gallery-gym">
            <img src="workout.jpeg" alt="Working Out" />
          </div>
          <div className="image-gallery" id="gallery-beavs">
            <img src="osu.jpg" alt="GO BEAVS" />
          </div>
          <div className="image-gallery" id="gallery-concerts">
            <img src="bea.jpg" alt="Concerts" />
          </div>
          <div className="image-gallery" id="gallery-music-festivals">
            <img src="festival.jpeg" alt="Music Festivals" />
          </div>
          <div className="gallery-text">
            <h4 className="image-gallery-text">
              Click an image to check out my image gallery!
            </h4>
          </div>
        </main>
      </body>
    </html>
  );
}

export default Home;
