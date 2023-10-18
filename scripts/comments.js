function handleSubmit(event) {
    event.preventDefault();
    var container = document.querySelector(".comment-container");
    if (!container)
        return;
    //get name and description
    var nameElement = document.querySelector("#name");
    var descElement = document.querySelector("#description");
    //set name and description
    var name = nameElement.value;
    var description = descElement.value;
    //clear form inputs
    nameElement.value = "";
    descElement.value = "";
    //create blog-item element
    var element = document.createElement("div");
    element.className = "comment-item";
    element.innerHTML = "<div class=comment-name>".concat(name, "</div>\n                        <div class=comment-description>").concat(description, "<div>");
    //
    container.appendChild(element);
}
var form = document.querySelector(".comment-form");
if (form)
    form.addEventListener("submit", handleSubmit);
