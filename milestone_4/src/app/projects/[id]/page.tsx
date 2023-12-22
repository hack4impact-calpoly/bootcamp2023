"use client";
import Comment from "@/components/comment";
import type { IComment } from "@/database/commentSchema";
import { IProject } from "@/database/projectSchema";
import styles from './projectEntry.module.css'; 
import { useEffect, useState } from "react";


export default function ProjectEntry({ params } : { params: { id: number } }) {
  const [project, setProject] = useState<IProject | null>(null); 
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
    
  const [new_comment, setComment] = useState({
      name: "",
      message: "",
  });
    
  async function postComment(Id: number, commentData: { user: string; comment: string; date: Date }) {
      const apiUrl = `http://localhost:3000/api/projects/${Id}/comments`;
      try {
          const res = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });
    
        if (!res.ok) {
          throw new Error('Failed to post comment');
        }
    
        const data = await res.json();
        setProject(data);
        console.log('Comment posted:', data);
        return data;
      } catch (err) {
        console.error('Error posting comment:', err);
        return null;
      }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = event.target;
      if (name === "name") {
          setComment({name: value, message: new_comment['message']});
      }

      else {
          setComment({name: new_comment['name'], message: value});
      }

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const commentData = {
        user: new_comment.name,
        comment: new_comment.message,
        date: new Date(),
      };
      await postComment(params.id, commentData).then((result) => {
          setStatusMessage('Comment sent successfully!');
              setComment({ name: "", message: "" });
              setIsSubmitting(false);
          }, (error) => {
              setStatusMessage('Failed to send comment. Please try again later.');
              setIsSubmitting(false);
          });
  };

  async function getProject(id: number) {
      try {
          const project = `http://localhost:3000/api/projects/${id}`;
          const res = await fetch(project, {
              cache: "no-store",	
          });
  
          if (!res.ok) {
              throw new Error("Failed to fetch blog");
          }
          const data = await res.json();
          setProject(data);
          return data;
  
      } catch (err: unknown) {
          console.log(`error: ${err}`);
          return null;
      }
  }

  useEffect(()=>{
    getProject(params.id);
  }, [params.id]);

  if (project){
      return (
        <main>
          <div className={styles.container}>
            <img src={project.image} alt={project.name} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <ul className={styles.pointList}>
                <li>{project.point1}</li>
                <br></br>
                <li>{project.point2}</li>
                <br></br>
                <li>{project.point3}</li>
                <br></br>
              </ul>
            </div>
          </div>
          <h2>Comments</h2>
              <>
              {project.comments?.map((c: IComment) => (
                  <Comment
                      key={(c._id)}
                      comment={{
                          _id: c._id,
                          user: c.user,
                          comment: c.comment,
                          date: c.date,
                      }}
                  />
              ))}
              </>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Your Name"
                        className={styles.formField}
                        onChange={handleChange}
                        value={new_comment.name}
                        required
                        />
                    <textarea
                        name="message"
                        placeholder="Your Comment"
                        className={styles.formField}
                        value={new_comment.message}
                        onChange={handleChange}
                        required
                        />
                    <input
                        type="submit"
                        value={isSubmitting ? "Sending..." : "Send"}
                        className={styles.submitButton}
                        disabled={isSubmitting}
                        />
                    {statusMessage && <div className={styles.statusMessage}>{statusMessage}</div>}
                </form>
        </main>


      );
    }
    else {
      return (
          <h1> Loading </h1>
      );
  }
}
