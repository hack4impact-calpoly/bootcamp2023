var blogs = [
    {
        title: "10 ways to stay healthy",
        date: "10-jan-2023",
        description: "This blog talks about different ways to stay healthy both physically and mentally",
        slug: "blog1",
    },
    {
        title: "A peek into wildlife",
        date: "13-july-2023",
        description: "This blog gives an overview of the wildlife in San Luis Obispo",
        slug: "blog2",
    },
];
function addblogs() {
    blogs.forEach(function (element) {
        var htmlData = "\n\t\t<h1> ".concat(element.title, " </h1>\n\t\t<h3> ").concat(element.date, " </h3>\n\t\t<h3> ").concat(element.description, " </h3>\n\t\t<h3><a href=\"./").concat(element.slug, ".html\">View full blog</h3>\n\n\t\t<br>\n\t");
        document.getElementsByClassName("blog-container")[0].innerHTML += htmlData;
    });
}
addblogs();
