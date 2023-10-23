type Blog = {
    title: string;
    date: string;
    desc: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Day 1",
        date: "10-19-2023",
        desc: "A blog post for my first day",
        slug: "day1Blog",
    },
    {
        title: "Day 2",
        date: "10-X-2023",
        desc: "A blog post for my second day",
        slug: "day2Blog",
    },
];

function renderBlogs(): void {
    const containerElements: HTMLCollectionOf<Element> = document.getElementsByClassName('blogContainer'); 

    if (containerElements.length == 0) {
        console.error('Container element with class name "blogContainer" not found in the DOM.');
    }

    const blogContainer: Element = containerElements[0]; 

    blogs.forEach(blog => {
        const blogElement: HTMLDivElement = document.createElement('div');
        blogElement.classList.add('blog-entry'); // Add a class for styling, if needed
        blogElement.innerHTML = `
            <h2>${blog.title}</h2>
            <p>Date: ${blog.date}</p>
            <p>${blog.desc}</p>
            <a href="${blog.slug}.html">Read more</a>
        `;

        // Append the blog element to the container
        blogContainer.appendChild(blogElement);
    });

}




// Call the renderBlogs function when the DOM is fully loaded
window.onload = () => {
    renderBlogs();
};
