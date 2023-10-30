type Blog = {
	title: string;
	date: string;
	description: string;
};

const bloglist: Blog[] = [
	{
		title: "Hack4Impact Starter Pack",
		date: "10/20/2023",
		description: "I finished my Hack4Impact Starter Pack",
	},
	{
		title: "Hack4Impact Milestone 1",
		date: "10/29/2023",
		description: "I began my Hack4Impact Milestone 1!",
	},
];

export function displayBlogEntries(){
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

        blogEntry.appendChild(title);
        blogEntry.appendChild(date);
        blogEntry.appendChild(description);

        container.appendChild(blogEntry);
    })

}