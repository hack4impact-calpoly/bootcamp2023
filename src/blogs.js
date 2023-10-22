//list of Blog objects that will be inserted to HTML page
var blogs = [
    {
        title: "Yosemite Hike",
        date: "10-18-2023",
        description: "My most recent hike at Yosemite!",
        slug: "yosemite-hike"
    },
    {
        title: "Avila Hike",
        date: "10-19-2023",
        description: "A hike I did recently by Avila beach!",
        slug: "avila-hike"
    }
];
function displayBlog() {
    //gets blogs section from html
    var blogList = document.getElementById("blogs-list");
    //{{title, date, description, slug}} deconstructs the object
    //allowing for access of properties as variables
    blogs.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        var link = document.createElement("a");
        link.href = "".concat(slug, ".html");
        link.innerHTML = "Read More";
        var postBlog = document.createElement("div");
        postBlog.classList.add("post-preview");
        postBlog.innerHTML = "\n            <h2 class=\"post-title\">".concat(title, "</h2>\n            <h3 class=\"post-date\">").concat(date, "</h3>\n            <p class=\"post-description\">").concat(description, "</p>\n        ");
        postBlog.appendChild(link);
        //checks to make sure the blogList exists before trying to append
        if (blogList) {
            blogList.appendChild(postBlog);
        }
    });
}
//call function
displayBlog();
