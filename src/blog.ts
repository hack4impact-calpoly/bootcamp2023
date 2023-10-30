type Blog = {
    title: string;
    date: Date;
    description: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Blog 1",
        date: new Date(),
        description: "My first blog post!",
        slug: "blogentry1.html"
    },
    {
        title: "Blog 2",
        date: new Date(),
        description: "My second blog post!",
        slug: "blogentry2.html"
    }
]

function addBlogEntries(): void {
    const container: HTMLElement | null = document.getElementById("entry");

    if (container) {
        blogs.forEach(blog => {
            const newBlog = document.createElement('div');
            newBlog.className = "entry";
            const formattedDate = blog.date.toLocaleDateString();

            newBlog.innerHTML = `
            <h2>${blog.title}</h2>
            <p>Date: ${formattedDate}</p>
            <p>Description: ${blog.description}</p>
            <p>Link: <a href="${blog.slug}" target="_blank">${blog.slug}</a></p>
            `;

            container.appendChild(newBlog);
        });
    }
}





