type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blog: Blog[] = [
  {
    title: "The Intersection of Arts and Computing",
    date: "October 23, 2023",
    description: "A brief article on virtual, augmented, and mixed reality.",
    slug: "blog_entry1.html",
  },
  {
    title: "What My Dance Journey Has Taught Me",
    date: "October 23, 2023",
    description: "Summarizing my dance journey and what lessons I've learned.",
    slug: "blog_entry2.html",
  },
];

function blog_iteration() {
  const blog_container = document.getElementsByClassName("blog")[0];

  blog.forEach((blog) => {
    const blog_element = document.createElement("div");
    console.log(blog_container);

    blog_element.innerHTML =
      `<h2><a href = ${blog.slug}>${blog.title}</a></h2>` +
      `<p>${blog.date}</p>` +
      `<p>${blog.description}</p>`;
    blog_container.appendChild(blog_element);
  });
}

blog_iteration();
