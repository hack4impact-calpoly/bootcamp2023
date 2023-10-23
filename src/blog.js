var blogPosts = [
    {
        title: "Chicken Soup",
        date: "9-25-2023",
        description: "chicken soup",
        slug: "chicken_soup"
    },
    {
        title: "Curry Egg Noodles",
        date: "10-21-2023",
        description: "curry egg noodles",
        slug: "curry_egg_noodles"
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
