type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Cool Beans",
    date: "10/24/23",
    description: "This is the cool beans blog.",
    slug: "coolbeans.html",
  },
  {
    title: "UnCool Rice",
    date: "10/24/23",
    description: "This is the uncool rice blog.",
    slug: "uncoolrice.html",
  },
];

function makeBlogs() {
  const blog_container = document.getElementsByClassName("blog-container")[0];
  blogs.forEach((blog) => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-div");
    const title = document.createElement("p");
    title.innerHTML = blog.title;
    const date = document.createElement("p");
    date.innerHTML = blog.date;
    const description = document.createElement("p");
    description.innerHTML = blog.description;
    const link = document.createElement("a");
    link.href = blog.slug;
    blogDiv.appendChild(title);
    blogDiv.appendChild(date);
    blogDiv.appendChild(description);
    link.appendChild(blogDiv);
    blog_container.appendChild(link);
  });
}

makeBlogs();
