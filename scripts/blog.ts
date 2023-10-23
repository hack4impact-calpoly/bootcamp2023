type Blog = {
    title: string;
	date: Date;
    description: string;
	slug: string;
};

const blogs: Blog[] = [
	{
		title: "Example Milestone 1",
		date: new Date("2023-10-23"),
        description: "My first blog",
		slug:"https://www.javatpoint.com/typescript-date-object",
	},
	{
		title: "Example Milestone 2",
		date: new Date("2023-10-23"),
        description: "My 2nd blog",
		slug:"https://h4i.notion.site/Developer-Bootcamp-2023-c5f8886eeb364706a9f27ee1f6ee37ed",
	},
];

function addBlogs(blogs: Blog[]) {
    const blog_div = document.getElementById('blogs');
    if (!blog_div) {
        return;
    }

    blogs.forEach((blog) => {
        const item = document.createElement('div');
        item.className = 'blog-item';
        item.innerHTML = `<h1> ${blog.title} -  ${blog.date}</h1>
                            <p> ${blog.description} </p>
                            <a href="${blog.slug}"> <button id="blog-btn"> Read </button> </a>`;
        blog_div.appendChild(item);
    });
}

addBlogs(blogs);

