import React from "react";
import styles from "./portfolioProject.module.css"
import Image from "next/image"
import Link from "next/link"

import type { Project } from "../../database/legacyData/portfolioData.ts"; // This helps us expect the aspects of project as our props

export default function PortfolioProject(props: Project) {
    const width = 350
    const height = (props.height / props.width * width)

    return (
        <div className={styles.project}>
            <Image className={styles.image} src={props.image} alt={props.image_alt} width={width} height={height}></Image>
            <div className={styles.content}>
                <Link className={styles.link} href={props.link}> <h1 className={styles.title}>{props.title}</h1>  </Link>
                <h3 className={styles.description}>{props.description}</h3>
            </div>
        </div>
    )
}