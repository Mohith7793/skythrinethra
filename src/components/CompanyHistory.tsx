import React from 'react';

const CompanyHistory: React.FC = () => {
  const milestones = [
    {
      year: 2025,
      title: "Company Founded",
      description: "Started with a vision to revolutionize technology education and innovation."
    },
    {
      year: 2025,
      title: "Launch of Drone Division",
      description: "Introduced cutting-edge drone technology solutions."
    },
    {
      year: 2025,
      title: "Software Development Expansion",
      description: "Expanded services to include custom software development and AI solutions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey Through Time</h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-8 items-start">
              <div className="md:w-1/4">
                <div className="bg-blue-600 text-white rounded-lg px-4 py-2 inline-block">
                  {milestone.year}
                </div>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;