type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "My first blog!",
    date: "Oct 1, 2023",
    description: "This is my first ever blog! Welcome everyone!",
    slug: "first-blog",
  },
  {
    title: "My second blog!",
    date: "Oct 1, 2023",
    description: "This is my second ever blog! Welcome everyone!",
    slug: "second-blog",
  },
  {
    title: "My third blog!",
    date: "Oct 1, 2023",
    description: "This is my third ever blog! Welcome everyone!",
    slug: "third-blog",
  },
  {
    title: "My fourth blog!",
    date: "Oct 1, 2023",
    description: "This is my fourth ever blog! Welcome everyone!",
    slug: "fifth-blog",
  },
];

function createBlogs() {
  blogs.forEach((blog) => {
    // get the blog div
    const blogDiv = document.getElementById("blogs");

    // create the parent div and add a text node
    const parentDiv = document.createElement("div");
    parentDiv.innerHTML =
      blog.title + "\n" + blog.date + "\n" + blog.description;

    // insert parent div into the blog div
    blogDiv?.appendChild(parentDiv);
  });
}

createBlogs();
