import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  websiteUrl: string;
  imageSrc: string;
  techStack: string[];
  delay?: number;
}

const CaseStudyCard = ({ 
  title, 
  category, 
  description, 
  websiteUrl, 
  imageSrc, 
  techStack,
  delay = 0 
}: CaseStudyCardProps) => {
  return (
    <Card 
      className="card-modern p-0 overflow-hidden border-0 group cursor-pointer interactive-scale"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-bold rounded-full">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm"
            className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
            onClick={() => window.open(websiteUrl, '_blank', 'noopener,noreferrer')}
          >
            <span className="mr-2">Visit Site</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
            <span className="mr-1 text-sm font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CaseStudyCard;