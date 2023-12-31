import { IComment } from "../database/portfolioSchema";

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

const getComments = async (api_url: string) => {
  const response = await makeRequest(api_url);
  const cleanedComments = cleanComments(response[0]["comments"]);
  return cleanedComments;
};

export default getComments;
