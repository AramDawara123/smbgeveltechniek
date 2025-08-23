
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Diensten", href: "#services" },
    { label: "Over ons", href: "#about" },
    { label: "Projecten", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center logo-shadow group-hover:scale-110 transition-all duration-300">
                <span className="text-white font-black text-lg">SMB</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-2xl text-white">
                SMB Geveltechniek
              </span>
              <div className="text-xs text-gray-400 font-medium -mt-1">
                Vakmanschap sinds 2010
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-all duration-300 font-semibold text-lg relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <Button 
              variant="default" 
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 px-8 py-3 font-bold text-lg rounded-xl construction-shadow border-0"
            >
              Offerte Aanvragen
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-white hover:text-primary transition-colors duration-300 rounded-xl hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/10 animate-fade-in glass-effect rounded-b-2xl">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-semibold text-xl py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="default" 
                className="gradient-primary text-white mt-4 w-full py-4 text-lg font-bold rounded-xl construction-shadow"
              >
                Offerte Aanvragen
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
