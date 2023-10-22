type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogList: Blog[] = [
  {
    title: "The Fellowship Of The Ring",
    date: "10/21/2023",
    description: "The first movie in the Trilogy",
    slug: "",
  },
  {
    title: "The Two Towers",
    date: "10/21/2023",
    description: "The second movie in the Trilogy",
    slug: "",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const parent = document.querySelector("#container_id");
  // const parent = document.getElementById("container_id");

  blogList.forEach((blog) => {
    const createDiv = document.createElement("div");
    createDiv.className = "blog_entry";
    const createLink = document.createElement("a");
    createLink.href = "./index.html";
    createLink.textContent = blog.description;
    createDiv.append(createLink);
    if (parent) {
      parent.append(createDiv);
    }
  });
});

const populateBlog = () => {};
