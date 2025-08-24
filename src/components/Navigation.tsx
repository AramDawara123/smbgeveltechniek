
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Metselwerk", href: "/metselwerk" },
    { label: "Nieuwbouw", href: "/nieuwbouw" },
    { label: "Gevelrenovatie", href: "/gevelrenovatie" },
    { label: "Renovatieankers", href: "/renovatieankers" },
    { label: "Scheurherstel", href: "/scheurherstel" },
    { label: "Projecten", href: "/projecten" },
    { label: "Innovatie", href: "/innovatie" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group cursor-pointer flex-shrink-0">
            <img 
              src="/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png" 
              alt="SMB Geveltechniek Logo" 
              className="h-12 w-auto transform transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-primary transition-all duration-300 font-semibold text-lg relative group whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button asChild
              variant="default" 
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 px-8 py-3 font-bold text-lg rounded-xl construction-shadow border-0 whitespace-nowrap"
            >
              <Link to="/offerte">Offerte Aanvragen</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-gray-700 hover:text-primary transition-colors duration-300 rounded-xl hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="px-4 py-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold text-xl py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild
                variant="default" 
                className="w-full gradient-primary text-white mt-6 py-4 font-bold text-lg rounded-xl construction-shadow border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/offerte">Offerte Aanvragen</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
