"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createBlogCard = function (blog) {
    var blogInfoContainer = document.createElement("div");
    blogInfoContainer.className = "blog-info-container";
    var blogTitle = document.createElement("h2");
    blogTitle.innerHTML = blog.title;
    var blogDate = document.createElement("h4");
    blogDate.innerHTML = blog.date;
    var blogDescription = document.createElement("h5");
    blogDescription.innerHTML = blog.description;
    blogInfoContainer.appendChild(blogTitle);
    blogInfoContainer.appendChild(blogDate);
    blogInfoContainer.appendChild(blogDescription);
    blogInfoContainer.addEventListener("click", function () {
        window.location.href = "blog_pages/" + blog.slug + ".html";
    });
    return blogInfoContainer;
};
var addBlogsToDom = function (blogs) {
    var container = document.getElementById("blog-container");
    if (!container) {
        return;
    }
    blogs.forEach(function (blog) {
        container.appendChild(createBlogCard(blog));
    });
};
var blogs = [
    {
        title: "I Lose My Fantasy Draft",
        date: "10-15-2023",
        description: "It's really as bad as it sounds.",
        slug: "blog1"
    },
    {
        title: "The Loss Streak Continues",
        date: "10-22-2023",
        description: "It's actually way worse than it sounds.",
        slug: "blog2"
    }
];
addBlogsToDom(blogs);
