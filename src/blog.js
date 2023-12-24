var bloglist = [
    {
        title: "My Internship @ Microchip Technology!",
        date: "9/15/2023",
        description: "I spent this past summer (2023) interning at Microchip Technology Inc. where I was able to apply the skills I learned in school to contribute to meaningful work.",
        slug: "Blog1.html",
    },
    {
        title: "Starting as a Software Dev @ Hack4Impact",
        date: "10/29/2023",
        description: "I began my position as a software developer at Hack4Impact, a 501c3 non-profit organization that develops software projects for local non-profits in San Luis Obispo County!",
        slug: "Blog2.html"
    },
];
var container = document.getElementById("container");
bloglist.forEach(function (blog) {
    var blogEntry = document.createElement("div");
    blogEntry.className = "blog-entry";
    var title = document.createElement("h2");
    title.textContent = blog.title;
    var date = document.createElement("p");
    date.textContent = "Date: ".concat(blog.date);
    var description = document.createElement("p");
    description.textContent = blog.description;
    var slug = document.createElement("a");
    slug.href = blog.slug;
    slug.textContent = "Visit this blog!";
    blogEntry.appendChild(title);
    blogEntry.appendChild(date);
    blogEntry.appendChild(description);
    blogEntry.appendChild(slug);
    if (container) {
        container.appendChild(blogEntry);
    }
});
