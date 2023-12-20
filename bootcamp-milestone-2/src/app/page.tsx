import Image from "next/image";
import React from "react";
import style from "./about.module.css";

export default function Home() {
  return (
    <div>
      <main className="aboutPage">
        <h1 className="pageTitle">Introduction</h1>
        <div className={style.about}>
          <div className={style.aboutImage}>
            <Image
              className={style.img}
              width={250}
              height={300}
              src={"/headshot.jpg"}
              alt="Me"
            ></Image>
          </div>
          <div className={style.aboutText}>
            <p id="aboutText">
              Hi there! I'm <strong>Kayla Tran</strong>. I am originally from
              Oakland, CA, but I now reside in San Luis Obispo (SLO) where I am
              a <em>software engineering major</em> in my <em>third year</em> at
              Cal Poly SLO.
              <br />
              My journey is fueled by my passion for creativity and innovation!
              Right now, I am dedicated to earning my degree. Whether I'm
              studying or hanging out with friends, I always strive to put out
              into the world what I want in return.
              <br />
              <strong>What you'll find on this site:</strong> <br /> my
              portfolio, resume, contact, and a blog.
              <br />
              Please explore and share any thoughts with me on the content! I
              would love to hear from you.
              <br /> <em>Thank you</em> for stopping by, and I hope you enjoy
              your stay!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
