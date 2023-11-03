type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "How I Got Into CS",
    date: "10-29-2023",
    description: "About my career thought process as a high schooler",
    slug: "how-i-got-into-cs",
  },
  {
    title: "What I Learned in Hack4Impact So Far",
    date: "10-29-2023",
    description: "About what I've learned in the past few weeks in the club",
    slug: "what-i-learned-in-h4i-so-far",
  }
];

const container = document.querySelector(".container");
function displayBlogs() {
  blogs.forEach((blog) => {
    const blogElement = document.createElement("div");
    blogElement.classList.add("blog-item");

    blogElement.innerHTML = `
            <h2>${blog.title}</h2>
            <p>Date: ${blog.date}</p>
            <p>${blog.description}</p>
        `;
    if (container) {
      container.appendChild(blogElement);
    }
  });
}
displayBlogs();
