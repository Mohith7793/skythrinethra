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
              ＳＫＹＴＨＲＩＮΞＴＨＲΛ — inspired by the sky and the Sanskrit word <em>Thrinethra</em> meaning "three eyes"; represents our three core services: commercial, agricultural, and defense drones equipped with advanced cameras delivering vital insights;
</p>
<p className="text-gray-700 mb-4 leading-relaxed">
  We combine cutting-edge drone technology with AI-powered software services and comprehensive training programs to empower the next generation in drone and software innovation;
</p>
<p className="text-gray-700 mb-4 leading-relaxed">
  Founded in 2025, our journey began with passion and has grown into a dynamic company committed to making advanced technology accessible and impactful;
</p>
<p className="text-gray-700 leading-relaxed">
  Our commitment remains strong — innovation, quality, and customer satisfaction in every product and service we provide.
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