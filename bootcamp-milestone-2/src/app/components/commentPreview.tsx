import {IComment} from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
};


function parseCommentTime(time: Date) {
  var theTime = JSON.parse(String(time))
  return theTime
}

function Comment({ comment }: CommentProps) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;