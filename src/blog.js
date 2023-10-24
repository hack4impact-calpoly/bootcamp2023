var blogs = [
    {
        title: "Cool Beans",
        date: "10/24/23",
        description: "This is the cool beans blog.",
        slug: "coolbeans.html",
    },
    {
        title: "UnCool Rice",
        date: "10/24/23",
        description: "This is the uncool rice blog.",
        slug: "uncoolrice.html",
    },
];
function makeBlogs() {
    var blog_container = document.getElementsByClassName("blog-container")[0];
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement("div");
        blogDiv.classList.add("blog-div");
        var title = document.createElement("p");
        title.innerHTML = blog.title;
        var date = document.createElement("p");
        date.innerHTML = blog.date;
        var description = document.createElement("p");
        description.innerHTML = blog.description;
        var link = document.createElement("a");
        link.href = blog.slug;
        blogDiv.appendChild(title);
        blogDiv.appendChild(date);
        blogDiv.appendChild(description);
        link.appendChild(blogDiv);
        blog_container.appendChild(link);
    });
}
makeBlogs();
