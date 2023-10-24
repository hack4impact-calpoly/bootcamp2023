var blogs = [
    {
        title: "Tip 2",
        date: "10-22-2023",
        description: "Don't panic if you're broke - get money.",
        slug: "blog2",
    },
    {
        title: "Tip 1",
        date: "10-21-2023",
        description: "Don't become broke.",
        slug: "blog1",
    },
];
function displayBlog() {
    var item = document.getElementById("blog");
    blogs.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        var blogpost = document.createElement('div');
        var header = document.createElement('h1');
        header.innerHTML = title;
        var date_var = document.createElement('p');
        date_var.innerHTML = date;
        var desc = document.createElement('p');
        desc.innerHTML = description;
        var link = document.createElement('a');
        link.href = "blog/".concat(slug, ".html");
        blogpost.appendChild(header);
        blogpost.appendChild(date_var);
        blogpost.appendChild(desc);
        blogpost.appendChild(link);
        item === null || item === void 0 ? void 0 : item.appendChild(blogpost);
    });
}
displayBlog();
