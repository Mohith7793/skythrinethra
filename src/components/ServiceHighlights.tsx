import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bone as Drone, Code, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Drone Products",
    description: "Our custom-designed drones combine cutting-edge hardware with sophisticated software for unparalleled performance in various applications.",
    icon: <Drone size={32} className="text-orange-500" />,
    gradient: "from-orange-500 to-red-500",
    route: "/drones",
    image: "https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Software Services",
    description: "From web applications to advanced AI systems, our development team creates custom software solutions for your specific business needs.",
    icon: <Code size={32} className="text-purple-500" />,
    gradient: "from-purple-500 to-indigo-500",
    route: "/software",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Training Programs",
    description: "Our specialized curricula introduce young students to technology through engaging, age-appropriate learning experiences.",
    icon: <GraduationCap size={32} className="text-green-500" />,
    gradient: "from-green-500 to-emerald-500",
    route: "/training",
    image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const ServiceHighlights: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive technology solutions across three specialized domains, bringing innovation and expertise to meet diverse needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white"
            >
              <div className="relative h-80">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-white/90 mb-4 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <button 
                    onClick={() => navigate(service.route)}
                    className={`flex items-center space-x-2 text-white font-medium bg-gradient-to-r ${service.gradient} px-4 py-2 rounded-md opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;