export type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

export const blogs : Blog[]=  [
    {
        title: "Milestone 1",
        date: "10/21/2023",
        description: "Adding the blog feature to my website!",
        slug: "blog0"
    },
    {
        title: "365 ledger",
        date: "10/21/2023",
        description: "Switched the implementation of my potions shop for 365 to use a \
        ledger based design instead of keeping a global inventory.git",
        slug: "blog1"
    }
];