import React from 'react';
import PageHeader from '../components/PageHeader';
import CompanyHistory from '../components/CompanyHistory';
import TeamSection from '../components/TeamSection';
import MissionVision from '../components/MissionVision';
import ContactCTA from '../components/ContactCTA';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our company and mission"
        bgColor="bg-blue-600"
        textColor="text-white"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2025, our company emerged from a shared passion for technology and innovation. What began as a small team of enthusiasts has grown into a dynamic company serving diverse technological needs across multiple sectors.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our journey started with a simple mission: to make cutting-edge technology accessible and beneficial for everyone. Today, we're proud to offer comprehensive solutions in drone technology, software development, and educational training.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Despite our growth, we remain committed to our founding principles of innovation, quality, and customer satisfaction. Every product we design and every service we provide reflects our dedication to excellence and our belief in technology's power to transform lives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CompanyHistory />
      <MissionVision />
      <TeamSection isDetailedView={true} />
      <ContactCTA 
        title="Want to know more about us?"
        subtitle="Reach out to our team with any questions you might have."
        buttonText="Contact Us"
        bgColor="bg-blue-600"
      />
    </div>
  );
};

export default AboutPage;