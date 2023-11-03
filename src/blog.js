var blogs = [
    {
        title: "My Internship @ Wells Fargo Technology",
        date: new Date(),
        description: "I spent this past summer developing internal tools for Wells Fargo Technology using the full stack!",
        slug: "blogentry1.html"
    },
    {
        title: "Joining Hack4Impact as a Developer!",
        date: new Date(),
        description: "I just joined as a software developer at Hack4Impact, a 501c3 non-profit organization that develops software projects for local non-profits in the local community!",
        slug: "blogentry2.html"
    }
];
var container = document.getElementById("container");
blogs.forEach(function (blog) {
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
