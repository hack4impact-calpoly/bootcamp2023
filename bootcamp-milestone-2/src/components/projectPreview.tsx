import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { IProject } from '@/database/projectSchema';


export default function ProjectPreview(props: IProject) {
    return (
        <>
                    <div className="project">
                        <Link href="/">
                            <Image src={props.imagePath} alt="websiteScreenshot" width={500} height={500} />
                        </Link>

                        <div className="project-details">
                            <p className="project-name text-black">{props.title}</p>
                            <p className="project-description text-black">{props.description}</p>
                            <Link href={props.url}> Learn More </Link>
                        </div>
                    </div>
        </>
    );
}