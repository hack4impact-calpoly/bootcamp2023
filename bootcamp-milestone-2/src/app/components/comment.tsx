import {IComment} from "../typings/comment"
import React from 'react'

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}


{/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/}
function parseCommentTime(time: Date){
	const time_str=time.toDateString()
    return time_str
}

function Comment({ user, comment, time }: IComment) {
    return (
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>
            <span>{parseCommentTime(time)}</span>
        </div>
    );
}

export default Comment;