import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IProj} from "@/database/projectSchema"



export default function ProjectPreview(props: IProj) {
  const link = "/portfolio/" + props.slug;
  console.log(link);
  return (

    <div className="project">
      <div className="project-image">
        <Image src={props.image} alt="img" width={105} height={125} ></Image>
      </div>
      <div className="project-details">
        <Link href={link}><p className="project-name">{props.title}</p></Link>
        <p className="project-description">
          {props.description}
        </p>
      </div>
    </div>
  );
}