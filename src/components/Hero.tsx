import { Button } from "@/components/ui/button";
import { Play, Star, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-brand-purple/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-brand-orange" fill="currentColor" />
            <span className="text-sm font-medium">Plataforma #1 em Assinaturas Digitais</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Escolha seu plano ideal
            </span>
            <br />
            <span className="text-foreground">
              e aproveite o melhor do digital!
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Acesse milhares de serviços premium com um só clique. 
            <br className="hidden md:block" />
            Netflix, Spotify, Disney+, jogos e muito mais em um lugar só.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" fill="currentColor" />
              Ver Planos Disponíveis
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-brand-purple/30 hover:border-brand-purple transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-brand-orange mr-2" />
                <span className="text-3xl font-bold text-foreground">50K+</span>
              </div>
              <p className="text-muted-foreground">Usuários Ativos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-brand-pink mr-2" />
                <span className="text-3xl font-bold text-foreground">200+</span>
              </div>
              <p className="text-muted-foreground">Serviços Disponíveis</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-brand-blue mr-2" fill="currentColor" />
                <span className="text-3xl font-bold text-foreground">4.9</span>
              </div>
              <p className="text-muted-foreground">Avaliação Média</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-accent rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-secondary rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;