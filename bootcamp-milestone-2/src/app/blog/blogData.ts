export interface Blog {
    slug: string;           //name for HTML file of blog
    title: string;
    date: string;
    description: string;
    
};

const blogsArray: Blog[] = [     // the list separted by {},
    {
    slug: "blogCat",
    title: "Cats I Like",
    date: "October 22, 2023",
    description: "A talk about the types of cats I like"
    },
    {
    slug: "blogFoods",
    title: "Foods I Like",
    date: "October 22, 2023",
    description: "A talk about some of the food I enjoy"
    },
];

export default blogsArray;