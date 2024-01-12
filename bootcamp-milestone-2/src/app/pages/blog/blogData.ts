export type Blog = {
    name: string;
    description: string;
    posted: string;
    slug: string;
}

export const blogs: Blog[] = [

    {
        name: "My day at work",
        description: "My coworkers really were on my nerves today.",
        posted: "October 19, 2023",
        slug: "../../../public/blog1.html"
    },
    {
        name: "Going home this weekend",
        posted: "October 16, 2023",
        description: "Driving down the US-101 is a favorite of mine, the vibes are so good.",
        slug: "../../../public/blog2.html"
    }
];

export default blogs;