type Blog = {
	title: string;
	date: string;
    description: string;
	slug: string;
};

const blogs: Blog[] = [
	{
    title: "Sample Blog 1",
    date: "2023-10-23",
    description: "This is the first sample blog description.",
    slug: "sample-blog-1",
  },
  {
    title: "Sample Blog 2",
    date: "2023-10-24",
    description: "This is the second sample blog description.",
    slug: "sample-blog-2",
  },
];

function appendBlogs() {
  var blogContainer = document.getElementById("blog-list-container");
  if (blogContainer) {
      blogs.forEach(function (blog) {
          var blogElement = document.createElement("div");
          blogElement.classList.add("blog-entry");
          blogElement.innerHTML = `
              <h1>${blog.title}</h1>
              <p>Date: ${blog.date}</p>
              <p>${blog.description}</p>
              <a href="${blog.slug}.html">Read More</a>
          `;
          blogContainer.appendChild(blogElement);
      });
  }
}
appendBlogs();