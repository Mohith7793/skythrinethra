import React from 'react';
import PageHeader from '../components/PageHeader';
import DroneShowcase from '../components/DroneShowcase';
import ClientSuccessStories from '../components/ClientSuccessStories';
import ContactCTA from '../components/ContactCTA';

const DronePage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Drone Solutions" 
        subtitle="Cutting-edge drone technology for modern applications"
        bgColor="bg-orange-600"
        textColor="text-white"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Drone Technology</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our proprietary drone technology combines cutting-edge hardware with sophisticated software to deliver unparalleled performance and reliability. Designed for both professional and recreational use, our drones represent the pinnacle of aerial innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Extended flight time with advanced battery technology</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">4K Ultra HD camera with image stabilization</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">AI-powered obstacle avoidance system</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Intuitive control interface with real-time feedback</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Advanced Drone" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <DroneShowcase />
      <ClientSuccessStories 
        industry="Drone Technology"
        bgColor="bg-orange-50"
      />
      <ContactCTA 
        title="Ready to elevate your aerial capabilities?"
        subtitle="Contact us today to learn more about our drone solutions."
        buttonText="Get a Quote"
        bgColor="bg-orange-600"
      />
    </div>
  );
};

export default DronePage;