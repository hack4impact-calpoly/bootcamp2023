type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "My first blog!",
    date: "Oct 1, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
    slug: "first-blog",
  },
  {
    title: "My second blog!",
    date: "Oct 2, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
    slug: "second-blog",
  },
  {
    title: "My third blog!",
    date: "Oct 3, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
    slug: "third-blog",
  },
  {
    title: "My fourth blog!",
    date: "Oct 4, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
    slug: "fourth-blog",
  },
];

function createBlogs() {
  blogs.forEach((blog) => {
    // get the blog div
    const blogDiv = document.getElementById("blogs");

    // create the parent div and add a text node
    const parentDiv = document.createElement("div");
    parentDiv.className = "flex justify-center";
    let link = "./blogs/" + blog.slug + ".html";
    parentDiv.innerHTML = `
        <div class="bg-[#344e41] w-[500px]">
        <div class="flex justify-around pb-5">
          <h2 class="text-white">${blog.title}</h2>
          <p class="text-white">${blog.date}</p>
        </div>
        <p class="mb-5 text-white">${blog.description}</p>
        <a class="bg-[#344e41] text-white underline" href="${link}">Check out the blog here!</a>
        </div>
        `;

    // insert parent div into the blog div
    blogDiv?.appendChild(parentDiv);
  });
}

createBlogs();
