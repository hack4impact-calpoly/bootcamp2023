export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "School",
        date: "9-19-2023",
        description: "Started 4th year of school",
        slug: "hello.come"
    },
    {
        title: "Thanksgiving",
        date: "11-19-2023",
        description: "Thanksgiving with Family",
        slug: "Martinez.com"
    }
];

export default blogs;
