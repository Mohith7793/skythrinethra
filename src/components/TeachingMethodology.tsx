import React from 'react';

const TeachingMethodology: React.FC = () => {
  const methodologies = [
    {
      title: "Project-Based Learning",
      description: "Students learn by working on real-world projects that integrate multiple concepts and skills.",
      icon: "📝"
    },
    {
      title: "Interactive Sessions",
      description: "Engaging classroom activities that encourage participation and hands-on learning.",
      icon: "🤝"
    },
    {
      title: "Peer Learning",
      description: "Students collaborate and learn from each other through group activities and discussions.",
      icon: "👥"
    },
    {
      title: "Personalized Attention",
      description: "Small class sizes ensure each student receives individual guidance and support.",
      icon: "👤"
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Teaching Methodology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We employ proven teaching methods that make learning engaging, effective, and enjoyable for young minds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {methodologies.map((method, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Our Approach to Learning</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              We believe in creating an environment where children can explore technology freely while developing critical thinking and problem-solving skills. Our methodology combines structured learning with creative freedom, allowing students to progress at their own pace while maintaining high educational standards.
            </p>
            <p className="text-gray-700">
              Regular assessments and feedback ensure that students are making progress and help us adjust our teaching methods to meet individual learning needs. We also encourage parent involvement through regular updates and demonstrations of student projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;