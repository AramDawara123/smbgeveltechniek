
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
          {/* Updated Logo to match the design */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            {/* 3D Cube Logo */}
            <div className="relative">
              <div className="w-14 h-14 relative transform-gpu group-hover:scale-110 transition-all duration-300">
                {/* Front face - orange */}
                <div className="absolute inset-0 gradient-primary rounded-sm transform perspective-1000 rotateY-10 shadow-lg"></div>
                {/* Top face - darker orange */}
                <div className="absolute -top-2 left-2 w-14 h-6 bg-gradient-to-r from-orange-600 to-orange-500 transform skew-x-12 rounded-sm opacity-90"></div>
                {/* Right face - darkest */}
                <div className="absolute top-2 -right-2 w-6 h-12 bg-gradient-to-b from-red-800 to-red-900 transform skew-y-12 rounded-sm opacity-80"></div>
              </div>
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <span className="font-display font-black text-4xl text-white tracking-wider">SMB</span>
              </div>
              <span className="font-display font-medium text-lg text-gray-300 tracking-wide uppercase -mt-1">
                Geveltechniek
              </span>
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
