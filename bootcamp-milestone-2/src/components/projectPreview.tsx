import Image from 'next/image';
import Link from "next/link";
import React from 'react';
import { IProject } from '@/database/projectSchema';
import Comment from "@/components/commentPreview";
import AddComment from "@/components/addComment";
import { IComment } from "@/database/blogSchema";
import ProjectSchema from '@/database/projectSchema';

export default function ProjectPreview(props: IProject) 
{
    //console.log('ProjectPreview Slug:', props); 
    return (
      <div className = "projects">
         <h2 style={{ textAlign: 'center' }}>
        <Link href={props.slug}>{props.title}</Link>
         </h2>
         <h3>{props.description}</h3>
        <div>
        <Image className="project-image" src= {props.image} alt="Screenshot" width= {4000} height= {4000} ></Image>
        </div>
      </div>
    );


}
