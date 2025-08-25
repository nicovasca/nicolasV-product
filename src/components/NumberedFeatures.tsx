import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const NumberedFeatures = () => {
  const features = [
    {
      number: "01",
      title: "Service for Any Level of Expertise",
      description: "From beginners to professionals, our solutions adapt to your experience level with comprehensive support and documentation.",
      isHighlight: false
    },
    {
      number: "02", 
      title: "Industry Best Practices",
      description: "Built following the highest standards in security, scalability, and performance. Your success is guaranteed with our proven methodologies.",
      isHighlight: true
    },
    {
      number: "03",
      title: "Protected by Insurance",
      description: "Enterprise-grade security backed by comprehensive insurance coverage for complete peace of mind in your operations.",
      isHighlight: false
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Title and description */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Your <span className="text-neon">trusted</span> partner of
                <span className="block">innovation.</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We unite and secure a growing ecosystem of specialized innovations. 
                Apps and services built with cutting-edge technology to power your digital transformation.
              </p>
              
              <Button 
                variant="outline" 
                className="group border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Right side - Numbered cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card
                  key={feature.number}
                  className={`numbered-card p-6 ${feature.isHighlight ? 'highlight' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                      ${feature.isHighlight 
                        ? 'bg-primary-foreground/20 text-primary-foreground' 
                        : 'bg-primary/10 text-primary'
                      }
                    `}>
                      {feature.number}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`
                        text-lg font-bold mb-2
                        ${feature.isHighlight ? 'text-primary-foreground' : 'text-card-foreground'}
                      `}>
                        {feature.title}
                      </h3>
                      
                      <p className={`
                        text-sm leading-relaxed
                        ${feature.isHighlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}
                      `}>
                        {feature.description}
                      </p>
                      
                      {feature.isHighlight && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-4 text-primary-foreground hover:bg-primary-foreground/20 p-0 h-auto"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberedFeatures;