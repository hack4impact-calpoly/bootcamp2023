"use strict";
const blogs = [
    {
        title: "First Blog Post",
        date: "12/21/2018",
        description: "This is my very first blog post. Welcome!",
        slug: "blogs/blog_entry_first_blog.html",
    },
    {
        title: "Second Blog Post",
        date: "04/23/2023",
        description: "I am still alive. Welcome to my second blog post.",
        slug: "blogs/blog_entry_second_blog.html",
    }
];
function displayBlogs() {
    const blogList = document.getElementById("Blog-list"); // getting blog list div element from HTML
    blogs.forEach(({ title, date, description, slug }) => {
        const link = document.createElement("a");
        link.href = `blog_content/${slug}.html`;
        link.innerHTML = "Read More";
        const blogEntry = document.createElement("div");
        blogEntry.classList.add("blog-entry");
        blogEntry.innerHTML =
            `<h2 class="entry-title">${title}</h2>
        <h3 class="entry-date">${date}</h2>
        <p class="entry-description">${description}</p>`;
        blogEntry.appendChild(link);
        if (blogList) {
            blogList.appendChild(blogEntry);
        }
    });
}
displayBlogs();
