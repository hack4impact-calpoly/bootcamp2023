"use client";
import React, { useEffect, useState } from "react";
import style from "./portfolio.module.css";
import CommentSection from "../components/commentSection";
import { IComment } from "../database/commentSchema";
import type { IProject } from "../database/projectSchema";
import Image from "next/image";
import Link from "next/link";

type ProjectProps = {
  project: IProject;
};

function Project({ project }: ProjectProps) {
  return (
    <main className={style.projectDetails}>
      <h2 className={style.projectTitle}>{project.title}</h2>
      <div className={style.projectImage}>
        <Link href={`${project.slug}`}>
          <Image src={project.image} alt="" height={150} width={250} />
        </Link>
      </div>
      <p className={style.projectDescription}>{project.description}</p>
      <Link href={`${project.slug}`}>
        <p className={style.projectMore}>Learn more</p>
      </Link>
    </main>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError("");
      try {
        const projectsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolio`
        );
        if (!projectsRes.ok) {
          throw new Error(
            `Failed to fetch projects. Status: ${projectsRes.status}`
          );
        }
        const projectsData = await projectsRes.json();
        console.log(projectsData);
        setProjects(projectsData);
      } catch (err) {
        setError("Failed to fetch projects.");
        console.error("Error fetching projects:", err);
      }

      try {
        const commentsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolio/comment`
        );
        if (!commentsRes.ok) {
          throw new Error(
            `Failed to fetch comments. Status: ${commentsRes.status}`
          );
        }
        const commentsData = await commentsRes.json();
        setComments(commentsData);
      } catch (err) {
        setError("Failed to fetch comments.");
        console.error("Error fetching comments:", err);
      }
    };

    fetchData();
  }, []);

  async function createComment(
    commentText: string,
    user: string
  ): Promise<boolean> {
    if (!user || !commentText) {
      return false;
    }

    const formData = new FormData();
    formData.append("comment", commentText);
    formData.append("user", user);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolio/comment`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) {
        throw new Error("Failed to create comment.");
      }
      const data = await res.json();
      setComments(data);
      return true;
    } catch (err) {
      setError("Failed to create comment.");
      console.error("Error creating comment:", err);
      return false;
    }
  }

  if (error) {
    console.error("Error:", error);
    return <p>Error loading projects.</p>;
  }

  return (
    <div>
      <h1 className={style.pageTitle}>Portfolio</h1>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      <div className={style.comments}>
        <h2 className={style.commentTitle}>Comments</h2>
        <CommentSection comments={comments} createComment={createComment} />
      </div>
    </div>
  );
}
