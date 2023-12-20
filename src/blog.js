var blogs = [
    {
        title: "Graduation",
        date: "05-30-2023",
        description: "Looking back on the last four",
        slug: ""
    },
    {
        title: "Volunteering in Taiwan",
        date: "08-04-2023",
        description: "How I spent my summer in Taiwan",
        slug: ""
    }
];
var container = document.getElementsByClassName("blogs");
blogs.forEach(function (blog) {
    var blogPost = document.createElement("div");
    blogPost.innerHTML = "\n        <h1>".concat(blog.title, "</h1>\n        <h2>").concat(blog.date, "</h2>\n        <p>").concat(blog.description, "</p>\n    ");
    // container[0] is the first occurence of element with class="blogs"
    container[0].appendChild(blogPost);
});
