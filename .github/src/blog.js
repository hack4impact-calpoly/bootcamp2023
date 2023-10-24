var blogs = [
    {
        title: "Sample Blog 1",
        date: "2023-10-23",
        description: "This is the first sample blog description.",
        slug: "sample-blog-1",
    },
    {
        title: "Sample Blog 2",
        date: "2023-10-24",
        description: "This is the second sample blog description.",
        slug: "sample-blog-2",
    },
];
function appendBlogs() {
    var blogContainer = document.getElementById("blog-list-container");
    if (blogContainer) {
        blogs.forEach(function (blog) {
            var blogElement = document.createElement("div");
            blogElement.classList.add("blog-entry");
            blogElement.innerHTML = "\n              <h1>".concat(blog.title, "</h1>\n              <p>Date: ").concat(blog.date, "</p>\n              <p>").concat(blog.description, "</p>\n              <a href=\"").concat(blog.slug, ".html\">Read More</a>\n          ");
            blogContainer.appendChild(blogElement);
        });
    }
}
appendBlogs();
