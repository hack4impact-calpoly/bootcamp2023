"use strict";
const blogs = [
    {
        title: "Everything is Going Great",
        date: "01-01-2002",
        desc: "New Year's Day could not be going better.",
        slug: "url"
    },
    {
        title: "My Life in Shambles",
        date: "01-02-2022",
        desc: "The tough start to a new year.",
        slug: "url",
    },
    {
        title: "Back to Doing Better",
        date: "-1-03-2022",
        desc: "False alarm on that last post there, all is well again.",
        slug: "url",
    }
];
function blogDisplay() {
    const bloglist = document.getElementById("blog-list")

    blogs.forEach(({title, date, desc, slug}) => {
        const element = document.createElement("a");
        element.href = `blog/${slug}.html`;
        element.innerHTML = 'New blog piece';
        const blogPrev = document.createElement("div");
        blogPrev.classList.add("story-preview");
        blogPrev.innerHTML = 
            `<h2 class = "post-title"> ${title} </h2>
            <h3 class = "post-date"> ${date} </h3>
            <p class = "post-desc"> ${desc} </p>`;
    
        blogPrev.appendChild(element);
        if (bloglist) {
            bloglist.appendChild(blogPrev);
        }
    
    
    
    });

}

blogDisplay();