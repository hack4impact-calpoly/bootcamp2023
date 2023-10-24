var blogs = [
    {
        title: "My first blog!",
        date: "Oct 1, 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
        slug: "first-blog",
    },
    {
        title: "My second blog!",
        date: "Oct 2, 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
        slug: "second-blog",
    },
    {
        title: "My third blog!",
        date: "Oct 3, 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
        slug: "third-blog",
    },
    {
        title: "My fourth blog!",
        date: "Oct 4, 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue eu. Praesent elementum facilisis leo vel fringilla. Massa massa ultricies mi quis hendrerit dolor magna. Auctor elit sed vulputate mi sit amet.",
        slug: "fourth-blog",
    },
];
function createBlogs() {
    blogs.forEach(function (blog) {
        // get the blog div
        var blogDiv = document.getElementById("blogs");
        // create the parent div and add a text node
        var parentDiv = document.createElement("div");
        parentDiv.className = "flex justify-center";
        var link = "./blogs/" + blog.slug + ".html";
        parentDiv.innerHTML = "\n        <div class=\"bg-[#344e41] w-[500px]\">\n        <div class=\"flex justify-around pb-5\">\n          <h2 class=\"text-white\">".concat(blog.title, "</h2>\n          <p class=\"text-white\">").concat(blog.date, "</p>\n        </div>\n        <p class=\"mb-5 text-white\">").concat(blog.description, "</p>\n        <a class=\"bg-[#344e41] text-white underline\" href=\"").concat(link, "\">Check out the blog here!</a>\n        </div>\n        ");
        // insert parent div into the blog div
        blogDiv === null || blogDiv === void 0 ? void 0 : blogDiv.appendChild(parentDiv);
    });
}
createBlogs();
