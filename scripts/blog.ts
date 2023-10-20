type Blog = {
  title : string;
  content : string;
  date: string;
  description: string;
  slug: string;
};

const blogPosts: Blog[] = [
  {
    title : "Gardening",
    content : "Outside of coding I love to spend some time gardening and growing food for my family",
    date: "10-19-2023",
    description: "gardening",
    slug: "gardening-post"
  }
];

function displayBlogPosts(){
  blogPosts.sort((a,b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  // might need to add <ul > element inside of blog-container
  const listOfBlogPosts = document.getElementById("list-of-blog-posts");
  
  blogPosts.forEach(({title, date, description, slug}) => {
      const link = document.createElement("a");
        link.href = `blog/${slug}.html`;
        link.innerHTML = "Read More";
        const postPreview = document.createElement("div");
        postPreview.classList.add("post-preview");
        postPreview.innerHTML = `
            <h2 class="post-title">${title}</h2>
            <h3 class="post-subtitle">${date}</h3>
            <p class="post-description">${description}</p>
        `;
        postPreview.appendChild(link);
        if (listOfBlogPosts) {
          listOfBlogPosts.appendChild(postPreview);
        }
  })
}

displayBlogPosts();