type Blog = {
	title: string;
	date: string;
	description: string;
    slug: string;
};

const blogs: Blog[] = [
	{
		title: "Unique interview skills",
		date: "10-22-2023",
		description: "Skills that would be really cool to show off in a a job interview.",
        slug: "blog2.html",
	},
	{
		title: "Bagels",
		date: "10-21-2023",
		description: "Ranking bagel shops best to worst.",
        slug: "blog1.html",
	},
];

function displayBlog() {
    const item = document.getElementById("blog")
    blogs.forEach(({title, date, description, slug}) => {
    
        const blogList = document.getElementById("blog-list");
        const blogpost = document.createElement('div')
        const header = document.createElement('h1')
        header.innerHTML = title

        const date_var = document.createElement('p')
        date_var.innerHTML = date
        
        const desc = document.createElement('p')
        desc.innerHTML = description

        const link = document.createElement('a')
        link.href = `blogposts/${slug}`
        link.innerHTML = "Learn More";

        blogpost.appendChild(header)
        blogpost.appendChild(date_var)
        blogpost.appendChild(desc)
        blogpost.appendChild(link)

        if (blogList) {
            blogList.appendChild(blogpost)
        }


        item?.appendChild(blogpost)
    })
}

displayBlog()