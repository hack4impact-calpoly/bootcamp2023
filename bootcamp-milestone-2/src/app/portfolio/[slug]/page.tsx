import CommentPreview from "@/components/CommentPreview/CommentPreview";
import PostComment from "@/components/PostComment/PostComment";
import { Key } from "react";

async function getProject(slug: string) {
  try {
    const res = await fetch(`https://hack4impact-asarelcastellanos.vercel.app/api/portfolio/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`Error: ${err}`);
    return null;
  }
}

export default async function Project({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  try {
    const project = await getProject(slug);
    const comments = project.comments;

    if (!project) {
      return (
        <div>
          <p>Project not found</p>
        </div>
      );
    } else if (project) {
      return (
        <main className="flex flex-col px-20 overflow-y-scroll text-white justify-center">
          <h3 className="text-center text-2xl">{project.title}</h3>
          <p className="my-5 text-[#adb5bd] font-light">{project.description}</p>
          <h6 className="text-center text-2xl">Comments</h6>
          <PostComment slug={slug} />
          {comments?.map(
            (
              comment: { user: string; comment: string; time: Date },
              index: Key | null | undefined
            ) => (
              <CommentPreview
                key={index}
                user={comment.user}
                comment={comment.comment}
                time={comment.time}
              />
            )
          )}
        </main>
      );
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    return (
      <div>
        <p>Error fetching project.</p>
      </div>
    );
  }
}
