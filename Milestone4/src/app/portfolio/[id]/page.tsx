"use client";
import { useState, useEffect, useCallback } from "react";
import { IProject } from "@/app/database/projectSchema";
import Comment from "@/app/components/Comment";
import axios from "axios";
import Image from "next/image";
export default function ProjectEntry({ params }: { params: { id: number } }) {
  const [project, setProject] = useState<IProject | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    /*
        Handles form submission by clearing form and appending comment
        */
    e.preventDefault();

    try {
      //get form submission event
      const formElement = e.target as HTMLFormElement;

      // Access values directly from the form elements
      const nameInput =
        formElement.querySelector<HTMLInputElement>('input[name="name"]');
      const descriptionText = formElement.querySelector<HTMLTextAreaElement>(
        'textarea[name="description"]'
      );

      // Explicitly cast e.target to HTMLFormElement
      const newComment = {
        user: nameInput?.value || "",
        comment: descriptionText?.value || "",
        date: new Date(),
      };
      //clear form data
      if (nameInput) nameInput.value = "";
      if (descriptionText) descriptionText.value = "";

      //Add comment to db and update UI
      const response = await axios.post(
        `/api/portfolio/${params.id}`,
        newComment
      );
      if (response.status === 200) {
        const updatedProject: IProject = response.data;
        setProject(updatedProject);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const fetchProjectData = useCallback(async () => {
    /*
        This function requests data for a project specified by id in url and updates page.
        */
    try {
      //get project data
      const response = await axios.get(`/api/portfolio/${params.id}`);
      if (response.status === 200) {
        const projectData: IProject = await response.data;

        //update page
        setProject(projectData);
      } else {
        console.error("Failed to fetch project data");
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  }, [params.id]);

  useEffect(() => {
    fetchProjectData();
  }, [params.id, fetchProjectData]);

  return (
    <main>
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Image
            src={project.content}
            alt="img"
            width={400}
            height={300}
          ></Image>
          <h2>Comments</h2>
          {project.comments?.map((c) => (
            <Comment
              key={c.date.toString()}
              comment={{
                _id: c._id,
                user: c.user,
                comment: c.comment,
                date: c.date,
              }}
            />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}

      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" />
        <textarea
          id="description"
          placeholder="Enter Comment"
          name="description"
        ></textarea>
        <input type="submit" />
      </form>
    </main>
  );
}
