var blogsArray = [
    {
        slug: "blogCats.html",
        title: "Cats I Like",
        date: "October 22, 2023",
        description: "A talk about the types of cats I like"
    },
    {
        slug: "blogFoods.html",
        title: "Foods I Like",
        date: "October 22, 2023",
        description: "A talk about some of the food I enjoy"
    },
];
//NOTE TO SELF: USE ` ` instead of single quotes for template literals and multiline strings
function showBlogCards() {
    var blogList = document.getElementById("blogList"); // in refrence to blogList div from blog.html
    blogsArray.forEach(function (_a) {
        var slug = _a.slug, title = _a.title, date = _a.date, description = _a.description;
        var createBlog = document.createElement("div"); // the blog preview card
        var blogLink = document.createElement("a"); // link to the full blog (slug.html)
        blogLink.href = "blog/".concat(slug, ".html");
        createBlog.innerHTML = "\n        <h2 class=\"blogTitle\">".concat(title, "</h1>\n        <h3 class=\"blogDate\">").concat(date, "</h2>\n        <p class=\"blogDescription\">").concat(description, "</p>\n        ");
        createBlog.appendChild(blogLink);
        if (blogList) {
            blogList.appendChild(createBlog);
        }
        else {
            console.log('help');
        }
    });
}
showBlogCards(); //always call display function so that it runs on page launch
