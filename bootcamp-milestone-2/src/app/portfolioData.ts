export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
}

let projects: Project[] = [
    {
        slug: "",
        title: "Kyle Taschek's Website", 
        description: "This project is a website designed using the fundamentals of HTML and CSS from the Hack4Impact starter pack. Check it out if you want to get to know me more!", 
        image: "/pexels-suki-lee-16200700.jpg", 
    }
];

export default projects;