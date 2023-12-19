// Type Blog Created
export interface Blog{
    title: string
    date: string
    description: string
    slug: string
}

const blogs: Blog[] = [
    {
        title: "First Blog",
        date: "10-21-2023",
        description: "Hello World",
        slug: "blog-entry1.html"
    },
    {
        title: "Milestone 1",
        date: "10-21-2023",
        description: "Learning Javascript and Typescript",
        slug: "blog-entry2.html"
    },
];
export default blogs;