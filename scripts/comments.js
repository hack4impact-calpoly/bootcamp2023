function handleSubmit(event) {
    event.preventDefault();
    var container = document.querySelector(".comment-container");
    if (!container)
        return;
    //get name and description
    var descElement = document.querySelector("#description");
    //set name and description
    var description = descElement.value;
    //clear form inputs
    descElement.value = "";
    //create comment-item element
    var element = document.createElement("div");
    element.className = "comment-item";
    element.innerHTML = "<div class=comment-description>".concat(description, "<div>");
    //append new element to comment container
    container.appendChild(element);
}
var form = document.querySelector(".comment-form");
if (form)
    form.addEventListener("submit", handleSubmit);
