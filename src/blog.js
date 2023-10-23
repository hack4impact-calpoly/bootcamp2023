var blogList = [
    {
        title: "Cinque Terre",
        date: "10/21/2023",
        description: "My first weekend trip exploring another part of Italy!",
        slug: "cinque-terre.html",
    },
    {
        title: "Tuscany",
        date: "10/21/2023",
        description: "The program-organized event, covering Flourence and Pisa",
        slug: "tuscany.html",
    },
];
document.addEventListener("DOMContentLoaded", function () {
    var parent = document.querySelector("#blog-list");
    // const parent = document.getElementById("container_id");
    blogList.forEach(function (blog) {
        var createDiv = document.createElement("div");
        createDiv.className = "blog-entry";
        var createTitle = document.createElement("a");
        var createDate = document.createElement("p");
        var createDescription = document.createElement("p");
        createTitle.href = blog.slug;
        createTitle.textContent = blog.title;
        createDate.textContent = blog.date;
        createDescription.textContent = blog.description;
        createDiv.append(createTitle);
        createDiv.append(createDate);
        createDiv.append(createDescription);
        if (parent) {
            parent.append(createDiv);
        }
    });
});
var populateBlog = function () { };
