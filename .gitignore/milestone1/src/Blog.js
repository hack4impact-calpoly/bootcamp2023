var blogs = [
    {
        title: "Food Blog",
        date: "10-19-2023",
        desc: "Bloggin my Foods",
        slug: "foodBlog",
    },
    {
        title: "Personal Blog",
        date: "10-X-2023",
        desc: "A blog for my innermost feelings",
        slug: "personalBlog",
    },
];
function renderBlogs() {
    var containerElements = document.getElementsByClassName('blogContainer');
    if (containerElements.length == 0) {
        console.error('Container element with class name "blogContainer" not found in the DOM.');
    }
    var blogContainer = containerElements[0];
    blogs.forEach(function (blog) {
        var blogElement = document.createElement('div');
        blogElement.classList.add('blog-entry'); // Add a class for styling, if needed
        blogElement.innerHTML = "\n            <h2>".concat(blog.title, "</h2>\n            <p>Date: ").concat(blog.date, "</p>\n            <p>").concat(blog.desc, "</p>\n            <a href=\"").concat(blog.slug, ".html\">Read more</a>\n        ");
        // Append the blog element to the container
        blogContainer.appendChild(blogElement);
    });
}
// Call the renderBlogs function when the DOM is fully loaded
window.onload = function () {
    renderBlogs();
};
