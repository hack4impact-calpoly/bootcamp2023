var blogs = [
    {
        title: "Joe Mama",
        date: "06-19-2000",
        description: "Joe Mama is Nacho Dada",
        slug: "./blogs/blog1.html",
    },
    {
        title: "Nacho Dada",
        date: "06-20-2000",
        description: "Nacho Dada is Joe Mama",
        slug: "./blogs/blog2.html",
    },
];
function addBlogs(blogList) {
    var blogContainer = document.querySelector(".blogContain");
    blogList.forEach(function (blog) {
        var newBlogDiv = document.createElement("div");
        newBlogDiv.className = "about-text";
        newBlogDiv.innerHTML = "\n                                <h1>".concat(blog.title, "</h1> \n                                <p>").concat(blog.date, "</p>\n                                <p>").concat(blog.description, "</p>\n                                <a href=\"").concat(blog.slug, "\">Read More</a>");
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(newBlogDiv);
    });
}
addBlogs(blogs);
