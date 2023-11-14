export interface Blog {
    title: string;
    date: Date;
    description: string;
    image: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "Introduction to Typescript",
        date: new Date("2023-10-16"),
        description: "Working on milestone 1 assignment.",
        image: "/typescript.png",
        slug: "./blog/0",
    },
    {
        title: "Weather",
        date: new Date("2023-10-16"),
        description: "The weather was very nice today.",
        image: "/weather.jpg",
        slug: "./blog/1",
    },
];

export default blogs;
