import { Project } from "../types/project.ts";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Ecogems",
    description:
      "Educational NFT-based game built with Unity and deployed on Avalanche. I led the blockchain architecture, developed smart contracts in Solidity, and integrated IPFS for decentralized asset storage.",
    technologies: ["Solidity", "Hardhat", "IPFS"],
    githubUrl: "https://github.com/ManuelenRed/Ecogems",
    demoUrl: "https://youtu.be/7FVco5bogn0?t=16942",
    imageUrl: "/images/ecogems.png",
  },
  {
    id: "2",
    title: "BrainBlaze",
    description:
      "Gamified learning platform using blockchain for certification and rewards. I developed smart contracts on Arbitrum Sepolia and collaborated across the full development cycle. Winner of a university hackathon in Bogotá.",
    technologies: ["Solidity", "Next.js", "Celo"],
    githubUrl: "https://github.com/HackChain5/brain-blaze",
    demoUrl: "https://devpost.com/software/brainblaze-p2o7q1",
    imageUrl: "/images/celo.png",
  },
  {
    id: "3",
    title: "ContrataChain",
    description:
      "Decentralized system for public procurement transparency. A long-term personal project focused on supplier reputation and anti-corruption, built with Arbitrum and aiming to integrate Arweave for permanent storage.",
    technologies: ["Solidity", "Hardhat", "Arbitrum"],
    githubUrl: "https://github.com/contratachain",
    demoUrl: "https://devpost.com/software/contratachain-3d1p4s",
    imageUrl: "/images/contratachain.png",
  },
];
