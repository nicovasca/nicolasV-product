import { Card } from "@/components/ui/card";
import { Shield, Zap, Globe, Cpu } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Driven Insights",
      description: "Get real-time intelligent analytics powered by machine learning algorithms."
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Data protected by advanced cryptography and decentralized architecture."
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Seamless growth without limits, built for enterprise-scale operations."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Operate anywhere, anytime with worldwide infrastructure support."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose
            <span className="block text-neon">Innovation?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="card-modern p-6 text-center group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;