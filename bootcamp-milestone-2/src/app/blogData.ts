export interface Blog {
    title: string;
    date: Date;
    description: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Introduction to Typescript",
        date: new Date("2023-10-16"),
        description: "Working on milestone 1 assignment.",
        slug: "./blog",
    },
    {
        title: "Weather",
        date: new Date("2023-10-16"),
        description: "The weather was very nice today.",
        slug: "./blog",
    },
];

export default blogs;
