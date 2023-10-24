type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "The Competitive Space of Grace Hopper",
        date: "10-23-2023",
        description: "My experience as a Grace Hopper attendee, this year.",
        slug: "grace-hopper"
    },
    {
        title: "Must Watch Halloween Movies",
        date: "10-24-2023",
        description: "A complete list of spooky films to watch for the holiday.",
        slug: "halloween-movies"
    },
];

function blogPreview() 
{
  const container = document.querySelector(".blog-container");

  if (container) {
    blogs.forEach((blog) => {
      const element = document.createElement("div");
      element.classList.add("blog-item");
      element.innerHTML = `
                <h2><a href="${blog.slug}.html">${blog.title}</a></h2>
                <p>${blog.date}</p>
                <p>${blog.description}</p>
            `;
      container.appendChild(element);
    });
  }
}
blogPreview();