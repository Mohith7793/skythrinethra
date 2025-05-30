import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, AeroTech Industries",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The drones provided by SkyThrinethra have revolutionized our aerial surveying operations. The quality of hardware combined with their intuitive software has significantly improved our efficiency.",
    rating: 5,
    category: "Drone Products"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder, InnovateTech",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The custom software solution developed for our business has streamlined our operations and provided valuable insights. The team's expertise in AI integration has given us a competitive edge.",
    rating: 5,
    category: "Software Services"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Parent",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "My child has been attending the coding training program for six months, and the progress is remarkable. The curriculum is engaging, and the instructors are excellent at making complex concepts accessible.",
    rating: 5,
    category: "Training Programs"
  },
  {
    id: 4,
    name: "David Patel",
    position: "Operations Manager, GlobalSurvey",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The drone technology provided by SkyThrinethra exceeds our expectations. Their after-sales support and training have been exceptional, ensuring our team can utilize the equipment to its full potential.",
    rating: 4,
    category: "Drone Products"
  },
  {
    id: 5,
    name: "Jennifer Smith",
    position: "Director, EdTech Foundation",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Implementing SkyThrinethra's training program in our schools has sparked tremendous interest in STEM subjects among students. The curriculum is well-structured and the results speak for themselves.",
    rating: 5,
    category: "Training Programs"
  }
];

interface CategoryFilter {
  value: string | null;
  label: string;
}

const categoryFilters: CategoryFilter[] = [
  { value: null, label: "All" },
  { value: "Drone Products", label: "Drone Products" },
  { value: "Software Services", label: "Software Services" },
  { value: "Training Programs", label: "Training Programs" }
];

const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const filteredTestimonials = activeFilter 
    ? testimonials.filter(item => item.category === activeFilter)
    : testimonials;
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experiences with our services.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryFilters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => {
                setActiveFilter(filter.value);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {filteredTestimonials.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={filteredTestimonials[currentIndex].avatar} 
                      alt={filteredTestimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-center">{filteredTestimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 text-sm text-center">{filteredTestimonials[currentIndex].position}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < filteredTestimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-gray-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-lg italic mb-4">{filteredTestimonials[currentIndex].content}</p>
                  <div className="text-sm inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {filteredTestimonials[currentIndex].category}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className=" mt-2 -bottom-6 left-0 right-0 flex justify-center space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Progress Indicator */}
            <div className="mt-10 flex justify-center space-x-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p>No testimonials found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;