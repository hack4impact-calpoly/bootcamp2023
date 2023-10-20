import { blogs } from "./Blog"

function createBlogs() {
    const listOfBlogs = blogs;
    listOfBlogs.forEach(blog => {
        // get the blog div
        const blogDiv = document.getElementById("blogs")

        // create the parent div and add a text node
        const parentDiv = document.createElement("div")
        

        // insert parent div into the blog div
        blogDiv?.appendChild(parentDiv)
    });
}