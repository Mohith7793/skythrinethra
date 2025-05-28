import React, { useState } from 'react';

interface Program {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  topics: string[];
  image: string;
  category: string;
  subPrograms?: {
    title: string;
    description: string;
    topics: string[];
  }[];
}

const programs: Program[] = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDescription: "Build dynamic, responsive, and modern web applications from scratch.",
    fullDescription: "Master modern web development technologies and frameworks to create powerful applications.",
    topics: [
      "React fundamentals and hooks",
      "TypeScript integration",
      "State management",
      "Responsive design",
      "Backend development",
      "Database integration"
    ],
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Development",
    subPrograms: [
      {
        title: "Frontend Development (React, TypeScript)",
        description: "Learn how to build beautiful and interactive user interfaces using React and TypeScript. Understand state management, hooks, routing, and component-based architecture.",
        topics: ["Component architecture", "State management", "Routing", "API integration"]
      },
      {
        title: "Backend Development (Java, JavaScript)",
        description: "Master backend technologies using Java and Node.js (JavaScript). Learn RESTful API development, database integration (MongoDB, MySQL), authentication, and deployment.",
        topics: ["API development", "Database design", "Authentication", "Server deployment"]
      }
    ]
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    shortDescription: "Transform raw data into actionable insights using powerful tools and techniques.",
    fullDescription: "Comprehensive training in data science, machine learning, and analytics.",
    topics: [
      "Data preprocessing",
      "Statistical analysis",
      "Machine learning",
      "Deep learning",
      "Data visualization",
      "Business intelligence"
    ],
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Data",
    subPrograms: [
      {
        title: "Data Science & Machine Learning",
        description: "Learn data preprocessing, EDA, statistical modeling, and machine learning using Python, NumPy, pandas, and scikit-learn.",
        topics: ["Data preprocessing", "Machine learning algorithms", "Model evaluation", "Deployment"]
      },
      {
        title: "Deep Learning",
        description: "Master neural networks, CNNs, RNNs, and modern architectures like Transformers using TensorFlow and PyTorch.",
        topics: ["Neural networks", "CNN", "RNN", "Transformers"]
      },
      {
        title: "Data Analytics",
        description: "Learn data wrangling in Python and create interactive dashboards in Tableau. Ideal for business intelligence and decision-making roles.",
        topics: ["Data wrangling", "Visualization", "Dashboard creation", "Reporting"]
      }
    ]
  },
  {
    id: "robotics-ai",
    title: "Robotics & Artificial Intelligence",
    shortDescription: "Design, build, and program intelligent robotic systems.",
    fullDescription: "Comprehensive training in robotics, AI, and autonomous systems.",
    topics: [
      "Robot kinematics",
      "Sensor integration",
      "Computer vision",
      "AI algorithms",
      "Autonomous systems",
      "IoT integration"
    ],
    image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Robotics",
    subPrograms: [
      {
        title: "Robotics & AI",
        description: "Design, build, and program intelligent robotic systems. Learn robot kinematics, embedded systems, Arduino, and sensor integration.",
        topics: ["Robot design", "Kinematics", "Sensor integration", "Control systems"]
      },
      {
        title: "IoT Projects",
        description: "Build smart systems by connecting hardware to the internet. Work with Raspberry Pi, Arduino, NodeMCU, and various sensors.",
        topics: ["IoT protocols", "Sensor networks", "Cloud integration", "Smart systems"]
      },
      {
        title: "Computer Vision",
        description: "Enable machines to 'see' and interpret visual data. Work with OpenCV, YOLO, and real-time object detection.",
        topics: ["Image processing", "Object detection", "Face recognition", "Video analysis"]
      },
      {
        title: "Mini Drone Course",
        description: "Get hands-on with drone technology and autonomous flight. Learn drone anatomy, flight controllers, and GPS navigation.",
        topics: ["Drone basics", "Flight control", "Navigation", "Autonomous flight"]
      }
    ]
  }
];

const TrainingPrograms: React.FC = () => {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(programs.map(p => p.category)))];
  
  const filteredPrograms = selectedCategory === "All" 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Training Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry-relevant, hands-on training programs designed for beginners to advanced learners
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                      {program.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">
                  {expandedProgram === program.id ? program.fullDescription : program.shortDescription}
                </p>
                
                {expandedProgram === program.id && (
                  <div className="space-y-6 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2">Core Topics:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {program.topics.map((topic, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {program.subPrograms && (
                      <div className="space-y-4">
                        <h4 className="font-semibold">Specialized Tracks:</h4>
                        {program.subPrograms.map((subProgram, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2">{subProgram.title}</h5>
                            <p className="text-gray-600 mb-3">{subProgram.description}</p>
                            <div className="grid grid-cols-2 gap-2">
                              {subProgram.topics.map((topic, topicIndex) => (
                                <div key={topicIndex} className="flex items-center text-gray-600">
                                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                  {topic}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                <button
                  onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                  className="text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  {expandedProgram === program.id ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;