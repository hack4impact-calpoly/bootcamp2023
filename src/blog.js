var blogs = [
    {
        title: "Milestone 1",
        date: "02/07/2005",
        description: "What I learned in milestone one",
        link: "blog1.html"
    },
    {
        title: "Food For Today",
        date: " 01/07/2003",
        description: "Everything that I ate today",
        link: "blog2.html"
    },
    {
        title: "Milestone 2",
        date: " 01/07/2020",
        description: "What I will learn in milestone two",
        link: "blog3.html"
    }
];
var blogContainer = document.getElementById("blog-container");
if (blogContainer) {
    blogs.forEach(function (element) {
        var blogElement = document.createElement('div');
        blogElement.classList.add('blog');
        var blogTitle = document.createElement('h1');
        blogTitle.innerText = element.title;
        var blogDescription = document.createElement('p');
        blogDescription.innerText = element.description;
        var blogDate = document.createElement('p');
        blogDate.innerText = element.date;
        // append each component of blog to the div element
        blogElement.appendChild(blogTitle);
        blogElement.appendChild(blogDate);
        blogElement.appendChild(blogDescription);
        blogElement.addEventListener('click', function () {
            window.location.href = element.link;
        });
        blogContainer.appendChild(blogElement);
    });
}
