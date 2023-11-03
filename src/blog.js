var blogs = [
  {
    title: "How I got into CS",
    date: "10-29-2023",
    description: "About my career thought process as a high schooler",
    slug: "how-i-got-into-cs",
  },
  {
    title: "What I Learned in Hack4Impact So Far",
    date: "10-29-2023",
    description: "About what I've learned in the past few weeks in the club",
    slug: "what-i-learned-in-h4i-so-far",
  },
];
var container = document.querySelector(".container");
function displayBlogs() {
  blogs.forEach(function (blog) {
    var blogElement = document.createElement("div");
    blogElement.classList.add("blog-item");
    blogElement.innerHTML = "\n<h2>"
      .concat(blog.title, "</h2>\n<p>Date: ")
      .concat(blog.date, "</p>\n<p>")
      .concat(blog.description, "</p>\n<p>");
    if (container) {
      container.appendChild(blogElement);
    }
  });
}
displayBlogs();
