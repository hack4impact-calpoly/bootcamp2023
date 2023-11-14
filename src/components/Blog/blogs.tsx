export interface Blog{
    title: string;
    date: string;
    description: string;
    urlLink: string;
}

const blogs: Blog[] = [
    {
        title: "Blog 1",
        date: "| November 10, 2023",
        description: "This is a preview for blog 1",
        urlLink: "/Blogs/Blog1"
    },
    {
        title: "Blog 2",
        date: "| December 10th, 2023",
        description: "This is also a preview for blog 2 that will lead to a page later",
        urlLink: "/Blogs/Blog1"
    },
];

export default blogs;