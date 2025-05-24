import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What types of drones do you offer?",
    answer: "We offer a variety of drones designed for different applications, including aerial photography, surveying, agriculture, and recreational use. Our product line ranges from entry-level models for beginners to advanced professional-grade drones with sophisticated features.",
    category: "Drone Products"
  },
  {
    id: 2,
    question: "Do you provide drone training with purchases?",
    answer: "Yes, we provide comprehensive training for all drone purchases. This includes basic flight operation, safety procedures, and specific functionality training for the model you purchase. Additional advanced training sessions are also available.",
    category: "Drone Products"
  },
  {
    id: 3,
    question: "What software development services do you provide?",
    answer: "Our software development services include web and mobile application development, custom software solutions, AI and machine learning integration, data analytics platforms, and cloud infrastructure setup. We work with clients to understand their specific needs and develop tailored solutions.",
    category: "Software Services"
  },
  {
    id: 4,
    question: "How long does a typical software project take?",
    answer: "Project timelines vary depending on complexity and requirements. Simple projects might take 4-8 weeks, while more complex systems could take several months. During our initial consultation, we'll provide a detailed timeline based on your specific project needs.",
    category: "Software Services"
  },
  {
    id: 5,
    question: "What age groups are your training programs designed for?",
    answer: "Our training programs are specifically designed for students below 10th standard, with different curricula tailored to various age groups. We have programs suitable for children as young as 7 years old, with age-appropriate content and teaching methods.",
    category: "Training Programs"
  },
  {
    id: 6,
    question: "How are the training sessions conducted?",
    answer: "Our training sessions combine theory with hands-on practice. Classes are held in small groups to ensure personalized attention. We use interactive teaching methods, project-based learning, and gamification to make the learning experience engaging and effective.",
    category: "Training Programs"
  },
  {
    id: 7,
    question: "Do you offer custom solutions for specific industries?",
    answer: "Yes, we specialize in developing custom solutions for various industries including healthcare, agriculture, construction, education, and more. Our team works closely with industry experts to ensure our solutions address the specific challenges and requirements of each sector.",
    category: "General"
  },
  {
    id: 8,
    question: "How can I get a quote for your services?",
    answer: "You can request a quote by filling out the contact form on our website, calling our office, or sending an email to info@techdrone.com. For complex projects, we typically schedule an initial consultation to better understand your requirements before providing a detailed quote.",
    category: "General"
  }
];

interface FAQProps {
  isContactPage?: boolean;
}

const FAQ: React.FC<FAQProps> = ({ isContactPage = false }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("General");
  
  const toggleItem = (id: number) => {
    setActiveId(id === activeId ? null : id);
  };
  
  const categories = ["General", "Drone Products", "Software Services", "Training Programs"];
  
  const filteredFAQs = isContactPage 
    ? faqItems.filter(item => item.category === "General") 
    : faqItems.filter(item => item.category === activeCategory);
  
  return (
    <div>
      {!isContactPage && (
        <div className="flex mt-5 flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <div className="max-w-3xl  mb-5 mx-auto divide-y divide-gray-200 rounded-xl overflow-hidden shadow">
        {filteredFAQs.map((item) => (
          <div key={item.id} className="bg-white">
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-900">{item.question}</span>
              <span className="ml-6 flex-shrink-0 text-gray-400">
                {activeId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>
            <div 
              className={`transition-all duration-300 overflow-hidden ${
                activeId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 text-gray-600">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;