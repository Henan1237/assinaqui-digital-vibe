import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Heart, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "R$ 19,90",
    period: "/mês",
    description: "Ideal para começar sua jornada digital",
    icon: Heart,
    gradient: "gradient-secondary",
    features: [
      "Netflix HD",
      "Spotify Individual",
      "Amazon Prime Video",
      "Suporte por email",
      "Acesso a 3 dispositivos"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "R$ 39,90",
    period: "/mês",
    description: "O mais escolhido pelos nossos usuários",
    icon: Crown,
    gradient: "gradient-primary",
    features: [
      "Netflix 4K Ultra HD",
      "Spotify Family",
      "Disney+ Premium",
      "Amazon Prime Video",
      "Adobe Creative Cloud",
      "Suporte prioritário",
      "Acesso ilimitado a dispositivos"
    ],
    popular: true
  },
  {
    name: "Ultimate",
    price: "R$ 69,90",
    period: "/mês",
    description: "Para quem quer o máximo de entretenimento",
    icon: Sparkles,
    gradient: "gradient-accent",
    features: [
      "Todos os serviços Premium",
      "HBO Max",
      "Paramount+",
      "Xbox Game Pass Ultimate",
      "YouTube Premium",
      "Crunchyroll Premium",
      "Suporte 24/7",
      "Gerenciador dedicado"
    ],
    popular: false
  }
];

const PlansSection = () => {
  return (
    <section id="planos" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Escolha seu Plano
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre o plano perfeito para seu estilo de vida digital. 
            Todos incluem acesso instantâneo e sem compromisso.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-elegant ${
                plan.popular 
                  ? 'border-brand-purple bg-gradient-primary/5' 
                  : 'border-border hover:border-brand-purple/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full">
                    <span className="text-sm font-bold text-primary-foreground">
                      Mais Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 bg-${plan.gradient} rounded-2xl flex items-center justify-center`}>
                  <plan.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.popular ? "Começar Agora" : "Escolher Plano"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ainda com dúvidas? Fale com nosso time de suporte
          </p>
          <Button variant="outline">
            Entrar em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;