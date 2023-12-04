export interface Blog {
    title: string;
    date: Date;
    description: string;
    image: string;
    slug: string;
}

const blogs: Blog[] = [
    {
		title: "My new blog",
		date: new Date("2023-10-22"),
		description: "I have made a new blog using Hack4Impact bootcamp",
        image: "/H4I.png",
        slug: "./blog/0",
    },
	{
		title: "My linear analysis homework",
		date: new Date("2023-10-22"),
		description: "I have been really struggling with understanding vector spaces, subspaces, and spans",
        image: "/LinearSubspaces.png",
        slug: "./blog/1",
    },
];

export default blogs;

