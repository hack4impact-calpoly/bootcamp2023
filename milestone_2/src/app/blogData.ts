import Blog from "./components/blog/page";

export interface Blog {
    comments: CommentProps;
    title: string;
    date: Date;
    description: string;
    slug: string;
};



const blogs: Blog[] = [
    {
        title: "Who Is Hack4Impact",
        date: new Date(),
        description: "An introduction to our club",
        slug: "/components/blog2"
    },
    {
        title: "Your First Code",
        date: new Date(),
        description: "How to write your first line of code",
        slug: "/components/blog1"
    }
]; 

export default blogs;