type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Blog 1",
    date: "2023-10-01",
    description: "Premier League",
    slug: "blog-1",
  },
  {
    title: "Blog 2",
    date: "2023-10-20",
    description: "NBA",
    slug: "blog-2",
  },
];

function appendBlogsToDOM() {
  const container = document.querySelector('.blog-container');

  if (container) {
    blogs.forEach((blog) => {
      const blogElement = document.createElement('div');
      blogElement.classList.add('blog');
      blogElement.innerHTML = `
        <h2>${blog.title}</h2>
        <p>Date: ${blog.date}</p>
        <p>${blog.description} <a href="${blog.slug}.html">Read more</a></p>
      `;
      container.appendChild(blogElement);
    });
  }
}

document.addEventListener('DOMContentLoaded', appendBlogsToDOM);
