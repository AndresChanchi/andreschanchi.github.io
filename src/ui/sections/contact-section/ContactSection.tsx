import SectionContainer from "@layouts/section-container/SectionContainer";
import CopyButton from "@components/copy-button/CopyButton";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@components/icons";

export default function ContactSection() {
  const email = "4chanchi@gmail.com";

  return (
    <SectionContainer id="contact">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading">Let’s connect!</h2>
          <p className="text-subheading mt-4">
            I’m growing in the Web3 space and open to collaborations. Last
            updated: June 30, 2025
          </p>
        </div>

        <div className="bg-surface rounded-xl p-8 shadow-lg">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-on-surface/70 mb-2"
            >
              Email (gmail 😅)
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                readOnly
                value={email}
                className="flex-1 bg-background border border-on-surface/20 rounded-l-lg py-3 px-4 text-on-surface"
              />
              <CopyButton
                text={email}
                className="rounded-l-none rounded-r-lg"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-on-surface mb-4">
              You can also find me on:
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/andreschanchi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-on-surface/70 hover:text-primary transition-colors"
              >
                <GithubIcon className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/andreschanchi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-on-surface/70 hover:text-primary transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://twitter.com/andreschanchi_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-on-surface/70 hover:text-primary transition-colors"
              >
                <TwitterIcon className="w-5 h-5 mr-2" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
