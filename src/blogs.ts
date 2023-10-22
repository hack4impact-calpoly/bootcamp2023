//create object BLOG to hold data needed for each blog post
type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

//list of Blog objects that will be inserted to HTML page
const blogs: Blog[] = [
    {
        title: "Yosemite Hike",
        date: "10-18-2023",
        description: "My most recent hike at Yosemite!",
        slug: "yosemite-hike"
    },
    {
        title: "Avila Hike",
        date: "10-19-2023",
        description: "A hike I did recently by Avila beach!",
        slug: "avila-hike"
    }
]

function displayBlog() {

    //gets blogs section from html
    const blogList = document.getElementById("blogs-list")

    //{{title, date, description, slug}} deconstructs the object
    //allowing for access of properties as variables
    blogs.forEach(({title, date, description, slug}) => {
        const link = document.createElement("a");
        link.href = `${slug}.html`;
        link.innerHTML = "Read More";

        const postBlog = document.createElement("div");
        postBlog.classList.add("post-preview");
        postBlog.innerHTML = `
            <h2 class="post-title">${title}</h2>
            <h3 class="post-date">${date}</h3>
            <p class="post-description">${description}</p>
        `;
        postBlog.appendChild(link);
        //checks to make sure the blogList exists before trying to append
        if (blogList) {
            blogList.appendChild(postBlog);
        }
        
        
    })
}

//call function
displayBlog();