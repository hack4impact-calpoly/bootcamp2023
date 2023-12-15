import React from "react";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioEntry } from "/Users/kellybecker/Desktop/Hack4Impact/bootcamp-project-2023/bootcamp-milestone-2/src/app/portfolioData";

export default function PortfolioEntry({
  name,
  image,
  text,
  slug,
}: PortfolioEntry) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones

    <div className="project-details">
      <p className="project-name"> {name} </p>
      <Image src={image} alt="img" width={400} height={300} />
      <p className="project-description">{text}</p>
      <Link href={slug}>Learn More</Link>
    </div>
  );
}
