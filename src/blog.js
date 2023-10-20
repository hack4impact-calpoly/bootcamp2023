var Posts = [
    {
        title: "My first blog post",
        date: "October 10, 2023",
        description: "Starting milestone 1!",
        slug: "Idk",
    },
    {
        title: "My second blog post",
        date: "October 10, 2023",
        description: "Having some confusion.",
        slug: "Idk",
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
        slug.href = "blog/".concat(slug, ".html");
        slug.innerHTML = "Read More";
        newPost.appendChild(slug);
        if (container) {
            container.appendChild(newPost);
        }
    });
}
