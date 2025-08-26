import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bitcoin Symbol */}
        <div className="absolute top-20 left-20 w-16 h-16 opacity-30">
          <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary float-animation">
            ₿
          </div>
        </div>
        
        {/* Ethereum Symbol */}
        <div className="absolute top-32 right-32 w-12 h-12 opacity-40">
          <div className="w-full h-full bg-crypto-blue/20 rounded-lg flex items-center justify-center text-xl font-bold text-crypto-blue float-animation" style={{ animationDelay: '1s' }}>
            Ξ
          </div>
        </div>
        
        {/* Floating Cards */}
        <div className="absolute bottom-32 left-16 w-20 h-14 bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-16 bg-card/10 backdrop-blur-sm rounded-lg border border-border/20 float-animation" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/2 left-10 w-8 h-8 border-2 border-primary/30 rounded-sm rotate-45 float-animation" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-40 w-6 h-6 bg-crypto-blue/20 rounded-full pulse-glow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,153,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,153,225,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Innovating the</span>
            <br />
            <span className="text-neon">Future of Tech</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting cutting-edge solutions across <span className="text-primary">fintech</span>, <span className="text-crypto-blue">blockchain</span>, and <span className="text-accent">AI</span> that transform industries and drive innovation.
          </p>
          
          {/* About Me Section */}
          <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto border border-border/20">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate technologist with expertise in building scalable fintech platforms, 
              decentralized blockchain applications, and intelligent AI systems. With a focus on 
              innovation and user experience, I create solutions that bridge the gap between 
              cutting-edge technology and real-world business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Core Specializations</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
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
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">3+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">100%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Innovation Focus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon mb-2">24/7</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Global Support</div>
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