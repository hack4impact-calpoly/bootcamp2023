var blogs = [
    {
        title: "Unique interview skills",
        date: "10-22-2023",
        description: "Skills that would be really cool to show off in a a job interview.",
        slug: "blog2.html",
    },
    {
        title: "Bagels",
        date: "10-21-2023",
        description: "Ranking bagel shops best to worst.",
        slug: "blog1.html",
    },
];
function displayBlog() {
    var item = document.getElementById("blog");
    blogs.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        var blogList = document.getElementById("blog-list");
        var blogpost = document.createElement('div');
        var header = document.createElement('h1');
        header.innerHTML = title;
        var date_var = document.createElement('p');
        date_var.innerHTML = date;
        var desc = document.createElement('p');
        desc.innerHTML = description;
        var link = document.createElement('a');
        link.href = "blogposts/".concat(slug);
        link.innerHTML = "Learn More";
        blogpost.appendChild(header);
        blogpost.appendChild(date_var);
        blogpost.appendChild(desc);
        blogpost.appendChild(link);
        if (blogList) {
            blogList.appendChild(blogpost);
        }
        item === null || item === void 0 ? void 0 : item.appendChild(blogpost);
    });
}
displayBlog();
