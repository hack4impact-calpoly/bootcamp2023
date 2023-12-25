function parseCommentTime(time: Date) {
  const myTime = new Date(
    time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  const formattedTime = myTime.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return formattedTime;
}

export default function CommentPreview({
  user,
  comment,
  time,
}: CommentPreviewProps) {
  return (
    <div className="py-2.5">
      <p className="text-[#adb5bd] font-light">Comment From: {user}</p>
      <p className="text-[#adb5bd] font-light">{comment}</p>
      <p className="text-[#adb5bd] font-light">{parseCommentTime(time)}</p>
    </div>
  );
}
