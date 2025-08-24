
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceItems = [
    { label: "Metselwerk", href: "/metselwerk" },
    { label: "Gevelrenovatie", href: "/gevelrenovatie" },
    { label: "Renovatieankers", href: "/renovatieankers" },
    { label: "Scheurherstel", href: "/scheurherstel" },
  ];

  const otherNavItems = [
    { label: "Home", href: "/" },
    { label: "Projecten", href: "/projecten" },
    { label: "Innovatie", href: "/innovatie" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" }
  ];

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleOutsideClick = () => {
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Overlay to close dropdown when clicking outside */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleOutsideClick}
        />
      )}
      
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
                {otherNavItems.slice(0, 1).map((item) => (
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
                
                {/* Services Dropdown */}
                <li className="relative">
                  <div 
                    className="text-gray-700 hover:text-primary transition-all duration-300 font-semibold text-lg relative whitespace-nowrap cursor-pointer flex items-center group"
                    onClick={handleServicesClick}
                  >
                    Services
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </div>
                  
                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      {serviceItems.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {otherNavItems.slice(1).map((item) => (
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
                  {/* Home first, same order as desktop */}
                  <li>
                    <Link
                      to="/"
                      className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold text-xl py-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  
                  {/* Services dropdown in mobile, same position as desktop */}
                  <li>
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      <span className="text-gray-700 hover:text-primary transition-colors duration-300 font-semibold text-xl py-2">
                        Services
                      </span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {isMobileServicesOpen && (
                      <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                        {serviceItems.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.href}
                              className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium text-lg py-1 block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Rest of navigation items in same order */}
                  {otherNavItems.slice(1).map((item) => (
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
                
                {/* CTA Button in mobile */}
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
    </>
  );
};

export default Navigation;
