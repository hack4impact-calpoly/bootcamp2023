var blogs = [
    {
        title: "My first blog!",
        date: "Oct 1, 2023",
        description: "This is my first ever blog! Welcome everyone!",
        slug: "first-blog",
    },
    {
        title: "My second blog!",
        date: "Oct 1, 2023",
        description: "This is my second ever blog! Welcome everyone!",
        slug: "second-blog",
    },
    {
        title: "My third blog!",
        date: "Oct 1, 2023",
        description: "This is my third ever blog! Welcome everyone!",
        slug: "third-blog",
    },
    {
        title: "My fourth blog!",
        date: "Oct 1, 2023",
        description: "This is my fourth ever blog! Welcome everyone!",
        slug: "fifth-blog",
    },
];
function createBlogs() {
    blogs.forEach(function (blog) {
        // get the blog div
        var blogDiv = document.getElementById("blogs");
        // create the parent div and add a text node
        var parentDiv = document.createElement("div");
        parentDiv.innerHTML =
            blog.title + "\n" + blog.date + "\n" + blog.description;
        // insert parent div into the blog div
        blogDiv === null || blogDiv === void 0 ? void 0 : blogDiv.appendChild(parentDiv);
    });
}
createBlogs();
