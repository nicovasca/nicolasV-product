import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import CaseStudyCard from "@/components/CaseStudyCard";
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
      techStack: ["React Native", "Node.js", "PostgreSQL", "Stripe API", "Blockchain"]
    },
    {
      title: "CryptoChain Exchange",
      category: "Blockchain",
      description: "Decentralized cryptocurrency exchange platform featuring smart contract automation, multi-chain support, and institutional-grade security. Enabling the future of decentralized finance.",
      websiteUrl: "https://example-blockchain.com",
      imageSrc: blockchainImage,
      techStack: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum", "Polygon"]
    },
    {
      title: "IntelliBot AI Assistant",
      category: "Artificial Intelligence",
      description: "Advanced AI-powered virtual assistant with natural language processing, machine learning capabilities, and enterprise integration. Transforming business operations through intelligent automation.",
      websiteUrl: "https://example-ai.com",
      imageSrc: aiImage,
      techStack: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "Docker", "AWS"]
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

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured
              <span className="block text-gradient">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions across fintech, blockchain, and AI. 
              Each project represents a unique challenge solved with cutting-edge technology and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="animate-slide-up">
                <CaseStudyCard
                  {...study}
                  delay={index * 200}
                />
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 bg-gradient-card rounded-2xl shadow-card max-w-2xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Innovate?</h3>
              <p className="text-muted-foreground mb-6">
                These case studies represent just a glimpse of what's possible. 
                Let's discuss how we can bring your vision to life with the latest in technology innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="px-4 py-2 bg-crypto-blue/10 text-crypto-blue rounded-full text-sm font-medium">
                  Blockchain Solutions
                </span>
                <span className="px-4 py-2 bg-crypto-purple/10 text-crypto-purple rounded-full text-sm font-medium">
                  AI Integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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