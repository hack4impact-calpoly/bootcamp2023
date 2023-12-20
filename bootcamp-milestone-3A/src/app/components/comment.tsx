import style from '@/app/components/comment.module.css'
type IComment = {
    user: string;
    comment: string;
    time: Date;
  }
type CommentProps = {
    comment: IComment;
}

function parseCommentTime(time: Date){

    let time2=new Date(time)
    let time_as_str=time2.toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit"})
    return time_as_str
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.div}>
            <h4>{comment.user}</h4>
            <div className="time">{parseCommentTime(comment.time)}</div>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;