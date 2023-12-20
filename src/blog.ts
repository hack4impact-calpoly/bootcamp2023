type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Graduation",
        date: "05-30-2023",
        description: "Looking back on the last four",
        slug: ""
    },
    {
        title: "Volunteering in Taiwan",
        date: "08-04-2023",
        description: "How I spent my summer in Taiwan",
        slug: ""
    }
]

var container = document.getElementsByClassName("blogs");

blogs.forEach((blog) => {
    var blogPost = document.createElement("div")

    blogPost.innerHTML = `
        <h1>${blog.title}</h1>
        <h2>${blog.date}</h2>
        <p>${blog.description}</p>
    `
    
    // container[0] is the first occurence of element with class="blogs"
    container[0].appendChild(blogPost)
})