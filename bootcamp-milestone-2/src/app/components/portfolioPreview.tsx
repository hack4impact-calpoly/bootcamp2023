import React from "react";
import style from "./portfolioPreview.module.css";
import Link from "next/link";
import { Project } from "../portfolioData";
import Image from "next/image";

export default function PortfolioPreview(props: Project) {
  return (
    <>
      <div className={style.about_box}>
        <div className={style.container} id="portfolio-container">
          <Link href={props.slug}>
            <Image src={props.image} alt="img" width={500} height={500} />
          </Link>
        </div>
        <div className={style.about_text}>
          <h5 className={style.project_name}>{props.title}</h5>
          <p className={style.project_description}>{props.description}</p>
          <Link href={props.slug}>Learn More</Link>
        </div>
      </div>
    </>
  );
}
