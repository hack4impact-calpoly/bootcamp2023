export interface Project {
    title: string;
    description: string
    github:string
    image: string
}

const projects: Project[]=[
    {
        title:"This Website",
        description:"Used HTML, CSS.",
        github: "https://github.com/SumedhaKun/SumedhaKun.github.io",
        image:"/website_shot.png"
    },
    {
        title:"Vybe",
        description:"Used Python, JupyterLab, etc.",
        github: "https://github.com/SumedhaKun/Vybe",
        image:"/vybe_2.png"
    }
];

export default projects;