
import {Facebook, Twitter, Linkedin, Instagram, Mail, ExternalLink, MapPin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="./oss1.png"
              alt="OSS Automation Logo"
              className="h-12 w-auto mb-4"
              // width={100} height={100}
            />
            <h3 className="text-xl font-bold mb-4">OSS AUTOMATION</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Om Sri Sai Automations - Leading manufacturer of automation machines and special purpose machines,
              delivering innovative solutions for industrial automation needs across the globe.
            </p>
            {/* Address */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Address</h4>
              <address className="text-gray-400 not-italic leading-relaxed">
                Om Sri Sai Automation

                Bharathiar Nagar 5th Street, 174/2,

                Plat No.41 Mettukuppam,

                Chennai-600097, Tamil Nadu, India
              </address>
            </div>

            {/* Contact Icons */}
            <div className="flex space-x-4">
              <a href="mailto:ossautomation@gmail.com" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors" title="Email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.justdial.com/Chennai/Om-Sri-Sai-Automation-Veeramani-Salai-PAULRAJ-NAGAR-Kandancavadi-Perungudi/044PXX44-XX44-210621193150-I3T6_BZDET"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="JustDial"
                 className="inline-block">
                <img src="./jd.png" alt="JustDial" className="w-10 h-10 object-contain" />
              </a>

              <a href="https://www.indiamart.com/om-srisaiautomation/?srsltid=AfmBOopgHf9Q1pIuCqeCNZindHhFcInO7jUHpQn01QMOPfJJRDkd1c-u"
                 target="_blank"
                 rel="noopener noreferrer"
                 title="IndiaMart"
                 className="inline-block">
                <img src="./ind.png" alt="IndiaMart" className="w-10 h-10 object-contain" />
              </a>


              <a href="https://www.google.co.in/maps/dir//12.93660000,80.23926000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors" title="Location">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Assembly Machines</span></li>
              <li><span className="text-gray-400">Jig & Fixture Design</span></li>
              <li><span className="text-gray-400">SPM Manufacturing</span></li>
              <li><span className="text-gray-400">Control Panel Work</span></li>
              <li><span className="text-gray-400">Conveyors</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 OSS Automation. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
