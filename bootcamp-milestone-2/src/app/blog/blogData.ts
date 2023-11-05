export interface Blog {
    title: string,
    date: string,
    description: string,
    slug: string
}

export const myList: Blog[] = [
    {
        title: "First time using TypeScript!",
        date: "October 18th, 2023",
        description: "After a challenging process of setting up Node and TypeScript, we're up and running.",
        slug: "@/app/blog"
    },
    {
        title: "Sitting in my bed coding!",
        date: "October 18th, 2023",
        description: "At least my lovely GF is here with me.",
        slug: "@/app/blog"
    }
]

