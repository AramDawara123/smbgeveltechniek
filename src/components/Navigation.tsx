
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { 
      label: "Diensten", 
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { label: "Metselwerk", href: "#metselwerk" },
        { label: "Nieuwbouw", href: "#nieuwbouw" },
        { label: "Gevelrenovatie", href: "#gevelrenovatie" },
        { label: "Renovatieankers", href: "#renovatieankers" },
        { label: "Scheurherstel", href: "#scheurherstel" },
      ]
    },
    { label: "Over ons", href: "#about" },
    { label: "Projecten", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex items-center justify-between h-20 overflow-hidden">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer flex-shrink-0">
            <img 
              src="/lovable-uploads/1e0914bc-1527-4823-a9b1-50957f0e3c6f.png" 
              alt="SMB Geveltechniek Logo" 
              className="h-12 w-auto group-hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 overflow-hidden">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 font-semibold text-lg relative group whitespace-nowrap">
                    {item.label}
                    <ChevronDown className="w-4 h-4 ml-1 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card/95 backdrop-blur-sm border border-border/20 z-50 min-w-max">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.label} asChild>
                        <a 
                          href={dropdownItem.href}
                          className="text-foreground hover:text-primary transition-colors duration-200 cursor-pointer whitespace-nowrap"
                        >
                          {dropdownItem.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-all duration-300 font-semibold text-lg relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              )
            ))}
            <Button 
              variant="default" 
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 px-8 py-3 font-bold text-lg rounded-xl construction-shadow border-0 whitespace-nowrap flex-shrink-0"
            >
              Offerte Aanvragen
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-white hover:text-primary transition-colors duration-300 rounded-xl hover:bg-white/10 flex-shrink-0"
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
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-primary transition-colors duration-300 font-semibold text-xl py-2 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block text-gray-400 hover:text-primary transition-colors duration-300 font-medium text-lg py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 font-semibold text-xl py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
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
