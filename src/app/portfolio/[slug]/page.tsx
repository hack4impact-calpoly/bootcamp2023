import Comment from "../../components/comment";
import type { IComment } from "@/database/commentSchema";
import type { IProject } from "@/database/projectSchema";

type Props = {
  params: { slug: string };
};

async function getProject(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolio/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err: unknown) {
    // console.log(`error: ${err}`);
    return null;
  }
}

export default async function Project({ params: { slug } }: Props) {
  const project = await getProject(slug);

  if (project) {
    return (
      <>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className="comment_container">
          <h2>Comments</h2>
          {/* You need to modify this part based on how comments are associated with projects */}
          {/* Here, I'm assuming there is a comments property in the project object */}
          {project.comments.map((comment: IComment, index: number) => (
            <Comment
              key={index}
              comment={{
                user: comment.user,
                comment: comment.comment,
                date: comment.date,
              }}
            />
          ))}
        </div>
      </>
    );
  } else {
    return <h1>404 Project NOT FOUND</h1>;
  }
}
