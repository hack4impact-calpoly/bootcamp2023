type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "My first blog",
    date: "10/18/2023",
    description: "This is my very first blog post!",
    slug: "first"
  },
  {
    title: "My second blog",
    date: "10/18/2023",
    description: "This is my second blog post!",
    slug: "second"
  }
]

window.onload = () => {
  const blogContainer = document.getElementById("blog-container");
  if (!blogContainer) {
    return;
  }

  for (let blog of blogs) {
    const div = document.createElement("div");
    const title = document.createElement("h4");
    title.innerHTML = `${blog.title} - ${blog.date}`;
    
    const description = document.createElement("p");
    description.innerHTML = blog.description;

    div.appendChild(title);
    div.appendChild(description);
    div.className = "blog-entry";
    div.addEventListener("click", () => {
      window.location.href = `blogs/${blog.slug}.html`;
    });

    blogContainer.appendChild(div);
  }
}
