var blogList = [
    {
        title: "The Fellowship Of The Ring",
        date: "10/21/2023",
        description: "The first movie in the Trilogy",
        slug: "resume.html",
    },
    {
        title: "The Two Towers",
        date: "10/21/2023",
        description: "The second movie in the Trilogy",
        slug: "index.html",
    },
];
document.addEventListener("DOMContentLoaded", function () {
    var parent = document.querySelector("#container_id");
    // const parent = document.getElementById("container_id");
    blogList.forEach(function (blog) {
        var createDiv = document.createElement("div");
        createDiv.className = "blog_entry";
        var createLink = document.createElement("a");
        createLink.href = blog.slug;
        createLink.textContent = blog.description;
        createDiv.append(createLink);
        if (parent) {
            parent.append(createDiv);
        }
    });
});
var populateBlog = function () { };
