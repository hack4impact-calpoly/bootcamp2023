"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createBlogEntry = function (blog) {
    var newDiv = document.createElement("div");
    var smallHeading = document.createElement("h4");
    smallHeading.innerHTML = blog.title;
    var dateElement = document.createElement("p");
    dateElement.innerHTML = "Date: ".concat(blog.date);
    newDiv.appendChild(smallHeading);
    newDiv.appendChild(dateElement);
    newDiv.className = "blog-entry";
    newDiv.addEventListener("click", function () {
        window.location.href = "blogs/" + blog.slug + ".html";
    });
    return newDiv;
};
var populateDomWithBlogs = function (blogs) {
    var div = document.getElementById("blog-container");
    if (!div) {
        return;
    }
    blogs.forEach(function (blog) {
        div.appendChild(createBlogEntry(blog));
    });
};
var blogs = [
    {
        title: "Hello, World!",
        date: "2021-01-01",
        description: "My first blog post.",
        slug: "hello-world",
    },
    {
        title: "Hello, World, Again!",
        date: "2021-01-02",
        description: "My second blog post.",
        slug: "hello-world-again",
    },
];
populateDomWithBlogs(blogs);
