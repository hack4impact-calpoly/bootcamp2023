var blog = [
    {
        title: "The Intersection of Arts and Computing",
        date: "October 23, 2023",
        description: "A brief article on virtual, augmented, and mixed reality.",
        slug: "blog_entry1.html",
    },
    {
        title: "What My Dance Journey Has Taught Me",
        date: "October 23, 2023",
        description: "Summarizing my dance journey and what lessons I've learned.",
        slug: "blog_entry2.html",
    },
];
function blog_iteration() {
    var blog_container = document.getElementsByClassName("blog")[0];
    blog.forEach(function (blog) {
        var blog_element = document.createElement("div");
        console.log(blog_container);
        blog_element.innerHTML =
            "<h2><a href = ".concat(blog.slug, ">").concat(blog.title, "</a></h2>") +
                "<p>".concat(blog.date, "</p>") +
                "<p>".concat(blog.description, "</p>");
        blog_container.appendChild(blog_element);
    });
}
blog_iteration();
