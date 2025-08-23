
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { 
      label: "Diensten", 
      href: "#services", 
      hasDropdown: true,
      dropdownItems: [
        { label: "Metselwerk", href: "/metselwerk" },
        { label: "Nieuwbouw", href: "/nieuwbouw" },
        { label: "Gevelrenovatie", href: "/gevelrenovatie" },
        { label: "Renovatieankers", href: "/renovatieankers" },
        { label: "Scheurherstel", href: "/scheurherstel" }
      ]
    },
    { label: "Projecten", href: "/projecten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 max-w-[1400px] w-full overflow-x-hidden">
        {/* bovenste rij */}
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
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-gray-300 hover:text-primary transition-all duration-300 font-semibold text-lg relative group whitespace-nowrap focus:outline-none">
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="z-[99999] bg-white/98 backdrop-blur-md border border-gray-200/50 shadow-xl rounded-lg w-52 p-2" 
                    align="center"
                    sideOffset={12}
                    avoidCollisions={true}
                    collisionPadding={20}
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.label} asChild className="focus:bg-gray-100/80 rounded-md">
                        <Link 
                          to={dropdownItem.href}
                          className="text-gray-700 hover:text-primary hover:bg-gray-100/60 transition-all duration-200 cursor-pointer flex items-center px-3 py-3 text-sm font-medium w-full rounded-md"
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-gray-300 hover:text-primary transition-all duration-300 font-semibold text-lg relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              )
            ))}
            <Button asChild
              variant="default" 
              className="gradient-primary text-white hover:scale-105 transition-all duration-300 px-8 py-3 font-bold text-lg rounded-xl construction-shadow border-0 whitespace-nowrap"
            >
              <Link to="/offerte">Offerte Aanvragen</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Only shows mobile menu */}
          <button
            className="lg:hidden p-3 text-white hover:text-primary transition-colors duration-300 rounded-xl hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-construction-dark/95 backdrop-blur-lg border-t border-white/10 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => 
                !item.hasDropdown ? (
                  <div key={item.label}>
                    <div>
                      <Link
                        to={item.href}
                        className="text-gray-300 hover:text-primary transition-colors duration-300 font-semibold text-xl py-2 block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div key={item.label} className="space-y-2">
                    <button
                      className="text-gray-300 font-semibold text-xl py-2 flex items-center justify-between w-full hover:text-primary transition-colors duration-300"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-2 animate-fade-in">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.href}
                            className="text-gray-400 hover:text-primary transition-colors duration-300 py-2 block text-lg"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
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
