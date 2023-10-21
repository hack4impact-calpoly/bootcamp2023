type Blog = {
    title: string;
    date:string;
    description: string;
    link: string;
};

const blogs: Blog[] = [
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

const blogContainer = document.getElementById("blog-container");


if (blogContainer) {
    blogs.forEach(element => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');

        const blogTitle = document.createElement('h1');
        blogTitle.innerText = element.title;

        const blogDescription = document.createElement('p');
        blogDescription.innerText = element.description;

        const blogDate = document.createElement('p');
        blogDate.innerText = element.date;

        // append each component of blog to the div element
        blogElement.appendChild(blogTitle);
        blogElement.appendChild(blogDate);
        blogElement.appendChild(blogDescription);

        blogElement.addEventListener('click', ()=> {
            window.location.href = element.link;
        })


        blogContainer.appendChild(blogElement);
    });
}