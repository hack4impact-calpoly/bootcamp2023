var blogs = [
    {
        title: "My First Blog",
        date: "10-22-2023",
        description: "This is my first blog! Lets continue coding :D",
        slug: "./blogs/blog1.html",
    },
    {
        title: "Why Star Wars is the best franchise",
        date: "10-23-2023",
        description: "Star Wars has cool ahh lightsabers and force weilding maniacs. Enough said?",
        slug: "./blogs/blog2.html", //I'll work on the nomenclature 
    }
];
function addBlogs() {
    var container = document.getElementById("blog-container");
    if (!container)
        return;
    blogs.forEach(function (blog) {
        var blogElement = document.createElement("div");
        blogElement.className = "blog";
        var headingElement = document.createElement("h2");
        headingElement.style.border = "1px solid #000";
        var titleElement = document.createElement("a");
        titleElement.href = blog.slug;
        titleElement.textContent = blog.title;
        headingElement.appendChild(titleElement);
        blogElement.appendChild(headingElement);
        container.appendChild(blogElement);
    });
}
addBlogs();
