export interface REntry {
    entry_title: string;
    entry_info: string;
    entry_des: string;
    entry_date: string;
};

const rentries_jobs: REntry[] = [
    {
        entry_title: "Software Developer",
        entry_info: "Hack4Impact Cal Poly",
        entry_date: "Oct 2023 - Present",
        entry_des: ""
    },
    {
        entry_title: "Applications - Software Engineer Intern",
        entry_info: "Microchip Technology Inc",
        entry_date: "Jun 2023 - Sep 2023",
        entry_des: "Wrote an automated, Jenkins-integrated testing suite with Python and Google’s OpenHTF interacting with the CLI and REST API of two ultra-precise timing systems to validate the integrity of new firmware images."
    },
    {
        entry_title: "Software Engineering & Computer Science Tutor",
        entry_info: "University of Washington, Seattle/Cal Poly SLO",
        entry_date: "Sep 2020 - Mar 2023",
        entry_des: "Facilitated 1:1 debugging and testing sessions, resulting in an avg. of 15% university grade improvements."
    }
];

export default rentries_jobs;