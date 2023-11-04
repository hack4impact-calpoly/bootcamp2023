export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogList: Blog[] = [
  {
    title: "Cinque Terre",
    date: "10/21/2023",
    description: "My first weekend trip exploring another part of Italy!",
    slug: "cinque-terre.html",
  },
  {
    title: "Tuscany",
    date: "10/21/2023",
    description: "The program-organized event, covering Flourence and Pisa",
    slug: "tuscany.html",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const parent = document.querySelector("#blog-list");

  blogList.forEach((blog) => {
    // container representing a row that will hold the blog post info
    const createDiv = document.createElement("div");
    createDiv.className = "blog-entry";

    const createTitle = document.createElement("a"); // link to blog post
    createTitle.href = blog.slug;
    createTitle.textContent = blog.title;

    const createDate = document.createElement("p"); // date blog post created
    createDate.textContent = blog.date;

    const createDescription = document.createElement("p"); // brief description of blog post
    createDescription.textContent = blog.description;

    // add all the elements to the container row
    createDiv.append(createTitle);
    createDiv.append(createDate);
    createDiv.append(createDescription);
    if (parent) {
      parent.append(createDiv);
    }
  });
});

export default blogList;