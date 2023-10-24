type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogPosts: Blog[] = [
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
  const blogList = document.getElementById("blog-list");

  blogPosts.forEach(({ title, date, description, slug }) => {
      const link = document.createElement("a");
      link.href = `${slug}.html`;
      link.innerHTML = "Read More";
      const postPreview = document.createElement("div");
      postPreview.classList.add("post-preview");
      postPreview.innerHTML = `
          <h2 class="post-title">${title}</h2>
          <h3 class="post-subtitle">${date}</h3>
          <p class="post-description">${description}</p>
      `;
      postPreview.appendChild(link);
      if (blogList) {
          blogList.appendChild(postPreview);
      }
  });
}
blogPreview();