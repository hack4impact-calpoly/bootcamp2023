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
    <div className="py-2.5">
      <p className="text-[#adb5bd] font-light">Comment From: {user}</p>
      <p className="text-[#adb5bd] font-light">{comment}</p>
    </div>
  );
}
