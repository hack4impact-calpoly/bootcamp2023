type Blog = {
	title: string;
	date: string;
    description: string;
	slug: string;
};

const blogs: Blog[] = [
	{
		title: "Joe Mama",
		date: "06-19-2000",
        description: "Joe Mama is Nacho Dada",
		slug: "./blogs/blog1.html",
	},
	{
		title: "Nacho Dada",
		date: "06-20-2000",
        description: "Nacho Dada is Joe Mama",
		slug: "./blogs/blog2.html",
	},
];

function addBlogs(blogList: Blog[]) {
    let blogContainer = document.querySelector(".blogContain");

    blogList.forEach(blog => {
        let newBlogDiv = document.createElement("div")
        newBlogDiv.className = "about-text"
        newBlogDiv.innerHTML = `
                                <h1>${blog.title}</h1> 
                                <p>${blog.date}</p>
                                <p>${blog.description}</p>
                                <a href="${blog.slug}">Read More</a>`
        blogContainer?.appendChild(newBlogDiv)
    })
}

addBlogs(blogs);