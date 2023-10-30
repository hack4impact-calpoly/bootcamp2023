var blogs = [
    {
        title: "Blog 1",
        date: new Date('2023-10-25T00:00:00.000Z'),
        description: "My first blog post!",
        slug: new URL("http://www.google.com")
    },
    {
        title: "Blog 2",
        date: new Date('2023-10-25T00:00:00.000Z'),
        description: "My second blog post!",
        slug: new URL("http://www.google.com")
    }
];
/*function addBlogEntries() = {
    const container = document.getElementById("blog-entries");

    blogs.forEach(blog => {
        const newBlog = document.createElement('div');
        newBlog.className = "blog-entry";
        const formattedDate = blog.date.toLocaleDateString();

        newBlog.innerHTML = `
        <h2>${blog.title}</h2>
        <p>Date: ${formattedDate}</p>
        <p>Description: ${blog.description}</p>
        <p>Link: <a href="${blog.slug}" target="_blank">${blog.slug}</a></p>
        `;

        container.appendChild(newBlog);
    })
}*/
function addBlogEntries() {
    var container = document.getElementById("blog-entries");
    if (container) {
        blogs.forEach(function (blog) {
            var newBlog = document.createElement('div');
            newBlog.className = "blog-entry";
            var formattedDate = blog.date.toLocaleDateString();
            newBlog.innerHTML = "\n            <h2>".concat(blog.title, "</h2>\n            <p>Date: ").concat(formattedDate, "</p>\n            <p>Description: ").concat(blog.description, "</p>\n            <p>Link: <a href=\"").concat(blog.slug, "\" target=\"_blank\">").concat(blog.slug, "</a></p>\n            ");
            container.appendChild(newBlog);
        });
    }
}
