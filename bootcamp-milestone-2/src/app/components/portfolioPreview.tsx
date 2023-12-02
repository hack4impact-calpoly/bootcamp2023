import React from "react";
import style from "./portfolioPreview.module.css";
import Image from "next/image";
import { Portfolio } from "@/portfolioData";

export default function PortfolioPreview(props: Portfolio) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.div}>
      <h3> {props.projectName} </h3>
      <div>
        <Image src="/props.image" alt="img" width={500} height={500}></Image>
        <p>{props.projectDescription}</p>
        <p>{props.learnMore}</p>
      </div>
    </div>
  );
}
