import React, { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  category: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Introducing Our Next-Generation Drone Technology",
    excerpt: "Our R&D team has developed breakthrough drone technology with extended flight time and enhanced stability.",
    fullContent: "Our Research and Development team has achieved a significant breakthrough in drone technology, introducing a new generation of drones with unprecedented flight time and stability. This innovation features advanced battery management systems, improved aerodynamics, and sophisticated stabilization algorithms. The new technology enables our drones to operate in challenging weather conditions while maintaining precise control and stability. This development represents a major step forward in making drone operations more reliable and efficient across various applications, from aerial photography to industrial inspections.",
    date: "April 15, 2025",
    category: "Product Launch",
    image: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "New AI-Powered Software Solution for Healthcare",
    excerpt: "Our AI-powered system simplifies hospital workflows and reduces doctor burden.It offers EHR, HIE, and predictive insights for better care.Improves efficiency and cuts patient wait times",
    fullContent: "We are proud to introduce our revolutionary AI-powered Healthcare Management System, a next-generation software solution designed to transform the healthcare industry. By integrating Machine Learning and predictive analytics, our system enhances patient care, reduces hospital workload, and streamlines overall healthcare operations. It offers a complete suite of tools including Health Information Exchange (HIE), Electronic Health Records (EHR), and operational automation, enabling doctors and healthcare providers to focus more on patient outcomes and less on administrative burdens. The platform delivers actionable insights that support smarter decision-making, improve resource allocation, and significantly reduce patient wait times. Developed in collaboration with leading medical experts, early deployments have demonstrated remarkable improvements in care efficiency, marking a significant step forward in modern healthcare innovation",
    date: "March 28, 2025",
    category: "Software",
    image: "https://images.pexels.com/photos/3829739/pexels-photo-3829739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Expanding Our Educational Program to New Schools",
    excerpt: "Our successful technology training program for young students is now being implemented in 20 additional schools.",
    fullContent: "Following the remarkable success of our technology education initiative, we are thrilled to announce the expansion of our program to 20 new schools. This expansion will bring cutting-edge technology education to thousands more students, equipping them with essential skills for the digital age. The program includes hands-on experience with programming, robotics, and artificial intelligence, tailored specifically for young learners. Our comprehensive curriculum, developed by education experts, has shown exceptional results in fostering creativity and technical skills among students.",
    date: "March 10, 2025",
    category: "Education",
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const LatestNews: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Latest News</h2>
            <p className="text-gray-600">Stay updated with our latest developments and announcements</p>
          </div>
          <button 
            onClick={() => navigate('/news')}
            className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="font-medium">View All News</span>
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm ml-auto">
                    <Calendar size={14} className="mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  <button onClick={() => setSelectedNews(item)}>{item.title}</button>
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button 
                  onClick={() => setSelectedNews(item)}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  {selectedNews.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{selectedNews.date}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6">{selectedNews.title}</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedNews.fullContent}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestNews;