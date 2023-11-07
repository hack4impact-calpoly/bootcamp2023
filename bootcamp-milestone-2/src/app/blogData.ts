export interface Blog {
    title : string;
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

export default blogs;