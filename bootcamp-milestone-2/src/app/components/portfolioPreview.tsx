import React from 'react';
import style from './portfolioPreview.module.css'
import type { Portfolio } from '../typings/portfolio';
import Link from "next/link";

export default function PortfolioPreview(props: Portfolio) {
  return (
      <div className="project">
        <Link href={props.slug}>
            <img src={props.picSlug} alt={props.picDescription} width={props.picWidth} height={props.picHeight}/>
        </Link>
        <div className="project-details">
            <p className='project-name'><strong>{props.title}</strong></p>
            <p className='project-description'>{props.description}</p>
            <Link href={props.slug}>Learn More</Link>
        </div>
      </div>
  );
}