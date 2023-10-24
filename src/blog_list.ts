type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const blogList: Blog[] = [

    {
        title: "My day at work",
        date: "October 19, 2023",
        description: "My coworkers really were on my nerves today.",
        slug: "/Users/ethantrantalis/Projects/bootcamp-project-2023/blog1.html"
    },
    {
        title: "Going home this weekend",
        date: "October 16, 2023",
        description: "Driving down the US-101 is a favorite of mine, the vibes are so good.",
        slug: "/Users/ethantrantalis/Projects/bootcamp-project-2023/blog2.html"
    }
];

 

                
function addNewBlogs(blogs: Blog[]) {


    let blogContainer = document.querySelector(".blogs_added");

    for(let i = 0; i < blogList.length; i++){
        let newBlogDiv = document.createElement("div")
        newBlogDiv.innerHTML = `
                                <h1>${blogList[i].title}</h1> 
                                <h3>${blogList[i].date}</h3>
                                <p>${blogList[i].description}</p>
                                <a href="${blogList[i].slug}">Continued<br><br><br></a>`
        
        
        
                                blogContainer?.appendChild(newBlogDiv)
    }

   
}

addNewBlogs(blogList);




