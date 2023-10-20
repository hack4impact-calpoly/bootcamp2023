type comment = {
  message: string;
};

const comments: comment[] = [
  {
    message: "testing commment section"
  }
];

const commentInput = document.querySelector(".comment-input") as HTMLInputElement;
const commentButton = document.querySelector(".comment-button") as HTMLButtonElement;
const commentList = document.querySelector(".comment-list") as HTMLUListElement;

commentButton.addEventListener("click", () => {
  const commentContent = commentInput.value;
  if (commentContent) {
    const newComment: comment = {
      message: commentContent
    };
    
    addCommentToList(newComment);
    commentInput.value = "";
  }
});

function addCommentToList(comment: comment) {
  const li = document.createElement("li");
  li.textContent = comment.message;
  commentList.appendChild(li);
}
