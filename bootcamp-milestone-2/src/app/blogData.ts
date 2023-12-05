export interface Blog {
    title: string;
    date: Date;
    description: string;
    image: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "My Github",
        date: new Date("2023-10-16"),
        description: "Wesley's Github",
        image: "/img/logo.png",
        slug: "./blogs/0",
    },
    {
        title: "Circuits",
        date: new Date("2023-10-16"),
        description: "Electric",
        image: "/img/background.png",
        slug: "./blogs/1",
    },
];

export default blogs;