import style from "./aboutPreview.module.css";
import React from "react";
import { AboutInfo } from "../aboutData";
import Image from "next/image";

export default function AboutMePreviews(props: AboutInfo) {
  return (
    <div className={style.about_box}>
      <div className={style.container}>
        <Image src={props.image} alt="img" width={500} height={500} />
      </div>
      <div className={style.about_text}>
        <h5 className={style.about_title}>{props.title}</h5>
        <p className={style.about_description}>{props.description}</p>
      </div>
    </div>
  );
}
