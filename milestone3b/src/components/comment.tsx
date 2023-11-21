import { IComment } from "@/database/commentSchema";

type CommentProps = {
    comment: IComment;
};

{
    /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(date: Date) {
    /*
    Parses MongoDB/TS date object
    :param time: date object
    :return: string reprsenting date
    */
    // Convert to Los Angeles time
    const losAngelesDate = new Date(
        date.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );

    // Format the date as desired
    const formattedDate = losAngelesDate.toLocaleString("en-US", {
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
        <div className="comment-item">
            <div className="comment-date">{parseCommentTime(comment.date)}</div>
            <div className="comment-user">{comment.user}</div>
            <div className="comment-description">{comment.comment}</div>
        </div>
    );
}

export default Comment;
