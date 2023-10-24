var blogs = [
    {
        title: "Blog#1",
        date: "2/2/2024",
        description: "this is description",
        slug: "blog1.html"
    },
    {
        title: "Blog#2",
        date: "12/22/2023",
        description: "this is another description",
        slug: "blog2.html"
    }
];
var container = document.getElementById('blog');
blogs.forEach(function (element) {
    console.log(element);
    var create = document.createElement('div');
    var inner = "<p><b><a href=".concat(element.slug, ">").concat(element.title, "<a></b><br>").concat(element.description, "<br>date: ").concat(element.date, "</p>");
    create.innerHTML = inner;
    container === null || container === void 0 ? void 0 : container.appendChild(create);
});
