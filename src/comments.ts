function handleSubmit(event: Event) {
  event.preventDefault();
  const container = document.querySelector(".comment-container");
  if (!container) return;

  //get name and description
  const descElement = document.querySelector(
    "#description"
  ) as HTMLInputElement;

  //set name and description
  const description: string = descElement.value;

  //clear form inputs
  descElement.value = "";

  //create comment-item element
  const element = document.createElement("div");
  element.className = "comment-item";
  element.innerHTML = `<div class="comment-description">${description}<div>`;

  //append new element to comment container
  container.appendChild(element);
}

const form = document.querySelector(".comment-form");
if (form) form.addEventListener("submit", handleSubmit);
