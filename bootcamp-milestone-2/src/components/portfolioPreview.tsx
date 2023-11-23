import React from "react";
import type { IPortfolio } from "../database/portfolioSchema";
import style from "@/app/home.module.css";
import Image from "next/image";

//<Image src={props.image} alt="img" width={500} height={300}></Image>

export default function PortfolioPreview(props: IPortfolio) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.about}>
      <div className={style.abouttext}>
        <h3>{props.title} </h3>
        <div>
          <p>{props.description}</p>
          <p>Posted on {props.date.toDateString()}</p>
          <Image
            src={"/" + props.image}
            alt="img"
            width={500}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
  }
