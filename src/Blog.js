var blogs = [
    {
        title: "My new blog",
        date: new Date("2023-10-22"),
        description: "I have made a new blog using Hack4Impact bootcamp",
        slug: "../Blog/blog_entry1.html"
    },
    {
        title: "My linear analysis homework",
        date: new Date("2023-10-22"),
        description: "I have really with understanding vector spaces, subspaces, and spans",
        slug: "../Blog/blog_entry2.html"
    },
];
function appendBlogsToContainer(blogs) {
    var container = document.getElementById("blog-container");
    if (container) {
        blogs.forEach(function (blog) {
            var blogElement = document.createElement('div');
            blogElement.innerHTML = "\n                <h2>".concat(blog.title, "</h2>\n                <p>Date: ").concat(blog.date, "</p>\n                <p>").concat(blog.description, "</p>\n                <a href=\"").concat(blog.slug, "\"><button class=\"blog-btn\">Read More</button></a>\n            ");
            container.appendChild(blogElement);
        });
    }
    else {
        console.error('Container not found.');
    }
}
appendBlogsToContainer(blogs);
