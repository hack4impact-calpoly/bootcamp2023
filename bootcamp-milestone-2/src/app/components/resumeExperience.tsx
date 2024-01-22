import React from "react";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import type { ResumeExperience } from "/Users/kellybecker/Desktop/Hack4Impact/bootcamp-project-2023/bootcamp-milestone-2/src/app/resumeExperienceData";

export default function ResumeExperienceEntry({
  company,
  title,
  date,
  text,
}: ResumeExperience) {
  return (
    <div>
      <h3 className="entry-company">{company}</h3>
      <h3 className="entry-title"> {title} </h3>
      <p className="entry-date"> {date}</p>
      <p className="entry-description">{text}</p>
    </div>
  );
}
