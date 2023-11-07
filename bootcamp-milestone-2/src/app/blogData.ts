export interface Blog {
    title: string;
    date: string;
    description: string
    slug:string
}

const blogs: Blog[]=[
    {
        title:"Blog#1",
        date:"2/2/2024",
        description:"this is description",
        slug: "./blog1"
    },
    {
        title:"Blog#2",
        date:"12/22/2023",
        description:"this is another description",
        slug: "./blog2"
    }
];

export default blogs;