type Blog = {
    title: string;
    image: string;
    image_alt: string;
    date: string;
    description: string;
    // thoughts: string;
    slug: string;
};

const blogs: Blog[] = [
{
    title: "Gym Time Thoughts",
    image: "images/meAtGym.png",
    date: "11/03/23",
    image_alt: "image at the gym",
    // description:,
    description: "Week 6 is over. Went by in a snap. Lots of lessons. Live and learn. Life is the ultimate teacher.",
    slug: "blog/gym-time-thoughts.html"
},
{
    title: "18 Years",
    image: "images/discussions.png",
    image_alt: "Making Moves",
    date: "11/03/23",
    // description: "No one is waiting. Not even time.",
    description: "Half way through 18 years. 10 more and I'll be 28. We're only given one life. Make it a good one.",
    slug: "blog/18-years.html"
}
];


const blogContainer = document.getElementById("blog-container")
// for loop
for (let i = 0; i < blogs.length; i++)
{
    const createBlog = document.createElement('div')
    createBlog.className = "blog-post" // Blog Class
    // createBlog.classList.add("blog-posts");


     // Image
     const createImage = document.createElement('img')
     createImage.src = blogs[i].image;
     createImage.alt = blogs[i].image_alt;
     createImage.height = 300;
     createImage.className = "blog-image" // Blog Class
     createBlog.appendChild(createImage);

    // Content
    const createContent = document.createElement('div')
    createContent.className = "blog-content"

            // Title and Date 
                const createTitle = document.createElement('h2')
                    createTitle.innerText = `${blogs[i].title}`
                    createTitle.className = "blog-title" // Title Class

                    const createLink = document.createElement('a');
                    createLink.href = blogs[i].slug;
                    createLink.className = 'blog-link'

                    createLink.append(createTitle);
                    createContent.appendChild(createLink)
                    

                const createDate = document.createElement('h3')
                    createDate.innerText = `${blogs[i].date}`
                    createDate.className = "blog-date" // Title Class
                    createContent.appendChild(createDate)

            // Break
                    createBlog.appendChild(document.createElement('br'))
                // Description
                const createDescription = document.createElement('p')
                    createDescription.innerText = blogs[i].description
                    createDescription.className = "blog-description" 
                    createContent.appendChild(createDescription)
            // Break
                    createBlog.appendChild(document.createElement('br'))

    createBlog.appendChild(createContent)

   
        
// Break
        createBlog.appendChild(document.createElement('br'))

// Add it to the blog container
    blogContainer.appendChild(createBlog)
}

console.log(blogContainer)








// var i = 0
// for (const key in blogs[1]) {
//     const specificBlog = blogs[i];
//     if (blogs[0].hasOwnProperty(key)) {
//         console.log(`${key}: ${specificBlog[key]}`);
//     }
    
// }


// blogs.forEach(myFunction);
