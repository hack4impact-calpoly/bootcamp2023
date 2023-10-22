var blogs = [
    {
        title: "Blog Uno",
        date: "10/21/2023",
        description: "This is my blog primero",
        slug: "blogs/blog_entry_Blog_Uno.html",
    },
    {
        title: "Blog Dos",
        date: "10/22/2023",
        description: "This is my blog segundo",
        slug: "blogs/blog_entry_Blog_Dos.html",
    }
];
var blogEntries = document.getElementsByClassName("blogs-list")[0];
console.log(blogEntries);
blogs.forEach(function (blog) {
    var div = document.createElement("div");
    var title = document.createElement("h3");
    var date = document.createElement("h4");
    var description = document.createElement("p");
    div.className = "blog-entry";
    title.innerHTML = blog.title;
    date.innerHTML = blog.date;
    description.innerHTML = blog.description;
    div.appendChild(title);
    div.appendChild(date);
    div.appendChild(description);
    blogEntries.appendChild(div);
    div.addEventListener("click", function () {
        window.location.href = blog.slug;
    });
});
