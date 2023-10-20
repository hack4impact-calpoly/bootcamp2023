var blogs = [
    {
        title: "Blog Post 1",
        date: "2023-01-15",
        description: "This is the first blog post.",
        slug: "blog-post-1",
    },
    {
        title: "Blog Post 2",
        date: "2023-02-20",
        description: "This is the second blog post.",
        slug: "blog-post-2",
    },
];
function displayBlogs() {
    var container = document.querySelector(".blog-container");
    if (container) {
        blogs.forEach(function (blog) {
            var blogItem = document.createElement("div");
            blogItem.classList.add("blog-item");
            blogItem.innerHTML = "\n                <h2><a href=\"".concat(blog.slug, ".html\">").concat(blog.title, "</a></h2>\n                <p>").concat(blog.date, "</p>\n                <p>").concat(blog.description, "</p>\n            ");
            container.appendChild(blogItem);
        });
    }
}
displayBlogs();
