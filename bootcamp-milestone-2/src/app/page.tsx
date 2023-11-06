import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {/* content goes here */}
      {/* TODO: remove nav section here and use component instaed */}
      <nav className="navbar">
        <h1 className="logo">
          <a href="index.html">Sean M. Nguyen</a>
        </h1>
        <ul className="nav-list">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="portfolio.html">Portfolio</a>
          </li>
          <li>
            <a href="resume.html">Resume</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="about">
          <div className="about-image">
            <Image
              src={"/TempPFP.jpg"}
              alt="Profile Picture"
              width={200}
              height={150}
            ></Image>
          </div>
          <div className="about-text">
            <h1 className="page-title">About</h1>
            <p>
              Hello, my name is <strong>Sean Nguyen (he/him/his)!</strong> I am
              currently a<em>second year </em>student at Cal Poly San Luis
              Obispo majoring in
              <strong>Computer Science </strong>with a concentration in AI and
              Machine Learning.
            </p>
            <p>
              This quarter, I am studying Software Engineering abroad in the
              city where all roads lead, <em>Rome!</em>
            </p>
            <p>
              Aside from academics, I love music, ranging from classical piano
              to contempoary chord sheets, swimming—or anything aquatic,
              really—and expanding my flavor palette. Oh, and I can make{" "}
              <em>pho</em> :)
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        © 2023 Sean M. Nguyen | All Rights Reserved
      </footer>
    </div>
  );
}
