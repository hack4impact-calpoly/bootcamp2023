import React from "react";
import style from "./portfolioPreview.module.css";
import Link from "next/link";
import Image from "next/image";
import { IPortfolio } from "../../database/portfolioSchema";

export default function PortfolioPreview(props: IPortfolio) {
  return (
    <>
      <div className={style.about_box}>
        <div className={style.container} id="portfolio-container">
          <Link href={`portfolio/${props.slug}`}>
            <Image src={props.img} alt="img" width={500} height={500} />
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
