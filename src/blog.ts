type Blog = {
    title: string;
    date: Date;
    description: string;
    slug: URL;
}

const blogs: Blog[] = [
    {
        title: "Blog 1",
        date: new Date('2023-10-25T00:00:00.000Z'),
        description: "My first blog post!",
        slug: new URL("http://www.google.com")
    },
    {
        title: "Blog 2",
        date: new Date('2023-10-25T00:00:00.000Z'),
        description: "My second blog post!",
        slug: new URL("http://www.google.com")
    }
]

/*function addBlogEntries() = {
    const container = document.getElementById("blog-entries");

    blogs.forEach(blog => {
        const newBlog = document.createElement('div');
        newBlog.className = "blog-entry";
        const formattedDate = blog.date.toLocaleDateString();

        newBlog.innerHTML = `
        <h2>${blog.title}</h2>
        <p>Date: ${formattedDate}</p>
        <p>Description: ${blog.description}</p>
        <p>Link: <a href="${blog.slug}" target="_blank">${blog.slug}</a></p>
        `;

        container.appendChild(newBlog);
    })
}*/

function addBlogEntries(): void {
    const container: HTMLElement | null = document.getElementById("blog-entries");

    if (container) {
        blogs.forEach(blog => {
            const newBlog = document.createElement('div');
            newBlog.className = "blog-entry";
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





