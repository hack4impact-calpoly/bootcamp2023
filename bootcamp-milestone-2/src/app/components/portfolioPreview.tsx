import React from "react";
import styles from "./portfolioPreview.module.css";
import Image from "next/image";
import type { Project } from "../projectData";
import Link from "next/link";

export default function ProjectPreview(props: Project) {
  return (
    <div className={styles.project}>
        <Link href={props.slug}>
                <Image src={props.image} width={700} height={500} alt="project image"/>
        </Link>
        <div className={styles.projectdetails}>
            <strong className={styles.projectname}>{props.name}</strong>
            <p className={styles.projectdescription}>{props.description}</p>
            <Link href={props.slug}>Learn More</Link>
        </div>
    </div>
  );
}