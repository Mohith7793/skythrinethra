import React from 'react';

const TrainingPrograms: React.FC = () => {
  const programs = [
    {
      title: "Introduction to Coding",
      ageGroup: "Ages < 18",
      duration: "8 weeks",
      description: "A fun introduction to basic programming concepts using block-based coding.",
      topics: ["Basic algorithms", "Problem-solving", "Game creation"]
    },
    {
      title: "Robotics for Kids",
      ageGroup: "Ages 9-12",
      duration: "10 weeks",
      description: "Hands-on experience with robotics and basic electronics.",
      topics: ["Robot building", "Basic circuits", "Programming robots"]
    },
    {
      title: "Young App Developers",
      ageGroup: "Ages 11-13",
      duration: "12 weeks",
      description: "Learn to create simple mobile applications and games.",
      topics: ["App design", "Basic programming", "User interface"]
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Training Programs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <div className="flex space-x-4 mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
                    {program.ageGroup}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
                    {program.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  {program.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <div className="h-5 w-5 text-green-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{topic}</span>
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

export default TrainingPrograms;