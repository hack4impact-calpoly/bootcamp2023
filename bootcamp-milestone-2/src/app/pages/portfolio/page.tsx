import React from "react";
import RootLayout from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css"; // Assuming you have a CSS module for styling

const PortfolioPage = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className={styles.project}>
        <div className={styles.itemLink}>
          <Link href="/">
           
              
            
          </Link>
        </div>
        <div className={styles.projectDetails}>
          <p className={styles.projectName}>Personal Website</p>
          <p>Designed to show knowledge of web development.</p>
          <Link href="/">
            Learn more
          </Link>
        </div>
      </div>
      </div>
  );
  
};

export default PortfolioPage;
