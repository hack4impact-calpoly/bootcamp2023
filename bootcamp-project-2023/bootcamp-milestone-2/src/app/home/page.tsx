import React from "react";

export default function Home() {
  return (
    <main>
      <div className="about">
        <div className="about-image">
          <img
            src="images/aidan_profile_image.png"
            id="profile-image"
            alt="Aidan Nesbitt"
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
    </main>
  );
}
