var posts = [
  {
    title: "Some of my Favorite Artists",
    date: "October 21, 2023",
    description:
      "The Foals, Michael Jackson, Yung Pinch, Chance the Rapper are some of my favorite music artists.",
    slug: "blog-artists.html",
  },
  {
    title: "The Classes I am Taking",
    date: "October 21, 2023",
    description: "I am taking CSC 307, CSC 349, Calc IV, and Bio/BMED 213",
    slug: "blog-classes.html",
  },
];
function createPost(post) {
  var shell = document.createElement("div");
  shell.classList.add("shell");
  var title = document.createElement("p");
  title.innerHTML = post.title;
  title.classList.add("blog-class");
  var date = document.createElement("p");
  date.innerHTML = post.date;
  date.classList.add("blog-class");
  var description = document.createElement("p");
  description.innerHTML = post.description;
  description.classList.add("blog-class");
  var slug = document.createElement("a");
  var textNode = document.createTextNode("This is the link");
  slug.title = "Link to Post";
  slug.href = post.slug;
  slug.appendChild(textNode);
  slug.classList.add("blog-class");
  shell.appendChild(title);
  shell.appendChild(date);
  shell.appendChild(description);
  shell.appendChild(slug);
  var blog = document.getElementById("blog");
  blog === null || blog === void 0 ? void 0 : blog.appendChild(shell);
}
posts.forEach(function (element) {
  return createPost(element);
});
