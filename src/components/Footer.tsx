import React from 'react';
import { Zap, Heart, Code, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Consulting', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@innovate.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center group cursor-pointer mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <span className="ml-3 text-xl sm:text-2xl font-bold">Innovate</span>
              </div>
              <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Transforming businesses through innovative technology solutions. 
                We help companies scale, grow, and thrive in the digital age.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Developer Info Section */}
        <div className="border-t border-white/20 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-white/80 text-sm sm:text-base">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>by</span>
              <div className="flex items-center space-x-2 group">
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white text-xs sm:text-sm group-hover:scale-110 transition-transform duration-300">
                  RA
                </div>
                <span className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  Rafinity
                </span>
              </div>
              <Code className="h-4 w-4 text-blue-400" />
            </div>
            
            <div className="text-white/60 text-xs sm:text-sm text-center sm:text-right">
              <p className="flex items-center justify-center sm:justify-end space-x-2">
                <span>© {currentYear} Innovate. All rights reserved.</span>
                <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white text-xs">
                  RA
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;