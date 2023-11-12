export interface Blog {
    title: string;
    date: string;
    desc: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Day 1",
        date: "10-19-2023",
        desc: "A food blog thread",
        slug: "/blogs/food",
    },
    {
        title: "Day 2",
        date: "10-X-2023",
        desc: "A personal blog thread",
        slug: "/blogs/personal",
    },
];

export default blogs; // This will allow us to access this data anywhere!