var blogs = [
    {
        title: "My first blog",
        date: "10/18/2023",
        description: "This is my very first blog post!",
        slug: "first"
    },
    {
        title: "My second blog",
        date: "10/18/2023",
        description: "This is my second blog post!",
        slug: "second"
    }
];
window.onload = function () {
    var blogContainer = document.getElementById("blog-container");
    if (!blogContainer) {
        return;
    }
    var _loop_1 = function (blog) {
        var div = document.createElement("div");
        var title = document.createElement("h4");
        title.innerHTML = "".concat(blog.title, " - ").concat(blog.date);
        var description = document.createElement("p");
        description.innerHTML = blog.description;
        div.appendChild(title);
        div.appendChild(description);
        div.className = "blog-entry";
        div.addEventListener("click", function () {
            window.location.href = "blogs/".concat(blog.slug, ".html");
        });
        blogContainer.appendChild(div);
    };
    for (var _i = 0, blogs_1 = blogs; _i < blogs_1.length; _i++) {
        var blog = blogs_1[_i];
        _loop_1(blog);
    }
};
