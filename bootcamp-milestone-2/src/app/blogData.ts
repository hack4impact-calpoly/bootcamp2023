export interface Blog {
    title: string;
    image: string;
    width: number;
    height: number;
    image_alt: string;
    date: string;
    description: string;
    // thoughts: string;
    slug: string;
};

const blogs: Blog[] = [
{
    title: "Gym Time Thoughts",
    image: "/images/meAtGym.png",
    date: "11/03/23",
    image_alt: "image at the gym",
    width: 828,
    height: 1378,
    // description:,
    description: "Week 6 is over. Went by in a snap. Lots of lessons. Live and learn. Life is the ultimate teacher.",
    slug: "gym-time-thoughts"
},
{
    title: "18 Years",
    image: "/images/discussions.png",
    image_alt: "Making Moves",
    width: 1186,
    height: 1618,
    date: "11/03/23",
    // description: "No one is waiting. Not even time.",
    description: "Half way through 18 years. 10 more and I'll be 28. We're only given one life. Make it a good one.",
    slug: "18-years"
}
];

export default blogs;
