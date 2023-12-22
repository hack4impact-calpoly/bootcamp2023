export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
    image: string;
}

const blogs: Blog[] = [
    {
        title: "Graduation: end of an era",
        date: "05-30-2023",
        description: "Looking back on the last four",
        slug: "/blog1",
        image: "images/graduation.jpeg"
    },
    {
        title: "Volunteering in Taiwan",
        date: "08-04-2023",
        description: "How I spent my summer in Taiwan",
        slug: "/blog2",
        image: "images/taiwan.JPG"
    }
]

export default blogs;