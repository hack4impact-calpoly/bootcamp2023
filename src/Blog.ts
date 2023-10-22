type Blog = {
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    date: "10/22/23",
    description: "Welcome to my first Blog post!",
    slug: "firstBlogPost",
  },
  {
    date: "10/22/23",
    description: "This is my second Blog post!",
    slug: "secondBlogPost",
  },
];

function addBlogsToHTML(blogs: Blog[]) {

    var blogContainer = document.getElementById('blog-list');

    blogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.innerHTML = blog.description;
        blogContainer.appendChild(blogPost);
    })
};
