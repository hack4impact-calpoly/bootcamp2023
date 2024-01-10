import React from "react";
import style from './blogPreview.module.css'
import { IPortfolio } from "../../database/portfolioSchema";

import Link from "next/link";
import Image from "next/image";

export default function PortfolioPreview(props: IPortfolio) {
  return (
    <>
      <div>
        <div>
          <Link href={`portfolio/${props.slug}`}>
            <Image src={props.img} alt="img" width={900} height={500} />
          </Link>
        </div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}