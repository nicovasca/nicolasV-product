import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@portfolio.com",
      href: "mailto:hello@portfolio.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "#"
    },
    {
      icon: Globe,
      label: "Website",
      value: "Learn more",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Build Something
            <span className="block text-gradient">Amazing Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-modern p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a project in mind, want to discuss potential collaborations, 
                  or just want to connect, I'm always open to new opportunities and conversations.
                </p>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <method.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <span className="font-medium text-foreground">{method.label}</span>
                        <span className="text-muted-foreground ml-2">{method.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="inline-block p-8 rounded-full bg-gradient-primary mb-6">
                  <Mail className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Ready to Start?</h4>
                <p className="text-muted-foreground mb-6">
                  Drop me a line and let's discuss how we can bring your ideas to life.
                </p>
                <Button 
                  size="lg"
                  variant="hero"
                  className="px-8 py-4 interactive-glow"
                  onClick={() => window.location.href = 'mailto:hello@portfolio.com'}
                >
                  Start a Conversation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;