import React from 'react';
import style from './blogPreview.module.css'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/app/typings/project'

export default function ProjectPreview(props: Project) {
  return (
      <div className='project'>
            <h2 className="project-title">{props.title}</h2>
            <h3 className="project-date">{props.date}</h3>
            <Link href={props.slug}>
                    <Image 
                        src={props.imgSlug}
                        width={props.imgWidth}
                        height={props.imgHeight}
                        alt={props.imgDesc}>
                    </Image>
            </Link>
            <p className="project-description">{props.description}</p>
            <Link href={props.slug}> Learn More </Link>
      </div>
  );
}
