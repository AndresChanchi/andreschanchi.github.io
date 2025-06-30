import { Project } from "../../../types/project.ts";
import Image from "next/image";
// import ArweaveImage from "@components/arweave-image/ArweaveImage"; para futuro -- for future con arweave-image
import { ExternalLinkIcon, GithubIcon } from "@components/icons/index";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          width={500}
          height={300}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-on-surface">{project.title}</h3>
        <p className="text-on-surface/80 mt-2 mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface/70 hover:text-primary transition-colors flex items-center"
          >
            <GithubIcon className="w-5 h-5 mr-1" />
            View Code
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors flex items-center"
            >
              <ExternalLinkIcon className="w-5 h-5 mr-1" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
