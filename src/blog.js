"use strict";
const blogs = [
    {
        title: "Hello there",
        date: "10-18-2023",
        desc: "A slight introduction",
        slug: "blog_piece1"
    },
    {
        title: "Another Day another Sunset",
        date: "10-19-2023",
        desc: "The origins of the sloset",
        slug: "blog_piece2",
    },
    {
        title: "Visiting Seattle",
        date: "10-20-2023",
        desc: "Time well spent in an awesome city",
        slug: "blog_piece3",
    }
];
function blogDisplay() {
    const bloglist = document.getElementById("blog-list");
    blogs.forEach(({ title, date, desc, slug }) => {
        const element = document.createElement("a");
        element.href = `${slug}.html`;
        element.innerHTML = 'New blog piece';
        const blogPrev = document.createElement("div");
        blogPrev.classList.add("story-preview");
        blogPrev.innerHTML =
            `<h3 class = "post-title"> ${title} </h3>
            <h4 class = "post-date"> ${date} </h4>
            <p class = "post-desc"> ${desc} </p>`;
        blogPrev.appendChild(element);
        if (bloglist) {
            bloglist.appendChild(blogPrev);
        }
    });
}
blogDisplay();
