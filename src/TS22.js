var pictures = [
    {
        title: "TSimg1",
        description: "Traditional outfit at a palace~",
    },
    {
        title: "TSimg2",
        description: "It was so pretty >.<",
    },
    {
        title: "TSimg3",
        description: "!!",
    },
    {
        title: "TSimg4",
        description: "POV: you try a bidet for the first time",
    },
];
function displayPics() {
    var picsList = document.getElementById("visuals");
    pictures.forEach(function (_a) {
        var description = _a.description, title = _a.title;
        var createPost = document.createElement("div");
        createPost.classList.add("create-img");
        createPost.innerHTML = "\n          <img width=\"200px\" height=\"250px\" src=\"../blog/imgs/".concat(title, ".JPG\">\n          <p class=\"caption\">").concat(description, "<p>\n      ");
        if (picsList) {
            picsList.appendChild(createPost);
        }
    });
}
displayPics();
