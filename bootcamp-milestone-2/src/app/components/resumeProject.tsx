import React from "react";
import "../globals.css";
import type { ResumeProject } from "/Users/kellybecker/Desktop/Hack4Impact/bootcamp-project-2023/bootcamp-milestone-2/src/app/resumeProjectData";

export default function ResumeProjectEntry({
  name,
  date,
  text,
}: ResumeProject) {
  return (
    <div>
      <h3 className="entry-title">{name}</h3>
      <p className="entry-info"> {date}</p>
      <p className="entry-description"> {text} </p>
    </div>
  );
}
