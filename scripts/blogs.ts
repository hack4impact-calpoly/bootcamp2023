type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Blog Post 1",
    date: "2023-01-15",
    description: "This is the first blog post.",
    slug: "blog-post-1",
  },
  {
    title: "Blog Post 2",
    date: "2023-02-20",
    description: "This is the second blog post.",
    slug: "blog-post-2",
  },
];

function displayBlogs() {
  const container = document.querySelector(".blog-container");

  if (container) {
    blogs.forEach((blog) => {
      const blogItem = document.createElement("div");
      blogItem.classList.add("blog-item");
      blogItem.innerHTML = `
                <h2><a href="${blog.slug}.html">${blog.title}</a></h2>
                <p>${blog.date}</p>
                <p>${blog.description}</p>
            `;
      container.appendChild(blogItem);
    });
  }
}

displayBlogs();
