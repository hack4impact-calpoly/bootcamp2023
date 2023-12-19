export interface Project {
    title: string;
    image: string;
    width: number;
    height: number;
    image_alt: string;
    description: string;
    link: string;
    slug: string;
};

const projects: Project[] = [
{
    title: "My Personal Website",
    image: "/images/www.jpg",
    image_alt: "General image representing my website",
    width: 740,
    height: 450,
    description: "Personal website to showcase MongoDB, Express.js, React, and Next.js skills.",
    link: "/",
    slug: "my-personal-website"
}
]


export default projects;
