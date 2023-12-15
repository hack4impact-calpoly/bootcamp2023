export interface Blog {
        title:  string;
        date:  string;
        description:  string;
        slug: string;
}


const blogs: Blog[] = [
    {
        title: "First Blog Post",
        date:  "12/21/2018",
        description:  "This is my very first blog post. Welcome!",
        slug: "firstblog",
    },
    {
        title: "Second Blog Post",
        date:  "04/23/2023",
        description:  "I am still alive. Welcome to my second blog post.",
        slug: "secondblog",
    }
];

export default blogs; // This will allow us to access this data anywhere!

