
export interface Project{
    title: string;
    date: string;
    skills: string;
    descritpion: string;
    urlLink: string;
}

const projects: Project[] = [
    {
        title: "Personal Website",
        date: "Fall 2023 - Present",
        skills: "HTML, CSS, TypeScript",
        descritpion: "Personal porfolio website showcasing projects and contact information.",
        urlLink: "https://noahgiboney.github.io/'"
    },
];

export default projects;