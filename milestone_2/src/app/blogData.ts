export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Who Is Hack4Impact",
        date: "10/23/2023",
        description: "An introduction to our club",
        slug: "/components/blog2"
    },
    {
        title: "Your First Code",
        date: "10/23/2023",
        description: "How to write your first line of code",
        slug: "/components/blog1"
    }
];

export default blogs;