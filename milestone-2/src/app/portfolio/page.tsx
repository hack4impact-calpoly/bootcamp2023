'use client'

import {useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";
import globals from "../globals.module.css";

import ReviewsPage from "../../../public/portfolio/ReviewsPage.png";
import GamesImage from "../../../public/portfolio/GamesAndDesigns.png";
import UrbanUnrest from "../../../public/portfolio/UrbanUnrest.png";
import ContainTheStrain from "../../../public/portfolio/ContainTheStrain.png";
import PersonalSite from "../../../public/portfolio/PersonalWebsite.png";


export default function Portfolio() {

  const updateLayout = () => {
    const screenWidth = window.innerWidth;
    const sideBySideContainer1 = document.getElementById("containerToFlip1");
    const sideBySideContainer2 = document.getElementById("containerToFlip2");
    const lineElement = document.getElementById("line");

    if (sideBySideContainer1 && sideBySideContainer2 && lineElement) {
      if (screenWidth < 1000) {
        sideBySideContainer1.style.flexDirection = 'column-reverse';
        sideBySideContainer2.style.flexDirection = 'column-reverse';
        lineElement.style.width = '100%';
        lineElement.style.height = '1px';
        lineElement.style.backgroundColor = 'black';
      } else {
        sideBySideContainer1.style.flexDirection = 'row';
        sideBySideContainer2.style.flexDirection = 'row';
        lineElement.style.width = '1px';
        lineElement.style.height = '200px';
        lineElement.style.backgroundColor = 'black';
      }
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);


  return (
    <>
      <div className={styles.projectSection}>
        <div className={styles.projectContainer}>
          <h1 className={globals.pageTitle}>Welcome to My Portfolio!</h1>
          <div className={styles.pSideBySide}>
            <Link href="https://www.firstleaf.com/reviews" target="_blank">
              <Image
                src={ReviewsPage}
                alt="The Reviews Page of Firstleaf.com"
                width={300}
                height={300}
              />
            </Link>
            <div className={styles.projectDetails}>
              <div className={styles.projectTitle}>
                <h3>
                  Reviews Page Project for Firstleaf Internship using ReactJS,
                  Javascript, and SCSS
                </h3>
              </div>
              <div className={styles.projectLink}>
                <Link href="https://www.firstleaf.com/reviews" target="_blank">
                  See The Site!
                </Link>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Enhanced company SEO by building a new landing page from
                  scratch, w/ multiple custom components & 4 UI breakpoints.
                  Connected to an API to receive content & create a feature
                  flag. Optimized breakpoints by fixing bugs arisen from using
                  old code. Worked in collaboration w/ product designers to
                  implement their ideas, requiring me to communicate issues
                  effectively to them.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className={styles.pSideBySide} id="containerToFlip1">
            <div className={styles.projectDetails}>
              <div className={globals.projectTitle}>
                <h3>
                  My Games & Digital Art Website using Javascript, the P5.js
                  Library, & HTML
                </h3>
              </div>
              <div className={styles.projectLink}>
                <Link
                  href="https://r303vermeulen.github.io/Games&DigitalArt/index.html"
                  target="_blank"
                >
                  See The Site!
                </Link>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Built multiple single player games completely from scratch.
                  Designed captivating game interfaces, digital art pieces, &
                  animations. Created a bot to play for users that evaluates
                  each move by ranking all of the possible game states reachable
                  in 2 additional moves. Implemented code optimization
                  techniques through various data structures to increase
                  efficiency & allow for smooth gameplay.
                </p>
                <br />
              </div>
            </div>
            <Link
              href="https://r303vermeulen.github.io/Games&DigitalArt/index.html"
              target="_blank"
            >
              <Image
                src={GamesImage}
                alt="The Home Page of My Game & Art Site"
                width={300}
                height={300}
              />
            </Link>
          </div>
          <div className={styles.pSideBySide}>
            <Link href="/urbanUnrest">
              <Image
                src={UrbanUnrest}
                alt="Urban Unrest Database Analysis"
                height={300}
                width={300}
              />
            </Link>
            <div className={styles.projectDetails}>
              <div className={globals.projectTitle}>
                <h3>
                  Urban Unrest Database Analysis using SQL, Python, and Jupyter
                  Notebook
                </h3>
              </div>
              <div className={styles.projectLink}>
                <Link href="/urbanUnrest">
                  Check Out The Jupyter Notebook Output!
                </Link>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Devised 5 intriguing questions to analyze an extensive
                  relational database, crafting & deploying complex nested
                  queries for each. Connected to a MySQL server that hosted the
                  database to send query requests & receive the results within a
                  python host. Visually represented results using Matplotlib and
                  Pygal libraries, allowing each subsequent question to build
                  off any observations.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className={styles.pSideBySide} id="containerToFlip2">
            <div className={styles.projectDetails}>
              <div className={globals.projectTitle}>
                <h3>
                  “Contain The Strain” Covid Themed Virtual World Game Using
                  Java and OOP
                </h3>
              </div>
              <div className={styles.projectLink}>
                <Link href="/containTheStrain">Watch This Demo Video!</Link>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Developed a large object-oriented hierarchy focused on
                  inheritance & polymorphism to build a creative game in a
                  virtual world. Integrated pathing algorithms for enemy objects
                  w/ various degrees of efficiency to implement 3 options of
                  game difficulty. Constructed a pseudo-random barrier
                  generation method for each playthrough to have a unique, but
                  fully accessible world.
                </p>
                <br />
              </div>
            </div>
            <Link href="/containTheStrain">
              <Image
                src={ContainTheStrain}
                alt="Contain The Strain Game Image"
                height={300}
                width={300}
              />
            </Link>
          </div>
          <div className={styles.pSideBySide}>
            <div className={styles.projectDetails2}>
              <div className={globals.projectTitle}>
                <h3>Image Decode w/ Parallel Processing Using C & C++</h3>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Constructed an algorithm featuring dynamic memory allocation
                  to decode a compressed .bin file & convert it to a .bmp image.
                  Quadrupled efficiency by utilizing parallel processing, w/
                  each path converting a quarter of the data stream into pixel
                  objects. Engineered various class structures to minimize
                  memory used by malloc, merge the pixel data, & effectively
                  create the bitmap file.
                </p>
                <br />
              </div>
            </div>
            <div id="line"></div>
            <div className={styles.projectDetails2}>
              <div className={styles.projectTitle}>
                <h3>Simulated Dynamic Memory Allocation Using C & C++</h3>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Created a dynamic heap that stimulates DMA by removing the
                  static heap & using BRK & SBRK to relocate the program break.
                  Developed my own 2 functions to manipulate the dynamic heap,
                  emulating the standard library functions malloc and free.
                  Produced a function from scratch to go through the entire
                  dynamic heap & locate the area best fitting for a chunk of new
                  data.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className={styles.pSideBySideEnd}>
            <Link href="/">
              <Image
                src={PersonalSite}
                alt="The Home Page of This Site"
                height={300}
                width={300}
              />
            </Link>
            <div className={styles.projectDetails}>
              <div className={styles.projectTitle}>
                <h3>My Personal Website (This Site) Using HTML & CSS</h3>
              </div>
              <div className={styles.projectLink}>
                <Link href="/">Check Out the Homepage!</Link>
              </div>
              <div className={styles.projectDescription}>
                <p>
                  Designed & implemented a website to showcase my portfolio,
                  demonstrate my technical skills, & host my personal projects.
                  Produced an innovative, unique, & user friendly interface to
                  display my creative identity through photography & build my
                  brand.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
