import React from 'react';
import PageHeader from '../components/PageHeader';
import SoftwareServices from '../components/SoftwareServices';
import DevelopmentProcess from '../components/DevelopmentProcess';
import ClientSuccessStories from '../components/ClientSuccessStories';
import ContactCTA from '../components/ContactCTA';

const SoftwarePage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Software Solutions" 
        subtitle="Custom software development and AI/ML solutions"
        bgColor="bg-purple-600"
        textColor="text-white"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software Development Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Tailored Software Solutions</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of expert developers creates custom software solutions designed to address your specific business challenges. From web applications to AI-driven systems, we build scalable, secure, and efficient software that drives your business forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Custom web & mobile application development</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">AI & machine learning integration</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Data analytics & business intelligence</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Cloud infrastructure & DevOps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <SoftwareServices />
      <DevelopmentProcess />
      <ClientSuccessStories 
        industry="Software Development"
        bgColor="bg-purple-50"
      />
      <ContactCTA 
        title="Have a software project in mind?"
        subtitle="Let's discuss how we can bring your vision to life."
        buttonText="Start a Project"
        bgColor="bg-purple-600"
      />
    </div>
  );
};

export default SoftwarePage;