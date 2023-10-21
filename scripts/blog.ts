type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const currentBlogList: Blog[] = [
    {
        title: "Cal Poly Classes",
        date: "10-20-2023",
        description: "Discussions on Cal Poly CS Classes",
        slug: '/blogs/blog1',
    },
    {
        title: "TypeScript and NextJS",
        date: "10-20-2023",
        description: "Discussions on New Technologies",
        slug: '/blogs/blog2',
    },
]

function addBlogs(blogList: Blog[]) {
    let blogContainer = document.querySelector(".blogWrapper");

    blogList.forEach(blog => {
        let newBlogDiv = document.createElement("div")
        newBlogDiv.innerHTML = `
                                <h1>${blog.title}</h1> 
                                <p>${blog.date}</p>
                                <p>${blog.description}</p>
                                <a href="${blog.slug}"> Read Here</a>`
        blogContainer?.appendChild(newBlogDiv)
    })
}

addBlogs(currentBlogList)