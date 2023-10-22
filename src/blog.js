var blogs = [
    {
        title: "Milestone 1",
        date: "10/21/2023",
        description: "Adding the blog feature to my website!",
        slug: "blog0"
    },
    {
        title: "365 ledger",
        date: "10/21/2023",
        description: "Switched the implementation of my potions shop for 365 to use a \
        ledger based design instead of keeping a global inventory.",
        slug: "blog1"
    }
];

function showBlogs(){
    const container = document.querySelector('.blog-container')
    if(!container){
        console.error('Container does not exist')
        return;
    }
    blogs.forEach(blog => {
        const blogEntry = document.createElement('div')
        blogEntry.classList.add('blog-entry')
       
        const linkToPage = document.createElement('a')
        linkToPage.href = `${blog.slug}.html`
        const title = document.createElement('h2')
        title.textContent = blog.title
        const date = document.createElement('p')
        date.textContent = blog.date
        const description = document.createElement('p')
        description.textContent = blog.description
        
        
        linkToPage.appendChild(title)

        blogEntry.appendChild(linkToPage)
        blogEntry.appendChild(date)
        blogEntry.appendChild(description)

        container.appendChild(blogEntry)
    }
    )
}

window.addEventListener('load', showBlogs);
