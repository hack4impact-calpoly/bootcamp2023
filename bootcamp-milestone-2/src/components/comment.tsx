import { IComment } from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
}

function parseCommentTime(time: Date){
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  
  return time.toLocaleString('en-US', options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(new Date(comment.time))}</span>
    </div>
  );
}

export default Comment;