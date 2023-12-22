var pics = [
    {
        title: "JKimg1",
        description: "Nice weather in Seoul~",
    },
    {
        title: "JKimg2",
        description: "Cafe Hopping :P",
    },
    {
        title: "JKimg3",
        description: "Went to a palace ^^",
    },
    {
        title: "JKimg4",
        description: "Came with just my carry-on filled...",
    },
];
function displayPics() {
    var picsList = document.getElementById("visuals");
    pics.forEach(function (_a) {
        var description = _a.description, title = _a.title;
        var createPost = document.createElement("div");
        createPost.classList.add("create-img");
        createPost.innerHTML = "\n        <img width=\"200px\" height=\"250px\" src=\"../blog/imgs/".concat(title, ".JPG\">\n        <p class=\"caption\">").concat(description, "<p>\n    ");
        if (picsList) {
            picsList.appendChild(createPost);
        }
    });
}
displayPics();
