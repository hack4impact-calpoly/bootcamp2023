var blogs = [
    {
        title: "My Internship @ Wells Fargo Technology",
        date: "9/30/2023",
        description: "I spent this past summer developing internal tools for Wells Fargo Technology using the full stack!",
        slug: "blog1.html"
    },
    {
        title: "Attending Grace Hopper Celebration 2023!",
        date: "10/17/2023",
        description: "I got to attend an amazing gathering of women and non-binary folk in technology!",
        slug: "blog2.html"
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
    console.log(slug.href);
    slug.textContent = "Visit this blog!";
    blogEntry.appendChild(title);
    blogEntry.appendChild(date);
    blogEntry.appendChild(description);
    blogEntry.appendChild(slug);
    if (container) {
        container.appendChild(blogEntry);
    }
});
