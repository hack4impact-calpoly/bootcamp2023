import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
    project_image: JSX.Element;
    project_name: string;
    project_description: string;
    project_link: string;



}

export default function PageTitle(props: Props) {
  return (

    <div className="project">
      <div className="project-image">
        <Link href={props.project_link}>{props.project_image}</Link>
      </div>
      <div className="project-details">
        <p className="project-name">{props.project_name}</p>
        <p className="project-description">
          {props.project_description}
        </p>
      </div>
    </div>
  );
}