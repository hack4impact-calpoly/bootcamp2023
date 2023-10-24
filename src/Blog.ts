type Blog = {
  date: string;
  title: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    date: "10/22/23",
    title: "First Post!",
    description: "Welcome to my first Blog post!",
    slug: "firstBlogPost",
  },
  {
    date: "10/22/23",
    title: "Second Post!",
    description: "This is my second Blog post!",
    slug: "secondBlogPost",
  },
];

function addBlogsToHTML(blogs: Blog[]) {
  var blogContainer = document.getElementById("blog-list");

  if (blogContainer) {
    blogs.forEach((blog) => {
      const blogPost = document.createElement("div");
      blogPost?.classList.add("individual-blog-post"); // why need optional chaining here? if already checking for null?
      blogPost.setAttribute("data-blog-slug", blog.slug);
      blogPost.setAttribute("data-blog-id", `${blog.slug}-blog-post-id`);
      const blogTitle = document.createElement("h2");
      blogTitle.classList.add("blog-post-title");

      const blogDescription = document.createElement("p");
      blogDescription.classList.add("blog-post-description");

      const blogDate = document.createElement("p");
      blogDate.classList.add("blog-post-date");

      blogDescription.innerHTML = blog.description;
      blogTitle.innerHTML = blog.title;
      blogDate.innerHTML = blog.date;
      blogPost.appendChild(blogTitle);
      blogPost.appendChild(blogDescription);
      blogPost.appendChild(blogDate);
      blogContainer?.appendChild(blogPost); // why need optional chaining here? if already checking for null?
    });
  }
}

function addListeners() {
  const allBlogDivs = document.querySelectorAll(".individual-blog-post");

  allBlogDivs.forEach((blog) => {
    blog.addEventListener("click", () => {
      const blogId = blog.getAttribute("data-blog-id");
      const blogSlug = blog.getAttribute("data-blog-slug");

      console.log("blog id" + blogId);
      if (blogId) {
        window.location.href = `${blogSlug}.html?id=${blogId}`;
      }
    });
  });
}

addBlogsToHTML(blogs);
addListeners();
