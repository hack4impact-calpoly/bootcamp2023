var blogData = [
    {
        title: "Introduction to Typescript",
        date: new Date("2023-10-16"),
        description: "Working on milestone 1 assignment.",
        slug: "./blog/blog-entry1.html"
    },
    {
        title: "Weather",
        date: new Date("2023-10-16"),
        description: "The weather was very nice today.",
        slug: "./blog/blog-entry2.html"
    },
];
function populateBlog(blogs) {
    //Find div
    var container = document.querySelector(".blog-container");
    if (!container) {
        return;
    }
    blogs.forEach(function (blog) {
        var entry = document.createElement("div");
        entry.className = "blog-item";
        entry.innerHTML = "<h2>".concat(blog.title, "</h2>\n                            <div>").concat(blog.date, "</div>\n                            <p>").concat(blog.description, "</p>\n                            <a href=\"").concat(blog.slug, "\"><button class=\"blog-btn\">Read More</button></a>");
        container.appendChild(entry);
    });
}
populateBlog(blogData);
