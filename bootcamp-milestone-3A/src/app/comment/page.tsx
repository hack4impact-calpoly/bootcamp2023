import IComment from "@/commmentData"

type CommentProps = {
  comment: IComment;
}

function parseCommentTime(time: Date) {
  // Extract each element of the Date object so that we can concatinate it later in proper format
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(time);
  const day = time.getDate();
  const hours = time.getHours() % 12 || 12; 
  const minutes = time.getMinutes();
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  // proper formatting for string 
  const formattedTime = `${monthName} ${day} ${time.getFullYear()} ${hours}:${minutes}${ampm}`;
  return formattedTime;
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

