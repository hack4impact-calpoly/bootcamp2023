import React from "react";
import styles from "./blogPreview.module.css";
import Image from "next/image";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <>
      <main>
        <div className={styles.blog_div}>
          <h1>{props.title}</h1>
          <p>{props.date}</p>
          <p>{props.description}</p>
          <Image src={props.image} alt="Beans" width={500} height={500} />
        </div>
      </main>
      <footer className="footer">
        © 2023 Tammy Si&apos;s personal website | all rights reserved
      </footer>
    </>
  );
}
