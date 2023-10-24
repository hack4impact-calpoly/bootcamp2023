var blogPosts = [
    {
        title: "The Competitive Space of Grace Hopper",
        date: "10-23-2023",
        description: "My experience as a Grace Hopper attendee, this year.",
        slug: "grace-hopper"
    },
    {
        title: "Must Watch Halloween Movies",
        date: "10-24-2023",
        description: "A complete list of spooky films to watch for the holiday.",
        slug: "halloween-movies"
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
        postPreview.innerHTML = "\n          <h2 class=\"post-title\">".concat(title, "</h2>\n          <h3 class=\"post-subtitle\">").concat(date, "</h3>\n          <p class=\"post-description\">").concat(description, "</p>\n      ");
        postPreview.appendChild(link);
        if (blogList) {
            blogList.appendChild(postPreview);
        }
    });
}
blogPreview();
