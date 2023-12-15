export interface ResumeExperience {
  company: string;
  title: string;
  date: string;
  text: string;
}

const resumeExperiences: ResumeExperience[] = [
  {
    company: "Wells Fargo",
    title: "Software Engineering Intern",
    date: "May 2023 - Aug 2023",
    text: "- Introduced new features for internal web app that eliminatedmanual double entry and cross-referencing, increasing tool productivity by 50% \n\n- Took initiative to broaden the scope of the project by upgrading existing interfaces for enhanced user experience\n\n- Used SQL, .NET, JavaScript, jQuery, HTML, and CSS to address business requirements across the full stack",
  },
  {
    company: "Chevron",
    title: "Software Engineering Intern",
    date: "June 2022 – Sep 2022",
    text: "- Led a 5-person scrum team focused on defect management; oversaw daily standups, biweekly sprint planning, and backlog scrumming—accelerating delivery of software\n\n- Created scripts to standardize onboarding workflow through links, tools, PoC’s and instructions; streamlined offboarding workflow and ensured proper clean-up processes through automated procedures \n\n - Created ability to bulk upload templates using Python, decreasing execution time by more than 75% \n\n",
  },
];

export default resumeExperiences;
