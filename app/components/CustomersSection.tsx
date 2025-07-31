
import { useInView } from '../hooks/useScrollAnimation';

const CustomersSection = () => {
  const [sectionRef, inView] = useInView(0.2);

  const customers = [
    { name: 'WHIRLPOOL', logo: './whirlpool.png' },
    { name: 'RORITO', logo: './rorito.png' },
    { name: 'BRITE', logo: './brite.png' },
    { name: 'RIALTO', logo: './rialto.png' },
    { name: 'SUBA PLASTICS', logo: './suba-plastics.png' }
  ];


  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-purple-500 to-pink-600',
    'from-yellow-500 to-orange-600',
    'from-red-500 to-pink-600',
    'from-indigo-500 to-blue-600',
    'from-teal-500 to-green-600',
    'from-orange-500 to-red-600'
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Prestigious Customers
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Trusted by leading companies across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {customers.map((customer, index) => (
              <div
                  key={index}
                  className={`group transition-all duration-700 ${
                      inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 border border-gray-100 hover:border-transparent flex items-center justify-center group relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 mb-3 mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg bg-white rounded-full flex items-center justify-center">
                      <img
                          src={customer.logo}
                          alt={`${customer.name} Logo`}
                          className="h-14 w-14 object-contain object-center block mx-auto"
                      />

                    </div>
                    <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {customer.name}
                    </div>
                  </div>

                </div>
              </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
