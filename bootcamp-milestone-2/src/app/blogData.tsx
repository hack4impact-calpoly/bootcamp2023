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
        slug: "./public/typescript.png",
    },
    {
        title: "Weather",
        date: new Date("2023-10-16"),
        description: "The weather was very nice today.",
        slug: "./public/weather.png",
    },
];

export default blogs;
