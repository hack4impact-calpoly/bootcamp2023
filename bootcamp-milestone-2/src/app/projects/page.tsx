import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./projects.module.css";

export default function Portfolio() {
  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>Portfolio</h1>
        <div>
          <Link href="./home">
            <Image
              className={style.projectImage}
              height={150}
              width={250}
              src={"/website.jpg"}
              alt="Personal website project!"
            ></Image>
            <div className={style.projectDetails}>
              <div className="projectInfo">
                <p className={style.projectName}>My Personal Website</p>
                <p className={style.projectDescription}>
                  This is a website I built from scratch to showcase some of my
                  experience and work!
                </p>
              </div>
              <div id={style.projectMore}>
                <Link href="./home">Learn More</Link>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
