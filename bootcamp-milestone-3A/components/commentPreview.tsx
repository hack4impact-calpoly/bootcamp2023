import React from 'react';
import IComment from '@/commmentData';
import parseCommentTime from "@/app/comment/page";

export default function commentPreview(comment : IComment ) {
  if (!comment) {
    return (
      <div>No Comment Found</div>
    );
  }
  
  return (
    <div>
    <h4>User: {comment.user}</h4>
    <p>Comment: {comment.comment}</p>
      <span >Time: {parseCommentTime({comment})}</span>
    </div>
  );
}