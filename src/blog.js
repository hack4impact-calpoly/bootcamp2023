var blogs = [
    {
        title: "favorite cheese",
        date: new Date('2023-10-26'),
        description: "A blog of the best cheese i've tried",
        slug: "cheeseBlog.html"
    },
    {
        title: "favorite ducks",
        date: new Date('2023-10-26'),
        description: "A blog of all my favorite ducks",
        slug: "ducksBlog.html"
    }
];
function displayBlogsInContainer(blogs) {
    var container = document.querySelector('.blog-container');
    if (!container) {
        console.error('Container element not found.');
        return;
    }
    blogs.forEach(function (blog) {
        var blogElement = document.createElement('div');
        blogElement.classList.add('blog-entry');
        blogElement.innerHTML = "\n          <h2>".concat(blog.title, "</h2>\n          <p>Date: ").concat(blog.date.toDateString(), "</p>\n          <p>").concat(blog.description, "</p>\n          <a href=\"").concat(blog.slug, "\">Read More</a>\n        ");
        container.appendChild(blogElement);
    });
}
displayBlogsInContainer(blogs);
