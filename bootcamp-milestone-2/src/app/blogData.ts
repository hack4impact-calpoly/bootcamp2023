export interface Blog 
{
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "The Competitive Space of Grace Hopper",
        date: "10-23-2023",
        description: "My experience as a Grace Hopper attendee, this year.",
        slug: "blog1",
    },
    {
        title: "Must Watch Halloween Movies",
        date: "10-24-2023",
        description: "A complete list of spooky films to watch for the holiday.",
        slug: "blog2",
    },
];

export default blogs;