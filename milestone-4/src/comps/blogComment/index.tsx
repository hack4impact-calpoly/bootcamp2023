//import styles from './index.module.tsx';
import CommentType from "../../types/commentType";

function BlogComment(props: CommentType) {
  return (
    <div>
      <p>User: {props.user}</p>
      <p>Comment: {props.comment}</p>
      <p>Date: {String(props.date).slice(0, 15)}</p>
    </div>
  );
}

export default BlogComment;
