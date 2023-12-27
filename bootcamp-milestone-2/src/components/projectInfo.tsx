import React, { PropsWithRef } from "react";
import style from "./projectInfo.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  order: number;
};
export default function ProjectInfo(props: Props) {
  console.log("image url: ");
  console.log(props.image);
  if (props.order % 2 == 0) {
    return (
      <div className={style.project}>
        <Link href={props.slug} target="_blank">
          <Image
            className={style.projectImage}
            src={"/Drip-Map.jpg"}
            alt={props.alt}
            width="250"
            height="300"
          ></Image>
        </Link>
        <div className={style.projectDetails}>
          <p className={style.projectName}>{props.title}</p>
          <p className={style.projectDescription}>{props.description}</p>
          <Link href={props.slug} target="_blank">LEARN MORE</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.project}>
        <div className={style.projectDetails}>
          <p className={style.projectName}>{props.title}</p>
          <p className={style.projectDescription}>{props.description}</p>
          <Link href={props.slug} target="_blank">LEARN MORE</Link>
        </div>
        <Link href={props.slug} target="_blank">
          <Image
            className={style.projectImage}
            src={props.image}
            alt={props.alt}
            width="250"
            height="300"
          ></Image>
        </Link>
      </div>
    );
  }
}
