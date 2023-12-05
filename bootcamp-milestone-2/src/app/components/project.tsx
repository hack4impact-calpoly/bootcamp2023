import React from "react";
import type { IProject } from "../database/projectSchema";
import Image from "next/image";
import Link from "next/link";
// import style from "./projects.module.css";

export default function Projects(props: IProject) {
  return (
    <div>
      <main>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link href={props.slug}><Image src={props.image} alt="" height={200} width={200}></Image></Link>
      </main>
    </div>
  );
}
