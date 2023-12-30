export type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

export const blogList: Blog[] = [

    {
        title: "My day at work",
        date: "October 19, 2023",
        description: "My coworkers really were on my nerves today.",
        slug: "../../../public/blog1.html"
    },
    {
        title: "Going home this weekend",
        date: "October 16, 2023",
        description: "Driving down the US-101 is a favorite of mine, the vibes are so good.",
        slug: "../../../public/blog2.html"
    }
];