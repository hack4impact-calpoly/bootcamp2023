export interface Project {
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

const portfolioContainer = document.getElementById('portfolio-container')

if(portfolioContainer){

    projects.forEach(element =>{
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const projectTitle = document.createElement('h2');
        projectTitle.innerText = element.title;

        const projectLanguages = document.createElement('p');
        projectLanguages.innerText = element.skills

        const projectDate = document.createElement('h1');
        projectDate.innerText = element.date;

        const projectDescription = document.createElement('p');
        projectDescription.innerText = element.descritpion;


        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDate);
        projectElement.appendChild(projectLanguages)
        projectElement.appendChild(projectDescription);

        portfolioContainer.appendChild(projectElement);
    })
}