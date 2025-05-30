import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

interface SitemapSection {
  title: string;
  description: string;
  image: string;
  links: {
    name: string;
    path: string;
    description: string;
  }[];
}

const SitemapPage: React.FC = () => {
  const sections: SitemapSection[] = [
    {
      title: "Main Pages",
      description: "Core pages of our website providing essential information about our services and company",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      links: [
        {
          name: "Home",
          path: "/",
          description: "Overview of our services and latest updates"
        },
        {
          name: "About",
          path: "/about",
          description: "Learn about our company history and team"
        },
        {
          name: "Contact",
          path: "/contact",
          description: "Get in touch with our team"
        }
      ]
    },
    {
      title: "Services",
      description: "Explore our comprehensive range of technology solutions and services",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      links: [
        {
          name: "Drone Products",
          path: "/drones",
          description: "Explore our professional drone solutions"
        },
        {
          name: "Software Development",
          path: "/software",
          description: "Custom software development services"
        },
        {
          name: "Training Programs",
          path: "/training",
          description: "Educational programs for students"
        }
      ]
    },
    {
      title: "Resources",
      description: "Access important information and stay updated with our latest developments",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      links: [
        {
          name: "News",
          path: "/news",
          description: "Latest company news and updates"
        },
        {
          name: "Privacy Policy",
          path: "/privacy",
          description: "Our privacy practices and data protection"
        },
        {
          name: "Terms of Service",
          path: "/terms",
          description: "Terms and conditions for using our services"
        },
        {
          name: "Careers",
          path: "/careers",
          description: "Join our team and grow with us"
        }
      ]
    }
  ];

  return (
    
      <div className="min-h-screen bg-white">
      {/* Hero Section with background image */}
      <div className="relative h-screen overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-vector/view-above-map-detailed-city-600nw-2391312469.jpg"
          alt="Contact background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0  bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
          Navigate through our website content
          </p>
        </div>
      </div>
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <section key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full relative">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center p-6">
                          <h2 className="text-2xl font-bold text-white mb-2">{section.title}</h2>
                          <p className="text-white/90">{section.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          to={link.path}
                          className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                        >
                          <h3 className="font-semibold text-lg mb-2 text-teal-600">
                            {link.name}
                          </h3>
                          <p className="text-gray-600">{link.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Quick Navigation Tips</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Main Navigation",
                  content: "Use the top menu bar for quick access to main sections",
                  image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                  title: "Footer Links",
                  content: "Find important links and contact information in the footer",
                  image: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                },
                {
                  title: "Search Function",
                  content: "Use the search feature to quickly find specific content",
                  image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              ].map((tip, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <img 
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;