import SectionContainer from "@layouts/section-container/SectionContainer";
import ProjectCard from "@components/project-card/ProjectCard";
import { Project } from "../../../types/project.ts";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionContainer id="projects">
      <div className="text-center mb-16">
        <h2 className="text-heading">Featured Projects</h2>
        <p className="text-subheading mt-4">
          A selection of Web3 ideas and prototypes I’m exploring and growing
          with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
