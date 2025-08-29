import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaseStudySection from "@/components/CaseStudySection";
import Contact from "@/components/Contact";

import fintechImage from "@/assets/fintech-case-2.png";
import blockchainImage from "@/assets/blockchain-case.jpg";
import aiImage from "@/assets/ai-case.jpg";

const Index = () => {
  const caseStudies = [
    {
      title: "Meteoeconomics",
      category: "Fintech",
      description: "Led the end-to-end creation of Meteoeconomics, an innovative web app designed to turn complex global financial data into strategic decisions. This project was developed as the capstone for my MSc in Fintech at the University of Barcelona.",
      websiteUrl: "https://meteoeconomics.com/",
      imageSrc: fintechImage,
      techStack: ["Product Management", "Product Strategy", "User Experience (UX)", "FinTech", "Data Visualization", "Web Development"],
      id: "fintech",
      challenge: "Complex global financial data needed to be transformed into actionable insights for strategic decision-making. Users required an intuitive interface to navigate sophisticated financial concepts and data visualizations.",
      solution: "Defined the complete product vision, strategy, and roadmap, conducting research to identify key user needs and market opportunities. Owned the entire UX/UI design process, translating abstract financial concepts into a tangible, user-centric interface and interactive data visualizations.",
      results: [
        "Successfully launched live MVP",
        "Platform value quickly validated",
        "Inbound interest and acquisition discussions with major European business holding"
      ],
      timeline: "7 months",
      teamSize: "Solo Product Owner/Designer"
    },
    {
      title: "Verde Ventures (PoC)",
      category: "Blockchain",
      description:
        "A tokenized crowdfunding platform that lets users invest in real-world green projects (solar, wind, hydro) with card, bank, or crypto. Investors connect a wallet and receive on-chain tokens representing their contribution while the app tracks progress and expected ROI. Deployed and validated on Sepolia testnet.",
      websiteUrl: "#",
      imageSrc: blockchainImage,
      techStack: [
        "Solidity",
        "Hardhat",
        "OpenZeppelin",
        "USDC (ERC-20)",
        "WalletConnect / MetaMask",
        "Sepolia testnet",
        "React",
      ],
      id: "blockchain",
      challenge:
        "Enable compliant, transparent participation in renewable infrastructure funding with small ticket sizes, clear ROI expectations, and verifiable on-chain records.",
      solution:
        "Built smart contracts for project vaults and contributions, deployed and verified on testnet. Implemented wallet connection (MetaMask/WalletConnect), balance and allowance checks, and investment confirmation flows in the UI. Contributions mint project tokens and update on-chain progress. Workflow diagram available upon request.",
      results: [
        "End-to-end demo: select project → connect wallet → contribute → on-chain receipt",
        "Contracts deployed and verified on testnet with read/write via explorer",
        "Multi-payment UX: card/bank (mock) and crypto (USDC) supported",
      ],
      timeline: "6 weeks",
      teamSize: "Solo (Product + Solidity + Frontend)"
    },
    {
      title: "CredInvest (PoC)",
      category: "Artificial Intelligence",
      description:
        "Proof of Concept (PoC) to validate the functional foundations of CredInvest: an AI-driven platform for automated credit risk analysis and ETF portfolio optimization.",
      websiteUrl: "#",
      imageSrc: aiImage,
      techStack: [
        "Python",
        "Google Colab",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "n8n (agentic workflows)",
        "Data Pipelines",
        "MLOps (prototype)",
      ],
      id: "ai",
      challenge:
        "Young retail investors need a safe, explainable way to qualify for responsible leverage and automatically allocate it into diversified portfolios based on their financial standing and risk profile.",
      solution:
        "Designed a modular agent-based architecture with three sequential phases: 1) ingestion and normalization of user financial inputs, 2) processing via explainable AI scoring and portfolio rules, and 3) delivery of strategic outputs (leverage eligibility + portfolio allocation). Orchestrated agentic flows with n8n to coordinate enrichment, scoring, and notifications. Implemented in Google Colab to enable iterative validation and rigorous methodological justification of the algorithms.",
      results: [
        "Validated the core pipeline from raw data to explainable leverage scores",
        "Demonstrated portfolio allocation optimization workflow",
        "Established a foundation to evolve the PoC into an MVP",
      ],
      timeline: "3 months",
      teamSize: "Solo (Product + AI)"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Individual Case Study Sections */}
      {caseStudies.map((study, index) => (
        <CaseStudySection
          key={study.id}
          {...study}
          reversed={index % 2 === 1}
        />
      ))}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-2">Digital Innovation Portfolio</h3>
              <p className="text-muted-foreground">
                Crafting the future through fintech, blockchain, and AI solutions
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Digital Innovation Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;