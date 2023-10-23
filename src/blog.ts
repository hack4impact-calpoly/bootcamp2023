type Blog = {
	title: string;
	date: string;
    description: string;
	slug: string;
};

const blogs: Blog[] = [
	{
		title: "Joe Mama",
		date: "10-23-2023",
        description: "Joe Mama is Nacho Dada",
		slug: "./blogs/blog1.html",
	},
	{
		title: "Nacho Dada",
		date: "10-23-2023",
        description: "Nacho Dada is Joe Mama",
		slug: "./blogs/blog2.html",
	},
];

function addBlogs(blogList: Blog[]) {
    let blogContainer = document.querySelector(".blogContain");
    blogList.forEach(blog => {
        let newBlogDiv = document.createElement("div")
        // newBlogDiv.className = "about"
        newBlogDiv.innerHTML = `
                                <h1>${blog.title}</h1> 
                                <h3>${blog.date}</h3>
                                <p>${blog.description}</p>
                                <a href="${blog.slug}">Read More</a>`
        blogContainer?.appendChild(newBlogDiv)
    })
}

addBlogs(blogs);