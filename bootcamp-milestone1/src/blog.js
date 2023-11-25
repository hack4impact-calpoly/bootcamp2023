var blogs = [
    {
        title: "How I Made 100 Million Dollars before my 16th Birthday: A Guide to Success",
        date: "10/4/2023",
        description: "Elon Musk, Jeff Bezos, and Sahith Karra. These names have been forever immortalized as icons of wealth. Sahith Karra is a wildly successful author, legendary professional athlete, and professional hustlter. Learn all about his heroic success, rise to popularity, and how his journey to 100 million dollars before his 16th birthday.",
        slug: "../blogs/blog_success.html"
    },
    {
        title: "Where I believe Mario Judah is Hiding",
        date: "7/12/2023",
        description: "Where the **** is Mario Judah? This in-depth analysis breaks down the conspiracy and hidden, double meanings to answer the age old question and figure out jsut where Mario Judah really is.",
        slug: "../blogs/blog_mario_judah.html"
    }
];
function addBlogs(blogs) {
    var blogContainer = document.querySelector(".blogContainer");
    blogs.forEach(function (blog) {
        var newBlog = document.createElement("div");
        newBlog.innerHTML = "\n                            <h1>".concat(blog.title, "</h1>\n                            <h2>").concat(blog.date, "</h2>\n                            <p>").concat(blog.description, "</p>\n                            <a href=\"").concat(blog.slug, "\">Read More</a>\n                            ");
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.append(newBlog);
    });
}
addBlogs(blogs);
