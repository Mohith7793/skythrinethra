import React, { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  category: string;
  image: string;
}

const allNews: NewsItem[] = [
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
    excerpt: "Our latest software offering uses machine learning to improve patient care and streamline hospital operations.",
    fullContent: "We are proud to announce the launch of our revolutionary AI-powered healthcare management system. This sophisticated software solution leverages advanced machine learning algorithms to analyze patient data, predict potential health risks, and optimize hospital operations. The system has been designed in collaboration with leading healthcare professionals to ensure it meets the specific needs of modern medical facilities. Early trials have shown significant improvements in patient care efficiency and resource allocation, marking a new era in healthcare management technology.",
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
  },
  {
    id: 4,
    title: "Partnership with Global Tech Leaders",
    excerpt: "Strategic partnerships formed with leading technology companies to enhance our service offerings.",
    fullContent: "We are excited to announce new strategic partnerships with several global technology leaders. These collaborations will enable us to enhance our service offerings, bringing cutting-edge solutions to our clients. The partnerships span across various domains including cloud computing, artificial intelligence, and advanced robotics. This initiative will significantly boost our capability to deliver innovative solutions and maintain our position at the forefront of technological advancement.",
    date: "March 5, 2025",
    category: "Partnership",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Launch of Sustainable Tech Initiative",
    excerpt: "New program launched focusing on environmentally sustainable technology solutions.",
    fullContent: "Today marks the launch of our Sustainable Tech Initiative, a comprehensive program aimed at developing and implementing environmentally sustainable technology solutions. This initiative encompasses various projects including energy-efficient drone technology, eco-friendly software development practices, and green computing solutions. Our commitment to sustainability reflects our responsibility towards environmental stewardship while maintaining technological excellence.",
    date: "February 20, 2025",
    category: "Sustainability",
    image: "https://images.pexels.com/photos/3259629/pexels-photo-3259629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const NewsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(allNews.map(news => news.category)))];
  
  const filteredNews = selectedCategory === 'All' 
    ? allNews 
    : allNews.filter(news => news.category === selectedCategory);

  return (
    <div>
      <PageHeader 
        title="Latest News" 
        subtitle="Stay updated with our latest developments and announcements"
        bgColor="bg-blue-600"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
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
                    <button onClick={() => setSelectedNews(item)} className="text-left">
                      {item.title}
                    </button>
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
      </section>

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
    </div>
  );
};

export default NewsPage;