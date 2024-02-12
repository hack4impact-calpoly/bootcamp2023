export interface Project {
    image: string;
    name:string;
    description:string;
    slug:string;
}

const projects: Project[] = [
    {
        image: "/binaryphoto.jpg",
        name: "Rhoyalinn's Website",
        description: "This is the first time making my own website. So this project is my portfolio. Welcome!",
        slug: "/"
    },
];

export default projects;