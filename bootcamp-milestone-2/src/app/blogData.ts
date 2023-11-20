export interface Blog {
    title: string;
    image: string;
    image_alt: string;
    date: string;
    description: string;
    // thoughts: string;
    slug: string;
};

const blogs: Blog[] = [
{
    title: "Gym Time Thoughts",
    image: "./public/meAtGym.png",
    date: "11/03/23",
    image_alt: "image at the gym",
    // description:,
    description: "Week 6 is over. Went by in a snap. Lots of lessons. Live and learn. Life is the ultimate teacher.",
    slug: "blog/gym-time-thoughts.html"
},
{
    title: "18 Years",
    image: "./public/discussions.png",
    image_alt: "Making Moves",
    date: "11/03/23",
    // description: "No one is waiting. Not even time.",
    description: "Half way through 18 years. 10 more and I'll be 28. We're only given one life. Make it a good one.",
    slug: "blog/18-years.html"
}
];

export default blogs;
