import ProjectPreview from "@/components/ProjectPreview/ProjectPreview";
import { projects } from "../data/portfolioData";
export default function Portfolio() {
  return (
    <main className="flex flex-col p-20">
      <h3 className="text-3xl font-semibold text-white px-5 py-5">Projects</h3>
      <ul className="overflow-y-scroll">
        {projects.map((project) => {
          return (
            <li className="w-1/2" key={project.title}>
              <ProjectPreview
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
