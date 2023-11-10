export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const blogPosts: Blog[] = [
    {
        title: "Chicken Soup",
        date: "9-25-2023",
        description: "chicken soup",
        slug: "chicken_soup"
    },
    {
        title: "Curry Egg Noodles",
        date: "10-21-2023",
        description: "curry egg noodles",
        slug: "curry_egg_noodles"
    },
];

export default blogPosts;