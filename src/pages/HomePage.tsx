import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServiceHighlights from '../components/ServiceHighlights';
import Testimonials from '../components/Testimonials';
import TeamSection from '../components/TeamSection';
import LatestNews from '../components/LatestNews';
import ContactCTA from '../components/ContactCTA';
import AchievementsSlider from '../components/AchievementsSlider.tsx';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <ServiceHighlights />
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-16 w-16 mx-auto mb-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Innovation</h3>
              <p className="text-gray-600 text-center">Cutting-edge technology solutions that keep you ahead of the competition.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-16 w-16 mx-auto mb-6 bg-purple-500 text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Quality</h3>
              <p className="text-gray-600 text-center">Uncompromising commitment to excellence in every product and service.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-16 w-16 mx-auto mb-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Support</h3>
              <p className="text-gray-600 text-center">24/7 dedicated customer support to address your every need.</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <TeamSection />
      <AchievementsSlider />
      <LatestNews />
      <ContactCTA />
    </div>
  );
};

export default HomePage;