"use strict";
const blogPosts = [
    {
        title: "Cal Poly's Hui 'O Hawai'i Club",
        date: "23 Oct. 2023",
        description: "I am from Honolulu, Hawaii. I love Hawaii Club!",
        img: "../assets/blog/blog3-preview.jpg",
        slug: "../blog-posts/blog3.html"
    },
    {
        title: "Red Bricks: Santa Lucia",
        date: "22 Oct. 2023",
        description: "The 6 Red Brick Dorms were built in 1959. A lot happens in the bricks -- especially Santa Lucia.",
        img: "../assets/blog/blog2-preview.jpg",
        slug: "../blog-posts/blog2.html"
    },
    {
        title: "Quarter Plus Shenanigans",
        date: "16 Oct. 2023",
        description: "Cal Poly's Quarter Plus Program is a summer program where students are able to start college earlier. We got up to a lot of things. Here are some of our Q+ shenanigans.",
        img: "../assets/blog/blog1-preview.jpg",
        slug: "../blog-posts/blog1.html"
    }
];
// appends to preview each blog post to the blog-wrapper div in on blog.html
function blogPreview() {
    let blog_container = document.querySelector("#blog-wrapper");
    blogPosts.forEach(blog => {
        let post = document.createElement("div");
        post.className = "blog-post row justify-content-around align-items-center";
        post.innerHTML = `
            <div class="col"><img src="${blog.img}" class="blog-img"></div>
            <div class="col-7 d-flex flex-column align-items-center">
                <h3 class="blog-title">${blog.title}</h3>
                <h4 class="blog-date">${blog.date}</h4>
                <p>${blog.description}</p>
                <a href="${blog.slug}" role="button" class="blog-link btn">Read More!</a>
            </div>
        `;
        blog_container === null || blog_container === void 0 ? void 0 : blog_container.appendChild(post);
    });
}
blogPreview();
