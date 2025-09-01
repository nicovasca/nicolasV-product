import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CaseStudySection from "@/components/CaseStudySection";
import Contact from "@/components/Contact";

// Images are now served from public folder
const fintechImage = "/fintech-case-2.jpg";
const blockchainImage = "/blockchain-case.jpg";
const aiImage = "/ai-case.jpg";

const Index = () => {
  const caseStudies = [
    {
      title: "Meteoeconomics",
      category: "Fintech",
      description: "Financial data web app built from the ground up, providing real-time economic indicators and market analysis tools for informed decision-making.",
      websiteUrl: "https://meteoeconomics.com/",
      imageSrc: fintechImage,
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Financial APIs", "Data Visualization"],
      id: "fintech",
      challenge: "Users needed a comprehensive platform to access and analyze financial data with intuitive visualizations and real-time updates for market analysis and economic research.",
      solution: "Developed a full-stack financial data application featuring real-time data feeds, interactive charts, and user-friendly dashboards. Implemented responsive design and optimized performance for handling large datasets.",
      results: [
        "Real-time financial data integration",
        "Interactive data visualization",
        "Responsive web application"
      ],
      timeline: "6 months",
      teamSize: "3 developers"
    },
    {
      title: "Verde Ventures (PoC)",
      category: "Blockchain",
      description: "Tokenized crowdfunding platform deployed and validated on Sepolia testnet, enabling transparent and secure investment opportunities.",
      websiteUrl: "https://example-blockchain.com",
      imageSrc: blockchainImage,
      techStack: ["Solidity", "Web3.js", "React", "Hardhat", "Sepolia Testnet", "ERC-20"],
      id: "blockchain",
      challenge: "Traditional crowdfunding lacked transparency and global accessibility. Investors needed a secure, decentralized platform for tokenized investments with smart contract automation.",
      solution: "Built a tokenized crowdfunding platform using smart contracts on Ethereum's Sepolia testnet. Implemented ERC-20 token standards, automated investment processes, and transparent fund management through blockchain technology.",
      results: [
        "Successfully deployed on Sepolia testnet",
        "Smart contract validation completed",
        "Tokenized investment framework established"
      ],
      timeline: "4 months",
      teamSize: "2 developers"
    },
    {
      title: "CredInvest (PoC)",
      category: "Artificial Intelligence",
      description: "AI-driven PoC validating automated leverage risk analysis and portfolio allocation optimization for young retail investors.",
      websiteUrl: "https://example-ai.com",
      imageSrc: aiImage,
      techStack: ["Python", "n8n (agentic workflows)", "Machine Learning", "Financial APIs", "Data Analysis", "Portfolio Optimization"],
      id: "ai",
      challenge: "Young retail investors needed accessible tools for leverage analysis and portfolio allocation. Traditional financial institutions offered complex solutions that weren't suitable for individual investors.",
      solution: "Developed an AI-powered platform using n8n for agentic workflow automation. The system analyzes financial standing and provides personalized leverage recommendations and portfolio allocation strategies for young retail investors.",
      results: [
        "Automated leverage risk analysis",
        "Portfolio allocation optimization",
        "AI-driven investment recommendations"
      ],
      timeline: "3 months",
      teamSize: "2 developers"
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
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Digital Innovation Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;