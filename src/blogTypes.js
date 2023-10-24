// read blog posts from the file system and preview in blog.html, linking them to the full post
// import { promises as fs } from "fs";
// import path from "path";
var blogPosts = [
    {
        slug: "blog-1",
        title: "Watermelon",
        date: "2023-10-23",
        description: "How to correctly cut a watermelon",
    },
    {
        slug: "blog-2",
        title: "Tart Froyo",
        date: "2023-10-23",
        description: "Why tart frozen yogurt is the best dessert",
    },
];
function displayBlogPreview() {
    // const blogPosts = await getBlogPosts();
    blogPosts.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    var blogList = document.getElementById("blog-list");
    blogPosts.forEach(function (_a) {
        var slug = _a.slug, title = _a.title, date = _a.date, description = _a.description;
        // postElement.innerHTML = post.description;
        // const title = postElement.querySelector("h1")?.innerHTML;
        // const date = postElement.querySelector("h2")?.innerHTML || "";
        // const description = postElement.querySelector("p")?.innerHTML;
        var link = document.createElement("a");
        link.href = "blog/".concat(slug, ".html");
        link.innerHTML = "Read More";
        var postPreview = document.createElement("div");
        postPreview.classList.add("post-preview");
        postPreview.innerHTML = "\n            <h2 class=\"post-title\">".concat(title, "</h2>\n            <h3 class=\"post-subtitle\">").concat(date, "</h3>\n            <p class=\"post-description\">").concat(description, "</p>\n        ");
        postPreview.appendChild(link);
        if (blogList) {
            blogList.appendChild(postPreview);
        }
    });
}
displayBlogPreview();