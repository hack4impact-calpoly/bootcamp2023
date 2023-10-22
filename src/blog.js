var blogs = [
    {
        title: "First Blog",
        date: "10-21-2023",
        description: "Hello World",
        slug: "blog-entry1.html"
    },
    {
        title: "Milestone 1",
        date: "10-21-2023",
        description: "Learning Javascript and Typescript",
        slug: "blog-entry2.html"
    },
];
function createBlogs(blogs) {
    var container = document.getElementById('blog-container');
    if (container == null) {
        return null;
    }
    blogs.forEach(function (blog) {
        container.appendChild(createEntry(blog));
    });
}
function createEntry(blog) {
    var blog_entry = document.createElement("div");
    blog_entry.className = "blog-entry";
    var blog_title = document.createElement("h1");
    blog_title.innerHTML = blog.title;
    blog_entry.appendChild(blog_title);
    var blog_date = document.createElement("div");
    blog_date.innerHTML = blog.date;
    blog_entry.appendChild(blog_date);
    var blog_description = document.createElement("p");
    blog_description.innerHTML = blog.description;
    blog_entry.appendChild(blog_description);
    var blog_slug = document.createElement("a");
    blog_slug.href = "".concat(blog.slug);
    blog_entry.appendChild(blog_slug);
    blog_entry.addEventListener("click", function () {
        window.location.href = blog.slug;
    });
    return blog_entry;
}
createBlogs(blogs);
