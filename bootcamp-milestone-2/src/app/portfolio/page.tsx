import React from "react";
import PortfolioCard from "../../components/PortfolioCard";
import { IComment } from "../../database/portfolioSchema";
import { Project } from "../../database/portfolioSchema";
import getProjectsArray from "../../helpers/getProjectsArray";
import getComments from "../../helpers/getComments";
import PortfolioCommentSection from "@/components/PortfolioCommentSection";

export const metadata = {
  title: {
    default: "My Portfolio",
  },
};

type PortfolioData = {
  projects: Project[];
  comments: IComment[];
  // Other properties if there are more in the actual data
};

//for some reason, you can't pass the comments with their id props because it needs to be converted from json or something like that
//removing the id prop before passing gets rid of the 'Maximum call stack exceeded error'
const cleanComments = (comments: IComment[]): IComment[] => {
  return comments.map((comment) => {
    // Access each comment and modify as needed
    const modifiedComment: IComment = {
      user: comment.user,
      comment: comment.comment,
      time: comment.time,
    };
    return modifiedComment;
  });
};

export default async function Portfolio() {
  const projects = await getProjectsArray(); //returns array of projects

  const commentsRetrieved: IComment[] | null = await getComments(); //may be null within this function's scope
  const commentsNotNull: IComment[] = commentsRetrieved ?? []; //ensures it is not null
  const commentsFiltered = cleanComments(commentsNotNull); //filters the _id prop from each comment which was causing issues

  return (
    <main className="portfolioCommentContainer">
      <div className="portfolio-content">
        <h1 className="page-title">Portfolio</h1>
        {/* Only renders the project content if project data retrieved successfully*/}
        {projects && projects.length > 0 ? (
          <div className="generalContent">
            <div>
              {projects.map((project) => (
                <PortfolioCard
                  key={project.slug}
                  date={project.date}
                  projectName={project.projectName}
                  description={project.description}
                  slug={project.slug}
                  image={project.image}
                  imagealt={project.imagealt}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="generalContent">
            <p className="contentNotLoaded">
              There was an issue loading portfolio content.
            </p>
          </div>
        )}
      </div>
      {/* Only display a comment section if there is a valid portfolio, even if the comment section is empty, as a user can still submit a comment*/}
      {projects ? (
        <PortfolioCommentSection comments={commentsFiltered} />
      ) : (
        <div className="generalContent">
          <p className="contentNotLoaded">
            There was an issue loading portfolio content.
          </p>
        </div>
      )}
    </main>
  );
}
