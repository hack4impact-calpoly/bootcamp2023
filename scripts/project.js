var projects = [
    {
        title: "Personal Website",
        date: "Fall 2023 - Present",
        skills: "HTML, CSS, TypeScript",
        descritpion: "Personal porfolio website showcasing projects and contact information.",
        urlLink: "https://noahgiboney.github.io/'"
    },
];
var portfolioContainer = document.getElementById('portfolio-container');
if (portfolioContainer) {
    projects.forEach(function (element) {
        var projectElement = document.createElement('div');
        projectElement.classList.add('project');
        var projectTitle = document.createElement('h2');
        projectTitle.innerText = element.title;
        var projectLanguages = document.createElement('p');
        projectLanguages.innerText = element.skills;
        var projectDate = document.createElement('h1');
        projectDate.innerText = element.date;
        var projectDescription = document.createElement('p');
        projectDescription.innerText = element.descritpion;
        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectDate);
        projectElement.appendChild(projectLanguages);
        projectElement.appendChild(projectDescription);
        portfolioContainer.appendChild(projectElement);
    });
}
