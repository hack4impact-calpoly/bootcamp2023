import { IComment } from '../database/blogSchema';
import { format } from "date-fns";

export type CommentProps = {
    comment: IComment;
}


function parseCommentTime(time: Date) {

    const formattedDate = format(time, "MMMM do, yyyy H:mma");
    return formattedDate;

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