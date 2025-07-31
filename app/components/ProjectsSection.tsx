// import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const ProjectsSection = () => {
  const [sectionRef, inView] = useInView(0.2);
  const projects = [
    {
      title: "Hot Plate Weld Machine",
      description: "Used to join thermoplastic parts by heating them with a hot plate and pressing them together to form a strong bond.",
      image: "./g1.gif"
    },
    {
      title: "Medical Component Valve Assembly Machine",
      description: "Precisely assembles small, sterile valve components used in medical devices with high accuracy.",
      image: "./g2.gif"
    },
    {
      title: "Tooth Brush Cap Assembly Machine",
      description: "Automates the attachment of protective caps onto toothbrush heads for hygienic packaging.",
      image: "./g3.gif"
    },
    {
      title: "Pen Packing machine",
      description: "Automatically packs pens into cartons or blister packs for retail distribution.",
      image: "./g4.gif"
    },
    {
      title: "Gang Screw Assembly Machine",
      description: "Simultaneously installs multiple screws into components, increasing assembly efficiency in batch production.",
      image: "./g5.gif"
    },
    {
      title: "Automobile part Ring Assembly Machine",
      description: "Accurately assembles sealing or retaining rings onto automotive components like shafts or housings.",
      image: "./g6.gif"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Showcasing our expertise in delivering cutting-edge automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                // width={100} height={100}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <a
                    href="https://www.indiamart.com/om-srisaiautomation/our-products.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group/btn"
                >
                  Know More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
