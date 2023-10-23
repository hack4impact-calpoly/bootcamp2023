type Blog = {
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
  // const parent = document.getElementById("container_id");

  blogList.forEach((blog) => {
    const createDiv = document.createElement("div");
    createDiv.className = "blog-entry";
    const createTitle = document.createElement("a");
    const createDate = document.createElement("p");
    const createDescription = document.createElement("p");

    createTitle.href = blog.slug;
    createTitle.textContent = blog.title;
    createDate.textContent = blog.date;
    createDescription.textContent = blog.description;

    createDiv.append(createTitle);
    createDiv.append(createDate);
    createDiv.append(createDescription);
    if (parent) {
      parent.append(createDiv);
    }
  });
});

const populateBlog = () => {};
