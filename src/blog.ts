type Blog = {
	title: string;
	date: string;
	description: string;
    slug: string
};

const bloglist: Blog[] = [
	{
		title: "My Internship @ Microchip Technology!",
		date: "9/15/2023",
		description: "I spent this past summer (2023) interning at Microchip Technology Inc. where I was able to apply the skills I learned in school to contribute to meaningful work.",
        slug: "Blog1.html",
	},
	{
		title: "Starting as a Software Dev @ Hack4Impact",
		date: "10/29/2023",
		description: "I began my position as a software developer at Hack4Impact, a 501c3 non-profit organization that develops software projects for local non-profits in San Luis Obispo County!",
        slug: "Blog2.html"
	},
];


const container = document.getElementById("container");
bloglist.forEach(blog => {
    const blogEntry = document.createElement("div");
    blogEntry.className = "blog-entry";

    const title = document.createElement("h2");
    title.textContent = blog.title;

    const date = document.createElement("p");
    date.textContent = `Date: ${blog.date}`;

    const description = document.createElement("p");
    description.textContent = blog.description;

    const slug = document.createElement("a");
    slug.href = blog.slug;
    slug.textContent = "Visit this blog!";

    blogEntry.appendChild(title);
    blogEntry.appendChild(date);
    blogEntry.appendChild(description);
    blogEntry.appendChild(slug);
    if (container){
        container.appendChild(blogEntry);
    }
})
