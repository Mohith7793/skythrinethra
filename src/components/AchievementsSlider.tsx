import React, { useState } from 'react';
import { Trophy, X } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  fullDetails: string;
  date: string;
  image: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "National Drone Innovation Award 2025",
    description: "Won the prestigious national award for innovation in drone technology.",
    fullDetails: "We received the National Drone Innovation Award for our breakthrough in flight stability and AI-based route optimization. This marks a significant achievement by our R&D team, showcasing leadership in autonomous aerial systems.",
    date: "April 10, 2025",
    image: "https://images.pexels.com/photos/615373/pexels-photo-615373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Best AI Software Startup 2024",
    description: "Recognized for our healthcare AI system at the Global Tech Awards.",
    fullDetails: "Our AI-powered healthcare management system was awarded 'Best AI Software Startup' for its innovative integration of EHR, HIE, and predictive insights. The award reinforces our commitment to revolutionizing patient care.",
    date: "December 22, 2024",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "STEM Education Outreach Recognition",
    description: "Awarded for expanding STEM education programs to rural schools.",
    fullDetails: "Our technology training initiative for students in underserved areas received national recognition for impact and innovation. We’re proud to be equipping the next generation with digital skills.",
    date: "November 15, 2024",
    image: "https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
  id: 4,
  title: "STEM Education Outreach Recognition",
  description: "Awarded for expanding STEM education programs to rural schools.",
  fullDetails: "Our technology training initiative for students in underserved areas received national recognition for impact and innovation. We’re proud to be equipping the next generation with digital skills.",
  date: "November 15, 2024",
  image: "https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}
];

const AchievementsSlider: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Achievements</h2>
          <p className="text-gray-600">Celebrating milestones and recognitions across the globe</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-blue-700 text-sm font-semibold">
                  <Trophy size={16} className="mr-2" />
                  {achievement.date}
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
                  {selectedAchievement.date}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">{selectedAchievement.title}</h2>
              <p className="text-gray-700 leading-relaxed">{selectedAchievement.fullDetails}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSlider;
