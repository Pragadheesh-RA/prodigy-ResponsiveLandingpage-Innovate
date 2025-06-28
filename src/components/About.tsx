import React from 'react';
import { CheckCircle, Target, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that align with your business goals and drive real results.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Our optimized processes and cutting-edge technology ensure rapid deployment and performance.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our diverse team of professionals brings decades of combined experience to every project.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We're passionate about transforming businesses through technology. Our team of experts 
              combines creativity with technical excellence to deliver solutions that make a difference.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                'Industry-leading expertise',
                'Customer-centric approach',
                'Proven track record',
                'Innovative solutions',
              ].map((item, index) => (
                <div key={index} className="flex items-center group">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="flex items-center justify-center">
                Learn More
                <Target className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;