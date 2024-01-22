export interface ResumeProject {
  name: string;
  date: string;
  text: string;
}

const resumeProjects: ResumeProject[] = [
  {
    name: "Marine Creature Recognition with YOLOv7",
    date: "Aug 2023 – Mar 2024",
    text: " - Developing ML model that recognizes marine creatures from drone images using YOLOv7, an object detection model algorithm",
  },
  {
    name: "Blockchain for Smart Manufacturing Safety Systems",
    date: "June 2021 – Sep 2021",
    text: "- Reviewed public research papers on technical capabilities of blockchain to determine transitioning from physical lock and key system to an automated process - Pioneered new blockchain and Internet of Things-based solutions to address challenges; presented these innovative architecture designs to multiple professors and company representatives",
  },
];

export default resumeProjects;
