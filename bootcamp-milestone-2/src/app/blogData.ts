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
        slug: "./blogsFolder/blog1.html",
        imagePath: "./images/climbing.jpg"
    },
    {
        title: "TypeScript and NextJS",
        date: "10-20-2023",
        description: "Discussions on New Technologies",
        slug: "./blogsFolder/blog2.html",
        imagePath: "./images/house.jpg"

    },
]

export default currentBlogList