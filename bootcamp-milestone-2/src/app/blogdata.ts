export interface Blog {
    title: string; // title of blog post
    date: string; // date written for blog post
    description: string; // a short description of the blog post
    image: string; // source of a preview image for post
    slug: string; // source for the blog post
};

const blogPosts: Blog[] = [
    {
        title: "Cal Poly's Hui 'O Hawai'i Club",
        date: "23 Oct. 2023",
        description: "I am from Honolulu, Hawaii. I love Hawaii Club!",
        image: "assets/blog/blog2-preview.jpg",
        slug: "blog2"
    },
    {
        title: "Red Bricks: Santa Lucia",
        date: "22 Oct. 2023",
        description: "The 6 Red Brick Dorms were built in 1959. A lot happens in the bricks -- especially Santa Lucia.",
        image: "assets/blog/blog1-preview.jpg",
        slug: "blog1"
    },
    {
        title: "Quarter Plus Shenanigans",
        date: "16 Oct. 2023",
        description: "Cal Poly's Quarter Plus Program is a summer program where students are able to start college earlier. We got up to a lot of things. Here are some of our Q+ shenanigans.",
        image: "assets/blog/blog0-preview.jpg",
        slug: "blog0"
    }
];

export default blogPosts;