import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X as Drone, Code, GraduationCap } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface Slide {
  id: number;
  title: string;
  subtitle: string;
  bgImage: string;
  icon: React.ReactNode;
  color: string;
  route: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Cutting-Edge Drone Technology",
    subtitle: "Experience flight like never before with our proprietary drone solutions",
    bgImage: "https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: (
      <img
        src="https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/drone%20(1).png?sp=r&st=2025-05-24T12:43:09Z&se=2027-01-31T20:43:09Z&spr=https&sv=2024-11-04&sr=b&sig=lfjV2n3ghOf7yMvGt1NB6Ig%2Buui6NmOy8cgthnermbE%3D"
        alt="Drone Icon"
        className="w-13 h-16"
      />
    ),
    
    color: "from-orange-500",
    route: "/drones"
  },
  {
    id: 2,
    title: "Custom Software Solutions",
    subtitle: "Transforming ideas into powerful software applications",
    bgImage: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <Code size={48} />,
    color: "from-purple-500",
    route: "/software"
  },
  {
    id: 3,
    title: "Technology Education for Kids",
    subtitle: "Preparing the next generation of innovators and problem solvers",
    bgImage: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <GraduationCap size={48} />,
    color: "from-green-500",
    route: "/training"
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };
  
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };
  
  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToService = () => {
    navigate(slides[currentSlide].route);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            zIndex: index === currentSlide ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-20"
          ></div>
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-10000 ease-out"
            style={{
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center h-full px-4 pt-16 container mx-auto">
        <div className="max-w-2xl transition-all duration-700">
          <div className={`text-white p-3 rounded-full inline-block mb-4 ${slides[currentSlide].color.replace('from-', 'bg-')}`}>
            {slides[currentSlide].icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-transform duration-700">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl transition-transform duration-700">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={goToService}
              className={`px-6 py-3 rounded-md text-white font-medium transition-all duration-300 ${slides[currentSlide].color.replace('from-', 'bg-')} hover:opacity-90`}
            >
              Learn More
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-6 py-3 rounded-md bg-white text-gray-900 font-medium hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;