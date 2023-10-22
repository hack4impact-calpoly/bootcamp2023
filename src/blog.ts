const blogs: Blog[] = [
    {
        title: "First Blog",
        date: new Date("2023-10-21"),
        description: "Hello World",
        slug: "./blog/entry1.html"
    },
    {
        title: "Milestone 1",
        date: new Date("2023-10-21"),
        description: "Learning Typescript",
        slug: "./blog/entry2.html"
    },
];

function createBlogs(blogs: Blog[]){
    const container = document.querySelector('blog-container');
    if (container == null) {
        return null;
    }

    blogs.forEach((blog) => {
        const blog_entry = document.createElement("div");
        blog_entry.className = "blog-entry";
        blog_entry.innerHTML = `<h1>${blog.title}</h1>
                                <div>${blog.date}</div>
                                <p>${blog.description}</p>
                                <a href="${blog.slug}"></a>`;
        container.appendChild(blog_entry);
    })
}

createBlogs(blogs)


