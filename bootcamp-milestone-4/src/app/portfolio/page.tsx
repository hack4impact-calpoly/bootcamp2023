"use client";
import React, { useEffect, useState } from "react";
import styles from "./portfolio.module.css";
import CommentSection from "../components/comment/CommentSection";
import { IComment } from "../database/blogSchema";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";
// Import API call function if necessary, e.g., getProjectsAPI

interface ProjectData {
  name: string;
  description: string;
  link: string;
  image: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.project}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.name} />
      </a>
      <div className={styles.projectdetails}>
        <p className={styles.projectname}>{project.name}</p>
        <p className={styles.projectdescription}>{project.description}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolio/`
        );
        const data = await response.json();
        setProjects(data);
      } catch (err) {}
    };

    const fetchComments = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/portfolio/comment/`
        );
        const data = await response.json();
        setComments(data);
      } catch (err) {
        toast.error("Failed to retrieve comments.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
    fetchComments();
  }, []);

  async function createComment(
    commentText: string,
    username: string
  ): Promise<boolean> {
    if (!username || !commentText) {
      return false;
    }

    const formData = new FormData();
    formData.append("comment", commentText);
    formData.append("user", username);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/portfolio/comment`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to create comment");
      }

      const data = await res.json();
      setComments(data);
      toast.success("Comment created!");
      return true;
    } catch (err) {
      toast.error("Failed to create comment");
      return false;
    }
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <div className={styles.portfolio}>
        <h1 className={styles.portfoliotitle}>Portfolio</h1>
        <div className={styles.projectsgrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <hr />
      <CommentSection comments={comments} createComment={createComment} />
    </div>
  );
}
