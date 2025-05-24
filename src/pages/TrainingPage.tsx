import React from 'react';
import PageHeader from '../components/PageHeader';
import TrainingPrograms from '../components/TrainingPrograms';
import TeachingMethodology from '../components/TeachingMethodology';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

const TrainingPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Training Programs" 
        subtitle="Empowering young minds with technology education"
        bgColor="bg-green-600"
        textColor="text-white"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nurturing Future Innovators</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our specialized training programs are designed for students below 10th standard, introducing them to the exciting world of technology through engaging, age-appropriate curricula. We focus on building strong foundations while fostering creativity and problem-solving skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 text-green-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Age-appropriate technology curriculum</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-green-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Hands-on learning with real-world projects</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-green-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Small class sizes for personalized attention</p>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 text-green-500 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Regular progress reports and parent involvement</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Children Learning Technology" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <TrainingPrograms />
      <TeachingMethodology />
      <FAQ />
      <ContactCTA 
        title="Ready to enroll your child?"
        subtitle="Contact us to learn more about our training programs and schedule."
        buttonText="Enroll Now"
        bgColor="bg-green-600"
      />
    </div>
  );
};

export default TrainingPage;