import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

interface SitemapSection {
  title: string;
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
        }
      ]
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Sitemap" 
        subtitle="Navigate through our website content"
        bgColor="bg-teal-600"
      />
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-2 text-teal-600">
                        {link.name}
                      </h3>
                      <p className="text-gray-600">{link.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;