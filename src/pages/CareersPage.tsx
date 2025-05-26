import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Mail } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const positions: JobPosition[] = [
  {
    id: "swe-001",
    title: "Senior Software Engineer",
    department: "Software Development",
    location: "Remote / Office",
    type: "Full-time",
    description: "We're looking for an experienced software engineer to join our team and help build innovative solutions across our technology stack.",
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Understanding of CI/CD practices",
      "Excellent problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible working hours",
      "Remote work options",
      "Professional development budget"
    ]
  },
  {
    id: "dre-001",
    title: "Drone Engineer",
    department: "Drone Technology",
    location: "On-site",
    type: "Full-time",
    description: "Join our drone technology team to design and develop next-generation drone solutions for various applications.",
    requirements: [
      "Degree in Aerospace Engineering or related field",
      "3+ years experience in drone development",
      "Knowledge of flight control systems",
      "Experience with embedded systems",
      "Strong analytical skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Stock options",
      "Training programs",
      "Team building events"
    ]
  },
  {
    id: "ai-001",
    title: "AI/ML Engineer",
    department: "Artificial Intelligence",
    location: "Hybrid",
    type: "Full-time",
    description: "Help us build and implement AI/ML solutions for our drone and software products.",
    requirements: [
      "Masters/PhD in Computer Science or related field",
      "Strong background in machine learning",
      "Experience with Python and ML frameworks",
      "Published research is a plus",
      "Good communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Research opportunities",
      "Conference attendance",
      "Flexible schedule"
    ]
  }
];

const CareersPage: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div>
      <PageHeader 
        title="Careers at SkyThrinethra" 
        subtitle="Join our team and help shape the future of technology"
        bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At SkyThrinethra, we're building the future of technology. Join our team of innovators, creators, and problem-solvers in making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Innovation First",
                description: "Work on cutting-edge technology and shape the future"
              },
              {
                title: "Growth & Learning",
                description: "Continuous learning opportunities and career development"
              },
              {
                title: "Great Culture",
                description: "Collaborative environment with work-life balance"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid gap-6">
            {positions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {position.location}
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedPosition(position);
                        setShowApplicationForm(false);
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedPosition.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {selectedPosition.department}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {selectedPosition.location}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {selectedPosition.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPosition(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  X
                </button>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-3">Description</h3>
                  <p className="text-gray-600">{selectedPosition.description}</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {selectedPosition.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">Benefits</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {selectedPosition.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </section>

                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    onClick={() => setShowApplicationForm(true)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Apply for {selectedPosition.title}</h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  X
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume/CV
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;