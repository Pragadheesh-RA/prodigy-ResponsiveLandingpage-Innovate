import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-6 sm:mb-8 hover:bg-white/20 transition-all duration-300">
            <span className="hidden xs:inline">Trusted by 10,000+ companies worldwide</span>
            <span className="xs:hidden">Trusted by 10K+ companies</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Transform Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            Unlock the power of innovation with our cutting-edge solutions. 
            We help businesses scale, grow, and thrive in the digital age.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 sm:mb-16 px-4">
            <button 
              onClick={scrollToContact}
              className="group relative overflow-hidden w-full xs:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-base sm:text-lg"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8 max-w-xs xs:max-w-2xl lg:max-w-4xl mx-auto px-4">
            {[
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;