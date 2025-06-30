import HeroSection from "@sections/hero-section/HeroSection";
import ProjectsSection from "@sections/projects-section/ProjectsSection";
import ContactSection from "@sections/contact-section/ContactSection";
import { mockProjects } from "@data/mock-projects";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={mockProjects} />
      <ContactSection />
    </main>
  );
}
