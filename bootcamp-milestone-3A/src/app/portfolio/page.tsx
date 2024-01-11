"use client"
import style from "./portfolio.module.css";
import ProjectPreview from "../../../components/projectPreview";
import CommentForm from "../../../components/commentForm";

export default async function project() {
  const fetchedProjects = await fetch('/api/projects');
  const fetchedProjComments = await fetch('/api/projComments');
  
  if (!fetchedProjects.ok || !fetchedProjComments.ok) {
    console.error(`Failed to fetch projects. Status: ${fetchedProjects.status}`);
    return null;
  }

  const projData = await fetchedProjects.json();
  const projCommentData = await fetchedProjComments.json();
  const projects = projData.projects;

  if (!projects || !projCommentData.projects) {
    console.error('No projects or project comments found in the response data.');
    return null;
  }

  console.log('projComments:', projCommentData.projects);

  return (
    <div>
      <main style={{ textAlign: "center" }}>
        <p className={style.projectName}>Here are some of my projects!</p>
      </main>
      {projects.map((project: any) => (
        <ProjectPreview
          key={project._id}
          title={project.title}
          date={project.date}
          description={project.description}
          image={project.image}
          slug={project.slug}
        />
      ))}

      <CommentForm />

      <div style={{ textAlign: "center", paddingTop: "20px"}}>
        <h2>Project Comments</h2>
        {projCommentData.projects.map((comment: any, index: number) => (
          <div key={index} className={style.commentContainer} style={{paddingBottom : "100px"}}>
            <p><strong>Comment:</strong></p>
            <p className={style.commentUser}>{comment.user}</p>
            <p className={style.commentText}>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
