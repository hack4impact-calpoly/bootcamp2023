var blogs = [
    {
        title: "Blog 1",
        date: "2023-10-01",
        description: "Premier League",
        slug: "blog-1",
    },
    {
        title: "Blog 2",
        date: "2023-10-20",
        description: "NBA",
        slug: "blog-2",
    },
];
function appendBlogsToDOM() {
    var container = document.querySelector('.blog-container');
    if (container) {
        blogs.forEach(function (blog) {
            var blogElement = document.createElement('div');
            blogElement.classList.add('blog');
            blogElement.innerHTML = "\n        <h2>".concat(blog.title, "</h2>\n        <p>Date: ").concat(blog.date, "</p>\n        <p>").concat(blog.description, " <a href=\"").concat(blog.slug, ".html\">Read more</a></p>\n      ");
            container.appendChild(blogElement);
        });
    }
}
document.addEventListener('DOMContentLoaded', appendBlogsToDOM);
