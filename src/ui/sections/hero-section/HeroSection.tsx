import SectionContainer from "@layouts/section-container/SectionContainer";
import { Button } from "@components/button/Button";
import Link from "next/link";
import Image from "next/image"; // Importación necesaria

export default function HeroSection() {
  return (
    <SectionContainer
      id="hero"
      className="flex items-center min-h-[calc(100vh-80px)] py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Contenedor de imagen - Modificado */}
        <div className="order-first lg:order-last flex justify-center">
          <div className="bg-surface rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
            <Image
              src="/images/photo.jpg" 
              alt="Andres Chanchi - Blockchain Developer"
              width={400}  
              height={500} 
              priority 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Contenido de texto (sin cambios) */}
        <div className="text-center lg:text-left mx-auto w-full px-4 max-w-2xl">
          <h1 className="text-heading mb-4">
            Andres <span className="text-primary">Chanchi</span> Blockchain
            <span className="text-primary"> Developer</span>
          </h1>

          <p className="text-subheading text-on-surface mb-8">
            Trainee in Web3 and decentralized technologies (Building this
            website 🛠)
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#contact">About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}