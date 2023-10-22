type Blog = {
    title:  string;
    date:  string;
    description:  string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Blog Uno",
        date:  "10/21/2023",
        description:  "This is my blog primero",
        slug: "first",
    }
    ,
    {
        title: "Blog Dos",
        date:  "10/22/2023",
        description:  "This is my blog segundo",
        slug: "second",
    }
]

let blogEntries = document.getElementsByClassName("blogs-list")[0]
console.log(blogEntries)

blogs.forEach(blog => {
    let div = document.createElement("div")
    let title = document.createElement("h3")
    let date = document.createElement("h4")
    let description = document.createElement("p")
    title.innerHTML = blog.title
    date.innerHTML = blog.date
    description.innerHTML = blog.description
    div.appendChild(title)
    div.appendChild(date)
    div.appendChild(description)
    blogEntries.appendChild(div)
})
