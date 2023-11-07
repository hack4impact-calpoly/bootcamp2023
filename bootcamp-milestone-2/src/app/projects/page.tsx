import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./projects.module.css";

export default function Portfolio() {
  return (
    <div className={style.projects}>
      <main>
        <h1 className="pageTitle">Portfolio</h1>
        <div className="project">
          <Link href="./home">
            <Image
              className="projectImage"
              height={150}
              width={100}
              src={"/website.jpg"}
              alt="Personal website project!"
            ></Image>
            <div className="projectDetails">
              <div className="projectInfo">
                <p className="projectName">My Personal Website</p>
                <p className="projectDescription">
                  This is a website I built from scratch to showcase some of my
                  experience and work!
                </p>
              </div>
              <div id="projectMore">
                <Link href="./home">Learn More</Link>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
