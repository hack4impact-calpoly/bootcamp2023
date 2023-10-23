type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Japan and Korea",
    date: "09-01-2023",
    description: "Trip to Japan and Korea!",
    slug: "JK23",
  },
  {
    title: "Thailand and Singapore",
    date: "09-13-2022",
    description: "Going to Thailand and Singapore for the first time!",
    slug: "TS22",
  },
];

function displayBlog() {
  const blogList = document.getElementById("blog-list");
  console.log(blogList);
  blogs.forEach(({ title, date, description, slug }) => {
    const link = document.createElement("a");
    link.href = `blog/${slug}.html`;
    link.innerHTML = "Read More";
    const createPost = document.createElement("div");
    createPost.classList.add("create-post");
    createPost.innerHTML = `
            <h2 class="post-title">${title}<h2>
            <h3 class="post-subtitle"> ${date}<h3>
            <p class="post-description">${description}<p>
        `;
    createPost.appendChild(link);
    if (blogList) {
      blogList.appendChild(createPost);
    }
  });
}

displayBlog();
