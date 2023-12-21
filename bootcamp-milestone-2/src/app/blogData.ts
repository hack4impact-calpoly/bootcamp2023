export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
}

const blogs: Blog[] = [
    {
        title: "Graduation: end of an era",
        date: "05-30-2023",
        description: "Looking back on the last four",
        image: "images/graduation.jpeg"
    },
    {
        title: "Volunteering in Taiwan",
        date: "08-04-2023",
        description: "How I spent my summer in Taiwan",
        image: "images/taiwan.JPG"
    }
]

export default blogs;