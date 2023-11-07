export interface Blog {
	title: string;
    date: string;
    description: string;
	image: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Flowers",
        date: "10-23-2023",
        description: "My favorite type of flower is a rose :)",
        image: "rose.png",
        slug: '/blog/blog1'
    },
    {
        title: 'Sunset',
        date: "10-23-2023",
        description: "I love watching the sunset",
        image: "sunset.png",
        slug: '/blog/blog2'
    }
];

export default blogs;  // This will allow us to access this data anywhere!