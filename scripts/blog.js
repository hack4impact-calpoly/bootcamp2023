var blogPosts = [
    {
        title: "Blog 1",
        date: "10-20-2023",
        description: "Hi this is my first blog post!",
        slug: "blog_1",
    },
    {
        title: "Becoming a Blogger",
        date: "10-21-2023",
        description: "I am becoming quite fluent in blogging",
        slug: "blog_2",
    },
];
function displayBlogPreview() {
    blogPosts.sort(function (b, a) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    var blogList = document.getElementById("blog-list");
    blogPosts.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        var link = document.createElement("a");
        link.href = "blog/".concat(slug, ".html");
        link.innerHTML = "Read More";
        var postPrev = document.createElement("div");
        postPrev.classList.add("post-preview");
        postPrev.innerHTML = "\n      <h2 class=\"post-title\">".concat(title, "</h2>\n      <h3 class=\"post-subtitle\">").concat(date, "</h3>\n      <p class=\"post-description\">").concat(description, "</h3>\n    ");
        postPrev.appendChild(link);
        if (blogList) {
            blogList.appendChild(postPrev);
        }
    });
}
displayBlogPreview();
