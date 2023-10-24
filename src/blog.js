"use strict";
const blogs = [
    {
        title: "Everything is Going Great",
        date: "01-01-2002",
        desc: "New Year's Day could not be going better.",
        slug: "blog_piece1"
    },
    {
        title: "My Life in Shambles",
        date: "01-02-2022",
        desc: "The tough start to a new year.",
        slug: "blog_piece2",
    },
    {
        title: "Back to Doing Better",
        date: "-1-03-2022",
        desc: "False alarm on that last post there, all is well again.",
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
