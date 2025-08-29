import { Button } from "@/components/ui/button";
import heroWavesImage from "@/assets/hero-waves.png";

const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Hero Waves Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src={heroWavesImage} 
          alt="Hero waves background" 
          className="absolute top-[60px] left-0 right-0 w-full h-full object-cover opacity-50 dark:opacity-75"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,153,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,153,225,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Nico Vasquez</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting cutting-edge solutions across <span className="text-primary">fintech</span>, <span className="text-crypto-blue">blockchain</span>, and <span className="text-accent">AI</span> that transform industries and drive innovation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              variant="hero"
              className="px-10 py-6 text-lg font-bold interactive-glow"
              onClick={() => document.getElementById('fintech')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-10 py-6 text-lg font-semibold border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* About Me Section */}
          <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-5xl mx-auto border border-border/20">
            <h2 className="text-xl font-bold mb-3 text-foreground">About Me</h2>
            <div className="text-base text-muted-foreground mb-4 leading-relaxed space-y-3">
              <p>
                For over 8 years, I led creative strategy and high-impact design projects for global brands like <span className="text-primary font-semibold">Coach</span>, <span className="text-primary font-semibold">Pepsi</span>, and <span className="text-primary font-semibold">Fendi</span>, learning how to build experiences that captivate audiences.
              </p>
              <p>
                My curiosity for "how things work" and a desire to solve more fundamental problems drove me to pivot into technology. I pursued advanced master's degrees in both <span className="text-crypto-blue font-semibold">Interactive Innovation</span> and <span className="text-crypto-blue font-semibold">Fintech, Blockchain & Financial Markets</span>, culminating in my recent experience as a Product Owner building a financial data web app from the ground up.
              </p>
              <p className="text-foreground font-medium">
                If you're a founder, hiring manager, or leader building the next generation of tech, I'd love to connect.
              </p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-3">
              <h3 className="text-base font-semibold text-foreground mb-2 text-center">Specialties:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Product Vision & Strategy', 'Design Leadership', 'User Experience (UX)', 'Creative Technology', 'Financial Technology (Fintech)', 'AI', 'Blockchain'].map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 max-w-2xl mx-auto pb-28">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">3+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">100%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Innovation Focus</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pulse-glow">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;