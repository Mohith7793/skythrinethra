import React from 'react';

const DevelopmentProcess: React.FC = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      description: "We begin by understanding your needs, goals, and requirements to create a comprehensive project roadmap.",
      icon: "🎯"
    },
    {
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user interfaces, ensuring scalability and optimal user experience.",
      icon: "✏️"
    },
    {
      title: "Development",
      description: "We follow agile methodologies to develop your solution, with regular updates and iterative improvements.",
      icon: "💻"
    },
    {
      title: "Testing & QA",
      description: "Rigorous testing ensures your software meets quality standards and performs reliably.",
      icon: "🔍"
    },
    {
      title: "Deployment",
      description: "We carefully deploy your solution and provide comprehensive documentation and training.",
      icon: "🚀"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance keep your software running smoothly and up-to-date.",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-1 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a structured and transparent development process to ensure successful project delivery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;