type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogPosts: Blog[] = [
  {
    title: "Blog 1",
    date: "10-20-2023",
    description: "Hi this is my first blog post!",
    slug: "blog_1",
  },
  {
    title: "Becoming a Blogger",
    date: "10-21-2023",
    description: "I am becoming quite fluent in blogging",
    slug: "blog_2",
  },
];

function displayBlogPreview() {
  blogPosts.sort((b, a) => { //sort in reverse order
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const blogList = document.getElementById("blog-list");

  blogPosts.forEach(({ title, date, description, slug }) => {
    const link = document.createElement("a");
    link.href = `blog/${slug}.html`;
    link.innerHTML = "Read More";
    const postPrev = document.createElement("div");
    postPrev.classList.add("post-preview");
    postPrev.innerHTML = `
      <h2 class="post-title">${title}</h2>
      <h3 class="post-subtitle">${date}</h3>
      <p class="post-description">${description}</h3>
    `; //create html for blog post previews
    postPrev.appendChild(link);
    if (blogList) {
      blogList.appendChild(postPrev); //append blogs
    } 
  });
}

displayBlogPreview();
