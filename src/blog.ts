import { Blog } from "./types";

const createBlogEntry = (blog: Blog): HTMLElement => {
  const newDiv: HTMLElement = document.createElement("div");

  const smallHeading: HTMLElement = document.createElement("h4");
  smallHeading.innerHTML = blog.title;

  const dateElement: HTMLElement = document.createElement("p");
  dateElement.innerHTML = `Date: ${blog.date}`;

  newDiv.appendChild(smallHeading);
  newDiv.appendChild(dateElement);

  newDiv.className = "blog-entry";

  newDiv.addEventListener("click", () => {
    window.location.href = "blogs/" + blog.slug + ".html";
  });

  return newDiv;
};

const populateDomWithBlogs = (blogs: Blog[]) => {
  const div = document.getElementById("blog-container");

  if (!div) {
    return;
  }

  blogs.forEach((blog) => {
    div.appendChild(createBlogEntry(blog));
  });
};

const blogs: Blog[] = [
  {
    title: "Hello, World!",
    date: "2021-01-01",
    description: "My first blog post.",
    slug: "hello-world",
  },
  {
    title: "Hello, World, Again!",
    date: "2021-01-02",
    description: "My second blog post.",
    slug: "hello-world-again",
  },
];

populateDomWithBlogs(blogs);
