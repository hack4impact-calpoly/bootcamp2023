// Type Blog Created
// type Blog = {
//     title: string
//     date: string
//     description: string
//     slug: string
// }

// Blog Data Created
const blogs: Blog[] = [
    {
        title: "First Blog",
        date: "10-21-2023",
        description: "Hello World",
        slug: "blog-entry1.html"
    },
    {
        title: "Milestone 1",
        date: "10-21-2023",
        description: "Learning Javascript and Typescript",
        slug: "blog-entry2.html"
    },
];

// Populates All Blogs by DOM Manipulation
function createBlogs(blogs: Blog[]){
    const container = document.getElementById('blog-container');
    if (container == null) {
        return null;
    }

    blogs.forEach((blog: Blog) => {
        container.appendChild(createEntry(blog));
    })
}
   
// Creates a Blog Entry by DOM Manipulation
function createEntry(blog: Blog){
    const blog_entry = document.createElement("div");
    blog_entry.className = "blog-entry";
    blog_entry.classList.add('blog-entry');

    const blog_title = document.createElement("h2");
    blog_title.innerHTML = blog.title;
    blog_entry.appendChild(blog_title);

    const blog_date = document.createElement("div");
    blog_date.innerHTML = blog.date;
    blog_entry.appendChild(blog_date);

    const blog_description = document.createElement("p");
    blog_description.innerHTML = blog.description;
    blog_entry.appendChild(blog_description);

    const blog_slug = document.createElement("a");
    blog_slug.href = `${blog.slug}`;
    blog_entry.appendChild(blog_slug);

    blog_entry.addEventListener("click", () => {
        window.location.href = blog.slug;
    });

    return blog_entry
}

createBlogs(blogs)


