
import { User, Calendar, Target, Award } from 'lucide-react';

import { useInView } from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const [sectionRef, inView] = useInView(0.2);

  const workflowSteps = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Planning & Strategy",
      description: "Define goals, audience, site structure & navigation to ensure optimal results."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Development & Progress Update",
      description: "Ongoing updates during design and coding phase with regular client communication."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Development & Launch",
      description: "Final implementation of the approved design into functional, high-quality code."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Director Profile */}
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Meet Our <span className="text-blue-600">Director</span>
          </h2>
          
          <div className={`bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto border border-gray-100 transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
                <User className="h-24 w-24 text-white" />
              </div>
              
              <div className="text-left flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Senthil G</h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">Proprietor</p>
                
                <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="text-lg font-semibold text-gray-900">30 Years of Excellence</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Three decades of specialized experience in Industrial Automation, Special Purpose Machines, 
                    and Jig & Fixture design. Leading OSS Automation with innovation and expertise.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Industrial Automation
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Special Purpose Machines
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Jig & Fixture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our <span className="text-blue-600">Approach</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A systematic three-phase workflow ensuring excellence in every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${900 + index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-blue-900 shadow-lg">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connecting Line */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
