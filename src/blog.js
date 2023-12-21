var blogs = [
    {
        title: "Graduation: end of an era",
        date: "05-30-2023",
        description: "Looking back on the last four",
        image: "images/graduation.jpeg"
    },
    {
        title: "Volunteering in Taiwan",
        date: "08-04-2023",
        description: "How I spent my summer in Taiwan",
        image: "images/taiwan.JPG"
    }
];
var container = document.getElementsByClassName("blogs");
blogs.forEach(function (blog) {
    var blogPost = document.createElement("div");
    blogPost.classList.add("bordered_container");
    blogPost.innerHTML = "\n        <div>\n            <h1>".concat(blog.title, "</h1>\n            <p>").concat(blog.description, "</p>\n            <h2>").concat(blog.date, "</h2>\n        </div>\n        <img src=\"").concat(blog.image, "\" width=\"400\" height=\"300\">\n    ");
    // container[0] is the first occurence of element with class="blogs"
    container[0].appendChild(blogPost);
});
