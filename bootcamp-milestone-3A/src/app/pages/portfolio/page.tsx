import React from "react";
import RootLayout from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css"; // Assuming you have a CSS module for styling
import Project from "./project";

const PortfolioPage = () => {
  return (
    <div>
        <RootLayout>
        <h1>Ethan's Portfolio</h1>
          <div className={styles.project}>

            <Project
                name="Pledge Site"
                description="Utilized Streamlit Python library to create a tool for new SPD members."
                imageUrl="pledge.JPG"
                projectUrl="https://spdslo-pledgev2.streamlit.app/"
              />
              
              <Project
                name="Budget Flow App"
                description="Created solution to process County budget data from Excel into SQL using power automate to process data."
                imageUrl="download.jpeg"
                projectUrl="https://learn.microsoft.com/en-us/training/powerplatform/"
              />

              <div className={styles.itemLink}>
                <Link href="/"></Link>
              </div>
              
              <Link href="/">Learn more</Link>
              
          </div>
        </RootLayout>
      </div>
  );
  
};

export default PortfolioPage;
