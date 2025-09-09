import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AssinaAqui
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-brand-purple transition-colors">
            Home
          </a>
          <a href="#planos" className="text-foreground hover:text-brand-purple transition-colors">
            Planos
          </a>
          <a href="#sobre" className="text-foreground hover:text-brand-purple transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-brand-purple transition-colors">
            Contato
          </a>
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <Button variant="hero">Entrar</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#home" 
              className="block text-foreground hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#planos" 
              className="block text-foreground hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </a>
            <a 
              href="#sobre" 
              className="block text-foreground hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className="block text-foreground hover:text-brand-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button variant="hero" className="w-full">Entrar</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;