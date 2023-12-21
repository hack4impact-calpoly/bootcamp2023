type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
}

const blogs: Blog[] = [
    {
        title: "Graduation: end of an era",
        date: "05-30-2023",
        description: "Looking back on the last four",
        image: "images/graduation.jpeg"
    },
    {
        title: "Volunteering in Taiwan",
        date: "08-04-2023",
        description: "How I spent my summer in Taiwan",
        image: "images/taiwan.JPG"
    }
]

var container = document.getElementsByClassName("blogs");

blogs.forEach((blog) => {
    var blogPost = document.createElement("div")
    blogPost.classList.add("bordered_container")

    blogPost.innerHTML = `
        <div>
            <h1>${blog.title}</h1>
            <p>${blog.description}</p>
            <h2>${blog.date}</h2>
        </div>
        <img src="${blog.image}" width="400" height="300">
    `
    
    // container[0] is the first occurence of element with class="blogs"
    container[0].appendChild(blogPost)
})