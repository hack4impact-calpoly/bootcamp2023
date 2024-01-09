/* @jsxImportSource @emotion/react */
import style from "./portfolio.module.css";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";
import ProjectPreview from "../../../components/projectPreview";
import projComment from "@/database/projectCommentSchema"
import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";

async function getProjects() {
  await connectDB();
  try {
    const blogs = await Project.find().sort({ date: -1 }).orFail();
    console.log("All Projects:", blogs);
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}

async function getProjComments() {
  await connectDB();
  try {
    const blogs = await projComment.find().orFail();
    console.log("All Projects:", blogs);
    return blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}

async function updateComments(commentID : ObjectId, updatedData : Object) {
  await connectDB();
  
  try {
    const comment = await projComment.findById(commentID);

    if (!comment) {
      throw new Error('Blog not found');
    }

    // Update the blog post with the new data
    comment.set(updatedData);

    // Save the updated blog post
    const updatedComment = await comment.save();

    console.log('Blog updated successfully:', updatedComment);
    return updatedComment;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
}

// export default async function project() {
//   const projects = getProjects();
//   const name = '';
//   const message = '';

//   const blogIdToUpdate = new ObjectId();
//   const projComments = await getProjComments();

//   // Map over the projComments array and create JSX elements for each comment
//   const renderedComments = projComments.map((comment) => (
//     <div key={comment._id}>
//       <p>User: {comment.user}</p>
//       <p>Comment: {comment.comment}</p>
//     </div>
//   ));

//   if (projects) {
//     return (
//       <div>
//         <main style={{ textAlign: "center" }}>
//           <p className={style.projectName}>Here are some of my projects</p>
//         </main>
//         {(await projects).map((project) => (
//           <ProjectPreview
//             key={project._id}
//             title={project.title}
//             date={project.date}
//             description={project.description}
//             image={project.image}
//             slug={project.slug}
//           />
//         ))}

//         <form className={style.contactForm} method="POST" action="/api/submit-form">
//           <p style={{textAlign: "center", fontSize: "25px", paddingTop: "100px",}}>
//             Comments on Portfolio!
//           </p>

//           <div className={style.formGroup}>
//             <label htmlFor="name">Name:</label>
//             <textarea style={{color: "black", height : "20px" }}>
//             </textarea>
//           </div>

//           <div>
//             <label htmlFor="message-box">Message:</label>
//             <textarea className={style.textareaField} style={{ color: "black" }}>
//             </textarea>
//           </div>

//           <div className={style.submitButton} style={{ borderColor: "white", borderStyle: "double" }}>
//             <input type="submit" id="submit" />
//           </div>
//         </form>

        
//         <div style={{textAlign : "center", paddingTop : "100px"}}>
//           {renderedComments}
//         </div>
//       </div>
//     );
//   }
// }


export default function project() {
  // Step 1: Add state variables for handling user input
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  // Step 4: Provide a type for the state variable
  const [projComments, setProjComments] = useState<Comment[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const blogIdToUpdate = new ObjectId();

  // Step 2: Use useEffect to fetch projects and comments
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);

        const fetchedProjComments = await getProjComments();
        setProjComments(fetchedProjComments);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <main style={{ textAlign: "center" }}>
        <p className={style.projectName}>Here are some of my projects</p>
      </main>
      {projects.map((project) => (
        <ProjectPreview
          key={project._id}
          title={project.title}
          date={project.date}
          description={project.description}
          image={project.image}
          slug={project.slug}
        />
      ))}

      <form className={style.contactForm} method="POST" action="/api/submit-form">
        <p style={{ textAlign: "center", fontSize: "25px", paddingTop: "100px" }}>
          Comments on Portfolio!
        </p>

        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ color: "black", height: "20px" }}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="message-box">Message:</label>
          <textarea
            name="Message"
            className={style.textareaField}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ color: "black" }}
          ></textarea>
        </div>

        <div className={style.submitButton} style={{ borderColor: "white", borderStyle: "double" }}>
          <input
            type="submit"
            id="submit"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const response = await fetch('/api/submit-form', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ Name: name, Message: message }),
                });

                if (response.ok) {
                  const updatedProjComments = await getProjComments();
                  setProjComments(updatedProjComments);
                  setName('');
                  setMessage('');
                } else {
                  console.error('Error creating projComment:', response.statusText);
                }
              } catch (error) {
                console.error('Error creating projComment:', error);
              }
            }}
          />
        </div>
      </form>

      <div style={{ textAlign: "center", paddingTop: "100px" }}>
        {projComments.map((comment) => (
          <div>
            <p>User: {comment.user}</p>
            <p>Comment: {comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}