
import { Quote, Star } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const [sectionRef, inView] = useInView(0.2);
  const testimonials = [
    {
      company: "GM pens",
      position: "Client Manager",
      content: "They provide customized solutions tailored to meet specific operational needs. Their expertise in automation has significantly improved our manufacturing efficiency and productivity.",
      rating: 5
    },
    {
      company: "Whirlpool",
      position: "Client Manager",
      content: "An automation manufacturing company specializes in designing, developing, and implementing advanced systems that have transformed our production capabilities and operational excellence.",
      rating: 5
    },
    {
      company: "Rialto",
      position: "Client Manager",
      content: "They deploy a wide range of technologies to streamline production lines and enhance workplace safety. Their innovative solutions have been instrumental in our success.",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Client <span className="text-yellow-400">Testimonials</span>
          </h2>
          <p className={`text-xl text-blue-200 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Hear what our valued clients say about our automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-700 hover:scale-105 border border-white/20 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-yellow-400 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6 italic">
  {`"${testimonial.content}"`}
</p>

              
              <div className="border-t border-white/20 pt-6">
                <div className="font-bold text-yellow-400 text-lg">
                  {testimonial.company}
                </div>
                <div className="text-blue-200 text-sm">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
