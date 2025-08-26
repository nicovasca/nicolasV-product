import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowRight, Code, Users, Calendar } from "lucide-react";

interface CaseStudySectionProps {
  title: string;
  category: string;
  description: string;
  websiteUrl: string;
  imageSrc: string;
  techStack: string[];
  id: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  teamSize: string;
  reversed?: boolean;
}

const CaseStudySection = ({ 
  title, 
  category, 
  description, 
  websiteUrl, 
  imageSrc, 
  techStack,
  id,
  challenge,
  solution,
  results,
  timeline,
  teamSize,
  reversed = false
}: CaseStudySectionProps) => {
  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full mb-4 inline-block">
              {category}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* Main Content */}
          <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Image */}
            <div className={`${reversed ? 'lg:col-start-2' : ''}`}>
              <Card className="card-modern p-0 overflow-hidden border-0 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={imageSrc} 
                    alt={title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="sm"
                      variant="secondary"
                      className="opacity-90 hover:opacity-100"
                      onClick={() => window.open(websiteUrl, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className={`space-y-8 ${reversed ? 'lg:col-start-1' : ''}`}>
              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium text-muted-foreground">Timeline</div>
                  <div className="font-bold text-foreground">{timeline}</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium text-muted-foreground">Team Size</div>
                  <div className="font-bold text-foreground">{teamSize}</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <Code className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium text-muted-foreground">Tech Stack</div>
                  <div className="font-bold text-foreground">{techStack.length}+ Tools</div>
                </div>
              </div>

              {/* Challenge */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold mb-3 text-foreground">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-card rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Project Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">{result}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="hero"
                size="lg"
                onClick={() => window.open(websiteUrl, '_blank', 'noopener,noreferrer')}
                className="px-8"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;