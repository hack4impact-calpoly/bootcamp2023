var blogPosts = [
    {
        title: "Test Post 1",
        date: "10-22-2023",
        description: "First blog post!",
        slug: "test_post_1"
    },
    {
        title: "Test Post 1",
        date: "10-22-2023",
        description: "Second blog post!",
        slug: "test_post_2"
    },
];
function blogPreview() {
    var blogList = document.getElementById("blog-list");
    blogPosts.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        var link = document.createElement("a");
        link.href = "".concat(slug, ".html");
        link.innerHTML = "Read More";
        var postPreview = document.createElement("div");
        postPreview.classList.add("post-preview");
        postPreview.innerHTML = "\n            <h2 class=\"post-title\">".concat(title, "</h2>\n            <h3 class=\"post-subtitle\">").concat(date, "</h3>\n            <p class=\"post-description\">").concat(description, "</p>\n        ");
        postPreview.appendChild(link);
        if (blogList) {
            blogList.appendChild(postPreview);
        }
    });
}
blogPreview();
