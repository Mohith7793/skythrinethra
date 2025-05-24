import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <div className="h-1 w-20 bg-blue-600"></div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To empower businesses and individuals through innovative technology solutions, delivering excellence in software development, drone technology, and education. We strive to create lasting value for our clients while fostering technological advancement in our community.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 text-blue-600 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Deliver innovative technological solutions</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-blue-600 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Foster technological education and growth</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-blue-600 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Create sustainable value for stakeholders</p>
              </li>
            </ul>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <div className="h-1 w-20 bg-blue-600"></div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To be a leading force in technological innovation, recognized globally for our commitment to excellence, sustainable practices, and transformative solutions that shape the future of technology across industries.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 text-blue-600 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Lead in technological innovation</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-blue-600 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Build sustainable technology solutions</p>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 text-blue-600 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Achieve global recognition for excellence</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;