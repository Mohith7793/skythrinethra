import React from 'react';

const DroneShowcase: React.FC = () => {
  const drones = [
    {
      name: "Explorer X1",
      description: "Professional-grade drone for aerial photography",
      features: ["4K Camera", "30min Flight Time", "GPS Navigation"],
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Surveyor Pro",
      description: "Specialized drone for land surveying and mapping",
      features: ["LiDAR Scanner", "45min Flight Time", "RTK Positioning"],
      image: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Drone Fleet</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {drones.map((drone, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={drone.image} 
                  alt={drone.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{drone.name}</h3>
                <p className="text-gray-600 mb-4">{drone.description}</p>
                <div className="space-y-2">
                  {drone.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="h-5 w-5 text-orange-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroneShowcase;