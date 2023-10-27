type Blog = {
    title: string;
    date: Date;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "favorite cheese",
        date: new Date('2023-10-26'),
        description: "A blog of the best cheese i've tried",
        slug: "cheeseBlog.html"
    },
    {
        title: "favorite ducks",
        date: new Date('2023-10-26'),
        description: "A blog of all my favorite ducks",
        slug: "ducksBlog.html"
    }
]

function displayBlogsInContainer(blogs: Blog[]): void {
    const container = document.querySelector('.blog-container');
  
    if (!container) {
      console.error('Container element not found.');
      return;
    }
    blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog-entry');
    
        blogElement.innerHTML = `
          <h2>${blog.title}</h2>
          <p>Date: ${blog.date.toDateString()}</p>
          <p>${blog.description}</p>
          <a href="${blog.slug}">Read More</a>
        `;
    
        container.appendChild(blogElement);
      });

}

displayBlogsInContainer(blogs);


