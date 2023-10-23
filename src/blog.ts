type Blog = {
    title:  string;
    date:  string;
    description:  string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "First Blog Post",
        date:  "12/21/2018",
        description:  "This is my very first blog post. Welcome!",
        slug: "firstblog",
    }
    ,
    {
        title: "Second Blog Post",
        date:  "04/23/2023",
        description:  "I am still alive. Welcome to my second blog post.",
        slug: "secondblog",
    }
]

function displayBlogs() { // displays blog entries to the blog postings element in HTML

    const blogList = document.getElementById("Blog-list"); // getting blog list div element from HTML

    blogs.forEach(({title, date, description, slug}) => {

        const link = document.createElement("a");
        link.href = `blog_pages/${slug}.html`;
        link.innerHTML = "Read More";
        
        const blogEntry = document.createElement("div");
        blogEntry.classList.add("blog-entry");
        blogEntry.innerHTML = 
        `<h2 class="entry-title">${title}</h2>
        <h3 class="entry-date">${date}</h2>
        <p class="entry-description">${description}</p>`;


        blogEntry.appendChild(link);
        if (blogList) {
            blogList.appendChild(blogEntry);
        }
    });
}

displayBlogs(); 