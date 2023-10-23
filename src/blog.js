var blogs = [
    {
        title: "Japan and Korea",
        date: "03-20-2023",
        description: "...",
        slug: "",
    },
    {
        title: "Thailand and Singapore",
        date: "03-20-2023",
        description: "...",
        slug: "",
    },
];
function displayBlog() {
    var blogList = document.getElementById("blog-list");
    blogs.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        var link = document.createElement("a");
        link.href = "blog/".concat(slug, ".html");
        link.innerHTML = "Read More";
        var createPost = document.createElement("div");
        createPost.classList.add("create-post");
        createPost.innerHTML = "\n            <h2 class=\"post-title\">".concat(title, "<h2>\n            <h3 class=\"post-subtitle\"> ").concat(date, "<h3>\n            <p class=\"post-description\">").concat(description, "<p>\n        ");
        createPost.appendChild(link);
        if (blogList) {
            blogList.appendChild(createPost);
        }
    });
}
displayBlog();
