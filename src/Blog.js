var blogs = [
    {
        title: "My new blog",
        date: "10-21-2023",
        description: "I have made a new blog using Hack4Impact bootcamp",
        slug: "my.calpoly.edu"
    },
    {
        title: "My linear analysis homework",
        date: "10-21-2023",
        description: "I have really with understanding vector spaces, subspaces, and spans",
        slug: "my.calpoly.edu"
    },
];
function appendBlogsToContainer(blogs) {
    var container = document.getElementById('blog-container');
    if (container) {
        blogs.forEach(function (blog) {
            var blogElement = document.createElement('div');
            blogElement.innerHTML = "\n                <h2>".concat(blog.title, "</h2>\n                <p>Date: ").concat(blog.date, "</p>\n                <p>").concat(blog.description, "</p>\n                <a href=\"").concat(blog.slug, "\" target=\"_blank\">Read More</a>\n            ");
            container.appendChild(blogElement);
        });
    }
    else {
        console.error('Container not found.');
    }
}
