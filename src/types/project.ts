export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  imageUrl: string; // Hash de Arweave en el futuro
}
