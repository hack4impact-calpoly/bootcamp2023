import styles from "./page.module.css";
import Link from "next/link";
import "@/global.css";
import "@/app/full.css"
import naturepic from "/public/images/nature.jpeg"
import Image from "next/image";

// Home page

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="page-title">ABOUT ME</h1>
        <div className="about">
          <div className="about-image">
            <Image src={naturepic.src} alt="Tree in a beautiful sunset" width={500} height={500}></Image>
          </div>
          <div className="about-text">
            <p>
              I am <strong>Dhanvi Ganti</strong>, and I am a{" "}
              <strong>freshman</strong> at{" "}
              <strong>CalPoly San Luis Obispo</strong>.
            </p>
            <p>
              As a{" "}
              <em>
                <strong>computer science</strong>
              </em>{" "}
              major, I like using my laptop to build fun scripts and I'm into
              card magic.
            </p>
          </div>
          </div>
      </main>

      <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
    </div>
  );
}
