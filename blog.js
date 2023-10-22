var blogs = [
    {
        title: "The Many-Worlds Interpretation",
        date: "2023-10-22",
        author: "Joe Biden",
        description: "An exploration of the Many-Worlds Interpretation of quantum mechanics.",
        slug: "many-worlds-interpretation",
    },
    {
        title: "Time Dilation",
        date: "2023-10-15",
        author: "Robert Echols",
        description: "Understanding the concept of time dilation in the theory of relativity.",
        slug: "time-dilation",
    },
];
window.onload = function () {
    var container = document.querySelector('.blog-container');
    blogs.forEach(function (blog) {
        // Create an anchor element wrapping the blog post
        var blogLink = document.createElement('a');
        blogLink.href = "https://www.youtube.com/embed/Q_fvcvkTcjc?autoplay=1";
        blogLink.className = 'blog-link';
        var blogElement = document.createElement('div');
        blogElement.className = 'blog-post';
        var blogTitle = document.createElement('h2');
        blogTitle.textContent = blog.title;
        var blogAuthor = document.createElement('p');
        blogAuthor.textContent = "Written by: ".concat(blog.author);
        var blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        blogElement.appendChild(blogTitle);
        blogElement.appendChild(blogAuthor);
        blogElement.appendChild(blogDescription);
        // Append the blog post div to the anchor element
        blogLink.appendChild(blogElement);
        // Append the anchor element to the container
        container.appendChild(blogLink);
    });
};
