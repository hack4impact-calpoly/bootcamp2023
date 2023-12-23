// function parseCommentTime(time: Date) {
//   const newFormatTime = time.toISOString();
//   return <p>{newFormatTime}</p>;
// }

export default function CommentPreview({
  user,
  comment,
  time,
}: CommentPreviewProps) {
  return (
    <div>
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  );
}
