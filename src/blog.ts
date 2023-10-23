type Blog = {
    slug: string;           //name for HTML file of blog
    title: string;
    date: string;
    description: string;
    
};

const blogsArray: Blog[] = [     // the list separted by {},
    {
    slug: "blogCats.html",
    title: "Cats I Like",
    date: "October 22, 2023",
    description: "A talk about the types of cats I like"
    },
    {
    slug: "blogFoods.html",
    title: "Foods I Like",
    date: "October 22, 2023",
    description: "A talk about some of the food I enjoy"
    },
];

//NOTE TO SELF: USE ` ` instead of single quotes for template literals and multiline strings

function showBlogCards() {      // creates HTML elements for each blog entry in Blogs
    const blogList = document.getElementById("blogList"); // in refrence to blogList div from blog.html

    blogsArray.forEach(({slug, title, date, description}) => {
        const createBlog = document.createElement("div");   // the blog preview card
        createBlog.classList.add("blogCard")                // gives each blog card a class blogCard for styling
        const blogLink = document.createElement("a");       // link to the full blog (slug.html)
        blogLink.href = `blog/${slug}.html`;
        
        createBlog.innerHTML = `
        <h1 class="blogTitle">${title}</h1>
        <h2 class="blogDate">${date}</h2>
        <p class="blogDescription">${description}</p>
        `;

        createBlog.appendChild(blogLink);

        if(blogList) {
        blogList.appendChild(createBlog); 
        }
        else {
            console.log('help')
        }
    });
}

showBlogCards();    //always call display function so that it runs on page launch