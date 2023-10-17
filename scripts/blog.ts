type Blog = {
  title: string;
  date: Date;
  description: string;
  slug: string;
};

const blogData: Blog[] = [
  {
    title: "Introduction to Typescript",
    date: new Date("2023-10-16"),
    description: "Working on milestone 1 assignment.",
    slug: "./blog/blog-entry1.html",
  },
  {
    title: "Weather",
    date: new Date("2023-10-16"),
    description: "The weather was very nice today.",
    slug: "./blog/blog-entry2.html",
  },
];

function populateBlog(blogs: Blog[]) {
  //Find div
  const container = document.querySelector(".blog-container");
  if (!container) {
    return;
  }

  blogs.forEach((blog) => {
    const entry = document.createElement("div");
    entry.className = "blog-item";
    entry.innerHTML = `<h2>${blog.title}</h2>
                            <div>${blog.date}</div>
                            <p>${blog.description}</p>
                            <a href="${blog.slug}">More details</a>`;
    container.appendChild(entry);
  });
}

populateBlog(blogData);
