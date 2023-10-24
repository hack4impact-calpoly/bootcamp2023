type Blog = {
	title: string;
	date: string;
	description: string;
    slug: string;
};

const blogs: Blog[] = [
	{
		title: "Tip 2",
		date: "10-22-2023",
		description: "Don't panic if you're broke - get money.",
        slug: "blog2",
	},
	{
		title: "Tip 1",
		date: "10-21-2023",
		description: "Don't become broke.",
        slug: "blog1",
	},
];

function displayBlog() {
    const item = document.getElementById("blog")
    blogs.forEach(({title, date, description, slug}) => {
        
        const blogpost = document.createElement('div')
        const header = document.createElement('h1')
        header.innerHTML = title

        const date_var = document.createElement('p')
        date_var.innerHTML = date
        
        const desc = document.createElement('p')
        desc.innerHTML = description

        const link = document.createElement('a')
        link.href = `blog/${slug}.html`

        blogpost.appendChild(header)
        blogpost.appendChild(date_var)
        blogpost.appendChild(desc)
        blogpost.appendChild(link)

        item?.appendChild(blogpost)
    })
}

displayBlog()