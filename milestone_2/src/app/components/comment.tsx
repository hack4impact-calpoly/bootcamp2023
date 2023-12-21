import { IComment } from "../database/blogSchema"

type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date){
    const date = new Date(
        time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );
    const formattedDate = date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return formattedDate;
}
    
function Comment({ comment }: CommentProps) { 
    return (
        
        <p>{comment.user}: {comment.comment} {comment.time}</p>
        
    );
}

export default Comment;

