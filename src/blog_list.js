var blogList = [
    {
        title: "My day at work",
        date: "October 19, 2023",
        description: "My coworkers really were on my nerves today.",
        slug: "/Users/ethantrantalis/Projects/bootcamp-project-2023/blog1.html"
    },
    {
        title: "Going home this weekend",
        date: "October 16, 2023",
        description: "Driving down the US-101 is a favorite of mine, the vibes are so good.",
        slug: "/Users/ethantrantalis/Projects/bootcamp-project-2023/blog2.html"
    }
];
function addBlogs(blogs) {
    var blogContainer = document.querySelector(".blogs_added");
    for (var i = 0; i < blogList.length; i++) {
        var newBlogDiv = document.createElement("div");
        newBlogDiv.innerHTML = "\n                                <h1>".concat(blogList[i].title, "</h1> \n                                <h3>").concat(blogList[i].date, "</h3>\n                                <p>").concat(blogList[i].description, "</p>\n                                <a href=\"").concat(blogList[i].slug, "\">Continued<br><br><br></a>");
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(newBlogDiv);
    }
}
addBlogs(blogList);
