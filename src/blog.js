var blogs = [
    {
        title: "Joe Mama",
        date: "10-23-2023",
        description: "Joe Mama is Nacho Dada",
        slug: "./blogs/blog1.html",
    },
    {
        title: "Nacho Dada",
        date: "10-23-2023",
        description: "Nacho Dada is Joe Mama",
        slug: "./blogs/blog2.html",
    },
];
function addBlogs(blogList) {
    var blogContainer = document.querySelector(".blogContain");
    blogList.forEach(function (blog) {
        var newBlogDiv = document.createElement("div");
        // newBlogDiv.className = "about"
        newBlogDiv.innerHTML = "\n                                <h1>".concat(blog.title, "</h1> \n                                <h3>").concat(blog.date, "</h3>\n                                <p>").concat(blog.description, "</p>\n                                <a href=\"").concat(blog.slug, "\">Read More</a>");
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(newBlogDiv);
    });
}
addBlogs(blogs);
