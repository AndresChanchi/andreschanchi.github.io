import SectionContainer from "@layouts/section-container/SectionContainer";
import { Button } from "@components/button/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <SectionContainer id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-heading mb-4">
            Pepito <span className="text-primary">Blockchain</span> Developer
          </h1>

          <p className="text-subheading text-on-surface mb-8">
            Especialista en desarrollo Web3 y soluciones descentralizadas
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="#projects">Ver proyectos</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-surface rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
            {/* Placeholder para imagen */}
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
