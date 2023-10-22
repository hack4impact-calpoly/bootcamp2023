type Blog = {
    title: string;
    date: string;
    author: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "The Many-Worlds Interpretation",
        date: "2023-10-22",
        author: "Joe Biden",
        description: "An exploration of the Many-Worlds Interpretation of quantum mechanics.",
        slug: "many-worlds-interpretation",
    },
    {
        title: "Time Dilation",
        date: "2023-10-15",
        author: "Robert Echols",
        description: "Understanding the concept of time dilation in the theory of relativity.",
        slug: "time-dilation",
    },
];

window.onload = () => {
    const container = document.querySelector('.blog-container');
    blogs.forEach(blog => {
        // Create an anchor element wrapping the blog post
        const blogLink = document.createElement('a');
        blogLink.href = "https://www.youtube.com/embed/Q_fvcvkTcjc?autoplay=1";
        blogLink.className = 'blog-link';
        
        const blogElement = document.createElement('div');
        blogElement.className = 'blog-post';
        
        const blogTitle = document.createElement('h2');
        blogTitle.textContent = blog.title;
        
        const blogAuthor = document.createElement('p');
        blogAuthor.textContent = `Written by: ${blog.author}`;
        
        const blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        
        blogElement.appendChild(blogTitle);
        blogElement.appendChild(blogAuthor);
        blogElement.appendChild(blogDescription);
        
        // Append the blog post div to the anchor element
        blogLink.appendChild(blogElement);
        
        // Append the anchor element to the container
        container.appendChild(blogLink);
    });
};
