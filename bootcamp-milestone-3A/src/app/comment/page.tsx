// import IComment from "/Users/holdenevers/Hack4ImpactBootCamp/bootcamp-project-2023/bootcamp-milestone-3A/src/commmentData"


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

export default function Comment( comment : any) {
  return (
    <div>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

