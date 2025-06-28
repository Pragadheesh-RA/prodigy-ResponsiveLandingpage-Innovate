import React from 'react';
import { Code, Smartphone, Cloud, BarChart3, Shield, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'TypeScript', 'Responsive Design'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'App Store Optimization'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS & Azure', 'Docker', 'Kubernetes'],
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Data-driven insights and business intelligence solutions.',
      features: ['Real-time Dashboards', 'Custom Reports', 'KPI Tracking'],
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Comprehensive security audits and implementation services.',
      features: ['Penetration Testing', 'Compliance', 'Risk Assessment'],
    },
    {
      icon: Rocket,
      title: 'Consulting',
      description: 'Strategic technology consulting to accelerate your business.',
      features: ['Digital Strategy', 'Process Optimization', 'Team Training'],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We offer comprehensive technology solutions to help your business grow and succeed in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl w-fit mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-2.5 sm:py-3 bg-gray-900 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;