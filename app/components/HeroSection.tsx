
import { ArrowRight, Globe, Award, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useScrollAnimation, useInView } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const [clientCount, setClientCount] = useState(0);
  const [deliveryCount, setDeliveryCount] = useState(0);
  const [awardCount, setAwardCount] = useState(0);
  const { scrollY } = useScrollAnimation();
  const [heroRef, heroInView] = useInView(0.1);

  useEffect(() => {
    // Typing animation for statistics
    const animateCount = (setter: (value: number) => void, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
    };

    const timer = setTimeout(() => {
      animateCount(setClientCount, 50, 2000);
      animateCount(setDeliveryCount, 100, 2500);
      animateCount(setAwardCount, 55, 1800);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Parallax effect based on scroll
  const parallaxOffset = scrollY * 0.5;

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      {/* Enhanced Animated Background Elements with Scroll Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-4 sm:top-10 left-2 sm:left-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-gradient-to-r from-blue-500/30 to-cyan-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ transform: `translateX(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)` }}
        ></div>
        <div
          className="absolute bottom-4 sm:bottom-10 right-2 sm:right-10 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-gradient-to-r from-indigo-500/25 to-blue-400/15 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateX(${-scrollY * 0.15}px) translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-24 sm:w-32 md:w-64 h-24 sm:h-32 md:h-64 bg-gradient-to-r from-cyan-400/15 to-blue-400/10 rounded-full blur-xl sm:blur-3xl animate-pulse delay-500"
          style={{ transform: `scale(${1 + scrollY * 0.0005}) rotate(${-scrollY * 0.03}deg)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-gradient-radial from-blue-500/10 to-transparent rounded-full animate-spin-slow"
          style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0002})` }}
        ></div>

        {/* Floating particles with enhanced scroll effects */}
        <div
          className="absolute top-1/4 left-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-white/80 rounded-full animate-bounce delay-300 shadow-lg shadow-white/50"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 10}px)` }}
        ></div>
        <div
          className="absolute top-3/4 left-1/4 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-cyan-300/90 rounded-full animate-bounce delay-700 shadow-lg shadow-cyan-300/50"
          style={{ transform: `translateX(${Math.cos(scrollY * 0.01) * 8}px)` }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-blue-200/80 rounded-full animate-bounce delay-1000 shadow-lg shadow-blue-200/50"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.015) * 12}px) translateX(${Math.cos(scrollY * 0.015) * 6}px)` }}
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-white"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      >
        <div className={`transition-all duration-1000 ${heroInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          {/* Main Title - Enhanced for Mobile with Roboto Font (Logo Style) */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-roboto font-black mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
            <span
              className="block bg-gradient-to-r from-white via-blue-50 to-cyan-50 bg-clip-text text-transparent drop-shadow-2xl text-glow font-black tracking-tighter"
              style={{
                fontSize: 'clamp(1.75rem, 8vw, 5rem)',
                textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(59,130,246,0.3)'
              }}
            >
              OSS AUTOMATION
            </span>
          </h1>

          {/* Subtitle - Mobile Optimized */}
          <div className={`transition-all duration-1000 delay-300 ${heroInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 md:mb-6 font-inter font-bold">
              <span className="text-white drop-shadow-xl text-glow">Om Sri Sai Automations</span>
            </p>
          </div>

          {/* Description - Enhanced Readability */}
          <div className={`transition-all duration-1000 delay-500 ${heroInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-blue-50 max-w-5xl mx-auto px-3 font-inter font-medium leading-relaxed">
              Manufacturer of Automation Machines & Special Purpose Machines
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-cyan-200 max-w-4xl mx-auto px-3 font-inter font-semibold mb-6 sm:mb-8 md:mb-10">
              ✓ ISO Registered Certified Company
            </p>
          </div>

          {/* Enhanced Global Footprint Badge - Mobile First */}
          <div className={`transition-all duration-1000 delay-700 ${heroInView ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <div
              className="inline-flex items-center bg-gradient-to-r from-white/25 via-blue-200/35 to-cyan-200/25 backdrop-blur-lg px-4 xs:px-5 sm:px-7 md:px-9 py-3 xs:py-4 sm:py-5 rounded-full mb-8 sm:mb-10 md:mb-14 shadow-2xl hover:scale-110 transition-all duration-500 border-2 border-white/50 mx-2 hover:bg-gradient-to-r hover:from-white/35 hover:via-blue-200/45 hover:to-cyan-200/35 group"
              style={{ transform: `translateY(${Math.sin(scrollY * 0.005) * 3}px)` }}
            >
              <Globe className="mr-3 sm:mr-4 h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 animate-spin-slow text-white group-hover:text-cyan-100 transition-colors duration-300" />
              <span className="font-inter font-bold text-white text-sm xs:text-base sm:text-lg md:text-xl drop-shadow-xl text-glow">
                Successfully handled 100+ client deliveries across globe
              </span>
            </div>
          </div>

          {/* Enhanced Statistics - Mobile Responsive Grid */}
          <div className={`transition-all duration-1000 delay-900 ${heroInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-7 lg:gap-9 mb-8 sm:mb-10 md:mb-14 px-2 sm:px-3">
              {/* Clients Card */}
              <div
                className="bg-gradient-to-br from-white/25 via-blue-50/15 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-5 xs:p-6 sm:p-7 md:p-10 hover:bg-gradient-to-br hover:from-white/35 hover:via-blue-50/25 hover:to-transparent transition-all duration-700 hover:scale-110 border-2 border-white/40 shadow-2xl group hover:shadow-blue-500/25"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.003) * 5}px)` }}
              >
                <Users className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 text-white mx-auto mb-4 xs:mb-5 sm:mb-7 animate-bounce group-hover:text-cyan-200 transition-colors duration-300" />
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-inter font-black mb-2 xs:mb-3 sm:mb-4 text-white drop-shadow-2xl text-glow">
                  {clientCount}+
                </div>
                <div className="text-blue-100 text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-semibold drop-shadow-lg">Clients</div>
              </div>

              {/* Deliveries Card */}
              <div
                className="bg-gradient-to-br from-white/25 via-cyan-50/15 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-5 xs:p-6 sm:p-7 md:p-10 hover:bg-gradient-to-br hover:from-white/35 hover:via-cyan-50/25 hover:to-transparent transition-all duration-700 hover:scale-110 border-2 border-white/40 shadow-2xl group hover:shadow-cyan-500/25"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.004 + 1) * 5}px)` }}
              >
                <Globe className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 text-white mx-auto mb-4 xs:mb-5 sm:mb-7 animate-spin-slow group-hover:text-blue-200 transition-colors duration-300" />
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-inter font-black mb-2 xs:mb-3 sm:mb-4 text-white drop-shadow-2xl text-glow">
                  {deliveryCount}+
                </div>
                <div className="text-blue-100 text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-semibold drop-shadow-lg">Deliveries</div>
              </div>

              {/* Awards Card */}
              <div
                className="bg-gradient-to-br from-white/25 via-indigo-50/15 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-5 xs:p-6 sm:p-7 md:p-10 hover:bg-gradient-to-br hover:from-white/35 hover:via-indigo-50/25 hover:to-transparent transition-all duration-700 hover:scale-110 border-2 border-white/40 shadow-2xl sm:col-span-2 lg:col-span-1 group hover:shadow-indigo-500/25"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.005 + 2) * 5}px)` }}
              >
                <Award className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 text-white mx-auto mb-4 xs:mb-5 sm:mb-7 animate-pulse group-hover:text-indigo-200 transition-colors duration-300" />
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-inter font-black mb-2 xs:mb-3 sm:mb-4 text-white drop-shadow-2xl text-glow">
                  {awardCount}+
                </div>
                <div className="text-blue-100 text-base xs:text-lg sm:text-xl md:text-2xl font-inter font-semibold drop-shadow-lg">Awards</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button - Mobile Optimized */}
          <div className={`transition-all duration-1000 delay-1100 ${heroInView ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <a
                href="#services"
                className="inline-flex items-center bg-gradient-to-r from-white/95 via-blue-50/85 to-cyan-50/75 text-slate-800 px-6 xs:px-7 sm:px-10 md:px-12 py-4 xs:py-5 sm:py-6 rounded-full font-inter font-bold text-base xs:text-lg sm:text-xl md:text-2xl hover:from-white hover:via-blue-50 hover:to-cyan-50 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-white/40 border-2 border-white/60 mx-2 group box-glow"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.006) * 2}px)` }}
            >
              <span className="font-inter font-black drop-shadow-sm">Explore Our Services</span>
              <ArrowRight className="ml-3 sm:ml-4 h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 animate-bounce group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Smooth Transition Hint - Mobile Friendly */}
      <div
          className="absolute bottom-3 xs:bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce group cursor-pointer"
          style={{ transform: `translateX(-50%) translateY(${Math.sin(scrollY * 0.01) * 3}px)` }}
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-9 xs:w-7 xs:h-10 sm:w-10 sm:h-15 border-2 border-white/70 rounded-full flex justify-center bg-gradient-to-b from-transparent to-white/25 backdrop-blur-md shadow-lg group-hover:border-white group-hover:shadow-white/30 transition-all duration-500">
          <div className="w-1.5 h-3 xs:w-2 xs:h-4 sm:w-3 sm:h-6 bg-gradient-to-b from-white to-cyan-200 rounded-full mt-1.5 xs:mt-2 sm:mt-3 animate-pulse shadow-lg shadow-white/50 group-hover:shadow-white/70 transition-all duration-500"></div>
        </div>
        <div className="text-white/70 text-xs xs:text-sm mt-2 font-inter font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 text-center">
          Explore Services
        </div>
      </div>

      {/* Professional Transition Bridge to Services */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-slate-900/50 to-gray-900 z-0"></div>
    </section>
  );
};

export default HeroSection;
 