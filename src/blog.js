var blogs = [
    {
        title: "The Competitive Space of Grace Hopper",
        date: "10-23-2023",
        description: "My experience as a Grace Hopper attendee, this year.",
        slug: "blog1",
    },
    {
        title: "Must Watch Halloween Movies",
        date: "10-24-2023",
        description: "A complete list of spooky films to watch for the holiday.",
        slug: "blog2",
    },
];
function blogPreview() {
    var container = document.querySelector(".blog-container");
    if (container) {
        blogs.forEach(function (blog) {
            var element = document.createElement("div");
            element.classList.add("blog-item");
            element.innerHTML = "\n      <h2><a href=\"".concat(blog.slug, ".html\">").concat(blog.title, "</a></h2>\n      <p>").concat(blog.date, "</p>\n      <p>").concat(blog.description, "</p>\n    ");
            container.appendChild(element);
        });
    }
}
blogPreview();
