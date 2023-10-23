"use strict";
const currentBlogList = [
    {
        title: "Cal Poly Classes",
        date: "10-20-2023",
        description: "Discussions on Cal Poly CS Classes",
        slug: "./blogsFolder/blog1.html",
        imagePath: "../images/climbing.jpg"
    },
    {
        title: "TypeScript and NextJS",
        date: "10-20-2023",
        description: "Discussions on New Technologies",
        slug: "./blogsFolder/blog2.html",
        imagePath: "../images/house.jpg"
    },
];
function addBlogs(blogList) {
    let blogContainer = document.querySelector(".blogWrapper");
    blogList.forEach(blog => {
        let newBlogDiv = document.createElement("div");
        newBlogDiv.innerHTML = `
                                <h1>${blog.title}</h1> 
                                <p>${blog.date}</p>
                                <p>${blog.description}</p>
                                <a href="${blog.slug}"> Read Here</a>`;
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(newBlogDiv);
    });
}
addBlogs(currentBlogList);
