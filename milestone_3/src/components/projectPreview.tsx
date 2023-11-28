import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IProj} from "@/database/projectSchema"



export default function ProjectPreview(props: IProj) {
  return (

    <div className="project">
      <div className="project-image">
        <Link href={props.link}><Image src={props.image} alt="img" width={105} height={125} ></Image></Link>
      </div>
      <div className="project-details">
        <p className="project-name">{props.title}</p>
        <p className="project-description">
          {props.description}
        </p>
      </div>
    </div>
  );
}