var blogs = [
    {
        title: "Example Milestone 1",
        date: new Date("2023-10-23"),
        description: "My first blog",
        slug: "https://www.javatpoint.com/typescript-date-object",
    },
    {
        title: "Example Milestone 1",
        date: new Date("2023-10-23"),
        description: "My 2nd blog",
        slug: "https://h4i.notion.site/Developer-Bootcamp-2023-c5f8886eeb364706a9f27ee1f6ee37ed",
    },
];
function addBlogs(blogs) {
    var blog_div = document.getElementById('blogs');
    if (!blog_div) {
        return;
    }
    blogs.forEach(function (blog) {
        var item = document.createElement('div');
        item.className = 'blog-item';
        item.innerHTML = "<h1> ".concat(blog.title, " -  ").concat(blog.date, "</h1>\n                            <p> ").concat(blog.description, " </p>\n                            <a href=\"").concat(blog.slug, "\"> <button id=\"blog-btn\"> Read </button> </a>");
        blog_div.appendChild(item);
    });
}

addBlogs(blogs);
