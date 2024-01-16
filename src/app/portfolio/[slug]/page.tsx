'use client';
import React, { useState } from "react";
import Image from "next/image";
import ProjectPreview from "@/components/projectPreview";
import  {IProject} from "@/database/projectSchema";
import Comment from "@/components/comment";
import { IComment } from "@/database/blogSchema";

type Props = {
    params: {slug:string}
}

export default async function Page({params:{slug}}:Props) {

  async function getProject(slug: string){
    const res = await fetch(`/apis/portfolio/${slug}`,
    {
        cache:"no-store"
    })
    if (res.ok){
        return res.json()
    }
    return null
}

  const [newProject, setProject] = useState<IProject | null>(null);
	
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        /*
        Handles form submission by clearing form and appending comment
        */
        e.preventDefault();
    
        try {
          //get form submission event
          const formElement =  e.target as HTMLFormElement;
    
          // Access values directly from the form elements
          const nameInput = 
            formElement.querySelector<HTMLInputElement>(
              'input[name="name"]'
            );
          const descriptionText =
            formElement.querySelector<HTMLTextAreaElement>(
              'textarea[name="description"]'
            );
  
          // Explicitly cast e.target to HTMLFormElement
          const newComment: IComment = {
            user: nameInput?.value || "",
            comment: descriptionText?.value || "",
            time: new Date()
          };
    
            //Add comment to db and update UI
            const response = await fetch(
              `/apis/portfolio/${slug}/comment`, {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(newComment)
              });
    
            
            // //clear form data
            // if (nameInput) nameInput.value = "";
            // if (descriptionText) descriptionText.value = "";
    
            if (response.status === 200)
              setProject({
                title: newProject?.title || "",
                slug: newProject?.slug || "",
                date: newProject?.date || new Date(),
                description: newProject?.description || "",
                content: newProject?.content || "",
                comments: newProject
                  ? [...newProject.comments, newComment]
                  : [newComment]
              });
            window.location.reload();
              
        } catch (err) {
          console.error(err);
        }
      }

    const project = await getProject(slug);
  console.log(project);
  if (project) {
    return (
      <main>
        <h1 className="page-title">Portfolio</h1>
		<h1>{project.title}</h1>
        <h3>{project.date}</h3>
		<Image src = {project.content} alt="blog picture" height={350} width={550}></Image>
		<p>{project.description}</p>
        <div className="comments">
            <h2>Comments</h2>
        {project.comments?.map((comment : IComment, index: number) => (
                        <Comment {...comment}/>
                    ))}
        </div>
        
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required/>
                <textarea
                id="description"
                placeholder="Comment"
                name="description"
                ></textarea>
                <input type="submit" />
            </form>
        </div>
      </main>
    );
  } 
  else {
    return (
      <main>
        <h1>Page Not Found</h1>
      </main>
    );
  }
}