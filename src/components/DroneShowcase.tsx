import React, { useState } from "react";
import { Link } from "react-router-dom";

const drones = [
  {
    id: 1,
    name: "ED1 (Educational Drone)",
    description:
      "ED1 is our flagship programmable drone, specially designed for students, educators, and drone enthusiasts to learn the fundamentals of UAV technology.",
    features: [
      "Educational & Programmable",
      "10 Minutes Flight Time",
      "Mobile App Controlled",
      "Hands-on STEM Learning",
    ],
    image:
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonLabel: "Shop Now",
  },
  {
    id: 2,
    name: "Custom Drones",
    description:
      "We specialize in building custom drones based on your specific requirements—whether it's for agriculture, surveillance, delivery, mapping, research, or hobby use.",
    features: [
      "Payload & Sensors",
      "Flight Time & Range",
      "Software & Autonomy",
      "Use-case Integration",
    ],
    image:
      "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    buttonLabel: "Contact Us",
  },
];

const DroneShowcase = () => {
  const [expanded, setExpanded] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleCardMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleButtonMouseEnter = (id) => {
    setHoveredButton(id);
  };

  const handleButtonMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Drone Fleet</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {drones.map((drone) => {
            const isExpanded = expanded === drone.id;
            const isCardHovered = hoveredCard === drone.id;
            const isButtonHovered = hoveredButton === drone.id;

            return (
              <div
                key={drone.id}
                className={`bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 ${
                  isCardHovered ? "transform -translate-y-2 shadow-2xl" : ""
                }`}
                onMouseEnter={() => handleCardMouseEnter(drone.id)}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={drone.image}
                    alt={drone.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      isCardHovered ? "transform scale-105" : ""
                    }`}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{drone.name}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {isExpanded
                      ? drone.description
                      : drone.description.length > 120
                      ? drone.description.slice(0, 120) + "..."
                      : drone.description}
                  </p>
                  {isExpanded && (
                    <div className="space-y-3 mb-6 animate-fadeIn">
                      {drone.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="h-5 w-5 text-orange-500 mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(drone.id)}
                      className="font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                    {drone.buttonLabel === "Contact Us" ? (
                      <Link
                        to="/contact"
                        className="px-5 py-2 rounded-md text-white transition-all duration-200 inline-block text-center"
                        style={{
                          backgroundColor: isButtonHovered ? "#c94b0a" : "#EA580C",
                          transform: isButtonHovered ? "scale(1.05)" : "scale(1)",
                        }}
                        onMouseEnter={() => handleButtonMouseEnter(drone.id)}
                        onMouseLeave={handleButtonMouseLeave}
                      >
                        {drone.buttonLabel}
                      </Link>
                    ) : (
                      <button
                        className="px-5 py-2 rounded-md text-white transition-all duration-200 transform"
                        style={{
                          backgroundColor: isButtonHovered ? "#c94b0a" : "#EA580C",
                          transform: isButtonHovered ? "scale(1.05)" : "scale(1)",
                        }}
                        onMouseEnter={() => handleButtonMouseEnter(drone.id)}
                        onMouseLeave={handleButtonMouseLeave}
                      >
                        {drone.buttonLabel}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default DroneShowcase;
