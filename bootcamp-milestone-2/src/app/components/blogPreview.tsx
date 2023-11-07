import React from "react";
import { Blog } from "../blogData";
import Link from "next/link";
import style from "./blogPreview.module.css";

export default function BlogPreview({ name, location, link }: Blog) {
  return (
    <div>
      <Link href={link}>
        <h3> {name} </h3>
      </Link>
      <p>{location}</p>
      <div>
      </div>
    </div>
  );
}
