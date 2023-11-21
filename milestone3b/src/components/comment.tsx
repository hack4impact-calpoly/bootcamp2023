import { IComment } from "@/database/blogSchema";

type CommentProps = {
    comment: IComment;
};

{
    /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(time: Date) {
    /*
    Parses MongoDB/TS date object
    :param time: date object
    :return: string reprsenting date
    */
    const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    const losAngelesTime = time.toLocaleString("en-US", options);
    console.log(losAngelesTime);
    return losAngelesTime;
}

function Comment({ comment }: CommentProps) {
    return (
        <div className="comment-item">
            <div className="comment-date">{parseCommentTime(comment.time)}</div>
            <div className="comment-user">{comment.user}</div>
            <div className="comment-description">{comment.comment}</div>
        </div>
    );
}

export default Comment;
