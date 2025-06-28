import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Home, Info, Briefcase, Mail, Users } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Team', href: '#team', icon: Users },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <div
              className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-110 ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Zap
                className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              />
            </div>
            <span
              className={`ml-2 sm:ml-3 text-lg sm:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Innovate
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`group flex items-center px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg'
                        : 'text-white/90 hover:text-white hover:bg-white/20 hover:backdrop-blur-sm'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-xl">
          <div className="px-3 sm:px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center w-full px-3 sm:px-4 py-3 text-left text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white rounded-lg transition-all duration-300 group text-sm sm:text-base"
                >
                  <IconComponent className="h-4 w-4 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;