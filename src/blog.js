var blogs = [
    {
        title: "Japan and Korea",
        date: "03-20-2023",
        description: "...",
        slug: "",
    },
    {
        title: "Thailand and Singapore",
        date: "03-20-2023",
        description: "...",
        slug: "",
    },
];
var blog = document.getElementById('blog-list');
blogs.forEach(function (Blog) {
    var createBlog = document.createElement('li');
    var addBlog = blog.appendChild(createBlog);
});
