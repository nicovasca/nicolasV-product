import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import CaseStudySection from "@/components/CaseStudySection";
import NumberedFeatures from "@/components/NumberedFeatures";
import Contact from "@/components/Contact";

import fintechImage from "@/assets/fintech-case.jpg";
import blockchainImage from "@/assets/blockchain-case.jpg";
import aiImage from "@/assets/ai-case.jpg";

const Index = () => {
  const caseStudies = [
    {
      title: "FinPay Digital Wallet",
      category: "Fintech",
      description: "Revolutionary mobile payment solution with advanced security features, real-time transactions, and seamless integration with traditional banking systems. Built for the next generation of digital finance.",
      websiteUrl: "https://example-fintech.com",
      imageSrc: fintechImage,
      techStack: ["React Native", "Node.js", "PostgreSQL", "Stripe API", "Blockchain"],
      id: "fintech",
      challenge: "Traditional payment systems lacked the speed, security, and accessibility needed for modern digital transactions. Users struggled with slow processing times, high fees, and complex interfaces that hindered widespread adoption.",
      solution: "We developed a comprehensive mobile-first payment platform featuring end-to-end encryption, instant transaction processing, and intuitive UX design. The solution integrates seamlessly with existing banking infrastructure while providing enhanced security through blockchain verification.",
      results: [
        "95% faster transaction processing",
        "40% reduction in processing fees", 
        "500K+ active users in 6 months"
      ],
      timeline: "8 months",
      teamSize: "6 developers"
    },
    {
      title: "CryptoChain Exchange",
      category: "Blockchain",
      description: "Decentralized cryptocurrency exchange platform featuring smart contract automation, multi-chain support, and institutional-grade security. Enabling the future of decentralized finance.",
      websiteUrl: "https://example-blockchain.com",
      imageSrc: blockchainImage,
      techStack: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum", "Polygon"],
      id: "blockchain",
      challenge: "Existing cryptocurrency exchanges suffered from centralization vulnerabilities, high transaction costs, and limited cross-chain functionality. Users needed a secure, decentralized platform that could handle multiple blockchain networks efficiently.",
      solution: "Built a fully decentralized exchange using smart contracts with automated market making (AMM) protocols. Implemented cross-chain bridges and optimized gas costs through Layer 2 solutions. The platform features institutional-grade security with multi-signature wallets and audited smart contracts.",
      results: [
        "$50M+ total value locked (TVL)",
        "99.9% uptime achieved",
        "Multi-chain support for 5+ networks"
      ],
      timeline: "12 months",
      teamSize: "8 developers"
    },
    {
      title: "IntelliBot AI Assistant",
      category: "Artificial Intelligence",
      description: "Advanced AI-powered virtual assistant with natural language processing, machine learning capabilities, and enterprise integration. Transforming business operations through intelligent automation.",
      websiteUrl: "https://example-ai.com",
      imageSrc: aiImage,
      techStack: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "Docker", "AWS"],
      id: "ai",
      challenge: "Businesses struggled with repetitive customer service tasks and complex data analysis processes. Traditional chatbots lacked contextual understanding and couldn't handle complex, multi-step queries effectively.",
      solution: "Developed an advanced AI assistant using natural language processing and machine learning models. The system features contextual memory, multi-modal input processing, and seamless integration with existing business tools through RESTful APIs and webhooks.",
      results: [
        "85% reduction in response time",
        "92% customer satisfaction rate",
        "70% automation of support tickets"
      ],
      timeline: "10 months",
      teamSize: "5 developers"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Features Section */}
      <FeatureCards />

      {/* Individual Case Study Sections */}
      {caseStudies.map((study, index) => (
        <CaseStudySection
          key={study.id}
          {...study}
          reversed={index % 2 === 1}
        />
      ))}

      {/* Numbered Features Section */}
      <NumberedFeatures />

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