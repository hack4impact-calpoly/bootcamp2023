

export interface Blog {
    image: string;
	title: string;
    date: string;
    description: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        image: "/headphones.webp",
        title: "Some of my Favorite Artists",
        date: "October 21, 2023",
        description: "The Foals, Michael Jackson, Yung Pinch, Chance the Rapper are some of my favorite music artists.",
        slug: "blog-artists.html",
    },
    {
        image: "/classSchedule.png",
        title: "The Classes I am Taking",
        date: "October 21, 2023",
        description: "I am taking CSC 307, CSC 349, Calc IV, and Bio/BMED 213",
        slug: "blog-classes.html",
    },
];

export default blogs; // This will allow us to access this data anywhere!