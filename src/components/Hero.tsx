import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary-foreground">
            Digital
            <span className="block text-gradient">Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Crafting cutting-edge solutions across fintech, blockchain, and AI that transform industries and drive the future of technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 shadow-hero"
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Case Studies
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;