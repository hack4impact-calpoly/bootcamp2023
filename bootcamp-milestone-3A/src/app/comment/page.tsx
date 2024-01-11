import IComment from "@/commmentData"

type CommentProps = {
  comment: IComment;
}
function parseCommentTime(time: Date) {
  if (!isValidDate(time)) {
    return 'Invalid date';
  }

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(time);
  const day = time.getDate();
  const hours = time.getHours() % 12 || 12; 
  const minutes = time.getMinutes();
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';

  const formattedTime = `${monthName} ${day} ${time.getFullYear()} ${hours}:${minutes}${ampm}`;
  return formattedTime;
}

function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

