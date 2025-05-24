import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const achievements = [
  {
    id: 1,
    title: "Drone Mapping Excellence",
    description: "Successfully mapped over 10,000 acres for agricultural analysis",
    image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-emerald-500"
  },
  {
    id: 2,
    title: "Search and Rescue Operations",
    description: "Assisted in 50+ successful search and rescue missions",
    image: "https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-blue-500"
  },
  {
    id: 3,
    title: "Infrastructure Inspection",
    description: "Completed safety inspections for 200+ buildings and bridges",
    image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-purple-500"
  },
  {
    id: 4,
    title: "Agricultural Innovation",
    description: "Revolutionized crop monitoring across 5,000+ hectares",
    image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-amber-500"
  },
  {
    id: 5,
    title: "Environmental Conservation",
    description: "Monitored and protected over 15,000 acres of wildlife habitats",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    color: "from-teal-500"
  }
];

const AchievementsSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {achievements.map((achievement) => (
              <div key={achievement.id} className="px-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-64 md:h-96">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${achievement.color} via-transparent to-transparent opacity-90`}>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">{achievement.title}</h3>
                        <p className="text-xl">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSlider;