import { IComment } from "../database/portfolioSchema";

//sets revalidation time to 0 (is meant to fix vercel caching)
export const revalidate = 0;

const makeRequest = async (api_url: string) => {
  try {
    const res = await fetch(`${api_url}/api/portfolio/getcomments`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch portfolio comments");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
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

type commentsResponse = {
  comments: IComment[];
};

const getComments = async (api_url: string) => {
  const response = await makeRequest(api_url);
  if (response) {
    const responseObject: commentsResponse = response[0]; // if response not null, grab it's first (and only) object, which is of type comments response
    const commentsList: IComment[] = responseObject.comments; // grab the list of comments from the responseObject
    const cleanedComments = cleanComments(commentsList); // clean the comments
    return cleanedComments;
  }

  //return empty list if response is null
  return [];
};

export default getComments;
