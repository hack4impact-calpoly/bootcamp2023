// Sample array of blogs
var blogs = [
    {
        title: "Midterm Season",
        date: "10-23-2023",
        description: "Today I had my M225 Midterm, and it was very interesting",
        slug: "blog_post_1",
    },
    {
        title: "The Story of Boo",
        date: "10-20-2023",
        description: "My roommate got a cat, and I developed a sinus infection",
        slug: "blog_post_2",
    },
];
// Function to add blogs to the container
function addBlogs(blogList) {
    var blogContainer = document.querySelector(".blogContain");
    blogList.forEach(function (blog) {
        var newBlogDiv = document.createElement("div");
        newBlogDiv.innerHTML = "\n            <h1>".concat(blog.title, "</h1> \n            <h3>").concat(blog.date, "</h3>\n            <p>").concat(blog.description, "</p>\n            <a href=\"").concat(blog.slug, "\">Read More<br><br><br></a>");
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(newBlogDiv);
    });
}
addBlogs(blogs);
