import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '../hooks/useScrollAnimation';

const ContactSection = () => {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [contactRef, contactInView] = useInView(0.2);

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${contactInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-inter">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-4 font-inter">
            Ready to transform your manufacturing process? Contact us today for innovative automation solutions.
          </p>
          <p className="text-lg text-cyan-300 font-semibold font-inter">
            ✓ ISO Registered Certified Company
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${contactInView ? 'animate-fade-in' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 font-inter">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 font-inter">Address</h4>
                    <p className="text-blue-200 leading-relaxed font-inter">
                      OM SRI SAI AUTOMATION<br />
                      N0:06, Paul Raj Nager,<br />
                      Kandanchavadi, Chennai-96
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 font-inter">Phone</h4>
                    <p className="text-blue-200 font-inter">
                      +91 89396 42554<br />
                      +91 94442 35822
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 font-inter">Email</h4>
                    <p className="text-blue-200 font-inter">ossautomation@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 font-inter">Business Hours</h4>
                    <p className="text-blue-200 font-inter">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Expandable */}
          <div className={`transition-all duration-1000 delay-500 ${contactInView ? 'animate-fade-in' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Expandable Button */}
              {!isFormExpanded && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6 font-inter">Ready to Connect?</h3>
                  <p className="text-blue-200 mb-8 font-inter">Click below to share your requirements with us</p>
                  <button
                    onClick={() => setIsFormExpanded(true)}
                    className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 font-inter group"
                  >
                    <span>Send Message</span>
                    <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              )}

              {/* Expanded Form */}
              {isFormExpanded && (
                <div className="animate-fade-in">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white font-inter">Send us a Message</h3>
                    <button
                      onClick={() => setIsFormExpanded(false)}
                      className="text-white hover:text-yellow-400 transition-colors duration-200"
                    >
                      <ChevronUp className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2 font-inter">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm font-inter"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2 font-inter">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm font-inter"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 font-inter">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm font-inter"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 font-inter">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm font-inter"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2 font-inter">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm resize-none font-inter"
                        placeholder="Tell us about your automation requirements..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 font-inter"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;