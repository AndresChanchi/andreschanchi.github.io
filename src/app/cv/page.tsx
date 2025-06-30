import SectionContainer from "@layouts/section-container/SectionContainer";
import { Button } from "@components/button/Button";

export default function CVPage() {
  return (
    <SectionContainer className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-heading mb-4">Curriculum Vitae</h1>
        <p className="text-subheading mb-6">
          You can download my full resume in PDF format below.
        </p>

        <div className="bg-surface rounded-xl p-6 shadow-lg md:p-10">
          <div className="relative w-full overflow-hidden rounded-xl border-2 border-gray-200 mb-6" style={{ aspectRatio: "3 / 4" }}>
            <iframe
              src="/cv/andres-chanchi-cv.pdf#toolbar=0&view=fitH"
              className="absolute top-0 left-0 w-full h-full"
              aria-label="CV Preview"
            />
          </div>

          <Button asChild>
            <a
              href="/cv/andres-chanchi-cv.pdf"
              download="Andres_Chanchi_CV.pdf"
              className="inline-flex items-center"
            >
              Download CV (PDF)
            </a>
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
