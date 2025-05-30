
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
  image: string;
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
    ],
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    ],
    image: "https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "pm-001",
    title: "Product Manager",
    department: "Product Management",
    location: "Hybrid",
    type: "Full-time",
    description: "Lead product strategy and development for our innovative technology solutions.",
    requirements: [
      "5+ years of product management experience",
      "Strong technical background",
      "Experience with agile methodologies",
      "Excellent leadership skills",
      "Strategic thinking"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Leadership development",
      "Stock options",
      "Work-life balance"
    ],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const CareersPage: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  const departments = ['All', ...Array.from(new Set(positions.map(pos => pos.department)))];
  
  const filteredPositions = selectedDepartment === 'All' 
    ? positions 
    : positions.filter(pos => pos.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with background image */}
      <div className="relative h-screen overflow-hidden">
        <img
          src="https://www.shutterstock.com/shutterstock/videos/1086385508/thumb/4.jpg?ip=x480"
          alt="Contact background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0  bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers at SkyThrinethra</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
          Join our team and help shape the future of technology
          </p>
        </div>
      </div>
      
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
                description: "Work on cutting-edge technology and shape the future",
                image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Growth & Learning",
                description: "Continuous learning opportunities and career development",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                title: "Great Culture",
                description: "Collaborative environment with work-life balance",
                image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Work Culture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Work Culture"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <h3 className="font-semibold mb-2">Collaborative Environment</h3>
                  <p className="text-gray-600">Work with talented individuals who share your passion for innovation.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                  <p className="text-gray-600">Flexible schedules and policies that support your personal life.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <h3 className="font-semibold mb-2">Career Growth</h3>
                  <p className="text-gray-600">Clear paths for advancement and professional development.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedDepartment === department
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-full relative">
                      <img 
                        src={position.image}
                        alt={position.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
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
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex justify-end space-x-4">
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
                  </div>
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
            <div className="relative h-64">
              <img 
                src={selectedPosition.image}
                alt={selectedPosition.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedPosition.title}</h2>
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
              </div>
              <button
                onClick={() => setSelectedPosition(null)}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
              >
                X
              </button>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-3">Description</h3>
                  <p className="text-gray-600">{selectedPosition.description}</p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">Requirements</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-2">
                      {selectedPosition.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">Benefits</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-2">
                      {selectedPosition.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
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
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Fixed Header */}
            <div className="flex-shrink-0 p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Apply for {selectedPosition.title}</h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume/CV
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical transition-colors"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Portfolio/Website (Optional)
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </form>
            </div>

            {/* Fixed Footer */}
            <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
