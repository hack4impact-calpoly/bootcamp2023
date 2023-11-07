type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
    imagePath: string;
}

const currentBlogList: Blog[] = [
    {
        title: "Cal Poly Classes",
        date: "10-20-2023",
        description: "Discussions on Cal Poly CS Classes",
        slug: "/blog/blog1",
        imagePath: "/climbing.jpg"
    },
    {
        title: "TypeScript and NextJS",
        date: "10-20-2023",
        description: "Discussions on New Technologies",
        slug: "/blog/blog2",
        imagePath: "/house.jpg"

    },
]

export default currentBlogList