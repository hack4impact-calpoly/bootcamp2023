var blogs = [
    {
        date: "10/22/23",
        title: "First Post!",
        description: "Welcome to my first Blog post!",
        slug: "firstBlogPost",
    },
    {
        date: "10/22/23",
        title: "Second Post!",
        description: "This is my second Blog post!",
        slug: "secondBlogPost",
    },
];
function addBlogsToHTML(blogs) {
    var blogContainer = document.getElementById("blog-list");
    if (blogContainer) {
        blogs.forEach(function (blog) {
            var blogPost = document.createElement("div");
            blogPost === null || blogPost === void 0 ? void 0 : blogPost.classList.add("individual-blog-post"); // why need optional chaining here? if already checking for null?
            blogPost.setAttribute("data-blog-slug", blog.slug);
            blogPost.setAttribute("data-blog-id", "".concat(blog.slug, "-blog-post-id"));
            var blogTitle = document.createElement("h2");
            blogTitle.classList.add("blog-post-title");
            var blogDescription = document.createElement("p");
            blogDescription.classList.add("blog-post-description");
            var blogDate = document.createElement("p");
            blogDate.classList.add("blog-post-date");
            blogDescription.innerHTML = blog.description;
            blogTitle.innerHTML = blog.title;
            blogDate.innerHTML = blog.date;
            blogPost.appendChild(blogTitle);
            blogPost.appendChild(blogDescription);
            blogPost.appendChild(blogDate);
            blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogPost); // why need optional chaining here? if already checking for null?
        });
    }
}
function addListeners() {
    var allBlogDivs = document.querySelectorAll(".individual-blog-post");
    allBlogDivs.forEach(function (blog) {
        blog.addEventListener("click", function () {
            var blogId = blog.getAttribute("data-blog-id");
            var blogSlug = blog.getAttribute("data-blog-slug");
            console.log("blog id" + blogId);
            if (blogId) {
                window.location.href = "".concat(blogSlug, ".html?id=").concat(blogId);
            }
        });
    });
}
addBlogsToHTML(blogs);
addListeners();
