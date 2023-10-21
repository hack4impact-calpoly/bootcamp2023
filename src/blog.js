var Posts = [
    {
        title: "My first blog post",
        date: "2023-10-10",
        description: "Starting milestone 1!",
        slug: "firstblog",
    },
];
function addBlogsDOM(blogPosts) {
    var container = document.getElementById("blog");
    blogPosts.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    blogPosts.forEach(function (post) {
        var newPost = document.createElement('div');
        var title = document.createElement('h2');
        var date = document.createElement('h3');
        var description = document.createElement('p');
        var slug = document.createElement('a');
        title.innerHTML = post.title;
        newPost.appendChild(title);
        date.innerHTML = post.date;
        newPost.appendChild(date);
        description.innerHTML = post.description;
        newPost.appendChild(description);
        slug.href = "blogs/".concat(post.slug, ".html");
        slug.innerHTML = "Read More";
        newPost.appendChild(slug);
        newPost.className = "blog-entry";
        newPost.addEventListener("click", function () {
            window.location.href = "blogs/" + post.slug + ".html";
        });
        if (container) {
            container.appendChild(newPost);
        }
    });
}
addBlogsDOM(Posts);
